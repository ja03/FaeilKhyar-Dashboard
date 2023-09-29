import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TextInput,
    Alert,
} from "react-native";
import { useRoute, useLocalSearchParams } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Redirect } from "expo-router";

const GiveDevice = () => {
    // data to send to the backend:
    /*id: 1,
    deviceImg: require("../../../assets/imgs/device-img.png"),
    deviceType: "كرسي متحرك",
    deviceModel: "Model 1101",
    deviceSize: "3xl",
    deviceCondition: false,      
    patientMedId:100200110, 
    */

    const local = useLocalSearchParams();
    const [patienMedId, setPatientMedId] = useState(0);
    const [showLink, setShowLink] = useState(false);
    const [giveDeviceData, setGiveDeviceData] = useState({
        givenDeviceType: local.giveDeviceType,
        givenDeviceSize: local.giveDeviceSize,
        givenDeviceModel: local.giveDeviceModel,
        givenDeviceImg: local.giveDeviceImg,
        givenDeviceCondition: local.giveDeviceCondition,
        givenPatienMedId: 0,
    });

    const checkMedId = (text) => {
        //nine gigit number
        if (/^\d{9}$/.test(text)) {
            // Check if the first 2 digits equal the last 2 digits
            if (text.slice(0, 2) === text.slice(-2)) {
                setPatientMedId(text);
                return true;
            } else {
                Alert.alert(
                    "MedID غير صالح",
                    "يجب أن تكون الرقمين الأولين والرقمين الأخيرين متطابقين."
                );
            }
        } else {
            Alert.alert(
                "MedID غير صالح",
                "يجب أن يكون رقم MedID مكونًا من 9 أرقام."
            );
        }
    };

    const handelGiveDevice = () => {
        const MedId = checkMedId(patienMedId);

        if (MedId) {
            // send data to backend
            setGiveDeviceData({
                givenDeviceType: local.giveDeviceType,
                givenDeviceSize: local.giveDeviceSize,
                givenDeviceModel: local.giveDeviceModel,
                givenDeviceImg: local.giveDeviceImg,
                givenDeviceCondition: local.giveDeviceCondition,
                givenPatienMedId: patienMedId,
            });
            setShowLink(true);
        }
    };

    return (
        <SafeAreaProvider style={styles.container}>
            <ScrollView>
                <Text style={styles.headerText}>معلومات عن المريض</Text>
                <View style={{ marginVertical: 16 }}>
                    <Text style={styles.inputText}>
                        رقم الهوية الطبية للمريض
                    </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.inputField}
                            value={patienMedId}
                            keyboardType="numeric"
                            onChangeText={(text) => setPatientMedId(text)}
                        />
                    </View>
                </View>
                {showLink ? (
                    <Redirect href={"/home/Dashboard"} />
                ) : (
                    <>
                        <TouchableOpacity
                            style={styles.btn2}
                            onPress={handelGiveDevice}>
                            <Text style={{ color: "#ffffff", fontSize: 18 }}>
                                منح بالجهاز
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </ScrollView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 24,
        paddingHorizontal: 24,
    },
    headerText: {
        textAlign: "right",
        fontSize: 26,
        fontWeight: "bold",
        // marginHorizontal:24
    },
    inputText: {
        textAlign: "right",
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 50,
        borderRadius: 8,
        backgroundColor: "#899BAB",
        paddingHorizontal: 16,
        paddingVertical: 10,
        display: "flex",
        justifyContent: "center",
    },
    inputField: {
        fontSize: 16,
        textAlign: "right",
    },
    btn2: {
        fontSize: 18,
        borderWidth: 1.5,
        borderRadius: 8,
        borderColor: "#005F86",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#005F86",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

export default GiveDevice;
