import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const WelcomingTwo = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Image source={require("../../assets/imgs/logo-lg.png")} />
                <Text style={styles.headerText}> كيفية الاستخدام </Text>
                <Text style={styles.text}>أنشئ حسابًا للمستشفى.</Text>
                <Text style={styles.text}>عرض وإدارة التبرعات.</Text>
                <Text style={styles.text}> قبول أو رفض التبرعات.</Text>
                <Text style={styles.text}>
                    {" "}
                    إنشاء رمز الاستجابة السريعة (QR code) للتبرعات المقبولة.
                </Text>
                <Text style={styles.text}>
                    {" "}
                    بحث عن الأجهزة وتوفيرها للمرضى.
                </Text>
                <Text style={styles.text}>
                    مسح رموز الاستجابة السريعة لتحديث المعلومات.{" "}
                </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Link href="/Registration/LogIn" style={styles.btnText}>
                    كن فاعلا للخير
                </Link>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        // paddingVertical:48,
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        gap: 32,
        textAlign: "right",
        backgroundColor: "#D9E7ED",
    },
    textContainer: {
        textAlign: "right",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 16,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 32,
    },
    text: {
        fontSize: 18,
        textAlign: "right",
        paddingHorizontal: 8,
    },
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#005F86",
        marginHorizontal: 8,
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },
});

export default WelcomingTwo;
