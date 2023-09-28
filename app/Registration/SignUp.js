import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'

// object to be filled and sent to the backend
// const SignUpForm = {
//         userMedId:0,
//         userPhoneNumber:0,
//         userFirstName:null,
//         userLastName:null,
//         userLocation:null,
//         userPassword:null
// }

const jordanianGovernorates = [
    "عمان",
    "اربد",
    "الزرقاء",
    "مادبا",
    "جرش",
    "المفرق",
    "الكرك",
    "الطفيلة",
    "معان",
    "العقبة",
    "amman",
    "irbid",
    "zarqa",
    "madaba",
    "jerash",
    "mafraq",
    "karak",
    "tafilah",
    "ma'an",
    "aqaba"
];
const SignUp = ()=>{
    
    const [email, setEmail] = useState(''); 
    const [name, setName] = useState(''); 
    const [location, setLocation] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [signUpData, setSignUpData] = useState({
        hospitalEmail:'',
        hospitalName:'',
        hospitalLocation:'',
        hospitalPassword:''
    })
    const [path, setPath] = useState('/Registration/SignUp')

    const checkEmail = (text) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Test the email against the regex
        if (emailRegex.test(email)) {
            return true; // Valid email
        } else {
            Alert.alert("Invalid email address"); // Alert if the email is invalid
        }
    };

    const checkPassword = (text, confimration) => {
        // Check if the password meets the criteria
        if (text.length >= 8 && /[A-Z]/.test(text) && /^[A-Za-z_]+$/.test(text) && text=== confimration) {
            setPassword(text);
            return true;
        } else {
            Alert.alert(
            'Invalid Password',
            'Password must be at least 8 characters long, contain at least one uppercase letter, and can only contain letters and underscores.'
            );
        }
    };

    const checkLocation = (text)=>{
        let lowerCaseText= text.toLowerCase()
        if(jordanianGovernorates.includes(lowerCaseText)){
            setLocation(text)
            return true;
        }else{
            Alert.alert('Location not in jordan')
        }
    }

    const handelSignUp= ()=>{
        const hospitalEmailFunction = checkEmail(email)
        const hospitalLocationFunction = checkLocation(location)
        const hospitalPasswordFunction = checkPassword(password, confirmPassword) 

            if(
                hospitalEmailFunction && hospitalPasswordFunction &&
                hospitalLocationFunction
            ){
                setSignUpData({
                    hospitalEmail:email,
                    hospitalName:name,
                    hospitalLocation:location,
                    hospitalPassword:password
                })
                setPath('/Registration/ConfirmAcc')
                console.log(signUpData)
            }       
            
    }
return(

    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}> انشئ حسابك و انضم إلينا</Text>
                <Link href={'/Registration/LogIn'}>
                    <Text style={styles.subLinkText}>لديك حساب؟ تسجيل دخول</Text>
                </Link>
            </View>
            {/* SignUp form */}
            <View>
                {/* Email Input */}
                <Text style={styles.text}>البريد الالكتروني الخاص بالمستشفى</Text>
                <TextInput 
                    style={styles.inputField}
                    onChangeText={(text)=>setEmail(text)}
                    value={email}
                />
                {/* Name inout */}
                <Text style={styles.text}>اسم المستشفى</Text>
                <TextInput 
                    style={styles.inputField}
                    onChangeText={(text)=>setName(text)}
                    value={name}
                />
                {/* Location */}
                <Text style={styles.text}>اسم محافظتك؟</Text>
                <TextInput 
                    style={styles.inputField}
                    onChangeText={(text)=>setLocation(text)}
                    value={location}
                />
                {/* createPass */}
                <Text style={styles.text}>انشئ كلمة مرور</Text>
                <TextInput 
                    style={styles.inputField}
                    secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)}
                    value={password}
                />
                <Text style={{textAlign:"right", marginBottom:8}}>
                    يجب أن تحتوي كلمة المرور على الأقل على 8 أحرف.
                    يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل.
                    الرمز المسموح به الوحيد هو الشرطة السفلية ("_").       
                </Text>
                {/* confirmPass */}
                <Text style={styles.text}>تأكيد كلمة المرور</Text>
                <TextInput 
                    style={styles.inputField}
                    onChangeText={(text)=>setConfirmPassword(text)}
                    secureTextEntry={true}
                    value={confirmPassword}
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handelSignUp}>
                <Link  href={path} style={styles.btnText}>تسجيل دخول</Link>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>

)
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:48,
        paddingHorizontal:24,
        display:"flex",
        flexDirection:"column",
        flex:1,
        gap:32, 
        textAlign:"right",
        backgroundColor:"#D9E7ED",
        paddingBottom:64
    },
    textContainer:{
        textAlign:"right", 
        flexDirection:"column",
        alignItems:"flex-end", 
        gap:16, 
        marginBottom:24
    },
    headerText:{
        fontWeight:"bold",
        fontSize:32,
        textAlign:"right"
    },
    text:{
        fontSize:18,
        textAlign:"right",
        paddingHorizontal:8,
        marginTop:8
    },
    btn:{
        paddingHorizontal:16,
        paddingVertical:10,
        borderRadius:8,
        backgroundColor:"#005F86",
        marginVertical:8
    },
    btnText:{
        fontSize:18,
        color:"#fff",
        textAlign:"center"
    },
    subLinkText:{
        fontSize:14,
        color:"#005F86",
    }, 
    inputField:{
        paddingHorizontal:16,
        paddingVertical:10,
        fontSize:16,
        backgroundColor:"#899BAB",
        borderRadius:8,
        textAlign:"right",
        marginVertical:8
    }
    });


export default SignUp