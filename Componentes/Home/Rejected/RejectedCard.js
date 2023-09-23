import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import {Link} from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'

const RejectedCard = ({deviceDonner, deviceImg, deviceType}) => {
    return (
        <View style={styles.container}>

            <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{marginRight:16, width:175 }}>
                    <Text style={styles.Text}>{deviceType}</Text>
                    <Text style={styles.subText}>{deviceDonner}</Text>
                </View>
                <View style={{alignItems:"center", justifyContent:"center", }}>
                    <Image source={deviceImg} style={styles.img}/>
                </View>
            </View>

        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:"#D9E7ED",
        paddingHorizontal:28,
        paddingVertical:10, 
        borderRadius:16,
        marginTop:24,
    },
    img:{
        borderRadius:16,
        width:100,
        height:100
    },
    Text:{
        fontSize:18,
        textAlign:"right",
        marginBottom:14
    },
    subText:{
        fontSize:14,
        textAlign:"right",
        color:"#005F86"
    }
})
export default RejectedCard