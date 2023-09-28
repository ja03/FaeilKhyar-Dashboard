import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ScrollView } from "react-native";

//Components
import DeviceCard from "../../../Componentes/DeviceCard";
// data from backend
const givenDonation = [
  {
      id: 1,
      deviceImg: require("../../../assets/imgs/device-img.png"),
      deviceType: "كرسي متحرك",
      deviceModel: "Model 1101",
      deviceSize: "3xl",
      deviceCondition: false,      
      patientMedId:100200110, 
  }, 
  {
      id: 2,
      deviceImg: require("../../../assets/imgs/device-img.png"),
      deviceType: "كرسي متحرك",
      deviceModel: "Model 1101",
      deviceSize: "3xl",
      deviceCondition: false,      
      patientMedId:100200110,   
  },
  {
      id: 3,
      deviceImg: require("../../../assets/imgs/device-img.png"),
      deviceType: "كرسي متحرك",
      deviceModel: "Model 1101",
      deviceSize: "3xl",
      deviceCondition: true,      
      patientMedId:100200110,   
  },
  {
      id: 4,
      deviceImg: require("../../../assets/imgs/device-img.png"),
      deviceType: "كرسي متحرك",
      deviceModel: "Model 1101",
      deviceSize: "3xl",
      deviceCondition: true,      
      patientMedId:100200110,   
  },
];

const  GivenDevices =() => {

  const renderGivenDevices = ({item})=>{
    return(
      <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Link
                    href={{
                        pathname: "/home/Given/[Devices]",
                        params: {
                            givenDeviceType: item.deviceType,
                            givenDeviceSize: item.deviceSize,
                            givenDeviceModel: item.deviceModel,
                            givenDeviceImg: item.deviceImg,
                            givenDeviceCondition: item.deviceCondition,
                            givenDevicePatientMedId: item.patientMedId
                        },
                    }}
                    style={{ marginVertical: 12, height: 128 }}>
                    <DeviceCard donation={item} showHospitalName={false} />
                </Link>
            </View>
    )
  }

  return (
    <SafeAreaView  style={styles.container}>
      <Text style={styles.headerText}>الأجهزة المُمنَحة</Text>
      <Text style={styles.subLinkText}>العدد: {givenDonation.length}</Text>
      <View style={{flex:1}}>
        <FlatList
          data={givenDonation}
          renderItem={renderGivenDevices}
          keyExtractor={(item) => (item && item.id !== undefined ? item.id.toString() : 'defaultKey')}

        />
      </View>
      
        
  

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "right",
    backgroundColor: "#FFF",
},
  headerText:{
      textAlign:'right',
      fontSize:26,
      fontWeight:'bold',
      // marginHorizontal:24
  },
  Text:{
      textAlign:"right",
      fontSize:16,
      width:150
  },
  subLinkText:{
      textAlign:"right",
      fontSize:16,
      color:'#005F86',
      // marginHorizontal:24,
      marginTop:8,
      marginBottom:24
  },

});


export default GivenDevices