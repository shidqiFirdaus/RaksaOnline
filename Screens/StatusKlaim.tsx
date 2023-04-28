import {StyleSheet, View, Text, ScrollView, Image} from "react-native";
import React from "react-native";
import {elevation} from "../CSS/General";
import LinearGradient from "react-native-linear-gradient";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  Container: {
    elevation: 10,
    width: "95%",
    margin: 10,
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "white"
  },
  Text: {color: "black", fontSize: 16}
});

const data = Array.from(Array(10).keys());

function Dots({right, top}: any) {
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "red",
        borderRadius: 30,
        height: 30,
        width: 30,
        right: right,
        top: top,
        borderWidth: 1
      }}></View>
  );
}

function StatusKlaim() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: "white"}}>
      <View style={[styles.Container, {flex: 1}]}>
        <Text style={styles.Text}>Reg. No.{"\t\t\t\t: " + "asdasd"}</Text>
        <Text style={styles.Text}>No. Polis{"\t\t\t\t: " + "asdasd"}</Text>
        <Text style={styles.Text}>Tertanggung{"\t\t\t\t: " + "asdasd"}</Text>
        <Text style={styles.Text}>Kendaraan{"\t\t\t\t: " + "asdasd"}</Text>
        <Text style={styles.Text}>Resiko Sendiri{"\t\t\t\t: " + "asdasd"}</Text>
      </View>
      <View style={[styles.Container]}>
        <Text style={{fontSize: 18, fontWeight: "500"}}>Status</Text>
        {/* <LinearGradient /> */}
        <View
          style={{
            height: 20,
            borderRadius: 20,
            backgroundColor: "red",
            margin: 10,
            borderWidth: 1
          }}
        />
        <Text style={[styles.Text, {fontSize: 18}]}>{"\t\t"}Batal</Text>
      </View>
      <View style={[styles.Container]}>
        <Text style={[styles.Text, {fontWeight: "500"}]}>Informasi</Text>
        {data.map(a => {
          return <Text style={[styles.Text, {margin: 10}]}>{a + 1}.</Text>;
        })}
      </View>
      <View style={[styles.Container, {flexDirection: "row"}]}>
        <View style={{flex: 1, alignItems: "center"}}>
          <Text>KTP</Text>
          <FontAwesomeIcon icon={faImage} size={50} />
        </View>
        <View style={{flex: 1, alignItems: "center"}}>
          <Text>STNK</Text>
          <FontAwesomeIcon icon={faImage} size={50} />
        </View>
        <View style={{flex: 1, alignItems: "center"}}>
          <Text>SIM</Text>
          <FontAwesomeIcon icon={faImage} size={50} />
        </View>
      </View>
      <View style={[styles.Container]}>
        <Text style={[styles.Text]}>Kerusakan Kendaraan</Text>
        <View style={{flex: 1}}>
          <Image
            source={require("../assets/car.png")}
            style={{
              height: 120,
              width: 300,
              alignSelf: "center",
              marginTop: 40,
              marginBottom: 30
            }}
          />
          <Dots right="88%" top="15%" />
          <Dots right="50%" top="5%" />
          <Dots right="5%" top="15%" />
          <Dots right="50%" top="45%" />
          <Dots right="88%" top="75%" />
          <Dots right="50%" top="85%" />
          <Dots right="5%" top="75%" />
        </View>
      </View>
      <View style={[styles.Container]}>
        <View style={{flex: 1, padding: 10, flexDirection: "row"}}>
          <FontAwesomeIcon icon={faImage} size={100} />
          <Text
            style={[
              styles.Text,
              {
                fontSize: 20,
                backgroundColor: "rgba(0,0,0,0.1)",
                flex: 1,
                margin: 20
              }
            ]}>
            asd
          </Text>
        </View>
      </View>
      <View style={[styles.Container]}>
        <Text style={[styles.Text]}>Surat Perintah Kerja</Text>
        <Text style={[styles.Text]}>asd</Text>
      </View>
    </ScrollView>
  );
}

export default StatusKlaim;
