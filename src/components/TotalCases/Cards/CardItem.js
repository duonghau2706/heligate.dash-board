import classes from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <div className={classes.cardItem}>
      <img style={{ width: props.sizeImg, height: props.sizeImg }} src={props.img} alt={props.title} />{" "}
      <span className={classes.description}>{props.description}</span>
      <div className={classes.total}>
        <span style={{ color: props.valueColor, fontSize: 30, fontWeight: "bold"}}>{props.value}</span>
        {props.percent && (
          <span
            style={{
              color: props.valueColor,
              fontSize: 18,
              height: 20,
              display: "flex",
              alignItems: "center",
              padding: '20px 0 0 5px'
            }}
          >
            ({props.percent}%)
          </span>
        )}
      </div>
    </div>
  );
};

export default CardItem;
