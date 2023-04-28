/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type {PropsWithChildren} from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainMenu from "./Screens/MainMenu";
import Notifikasi from "./Screens/Notifikasi";
import StatusKlaim from "./Screens/StatusKlaim";
import RincianPolis from "./Screens/RincianPolis";
import SimulasiPremi from "./Screens/SimulasiPremi";
import SimulasiMobil from "./Screens/SimulasiMobil";
import SimulasiMotor from "./Screens/SimulasiMotor";
import SimulasiKebakaran from "./Screens/SimulasiKebakaran";
import BantuanDerek from "./Screens/BantuanDerek";
import {gold} from "./CSS/General";
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black
          }
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark
          }
        ]}>
        {children}
      </Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"MainMenu"}
          component={MainMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifikasi"
          component={Notifikasi}
          options={{headerStyle: {backgroundColor: gold}}}
        />
        <Stack.Screen
          name="Status Klaim"
          component={StatusKlaim}
          options={{headerStyle: {backgroundColor: gold}}}
        />
        <Stack.Screen
          name="Rincian Polis"
          component={RincianPolis}
          options={{headerStyle: {backgroundColor: gold}}}
        />
        <Stack.Screen
          name="Simulasi Premi"
          component={SimulasiPremi}
          options={{headerStyle: {backgroundColor: gold}}}
        />
        <Stack.Screen
          name="Simulasi Mobil"
          component={SimulasiMobil}
          options={{headerStyle: {backgroundColor: gold}}}
        />
        <Stack.Screen
          name="Simulasi Motor"
          component={SimulasiMotor}
          options={{headerStyle: {backgroundColor: gold}}}
        />
        <Stack.Screen
          name="Simulasi Kebakaran"
          component={SimulasiKebakaran}
          options={{headerStyle: {backgroundColor: gold}}}
        />
        <Stack.Screen
          name="Bantuan Derek"
          component={BantuanDerek}
          options={{headerStyle: {backgroundColor: gold}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  }
});

export default App;
