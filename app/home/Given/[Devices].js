import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useRoute , useLocalSearchParams} from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native';


const Devices = () => {
    const local = useLocalSearchParams()
    return (
        <SafeAreaProvider style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.deviceImg}/>
                </View>
                <View>
                    {/* GivenPatent Info */}
                    <Text style={styles.headerText}> المريض الذي تم توفير الجهاز له</Text>
                    <Text style={styles.Text}>رقم الملف الطبي: {local.patientFileNumber}</Text>
                    <Text style={styles.Text}>اسم المريض: {local.patientName}</Text>
                    <Text style={styles.Text}>وزن المريض: {local.patientWeight}</Text>
                    <Text style={styles.Text}>عمر المريض: {local.patientAge}</Text>
                    <Text style={styles.Text}>السبب في حاجته للجهاز: {local.causeOfNeed}</Text>
                    <Text style={styles.Text}>صورة لتقرير طبي:</Text>
                    <View style={styles.reportImgContainer}>
                        <Image source={local.medicalReport} />
                    </View>

                    {/* Device Info */}
                    <Text style={styles.headerText}>معلومات عن الجهاز</Text>
                    <Text style={styles.Text}>نوع الجهاز: {local.deviceType}</Text>
                    <Text style={styles.Text}>موديل الجهاز: {local.deviceModel}</Text>
                    <Text style={styles.Text}>حجم الجهاز: {local.deviceSize}</Text>
                    <Text style={styles.Text}>غرض الاستخدام: {local.causeOfUse}</Text>
                    
                    {/* PrevUser Info */}
                    <Text style={styles.headerText}>معلومات عن المستخدم السابق</Text>
                    <Text style={styles.Text}>عمر المستخدم السابق: {local.prevUserAge}</Text>
                    <Text style={styles.Text}>وزن المستخدم السابق: {local.prevUserWeight}</Text>
                    <Text style={styles.Text}>مدة الاستخدام: {local.durationOfUse}</Text>

                    {/* Donner Info */}
                    <Text style={styles.headerText}>معلومات عن فاعل الخير</Text>
                    <Text style={styles.Text}>الاسم: {local.donnerName}</Text>
                    <Text style={styles.Text}>رقم الهاتف: {local.donnerPhone}</Text>
                    <Text style={styles.Text}>مكان السكن: {local.donnerLocation}</Text>
                </View>

            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:24
    },
    imgContainer:{
        borderBottomWidth: 3,
        borderBottomColor: 'gray',
        paddingBottom: 8,
        borderRadius:4,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:12 
    },
    headerText:{
        textAlign:'right',
        fontSize:24,
        fontWeight:'bold',
        marginTop:24
        // marginHorizontal:24
    },
    Text:{
        textAlign:"right",
        fontSize:16,
        marginTop:8,
    },
    reportImgContainer:{
        backgroundColor:"gray",
        padding:8,
        borderRadius:4,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:12 
    }

});


export default Devices