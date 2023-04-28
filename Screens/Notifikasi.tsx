import React from "react";
import {View, FlatList, Text, TouchableOpacity} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faListDots} from "@fortawesome/free-solid-svg-icons";
import {elevation, gold} from "../CSS/General";

function Notifikasi({navigation}) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={Array.from(Array(20).keys())}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        contentContainerStyle={{marginTop: 10}}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                width: "95%",
                alignSelf: "center",
                flexDirection: "row",
                backgroundColor: "white",
                elevation: elevation,
                padding: 10
              }}>
              <View style={{paddingRight: 10}}>
                <View style={{backgroundColor: gold, borderRadius: 5}}>
                  <FontAwesomeIcon
                    icon={faListDots}
                    size={10}
                    style={{margin: 5}}
                    color="white"
                  />
                </View>
              </View>
              <View style={{flex: 1}}>
                <Text style={{color: "black", fontWeight: "600"}}>
                  Info klaim
                </Text>
                <Text style={{color: "black", fontWeight: "500"}}>
                  {"Reg. No.:" + item}
                </Text>
                <Text style={{color: "black", fontWeight: "500"}}>
                  {"Klaim. No.:" + item}
                </Text>
                <Text style={{color: "black", fontWeight: "500"}}>
                  {"info status"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  alignSelf: "center",
                  alignItems: "center",
                  borderRadius: 50,
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.1)"
                }}>
                <Text
                  style={{
                    // backgroundColor: "red",
                    fontSize: 36,
                    fontWeight: "500",
                    textAlignVertical: "center",
                    position: "absolute",
                    bottom: -1
                  }}
                  onPress={() => {
                    console.log("jalan");
                    navigation.navigate("Status Klaim");
                  }}>
                  {">"}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Notifikasi;
