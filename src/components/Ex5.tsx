import { useState } from "react";
import { legacy_createStore as createStore } from "redux";
const arr : number[] = [];
function reducer(state = arr, action:any) {
  switch (action.type) {
    case "RANDOM":
      // eslint-disable-next-line no-case-declarations
      const newNumber = Math.floor(Math.random() * 10); 
      return [...state, newNumber]; 
    default:
      return state;
  }
}

const store = createStore(reducer);

const random = () => ({
  type: "RANDOM",
});

export default function Ex5() {
  const [count, setCount] = useState(store.getState());

  store.subscribe(() => {
    setCount(store.getState());
  });

  return (
    <div>
      <button onClick={() => store.dispatch(random())}>
        Random Generate Number
      </button>
      <p> {count.join(", ")}</p> 
    </div>
  );
}
