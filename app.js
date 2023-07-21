const express = require("express");
const bodyParser = require("body-parser");

const Sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//Chap nhan dul ieu json
app.use(express.json());

// app.use(shopRoutes);

const sequelize = new Sequelize(
  "postgresql://postgres:Hlg@2021@172.16.6.35:5432/telemail_dev"
); // Example for postgres

const USER_ID = "dd3110a4-88b4-4ab3-9ef3-922e594c7ed3";

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.use("/", async (req, res, next) => {
  try {
    await sequelize.authenticate();

    const getAllCases = await sequelize.query(
      `SELECT COUNT(*) as total_cases from sent_mail_histories WHERE user_id = '${USER_ID}'`,
      { type: QueryTypes.SELECT }
    );
    const getAllResponses = await sequelize.query(
      `SELECT COUNT(*) as total_responses from sent_mail_histories WHERE user_id = '${USER_ID}' AND status_feedback = '0' OR status_feedback = '1'`,
      { type: QueryTypes.SELECT }
    );
    const getSuccessfulCases = await sequelize.query(
      `SELECT COUNT(*) as success_cases from sent_mail_histories WHERE user_id = '${USER_ID}' AND status = 0`,
      { type: QueryTypes.SELECT }
    );
    const getSuccessfulResponses = await sequelize.query(
      `SELECT COUNT(*) as success_responses from sent_mail_histories WHERE user_id = '${USER_ID}' AND status_feedback = '1'`,
      { type: QueryTypes.SELECT }
    );
    const getTotalCases = await sequelize.query(
      `select customer_resources.code as resources_code, STRING_AGG(DISTINCT customer_resources.name, ', ') as resources_name, count(*) as total_cases
    from sent_mail_histories, customer_resources, customers 
    where sent_mail_histories.customer_id = customers.id and customers.customer_resource_id = customer_resources.id and sent_mail_histories.status = 0 and sent_mail_histories.user_id = '${USER_ID}'
    group by customer_resources.code`,
      { type: QueryTypes.SELECT }
    );

    const getTotalResponses = await sequelize.query(`select customer_resources.code as resources_code, STRING_AGG(DISTINCT customer_resources.name, ', ') as resources_name, count(*) as total_responses
    from sent_mail_histories, customer_resources, customers 
    where sent_mail_histories.customer_id = customers.id and customers.customer_resource_id = customer_resources.id and sent_mail_histories.status_feedback = '1' and sent_mail_histories.user_id = '${USER_ID}'
    group by customer_resources.code`,
      { type: QueryTypes.SELECT }
    );

    const resData = {
      getAllCases: Number(getAllCases[0].total_cases),
      getAllResponses: Number(getAllResponses[0].total_responses),
      getSuccessfulCases: Number(getSuccessfulCases[0].success_cases),
      getSuccessfulResponses: Number(
        getSuccessfulResponses[0].success_responses
      ),
      getTotalCases,
      getTotalResponses
      
    };

    res.status(200).send(resData);

    console.log("Connection has been established successfully.", getTotalResponses);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

app.listen(3001);
