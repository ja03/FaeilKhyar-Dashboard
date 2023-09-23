import React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import { useRoute , useLocalSearchParams} from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native';


const GiveDevice = () => {
    const local = useLocalSearchParams()
    return (
        <SafeAreaProvider style={styles.container}>
            <ScrollView>
            <Text style={styles.headerText}>معلومات عن المريض</Text>
            <View style={{marginVertical:16}}>
                <Text style={styles.inputText}>اسم المريض</Text>
                <View style={styles.input}>
                    <TextInput style={styles.inputField}/>
                </View>
            </View>
            
            <View style={{marginBottom:16}}>
                <Text style={styles.inputText}>رقم الملف الطبي</Text>
                <View style={styles.input}>
                    <TextInput style={styles.inputField}/>
                </View>
            </View>
            
            <View style={{marginBottom:16}}>
                <Text style={styles.inputText}>عمر المريض</Text>
                <View style={styles.input}>
                    <TextInput style={styles.inputField}/>
                </View>
            </View>

            <View style={{marginBottom:16}}>
                <Text style={styles.inputText}>وزن المريض</Text>
                <View style={styles.input}>
                    <TextInput style={styles.inputField}/>
                </View>
            </View>

            <View style={{marginBottom:16}}>
                <Text style={styles.inputText}>صورة لتقرير طبي</Text>
                <View style={styles.input}>
                    <TextInput style={styles.inputField}/>
                </View>
            </View>
            <View style={styles.btnView}>
                    <TouchableOpacity  style={styles.btn2}>
                            <Text style={{color:'#ffffff', fontSize:18}}>اخد صورة</Text>
                    </TouchableOpacity>
            </View>

            <View style={{marginBottom:16}}>
                <Text style={styles.inputText}>السبب في حاجته للجهاز</Text>
                <View style={styles.input}>
                    <TextInput style={styles.inputField}/>
                </View>
            </View>

            <View style={styles.btnView}>
                    <TouchableOpacity  style={styles.btn2}>
                            <Text style={{color:'#ffffff', fontSize:18}}>منح بالجهاز</Text>
                    </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop:24,
        paddingHorizontal:24
    },
    headerText:{
        textAlign:'right',
        fontSize:26,
        fontWeight:'bold',
        // marginHorizontal:24
    },
    inputText:{
        textAlign:"right",
        fontSize:18,
        marginBottom:8,   
    },
    input:{
        height: 50,
        borderRadius:8,
        backgroundColor: '#899BAB',
        paddingHorizontal: 16,
        paddingVertical:10,
        display:"flex",
        justifyContent:"center"
    },
    inputField:{
        fontSize:16,
        textAlign:"right",
    },
    btn2:{
        fontSize:18,
        borderWidth:1.5,
        borderRadius:8,
        borderColor:"#005F86",
        paddingHorizontal:16,
        paddingVertical:10,
        backgroundColor:"#005F86",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
})

export default GiveDevice