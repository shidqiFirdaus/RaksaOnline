import {useState} from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import DropDownPicker from "react-native-dropdown-picker";
const gold = "rgb(255, 194, 51)";
const elevation = 10;
const generalStyle = StyleSheet.create({
  Container: {
    elevation: 10,
    width: "95%",
    margin: 10,
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "white"
  },
  Text: {color: "black", fontSize: 16, margin: 5, fontWeight: "500"}
});

function CheckBoxandTitle({value, judul, onPress}) {
  return (
    <TouchableOpacity style={{flexDirection: "row"}} onPress={onPress}>
      <CheckBox value={value} onValueChange={onPress} />
      <Text style={[{margin: 5}, generalStyle.Text]}>{judul}</Text>
    </TouchableOpacity>
  );
}

function DropComp({judul, value, setValue, items}) {
  const [open, setOpen] = useState(false);
  return (
    <View style={{zIndex: open ? 100 : 0}}>
      <Text style={[{margin: 5}, generalStyle.Text]}>{judul}</Text>
      <DropDownPicker
        listMode="SCROLLVIEW"
        placeholder={value}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
      />
    </View>
  );
}

function TextJudul({judul}) {
  return (
    <View style={{flexDirection: "row"}}>
      <Text
        style={[generalStyle.Text, {textAlignVertical: "center", flex: 0.5}]}>
        {judul}
      </Text>
      <TextInput
        placeholder="Pilih provinsi anda"
        style={[{flex: 1}, generalStyle.Text]}
      />
    </View>
  );
}
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
          return <Picker.Item label={item.label} value={item} />;
        })}
      </Picker>
    </View>
  );
}

function Button({color, text, textColor, onPress}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        flex: 1,
        height: 50,
        margin: 10,
        borderRadius: 10,
        elevation: elevation
      }}
      onPress={onPress}>
      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          flex: 1,
          fontSize: 18,
          fontWeight: "bold",
          color: textColor
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

function ternary(item, Node) {
  return item ? Node : <></>;
}
export {
  gold,
  elevation,
  generalStyle,
  ternary,
  Button,
  CheckBoxandTitle,
  TextJudul,
  DropComp,
  DropPick
};
