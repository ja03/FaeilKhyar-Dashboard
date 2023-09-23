import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import {Link} from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'

//Assets
import searchIcon from '../../../assets/imgs/search-icon.png'
import deviceImg from '../../../assets/imgs/device-img.png'

//Components
import RejectedCard from './RejectedCard'

const RejectedFeed = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>الاجهزة التي تم رفضها</Text>
            <Text style={styles.subText}>العدد: 4</Text>
            {/* Search Bar */}
            <View>
                <View style={styles.input}>
                    <Image source={searchIcon}/>
                    <TextInput placeholder="هل تبحث عن شيء؟" style={styles.inputField}/>
                </View>
            </View>
            {/* Cards */}
            <RejectedCard deviceDonner={"Ahmad Mahmoud"} deviceType={"كرسي متحرك"} deviceImg={deviceImg}/>
            <RejectedCard deviceDonner={"Ahmad Mahmoud"} deviceType={"كرسي متحرك"} deviceImg={deviceImg}/>
            <RejectedCard deviceDonner={"Ahmad Mahmoud"} deviceType={"كرسي متحرك"} deviceImg={deviceImg}/>
            <RejectedCard deviceDonner={"Ahmad Mahmoud"} deviceType={"كرسي متحرك"} deviceImg={deviceImg}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginHorizontal:24,
        marginVertical:36
        
    },
    headerText:{
        textAlign:"right",
        fontSize:20,
        fontWeight:'bold',

    },
    Text:{
        textAlign:"right",
        fontSize:16,

    },
    subText:{
        textAlign:"right",
        fontSize:16,
        color:'#005F86',
        marginTop:8,
        marginBottom:16
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
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    inputField:{
        fontSize:16,
        textAlign:"right",
    }
})
export default RejectedFeed