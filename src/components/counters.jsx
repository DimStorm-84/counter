import React from "react";
import Counter from "./counter";
const Counters = (props) => {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onDecrement={props.onDecrement}
          onIncrement={props.onIncrement}
          onDelete={props.onDelete}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
