import "./App.css";
import HeaderOne from "./Components/HeaderOne/HeaderOne";
import HeaderTwo from "./Components/HeaderTwo/HeaderTwo";
import HomeScreenFive from "./Screens/HomeScreenFive";
import HomeScreenFour from "./Screens/HomeScreenFour";
import HomeScreenThree from "./Screens/HomeScreenThree";
import HomeScreenTwo from "./Screens/HomeScreenTwo";
import SecOne from "./Screens/HomeScreenOne";


function App() {
  return (
    <div className="App">
      <HeaderOne />
      <HeaderTwo />
      <SecOne />
      <HomeScreenTwo />
      <HomeScreenThree />
      <HomeScreenFour />
      <HomeScreenFive />
    </div>
  );
}

export default App;
