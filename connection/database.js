const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "172.16.6.35",
  database: "telemail_test",
  password: "Hlg@2021",
  port: 5432,
});

const USER_ID = "7d5a5bc4-a978-4c6f-8b02-9b6f5046d471";

//Loi user_id phai o trong '', err truoc res
const getAllCases = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `SELECT COUNT(pregnancy_status_sending) as casesTotal from sent_mail_histories WHERE user_id = '${USER_ID}'`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

const getSuccessfulCases = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT COUNT(*) as casesSuccess from sent_mail_histories WHERE user_id = '${USER_ID}' AND status = 0`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

const getAllResponses = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT COUNT(*) as responsesTotal from sent_mail_histories WHERE user_id = '${USER_ID}' AND status_feedback = '0' OR status_feedback = '1'`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      }
    );
  });
};

const getSuccessfulResponses = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT COUNT(*) as responsesSuccess from sent_mail_histories WHERE user_id = '${USER_ID}' AND status_feedback = '1'`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      }
    );
  });
};

module.exports = {
  getAllCases,
  getAllResponses,
  getSuccessfulCases,
  getSuccessfulResponses,
  // createMerchant,
  // deleteMerchant,
};
