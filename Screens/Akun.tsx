import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {gold, elevation} from "../CSS/General";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
  faBuilding,
  faClipboardQuestion,
  faExternalLink,
  faFile,
  faInfo,
  faInfoCircle,
  faLanguage,
  faQuestion,
  faSync
} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface ItemProp {
  icon: IconProp;
  title: string;
}

function Item(ItemProp: any) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        height: 60,
        elevation: elevation,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)"
      }}>
      <FontAwesomeIcon
        icon={ItemProp.icon}
        size={20}
        style={{margin: 20}}
        color="rgba(0,0,0,0.5)"
      />
      <Text
        style={{textAlignVertical: "center", fontWeight: "bold", fontSize: 20}}>
        {ItemProp.title}
      </Text>
    </TouchableOpacity>
  );
}

function Akun({navigation}) {
  return (
    <SafeAreaView>
      <View
        style={{
          marginBottom: 10,
          backgroundColor: "white",
          flexDirection: "row",
          padding: 10,
          elevation: elevation
        }}>
        <Text
          style={{
            backgroundColor: gold,
            height: 50,
            width: 50,
            borderRadius: 50,
            textAlign: "center",
            textAlignVertical: "center",
            color: "black",
            fontWeight: "500",
            fontSize: 35
          }}>
          D
        </Text>
        <View style={{padding: 10}}>
          <Text style={{color: "black", fontWeight: "bold"}}>DEDDY</Text>
          <Text style={{color: "black"}}>asd</Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            padding: 10,
            alignSelf: "center",
            position: "absolute",
            right: 0
          }}>
          <Text
            style={[
              {
                backgroundColor: gold,
                padding: 10,
                fontWeight: "bold",
                borderRadius: 10
              }
            ]}>
            Ubah Akun
          </Text>
        </TouchableOpacity>
      </View>
      <Item icon={faLanguage} title="Bahasa" />
      <Item icon={faFile} title="Syarat dan ketentuan" />
      <Item icon={faClipboardQuestion} title="FAQ" />
      <Item icon={faBuilding} title="Hubungi Developer" />
      <Item icon={faSync} title="Sinkronisasi Terakhir" />
      <Item icon={faInfoCircle} title="Tentang Aplikasi" />
      <Item icon={faExternalLink} title="Bagikan" />
      <TouchableOpacity
        style={{
          backgroundColor: gold,
          height: 40,
          margin: 10
        }}>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            textAlignVertical: "center",
            flex: 1,
            fontWeight: "500"
          }}>
          Keluar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Akun;
