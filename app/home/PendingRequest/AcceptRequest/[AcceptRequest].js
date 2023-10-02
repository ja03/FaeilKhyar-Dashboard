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
import { Redirect } from "expo-router";

const AcceeptDevice = () => {
    // The QR URI form the backend
    const QRcodeUri = {
        QRcodeUri: require("../../../../assets/imgs/QRcode.png"),
    };
    const local = useLocalSearchParams();
    const [acceptedDeviceData, setAcceptedDeviceDate] = useState({
        acceptedDeviceImg: local.acceptDeviceImg,
        acceptedDeviceType: local.acceptDeviceType,
        acceptedDeviceSize: local.acceptDeviceSize,
        acceptedDeviceModel: local.acceptDeviceModel,
        acceptedDeviceDurationOfUse: local.acceptDeviceDurationOfUse,
        acceptedDevicePrevUserAge: local.acceptDevicePrevUserAge,
        acceptedDevicePrevUserWeight: local.acceptDevicePrevUserWeight,
        acceptedDeviceCauseOfUse: local.acceptDeviceCauseOfUse,
        acceptedDeviceDonnerPhoneNumber: local.acceptDeviceDonnerPhoneNumber,
        acceptedDeviceDonnerLocation: local.acceptDeviceDonnerLocation,
    });

    const [viewQR, setViewQR] = useState(false);
    const [QRcode, setQRcode] = useState();
    const [showLink, setShowLink] = useState(false);

    const handelAccept = () => {
        // here we send the data
        /****API*****/

        //then set the viewQR state True
        setViewQR(true);
    };

    const handelSendToDonner = () => {
        //send the code to donner
        setShowLink(true);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.headerText}>
                    انشئ رمز QR لأرساله الي المتبرع لتأكيد العملية{" "}
                </Text>
                <TouchableOpacity style={styles.btn} onPress={handelAccept}>
                    <Text style={styles.btnText}>انشئ الرمز</Text>
                </TouchableOpacity>
                {viewQR ? (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 24,
                        }}>
                        <View style={styles.imgContainer}>
                            <Image source={QRcodeUri.QRcodeUri} />
                        </View>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={handelSendToDonner}>
                            <Text>
                                <Text style={styles.btnText}>
                                    ارسله الى المتبرع
                                </Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        <View style={styles.imgContainer}></View>
                    </>
                )}
                {showLink && <Redirect href={"home/Dashboard"} />}
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
        borderTopWidth: 3,
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
        fontSize: 20,
        marginTop: 24,
    },
    Text: {
        textAlign: "right",
        fontSize: 16,
        marginTop: 8,
    },
    textInput: {
        marginVertical: 24,
        height: "auto",
        backgroundColor: "#9FAAB6",
        borderRadius: 8,
        textAlign: "right",
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        width: "100%",
        overflow: "scroll",
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

export default AcceeptDevice;
