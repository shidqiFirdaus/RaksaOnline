import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {generalStyle} from "../CSS/General";
import CheckBox from "@react-native-community/checkbox";
import DropDownPicker from "react-native-dropdown-picker";
import {Button} from "../CSS/General";
import typescript from "react-native-svg";

function DropComp({judul, value, setValue, items}: any) {
  const [open, setOpen] = useState(false);
  return (
    <View style={{zIndex: open ? 100 : 0}}>
      <Text style={[{margin: 5}, generalStyle.Text]}>{judul}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
      />
    </View>
  );
}

function CheckBoxandTitle({value, judul, onPress}: any) {
  return (
    <TouchableOpacity style={{flexDirection: "row"}} onPress={onPress}>
      <CheckBox value={value} onValueChange={onPress} />
      <Text style={[{margin: 5}, generalStyle.Text]}>{judul}</Text>
    </TouchableOpacity>
  );
}
function SimulasiMotor() {
  type Perluasan = {judul: string; value: boolean};
  const [check, setCheck] = useState(false);
  const [listPerluasan, setListPerluasan] = useState([
    {judul: "TJH Pihak III", value: false},
    {judul: "KERUSUHAN, PEMOGOKAN & HURU-HARA", value: false},
    {judul: "GEMPA BUMI,LETUSAN GUNUNG BERAPI & TSUNAMI", value: false},
    {judul: "TERORISME & SABOTASE", value: false}
  ]);
  const [listKategori, setListKategori] = useState([
    {label: "sedan", value: "sedan"},
    {label: "suv", value: "SUV"}
  ]);
  const [listMerek, setListMerek] = useState([
    {label: "Honda", value: "Honda"},
    {label: "Toyota", value: "Toyota"}
  ]);
  const listModel = [
    {label: "asd", value: "asd"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"},
    {label: "sdf", value: "sdf"}
  ];
  const [merek, setMerek] = useState(listMerek[0]);
  const [kategori, setKategori] = useState(null);
  const [model, setModel] = useState(null);
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={[generalStyle.Container]}>
        <DropComp
          judul="Merek"
          items={listMerek}
          value={merek}
          setValue={setMerek}
        />
        <DropComp
          judul="Kategori"
          items={listKategori}
          value={kategori}
          setValue={setKategori}
        />
        <DropComp
          judul="Model"
          items={listModel}
          value={model}
          setValue={setModel}
        />
        <View style={{flexDirection: "row", zIndex: 100}}>
          <View style={{width: "45%"}}>
            <DropComp
              judul="Penggunaan"
              items={listModel}
              value={model}
              setValue={setModel}
            />
          </View>
          <View style={{width: "45%", marginLeft: 35}}>
            <DropComp
              judul="Okupasi"
              items={listModel}
              value={model}
              setValue={setModel}
            />
          </View>
        </View>
        <DropComp
          judul="Jenis Penutupan"
          items={listModel}
          value={model}
          setValue={setModel}
        />
        <View style={{flexDirection: "row"}}>
          <View style={{width: "45%"}}>
            <DropComp
              judul="Plat kendaraan"
              items={listModel}
              value={model}
              setValue={setModel}
            />
          </View>
          <View style={{width: "50%", marginLeft: 10}}>
            <TextInput
              style={{
                marginTop: 31,
                borderWidth: 1,
                borderRadius: 10
              }}
            />
          </View>
        </View>
        <TextInput style={{borderWidth: 1, borderRadius: 10, marginTop: 15}} />
        <DropComp
          judul="Tahun"
          items={listModel}
          value={model}
          setValue={setModel}
        />
        <Text style={[{margin: 5}, generalStyle.Text]}>Harga</Text>
        <TextInput style={{borderWidth: 1, borderRadius: 10}} />
        <Text style={[{margin: 5}, generalStyle.Text]}>Perluasan Tambahan</Text>

        {listPerluasan.map((p, index) => {
          return (
            <CheckBoxandTitle
              value={p.value}
              judul={p.judul}
              onPress={() => {
                let copy = listPerluasan;
                copy[index].value = !p.value;
                setListPerluasan([...copy]);
              }}
            />
          );
        })}
      </View>
      <Button color="rgb(102, 204, 102)" text="Kirim" textColor="white" />
    </ScrollView>
  );
}
export default SimulasiMotor;
