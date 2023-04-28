import {
  faBell,
  faHistory,
  faHome,
  faListDots,
  faPerson
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import {Text, View} from "react-native";
import Polis from "./Polis";
import Riwayat from "./Riwayat";
import Home from "./Home";
import styles from "../CSS/Home";
import Akun from "./Akun";

const Tab = createBottomTabNavigator();

function MainMenu() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.Tab,
        header: ({options, route, navigation}) => {
          return (
            <View
              style={{
                backgroundColor: "rgb(255, 194, 51)",
                flexDirection: "row"
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 25,
                    fontWeight: "500",
                    textAlignVertical: "center"
                  }}>
                  {route.name}
                </Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  flex: 1,
                  margin: 10
                }}>
                <FontAwesomeIcon icon={faBell} color="white" size={30} />
              </View>
            </View>
          );
        }
      }}>
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <Text style={{color: focused ? "rgb(118, 79, 48)" : "white"}}>
                Beranda
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => {
            return (
              <FontAwesomeIcon
                icon={faHome}
                size={20}
                color={focused ? "rgb(118, 79, 48)" : "white"}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Polis Saya"
        component={Polis}
        options={{
          headerStyle: {backgroundColor: "red"},
          tabBarLabelStyle: {fontSize: 14, fontWeight: "bold"},
          tabBarLabel: ({focused}) => {
            return (
              <Text style={{color: focused ? "rgb(118, 79, 48)" : "white"}}>
                Polis Saya
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => {
            return (
              <FontAwesomeIcon
                icon={faListDots}
                size={20}
                color={focused ? "rgb(118, 79, 48)" : "white"}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={Riwayat}
        options={{
          tabBarLabelStyle: {fontSize: 14, fontWeight: "bold"},
          tabBarLabel: ({focused}) => {
            return (
              <Text style={{color: focused ? "rgb(118, 79, 48)" : "white"}}>
                Riwayat
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => {
            return (
              <FontAwesomeIcon
                icon={faHistory}
                size={20}
                color={focused ? "rgb(118, 79, 48)" : "white"}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Akun"
        component={Akun}
        options={{
          tabBarLabelStyle: {fontSize: 14, fontWeight: "bold"},
          tabBarLabel: ({focused}) => {
            return (
              <Text style={{color: focused ? "rgb(118, 79, 48)" : "white"}}>
                Akun
              </Text>
            );
          },
          tabBarIcon: ({focused, color, size}) => {
            return (
              <FontAwesomeIcon
                icon={faPerson}
                size={20}
                color={focused ? "rgb(118, 79, 48)" : "white"}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}
export default MainMenu;
