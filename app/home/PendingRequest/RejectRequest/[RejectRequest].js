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

const RejectRequest = () => {
    const local = useLocalSearchParams();
    const [causeOfRejcet, setCauseOfReject] = useState("ادخل السبب هنا");
    const [rejectedDeviceData, setRejectedDeviceDate] = useState({});
    const [showLink, setShowLink] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handelReject = () => {
        if (causeOfRejcet != "ادخل السبب هنا") {
            setRejectedDeviceDate({
                rejectedDeviceImg: local.rejectDeviceImg,
                rejectedDeviceType: local.rejectDeviceType,
                rejectedDeviceSize: local.rejectDeviceSize,
                rejectedDeviceModel: local.rejectDeviceModel,
                rejectedDeviceDurationOfUse: local.rejectDeviceDurationOfUse,
                rejectedDevicePrevUserAge: local.rejectDevicePrevUserAge,
                rejectedDevicePrevUserWeight: local.rejectDevicePrevUserWeight,
                rejectedDeviceCauseOfUse: local.rejectDeviceCauseOfUse,
                rejectedDeviceDonnerPhoneNumber:
                    local.rejectDeviceDonnerPhoneNumber,
                rejectedDeviceDonnerLocatio: local.rejectDeviceDonnerLocation,
                rejectedDeviceCauseOfUse: causeOfRejcet,
            });
            setShowLink(true);
        } else {
            Alert.alert("سبب الرفض", "يرجى ادخال سبب لرفض الجهاز");
        }
    };

    const inputFoucus = () => {
        setIsFocused(true);
    };

    const inputBlur = () => {
        setIsFocused(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.rejectDeviceImg} />
                </View>
                <View>
                    {/* Cause of Rejection */}
                    <Text style={styles.headerText}>
                        {" "}
                        هل يمكنك إخبار المتبرع بسبب رفض الطلب؟
                    </Text>
                    <TextInput
                        onFocus={inputFoucus}
                        onBlur={inputBlur}
                        style={
                            isFocused
                                ? styles.inputFieldFocus
                                : styles.textInput
                        }
                        multiline={true}
                        value={causeOfRejcet}
                        onChangeText={(text) => setCauseOfReject(text)}
                    />
                </View>
                {showLink ? (
                    <Redirect href="/home/Dashboard" />
                ) : (
                    <>
                        <TouchableOpacity
                            style={styles.btn1}
                            onPress={handelReject}>
                            <Text style={{ fontSize: 17 }}>رفض الطلب</Text>
                        </TouchableOpacity>
                    </>
                )}
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
    btn1: {
        borderWidth: 1.5,
        borderRadius: 8,
        borderColor: "#005F86",
        paddingHorizontal: 16,
        paddingVertical: 20,
        fontSize: 18,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputFieldFocus: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        fontSize: 18,
        backgroundColor: "#899BAB",
        borderRadius: 8,
        textAlign: "right",
        marginVertical: 8,
        marginBottom: 256,
    },
});

export default RejectRequest;
