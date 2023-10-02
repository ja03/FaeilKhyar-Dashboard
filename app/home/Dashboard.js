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
import CategoryCard from "../../Componentes/Home/CategoryCard";

const categories = [
    {
        id: 1,
        categoryName: "مسح رمز ال QR",
        categoryImg: require("../../assets/imgs/scanQR-illustration.png"),
        seen: true,
        path: "/home/QRscan",
    },
    {
        id: 2,
        categoryName: "التبرعات في انتظار الموافقة ",
        categoryImg: require("../../assets/imgs/pending-illustration.png"),
        seen: true,
        path: "/home/Pending",
    },
    {
        id: 3,
        categoryName: "طلبات قيد الانتظار ",
        categoryImg: require("../../assets/imgs/request-icon.png"),
        seen: true,
        path: "/home/PendingRequest",
    },
    {
        id: 4,
        categoryName: "التبرعات المقبولة",
        categoryImg: require("../../assets/imgs/accepet-illustration.png"),
        seen: true,
        path: "/home/Accepted",
    },
    {
        id: 5,
        categoryName: "الأجهزة المُمنَحة",
        categoryImg: require("../../assets/imgs/given-illustration.png"),
        seen: true,
        path: "/home/Given",
    },
    {
        id: 6,
        categoryName: "الأجهزة المرفوضة",
        categoryImg: require("../../assets/imgs/reject-illustration.png"),
        seen: true,
        path: "/home/Rejected",
    },
];

const Dashboard = () => {
    const renderCategoryCard = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Link
                    href={item.path}
                    style={{ marginVertical: 12, height: 128 }}>
                    <CategoryCard
                        seen={item.seen}
                        categoryImg={item.categoryImg}
                        categoryType={item.categoryName}
                    />
                </Link>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Nav */}
            <View style={styles.tobNav}>
                <View>
                    <Image source={require("../../assets/imgs/Logo-sm.png")} />
                </View>
                <Text style={styles.headerText}>
                    معنا، كل تبرع يحمل قصة عن الرعاية والعطاء
                </Text>
            </View>
            {/* CategoryCards */}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={categories}
                    renderItem={renderCategoryCard}
                    keyExtractor={(item) =>
                        item && item.id ? item.id.toString() : "defaultKey"
                    }
                    showsVerticalScrollIndicator={false}
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
    tobNav: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        marginVertical: 12,
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
});

export default Dashboard;
