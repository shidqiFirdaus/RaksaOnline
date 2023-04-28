import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import {
  generalStyle,
  DropComp,
  TextJudul,
  CheckBoxandTitle,
  Button,
  gold
} from "../CSS/General";
import {Picker} from "@react-native-picker/picker";

function DropPick({value, items, setSelected}) {
  return (
    <View
      style={{
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white"
      }}>
      <Picker
        mode="dropdown"
        selectedValue={value}
        style={{
          height: 50
        }}
        onValueChange={val => setSelected(val)}>
        {items.map(item => {
          return <Picker.Item label={item.label} value={item.value} />;
        })}
      </Picker>
    </View>
  );
}

function BantuanDerek() {
  const [alamat, setAlamat] = useState(false);
  const [kondisi, setKondisi] = useState("Mogok");
  const [klaim, setKlaim] = useState(false);
  const [items, setItems] = useState([
    {label: "asd", value: "asd"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"}
  ]);
  const [val, setVal] = useState(null);
  return (
    <ScrollView>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          margin: 10,
          zIndex: 100
        }}>
        <DropComp
          items={items}
          judul={"Kendaraan yang akan di derek"}
          setValue={setVal}
          value={val}
        />
      </View>
      <View style={[generalStyle.Container]}>
        <View
          style={{
            margin: 10,
            padding: 10,
            width: "100%",
            backgroundColor: "red",
            alignSelf: "center",
            borderRadius: 10
          }}>
          <Text
            style={{
              color: "rgba(225,225,225,1)",
              fontWeight: "bold",
              textAlign: "justify"
            }}>
            {
              "Untuk saat ini, fasilitas Derek 24 jam tersedia untuk wilayah jabodetabek\ndengan batas operasi sebagai berikut:\n\n"
            }
            {"Jakarta       :Seluruh wilayah Jakarta\n"}
            {"Bogor          :Masjid besar puncak\n"}
            {"Depok         :Sawangan\n"}
            {"Tangerang  :Pintu Tol Balaraja barat\n"}
            {"Bekasi        :Pintu Tol Cikarang Barat"}
          </Text>
        </View>
        <Text style={[generalStyle.Text]}>
          Pilih satu alamat yang akan digunakan
        </Text>
        <CheckBoxandTitle
          value={alamat}
          judul="Sesuai alamat GPS"
          onPress={() => {
            setAlamat(!alamat);
          }}
        />
        <View style={{height: 50, backgroundColor: "rgba(0,0,0,0.1)"}}></View>
        <CheckBoxandTitle
          value={alamat}
          judul="Sesuai alamat tertanggung polis"
          // onPress={() => setAlamat(!alamat)}
        />
        <View style={{height: 50, backgroundColor: "rgba(0,0,0,0.1)"}}></View>
        <CheckBoxandTitle
          value={alamat}
          judul="Alamat baru"
          onPress={() => setAlamat(!alamat)}
        />
        <TextJudul judul="Provinsi" />
        <TextJudul judul="kota" />
        <TextJudul judul="alamat" />
      </View>
      <View style={[generalStyle.Container]}>
        <DropComp
          items={items}
          value={kondisi}
          setValue={setKondisi}
          judul="Kondisi kendaraan"
        />
        <CheckBoxandTitle value={klaim} judul="Apakah anda ingin klaim?" />
      </View>
      <Button
        color={gold}
        text="Meminta Derek"
        textColor="white"
        onPress={() => {}}
      />
    </ScrollView>
  );
}

export default BantuanDerek;
