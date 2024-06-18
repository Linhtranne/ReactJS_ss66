import { useState } from "react";
import { legacy_createStore as createStore } from "redux";
function reducer(state = '1234', action: any) {
  switch (action.type) {
    case "CHANGE":
        state = action.payload;
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

const change = (payload: string) => ({
  type: "CHANGE",
  payload,
});


export default function Ex6() {
  const [count, setCount] = useState(store.getState());
  store.subscribe(() => {
    setCount(store.getState());
  });
  return (
    <div>
      <button onClick={() => store.dispatch(change('5678'))}>change</button>
      <p>{count}</p>
    </div>
  );
}
