import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Provider } from "react-redux";
import store from "../../React-Redux-Demo/react-redux-demo/src/Components/Redux/store";
import "./App.css";
import CakeViews from "../features/cake/CakeViews";
import IceCreamViews from "../features/icecream/IceCreamViews";
import UserViews from "../features/user/UserViews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <CakeViews />
        <IceCreamViews />
        <UserViews />
      </div>
    </Provider>
  );
}

export default App;
