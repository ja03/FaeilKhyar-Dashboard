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

// data coming from the backend:

const pendingDonation = [
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
    },
];

const PendingFeed = () => {
    const renderPendingDonation = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Link
                    href={{
                        pathname: "/home/Pending/[Donation]",
                        params: {
                            pendingDeviceType: item.deviceType,
                            pendingDeviceSize: item.deviceSize,
                            pendingDeviceModel: item.deviceModel,
                            pendingDeviceImg: item.deviceImg,
                            pendingDeviceCondition: item.deviceCondition,
                            pendingDeviceDurationOfUse: item.durationOfUse,
                            pendingDevicePrevUserAge: item.prevUserAge,
                            pendingDevicePrevUserWeight: item.prevUserWeight,
                            pendingDeviceCauseOfUse: item.causeOfUse,
                            pendingDeviceDonnerPhoneNumber:
                                item.donnerPhoneNumber,
                            pendingDeviceDonnerLocation: item.donnerLocation,
                            pendingDeviceNeedPickUp: item.needPickUp,
                        },
                    }}
                    style={{ marginVertical: 12, height: 128 }}>
                    <DeviceCard donation={item} showHospitalName={false} />
                </Link>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>التبرعات في انتظار الموافقة</Text>
            <Text style={styles.subLinkText}>
                العدد: {pendingDonation.length}
            </Text>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={pendingDonation}
                    renderItem={renderPendingDonation}
                    keyExtractor={(item) =>
                        item && item.id !== undefined
                            ? item.id.toString()
                            : "defaultKey"
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        textAlign: "right",
        backgroundColor: "#FFF",
    },
    headerText: {
        textAlign: "right",
        fontSize: 26,
        fontWeight: "bold",
    },
    Text: {
        textAlign: "right",
        fontSize: 16,
        width: 150,
    },
    subLinkText: {
        textAlign: "right",
        fontSize: 16,
        color: "#005F86",
        marginTop: 8,
        marginBottom: 24,
    },
});

export default PendingFeed;
