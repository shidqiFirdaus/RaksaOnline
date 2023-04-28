import React from "react";
import {Text, View, FlatList, StyleSheet, Image} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10
  },
  Text: {color: "black"}
});

function NotFound() {
  return (
    <Image
      source={require("../assets/polisnotfound.png")}
      style={{
        alignSelf: "center",
        justifyContent: "center"
      }}
      resizeMode="center"
    />
  );
}

const Tab = createMaterialTopTabNavigator();
const data = [0, 1, 2, 3];

function Aktif() {
  return (
    <View>
      <FlatList
        data={data}
        ListHeaderComponent={() => {
          return (
            <Text style={{fontWeight: "bold", fontSize: 18, color: "black"}}>
              Auto
            </Text>
          );
        }}
        ListEmptyComponent={NotFound}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Text style={[styles.Text]}>{item}</Text>
              <View style={{flexDirection: "row"}}>
                <Text style={[{flex: 1}, styles.Text]}>Periode Polis</Text>
                <Text style={[{flex: 1}, styles.Text]}>tanggal</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
function Kadaluarsa() {
  return (
    <View>
      <FlatList
        data={data}
        ListHeaderComponent={() => {
          return (
            <Text style={{fontWeight: "bold", fontSize: 18, color: "black"}}>
              Auto
            </Text>
          );
        }}
        ListEmptyComponent={NotFound}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Text style={[styles.Text]}>{item}</Text>
              <View style={{flexDirection: "row"}}>
                <Text style={[{flex: 1}, styles.Text]}>Periode Polis</Text>
                <Text style={[{flex: 1}, styles.Text]}>tanggal</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
function Polis() {
  return (
    <>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        color="blue"
        size={20}
        style={{alignSelf: "flex-end", margin: 10}}
      />
      <Tab.Navigator>
        <Tab.Screen name="Aktif" component={Aktif} />
        <Tab.Screen name="Kadaluarsa" component={Kadaluarsa} />
      </Tab.Navigator>
    </>
  );
}

export default Polis;
