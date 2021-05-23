import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./MainTabScreen";
import { DrawerContent } from "./DrawerContent";
import SupportScreen from "./SupportScreen";
import SettingScreen from "./SettingScreen";
import RootStackScreen from "./RootStackScreen";
import ReportScreen from "./ReportScreen";
import Report from "./Report";
import PoliceStation from "./PolicStation";
import { DataContext } from "../store/GlobalState";
import EmergencyContacts from "./EmergencyContacts";
import Whatsapp from "./Whatsapp";

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  const { state, dispatch } = useContext(DataContext);

  return (
    <NavigationContainer>
      {Object.keys(state.auth).length > 0 ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="ReportScreen" component={ReportScreen} />
          <Drawer.Screen name="Report" component={Report} />
          <Drawer.Screen name="PoliceStation" component={PoliceStation} />
          <Drawer.Screen
            name="EmergencyContacts"
            component={EmergencyContacts}
          />
          <Drawer.Screen name="Whatsapp" component={Whatsapp} />
        </Drawer.Navigator>
      ) : (
        <RootStackScreen />
      )}
    </NavigationContainer>
  );
};

export default MainScreen;
