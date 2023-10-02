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

const acceptedDonation = [
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
        deviceType: "عكازة",
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
        deviceType: "سرير",
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

const RequestFeed = () => {
    const [searchInput, setSearchInput] = useState("");
    const renderAcceptedDonation = ({ item }) => {
        // Search input is Empty
        if (searchInput === "") {
            return (
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Link
                        href={{
                            pathname: "/home/PendingRequest/[Request]",
                            params: {
                                pendingRequestDeviceType: item.deviceType,
                                pendingRequestDeviceSize: item.deviceSize,
                                pendingRequestDeviceModel: item.deviceModel,
                                pendingRequestDeviceImg: item.deviceImg,
                                pendingRequestDeviceCondition:
                                    item.deviceCondition,
                                pendingRequestDeviceDurationOfUse:
                                    item.durationOfUse,
                                pendingRequestDevicePrevUserAge:
                                    item.prevUserAge,
                                pendingRequestDevicePrevUserWeight:
                                    item.prevUserWeight,
                                pendingRequestDeviceCauseOfUse: item.causeOfUse,
                                pendingRequestDeviceDonnerPhoneNumber:
                                    item.donnerPhoneNumber,
                                pendingRequestDeviceDonnerLocation:
                                    item.donnerLocation,
                                pendingRequestDeviceNeedPickUp: item.needPickUp,
                            },
                        }}
                        style={{ marginVertical: 12, height: 128 }}>
                        <DeviceCard donation={item} showHospitalName={false} />
                    </Link>
                </View>
            );
        }

        if (
            item.deviceType
                .toLowerCase()
                .includes(searchInput.toLocaleLowerCase())
        ) {
            return (
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Link
                        href={{
                            pathname: "/home/PendingRequest/[RequestDevice]",
                            params: {
                                pendingRequestDeviceType: item.deviceType,
                                pendingRequestDeviceSize: item.deviceSize,
                                pendingRequestDeviceModel: item.deviceModel,
                                pendingRequestDeviceImg: item.deviceImg,
                                pendingRequestDeviceCondition:
                                    item.deviceCondition,
                                pendingRequestDeviceDurationOfUse:
                                    item.durationOfUse,
                                pendingRequestDevicePrevUserAge:
                                    item.prevUserAge,
                                pendingRequestDevicePrevUserWeight:
                                    item.prevUserWeight,
                                pendingRequestDeviceCauseOfUse: item.causeOfUse,
                                pendingRequestDeviceDonnerPhoneNumber:
                                    item.donnerPhoneNumber,
                                pendingRequestDeviceDonnerLocation:
                                    item.donnerLocation,
                                pendingRequestDeviceNeedPickUp: item.needPickUp,
                            },
                        }}
                        style={{ marginVertical: 12, height: 128 }}>
                        <DeviceCard donation={item} showHospitalName={false} />
                    </Link>
                </View>
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>الطلبات في انتظار الموافقة</Text>
            {/* Search Bar */}
            <TextInput
                style={styles.inputField}
                placeholder="ابحث هنا"
                onChangeText={(text) => setSearchInput(text)}
                value={searchInput}
            />

            <Text style={styles.subLinkText}>
                العدد: {acceptedDonation.length}
            </Text>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={acceptedDonation}
                    renderItem={renderAcceptedDonation}
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
        // marginHorizontal:24
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
        // marginHorizontal:24,
        marginTop: 8,
        marginBottom: 24,
    },
    inputField: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: "#899BAB",
        borderRadius: 8,
        textAlign: "right",
        marginVertical: 8,
    },
    searchSection: {
        alignItems: "center",
        gap: 16,
        marginTop: 24,
    },
});

export default RequestFeed;
