import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    elevation: 5
  },
  Text: {color: "black"}
});

const Tab = createMaterialTopTabNavigator();

function Aktif() {
  const names = ["Klaim", "Bantuan\n\tDerek", "Simulasi\n\tPremi"];
  const notFound = [
    require("../assets/klaimkosong.png"),
    require("../assets/derekkosong.png"),
    require("../assets/premiskosong.png")
  ];
  const [choice, setSchoice] = useState(0);
  const klaim = Array.from(Array(20).keys());
  const derek = Array.from(Array(10).keys());
  const simu = Array.from(Array(5).keys());
  const l = [klaim, derek, simu];
  const [list, setList] = useState(l[0]);
  useEffect(() => {}, []);
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={names}
          horizontal={true}
          contentContainerStyle={{
            justifyContent: "center",
            borderWidth: 1,
            width: "100%",
            flex: 1
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  margin: 10,
                  height: 50,
                  width: 100,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor:
                    index == choice ? "rgb(255, 194, 51)" : "white"
                }}
                onPress={() => {
                  setSchoice(index);
                  setList(l[index]);
                }}>
                <Text
                  style={{
                    textAlign: "justify",
                    color: "black",
                    fontWeight: "400"
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={list}
          // contentContainerStyle={{paddingBottom: 100}}
          ListEmptyComponent={() => {
            return (
              <Image
                source={notFound[choice]}
                resizeMode="center"
                style={{alignSelf: "center"}}
              />
            );
          }}
          renderItem={({item, index}) => {
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
    </View>
  );
}

function Selesai() {
  const names = [
    "Klaim",
    "Bantuan\n\tDerek",
    "Upgrade &\n\tRenewal",
    "Simulasi\n\tPremi"
  ];
  const notFound = [
    require("../assets/klaimkosong.png"),
    require("../assets/derekkosong.png"),
    require("../assets/premiskosong.png")
  ];
  const [choice, setSchoice] = useState(0);
  const klaim = Array.from(Array(20).keys());
  const derek = Array.from(Array(10).keys());
  const simu = Array.from(Array(5).keys());
  const renewal = Array.from(Array(10).keys());
  const l = [klaim, derek, renewal, simu];
  const [list, setList] = useState(l[0]);
  useEffect(() => {}, []);
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={names}
          horizontal={true}
          contentContainerStyle={{
            justifyContent: "center",
            borderWidth: 1,
            width: "100%",
            flex: 1
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  margin: 5,
                  height: 50,
                  width: 90,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor:
                    index == choice ? "rgb(255, 194, 51)" : "white"
                }}
                onPress={() => {
                  setSchoice(index);
                  setList(l[index]);
                }}>
                <Text
                  style={{
                    textAlign: "justify",
                    color: "black",
                    fontWeight: "400"
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={list}
          // contentContainerStyle={{paddingBottom: 100}}
          ListEmptyComponent={() => {
            return (
              <Image
                source={notFound[choice]}
                resizeMode="center"
                style={{alignSelf: "center"}}
              />
            );
          }}
          renderItem={({item, index}) => {
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
    </View>
  );
}

function Riwayat() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Aktif" component={Aktif} />
        <Tab.Screen name="Selesai" component={Selesai} />
      </Tab.Navigator>
    </>
  );
}
export default Riwayat;
