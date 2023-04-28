import {faBell} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../CSS/Home";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import LinearGradient from "react-native-linear-gradient";

function Card(props: any) {
  return (
    <TouchableOpacity
      style={{height: 100, width: 100, flex: 1}}
      onPress={props.onPress}>
      <Image
        source={props.source}
        style={{height: 100, width: 100, alignSelf: "center"}}
      />
      <Text style={[{alignSelf: "center", fontSize: 16}, styles.Text]}>
        {props.judul}
      </Text>
    </TouchableOpacity>
  );
}

function Home({navigation}: any) {
  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
      <View style={styles.Header}>
        <View style={{margin: 10}}>
          <Text style={{}}>asd</Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            right: 10,
            top: 10,
            position: "absolute",
            padding: 10
          }}
          onPress={() => {
            navigation.navigate("Notifikasi");
          }}>
          <FontAwesomeIcon icon={faBell} color="white" size={30} />
        </TouchableOpacity>
      </View>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.0, y: 0.0}}
        colors={["#ffc73c", "#ffe270"]}
        style={styles.GradientView}>
        <Text style={{alignSelf: "flex-end", margin: 10, marginBottom: 0}}>
          raksaonline
        </Text>
        <Text style={[styles.GradientViewText, styles.Text, {marginBottom: 0}]}>
          Nomor Polis
        </Text>
        <Text
          style={[
            styles.GradientViewText,
            {color: "white"},
            {marginTop: 0, marginBottom: 5}
          ]}>
          bla bla bla
        </Text>
        <Text style={[styles.GradientViewText, styles.Text, {marginBottom: 0}]}>
          Periode Polis
        </Text>
        <Text
          style={[styles.GradientViewText, {color: "white"}, {marginTop: 0}]}>
          bla bla bla
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Rincian Polis");
          }}>
          <Text
            style={[
              {
                alignSelf: "flex-end",
                margin: 10,
                borderRadius: 10,
                borderWidth: 1,
                padding: 5,
                fontWeight: "bold"
              },
              styles.Text
            ]}>
            Upgrade & Renewal
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={[styles.Text, {margin: 10, fontWeight: "bold"}]}>
        Daftar Layanan
      </Text>
      <View>
        <View style={{flexDirection: "row", marginBottom: 50}}>
          <Card
            source={require("../assets/buku.png")}
            judul={"Pengajuan Klaim"}
          />
          <Card
            source={require("../assets/simlasi.png")}
            judul={"Simulasi Premi"}
            onPress={() => {
              navigation.navigate("Simulasi Premi");
            }}
          />
          <Card
            source={require("../assets/derek.png")}
            judul={"Bantuan Derek"}
            onPress={() => {
              navigation.navigate("Bantuan Derek");
            }}
          />
        </View>
        <View style={{flexDirection: "row"}}>
          <Card
            source={require("../assets/telepon.png")}
            judul={"Layanan 24 Jam"}
          />
          <Card
            source={require("../assets/map.png")}
            judul={"Lokasi Layanan  Klaim"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
