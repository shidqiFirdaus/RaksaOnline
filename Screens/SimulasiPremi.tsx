import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import React from "react-native";
import {generalStyle} from "../CSS/General";

const data = [
  {
    id: 0,
    judul: "Asuransi Mobil",
    pic: require("../assets/PremiMobil.png"),
    screen: "Simulasi Mobil"
  },
  {
    id: 1,
    judul: "Asuransi Motor",
    pic: require("../assets/PremiMotor.png"),
    screen: "Simulasi Motor"
  },
  {
    id: 2,
    judul: "Asuransi Kebakaran",
    pic: require("../assets/PremiRumah.png"),
    screen: "Simulasi Kebakaran"
  }
];

function SimulasiPremi({navigation}: any) {
  return (
    <View>
      {data.map(a => {
        return (
          <TouchableOpacity
            style={[generalStyle.Container, {flexDirection: "row"}]}
            activeOpacity={0.95}
            onPress={() => {
              navigation.navigate(a.screen);
            }}>
            <Image
              source={a.pic}
              resizeMode="contain"
              style={{height: 100, width: 100}}
            />
            <Text
              style={[
                generalStyle.Text,
                {
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 20,
                  fontWeight: "500"
                }
              ]}>
              {a.judul}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default SimulasiPremi;
