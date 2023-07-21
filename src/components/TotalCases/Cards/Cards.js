import CardItem from "./CardItem";
import classes from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={classes.cards}>
      {props.cards.map((Card, index) => {
        return (
          <CardItem
            key={index}
            img={Card.img}
            description={Card.description}
            value={Card.value}
            valueColor={Card.valueColor}
            percent={Card.percent}
            sizeImg={Card.sizeImg}
          />
        );
      })}
    </div>
  );
};

export default Cards;
