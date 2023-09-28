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
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const Scan = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanData, setScanData] = useState();
    const [viewLink, setViewLink] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (!hasPermission) {
        return (
            <View style={styles.container}>
                <Text>Please grant camera permissions to app.</Text>
            </View>
        );
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanData(data);
        console.log(`Data: ${data}`);
        console.log(`Type: ${type}`);
        setViewLink(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>
                الرجاء مسح رمز الQR من هاتف المتبرع.
            </Text>

            <View style={{ flex: 1 }}>
                <BarCodeScanner
                    style={{ width: "100%", height: "148%" }}
                    onBarCodeScanned={
                        scanData ? undefined : handleBarCodeScanned
                    }
                />
            </View>
            {viewLink && (
                <View
                    style={{
                        position: "absolute",
                        bottom: 10,
                        width: "100%",
                        padding: 16,
                        backgroundColor: "rgba(255,255,255,.2)",
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 24,
                    }}>
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}>
                        تمت العملية بنجاح
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <Link href={"/home/Dashboard"} style={styles.btnText}>
                            <Text>الصفحة الرئيسية</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        textAlign: "right",
        backgroundColor: "#FFF",
    },
    headerText: {
        paddingHorizontal: 24,
        textAlign: "right",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 24,
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
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#005F86",
        marginVertical: 8,
        flex: 1,
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
export default Scan;
