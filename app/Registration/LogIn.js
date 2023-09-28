import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ScrollView } from "react-native";


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [path, setPath] = useState("/Registration/LogIn");
    const [logInData, setLogInData] = useState({
        hospitalEmail: " ",
        hospitalPassword: "",
    });
    const checkEmail = (text) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Test the email against the regex
        if (emailRegex.test(email)) {
            return true; // Valid email
        } else {
            Alert.alert("Invalid email address"); // Alert if the email is invalid
        }
    };

    const checkPassword = (text) => {
        // Check if the password meets the criteria
        if (
            text.length >= 8 &&
            /[A-Z]/.test(text) &&
            /^[A-Za-z_]+$/.test(text)
        ) {
            setPassword(text);
            return true;
        } else {
            Alert.alert(
                "Invalid Password",
                "Password must be at least 8 characters long, contain at least one uppercase letter, and can only contain letters and underscores."
            );
        }
    };

    const handleLogin = () => {
        // Check if email and password are valid
        const checkUserEmail = checkEmail(email);
        const checkUserPassword = checkPassword(password);

        if (checkUserEmail && checkUserPassword) {
            // Save email and password in logInData object
            setLogInData({
                hospitalEmail: email,
                hospitalPassword: password,
            });

            // Update the path and navigate to the home page
            setPath("/home/Dashboard");
            console.log("Path changed");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}> اهلا بعودتك</Text>
                    <Link href={"/Registration/SignUp"}>
                        <Text style={styles.subLinkText}>
                            ليس لديك حساب؟ انشئ حساب الان
                        </Text>
                    </Link>
                </View>
                {/* Log in form */}
                <View>
                    <Text style={styles.text}>
                        البريد الالكتروني الخاص بالمستشفى
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />

                    <Text style={styles.text}>ادخل كلمة المرور</Text>
                    <TextInput
                        style={styles.inputField}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <Text
                        style={{
                            textAlign: "right",
                            marginBottom: 8,
                            fontSize: 12,
                        }}>
                        يجب أن تحتوي كلمة المرور على الأقل على 8 أحرف. يجب أن
                        تحتوي كلمة المرور على حرف كبير واحد على الأقل. الرمز
                        المسموح به الوحيد هو الشرطة السفلية ("_").
                    </Text>
                    <Link
                        href={"/Registration/ForgotPass"}
                        style={styles.subLinkText}>
                        نسيت كلمة المرور؟
                    </Link>
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Link href={path} style={styles.btnText}>
                        تسجيل دخول
                    </Link>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingVertical: 48,
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: 32,
        textAlign: "right",
        backgroundColor: "#D9E7ED",
        paddingBottom: 128,
    },
    textContainer: {
        textAlign: "right",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 16,
        marginBottom: 24,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 32,
        textAlign: "right",
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
        marginVertical: 8,
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },
    subLinkText: {
        fontSize: 14,
        color: "#005F86",
        textAlign:"right"
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
});

export default LogIn;
