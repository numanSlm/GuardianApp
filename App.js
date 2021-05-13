import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./screens/MainTabScreen";
import { DrawerContent } from "./screens/DrawerContent";
import SupportScreen from "./screens/SupportScreen";
import SettingScreen from "./screens/SettingScreen";
import RootStackScreen from "./screens/RootStackScreen";
import { DataProvider } from "./store/GlobalState";

const Drawer = createDrawerNavigator();
const stack = (
  <NavigationContainer>
    {/* <RootStackScreen /> */}
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
      <Drawer.Screen name="SupportScreen" component={SupportScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

const App = () => {
  return <DataProvider>{stack}</DataProvider>;
};

export default App;
