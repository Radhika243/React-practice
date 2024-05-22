import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";
import HookCakeContainer from "./Components/Redux/HookCakeContainer";
import HookIceCreamContainer from "./Components/Redux/HookIceCreamContainer";
import HookBunContainer from "./Components/Redux/HookBunContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import BunsContainer from "./Components/BunsContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer />
        <CakeContainer />
        <IceCreamContainer />
        <BunsContainer /> */}
        {/* <HookCakeContainer />
        <HookIceCreamContainer />
        <HookBunContainer /> */}
        {/* <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
