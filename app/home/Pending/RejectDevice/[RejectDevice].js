import React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import { useRoute , useLocalSearchParams} from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native';


const RejectDevice = () => {
    const local = useLocalSearchParams()
    return (
        <SafeAreaProvider style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.rejectedDeviceImg}/>
                </View>
                <View>
                    {/* Cause of Rejection */}
                    <Text style={styles.headerText}> هل يمكنك إخبار المتبرع بسبب رفض الجهاز؟</Text>
                    <TextInput style={styles.textInput}/>
                </View>
                <TouchableOpacity style={styles.btn1}>
                    <Text style={{fontSize:17}}>رفض الجهاز</Text>
                </TouchableOpacity>
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
        fontSize:20,
        marginTop:24
        // marginHorizontal:24
    },
    Text:{
        textAlign:"right",
        fontSize:16,
        marginTop:8,
    },
    textInput:{
        marginVertical:24,
        height:250,
        backgroundColor:"#9FAAB6",
        borderRadius:8,
        textAlign:"right",
        fontSize:16
    },
    btn1:{
        borderWidth:1.5,
        borderRadius:8,
        borderColor:"#005F86",
        paddingHorizontal:16,
        paddingVertical:10,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
});

export default RejectDevice