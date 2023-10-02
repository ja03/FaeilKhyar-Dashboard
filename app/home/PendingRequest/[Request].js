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
import { useLocalSearchParams } from "expo-router";

const RequestDevice = () => {
    const local = useLocalSearchParams();
    // const [deviceID, setDeviceID] = useState(local.deviceID)
    // const [deviceImg, setDeviceImg] = useState(local.deviceImg)
    // const [donnerName, setDonnerName] = useState(local.donnerName)
    // const [deviceType, setDeviceType] = useState(local.deviceType)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.pendingRequestDeviceImg} />
                </View>
                <View>
                    {/* GivenPatent Info */}
                    <Text style={styles.headerText}> معلومات عن المريض</Text>
                    <Text style={styles.Text}>
                        رقم الهوية الطبية: 100200210
                    </Text>

                    {/* Device Info */}
                    <Text style={styles.headerText}>معلومات عن الجهاز</Text>
                    <Text style={styles.Text}>
                        نوع الجهاز: {local.pendingRequestDeviceType}
                    </Text>
                    <Text style={styles.Text}>
                        موديل الجهاز: {local.pendingRequestDeviceModel}
                    </Text>
                    <Text style={styles.Text}>
                        حجم الجهاز: {local.pendingRequestDeviceSize}
                    </Text>
                    <Text style={styles.Text}>
                        غرض الاستخدام: {local.pendingRequestDeviceCauseOfUse}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginVertical: 24,
                    }}>
                    <TouchableOpacity style={styles.btn2}>
                        <Link
                            href={{
                                pathname:
                                    "/home/PendingRequest/RejectRequest/[RejecteRequest]",
                                params: {
                                    rejectRequestDeviceImg:
                                        local.pendingRequestDeviceImg,
                                },
                            }}
                            style={styles.btn2Text}>
                            <Text>رفض الطلب</Text>
                        </Link>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Link
                            style={styles.btnText}
                            href={{
                                pathname:
                                    "/home/PendingRequest/AcceptRequest/[AcceptRequest]",
                                params: {
                                    acceptRequestDeviceImg:
                                        local.pendingRequestDeviceImg,
                                },
                            }}>
                            <Text>قبول الطلب</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    imgContainer: {
        borderBottomWidth: 3,
        borderBottomColor: "gray",
        paddingBottom: 8,
        borderRadius: 4,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
    },
    headerText: {
        textAlign: "right",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 24,
        // marginHorizontal:24
    },
    Text: {
        textAlign: "right",
        fontSize: 16,
        marginTop: 8,
    },
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#005F86",
        marginVertical: 8,
        flex: 1,
        marginLeft: 2,
    },
    btn2: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        borderColor: "#005F86",
        borderWidth: 2,
        marginVertical: 8,
        flex: 1,
        marginRight: 2,
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },
    btn2Text: {
        fontSize: 18,
        color: "#005F86",
        textAlign: "center",
    },
});

export default RequestDevice;
