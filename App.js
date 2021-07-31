import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import Counter from "./src/screens/Counter";
import Color from "./src/screens/Color";
import SquareScreen from "./src/screens/SquareScreen";
import CounterColor from "./src/screens/CounterColor";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: ComponentScreen,
    Counter: Counter,
    Color: Color,
    SquareScreen: SquareScreen,
    CounterColor: CounterColor,
    TextScreen: TextScreen,
  },
  {
    initialRouteName: "ComponentScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
