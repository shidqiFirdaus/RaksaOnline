import React from "react";
import {View, ScrollView, Text, TouchableOpacity} from "react-native";
import {elevation, generalStyle, gold, ternary, Button} from "../CSS/General";
function TextRow({title, isi}: any) {
  return (
    <View style={{flexDirection: "row"}}>
      <Text style={[generalStyle.Text, {flex: 1}]}>{title}</Text>
      <Text
        style={[
          generalStyle.Text,
          {flex: 1, backgroundColor: "rgba(0,0,0,0.1)"}
        ]}>
        {isi}
      </Text>
    </View>
  );
}

function Pertanggungan({year, compre, tpl, flod}: any) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 5,
        margin: 10,
        marginBottom: 1
      }}>
      <Text style={[generalStyle.Text, {fontSize: 16}]}>{year}</Text>

      {ternary(
        year,
        <View style={{flexDirection: "row"}}>
          <Text style={[{flex: 1}, generalStyle.Text]}>COMPREHENSIVE</Text>
          <Text style={[{flex: 1, textAlign: "right"}, generalStyle.Text]}>
            {compre}
          </Text>
        </View>
      )}
      {ternary(
        tpl,
        <View style={{flexDirection: "row"}}>
          <Text style={[{flex: 1}, generalStyle.Text]}>TPL</Text>
          <Text style={[{flex: 1, textAlign: "right"}, generalStyle.Text]}>
            {tpl}
          </Text>
        </View>
      )}
      {ternary(
        flod,
        <View style={{flexDirection: "row"}}>
          <Text style={[{flex: 1}, generalStyle.Text]}>Flod</Text>
          <Text style={[{flex: 1, textAlign: "right"}, generalStyle.Text]}>
            {flod}
          </Text>
        </View>
      )}
    </View>
  );
}

function RincianPolis() {
  return (
    <ScrollView style={{backgroundColor: "white"}}>
      <View style={[generalStyle.Container]}>
        <Text style={[generalStyle.Text]}>NO. Polis / AUTO</Text>
        <Text
          style={[
            generalStyle.Text,
            {backgroundColor: "rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.2)"}
          ]}>
          NO. Polis / AUTO
        </Text>
      </View>
      <View style={[generalStyle.Container]}>
        <Text style={[generalStyle.Text]}>Polis Info</Text>
        <TextRow title={"Tertanggung"} isi={"asd"} />
        <TextRow title={"QQ"} isi="asdasd" />
        <TextRow title={"Alamat Tertanggung"} isi="asdasd" />
        <TextRow title={"No. seleluler"} isi="12345" />
        <TextRow title={"Email"} isi="asd@asd" />
        <View style={{flexDirection: "row"}}>
          <Text style={[generalStyle.Text, {flex: 1}]}>Periode Polis</Text>
          <Text
            style={[
              generalStyle.Text,
              {flex: 0.5, fontSize: 14, backgroundColor: "rgba(0,0,0,0.1)"}
            ]}>
            01-01-2020
          </Text>
          <Text
            style={[
              generalStyle.Text,
              {flex: 0.5, fontSize: 14, backgroundColor: "rgba(0,0,0,0.1)"}
            ]}>
            01-01-9999
          </Text>
        </View>
      </View>
      <View style={[generalStyle.Container]}>
        <Text
          style={[
            generalStyle.Text,
            {
              fontSize: 16,
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: "rgba(0,0,0,0.5)"
            }
          ]}>
          Data - Data Kendaraan
        </Text>
        <TextRow title={"No. Unit Kendaraan"} isi="00000" />
        <TextRow title={"No. Plat Kendaraan"} isi="asdasd" />
        <TextRow title={"Merek & Tipe"} isi="asd/asd/asd" />
        <TextRow title={"No. Rangka"} isi="alskdjalskdj" />
        <TextRow title={"No. Mesin"} isi="asdasd" />
        <TextRow title={"Tahun Pembuatan"} isi="2020" />
        <TextRow title={"Warna"} isi="Black" />
        <Text style={[generalStyle.Text, {fontSize: 18, fontWeight: "bold"}]}>
          Harga Pertanggungan
        </Text>
        <Pertanggungan
          year={2020}
          compre="123123"
          // tpl="123123123"
          // flod="123123123"
        />
        <Pertanggungan
          year={2020}
          compre="123123"
          tpl="123123123"
          flod="123123123"
        />
      </View>
      <View style={{flexDirection: "row"}}>
        <Button
          color="rgb(102, 204, 102)"
          text="Upgrade"
          textColor="rgb(216, 244, 214)"
        />
        <Button color={gold} text="Renewal" textColor="rgb(91, 65, 27)" />
      </View>
    </ScrollView>
  );
}

export default RincianPolis;
