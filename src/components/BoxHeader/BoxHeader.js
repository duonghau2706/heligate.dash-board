import DateFilters from "../DateFilters/DateFilters";
import classes from "./BoxHeader.module.css";

const BoxHeader = (props) => {
  return (
    <header className={classes.boxHeader}>
      <span className={classes.title}>{props.title}</span>
      <div className={classes["filter-control"]}>
        <span style={{fontSize: 14, display: "flex", alignItems: 'center'}}>Thời gian</span>
        <DateFilters />
      </div>
    </header>
  );
};

export default BoxHeader;
