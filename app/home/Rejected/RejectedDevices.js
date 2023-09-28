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

const rejectedDonation = [
  {
      id: 1,
      deviceImg: require("../../../assets/imgs/device-img.png"),
      deviceType: "كرسي متحرك",
      deviceModel: "Model 1101",
      deviceSize: "3xl",
      deviceCondition: false,
      durationOfUse: "Two weeks",
      prevUserAge: 24,
      prevUserWeight: 79,
      causeOfUse: "broke my arm",
      donnerPhoneNumber: +962791049417,
      donnerLocation: "عمان الدوار السابع",
      needPickUp: false,
      causeOfReject:"The device was broken fam"
      
  }, 
  {
      id: 2,
      deviceImg: require("../../../assets/imgs/device-img.png"),
      deviceType: "كرسي متحرك",
      deviceModel: "Model 1101",
      deviceSize: "3xl",
      deviceCondition: false,
      durationOfUse: "Two weeks",
      prevUserAge: 24,
      prevUserWeight: 79,
      causeOfUse: "broke my arm",
      donnerPhoneNumber: +962791049417,
      donnerLocation: "عمان الدوار السابع",
      needPickUp: false,
      causeOfReject:"The device was broken fam"
  },
  {
      id: 3,
      deviceImg: require("../../../assets/imgs/device-img.png"),
      deviceType: "كرسي متحرك",
      deviceModel: "Model 1101",
      deviceSize: "3xl",
      deviceCondition: true,
      durationOfUse: "Two weeks",
      prevUserAge: 24,
      prevUserWeight: 79,
      causeOfUse: "broke my arm",
      donnerPhoneNumber: +962791049417,
      donnerLocation: "عمان الدوار السابع",
      needPickUp: true,
      causeOfReject:"The device was broken fam"
  },
  {
      id: 4,
      deviceImg: require("../../../assets/imgs/device-img.png"),
      deviceType: "كرسي متحرك",
      deviceModel: "Model 1101",
      deviceSize: "3xl",
      deviceCondition: true,
      durationOfUse: "Two weeks",
      prevUserAge: 24,
      prevUserWeight: 79,
      causeOfUse: "broke my arm",
      donnerPhoneNumber: +962791049417,
      donnerLocation: "عمان الدوار السابع",
      needPickUp: true,
      causeOfReject:"The device was broken fam"
  },
];

const RejectedDevices =() => {

  const renderRejectedDevices = ({item})=>{
    return(
<View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Link
                    href={{
                        pathname: "/home/Rejected/[Rejected]",
                        params: {
                            rejectedDeviceType: item.deviceType,
                            rejectedDeviceSize: item.deviceSize,
                            rejectedDeviceModel: item.deviceModel,
                            rejectedDeviceImg: item.deviceImg,
                            rejectedDeviceCondition: item.deviceCondition,
                            rejectedDeviceDurationOfUse: item.durationOfUse,
                            rejectedDevicePrevUserAge: item.prevUserAge,
                            rejectedDevicePrevUserWeight: item.prevUserWeight,
                            rejectedDeviceCauseOfUse: item.causeOfUse,
                            rejectedDeviceDonnerPhoneNumber:
                                item.donnerPhoneNumber,
                            rejectedDeviceDonnerLocation: item.donnerLocation,
                            rejectedDeviceNeedPickUp: item.needPickUp,
                            rejectedDeviceCauseOfReject: item.causeOfReject
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
      <Text style={styles.headerText}>الاجهزة التي تم رفضها</Text>
      <Text style={styles.subLinkText}>العدد: {rejectedDonation.length}</Text>
      <View style={{flex:1}}>
        <FlatList
          data={rejectedDonation}
          renderItem={renderRejectedDevices}
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


export default RejectedDevices