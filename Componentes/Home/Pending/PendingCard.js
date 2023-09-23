import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import {Link} from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react';

const PendingCard = ({seen, categoryImg, categoryType, categroySubText}) => {
    const [isSeen, setIsSeen] = useState(seen)
    useEffect(()=>{
        setIsSeen(seen)
    }, [seen])

    return (
                <View style={styles.container}>
                    <View style={isSeen ? styles.seen: styles.notSeen}></View>
                    <View style={{width:140, marginHorizontal:20, gap:10}}>
                        <Text style={styles.Text}>{categoryType}</Text>
                        <Text style={styles.subText}>{categroySubText}</Text>
                    </View>
                    <View style={{alignItems:"center", justifyContent:"center", width:75}}>
                        <Image source={categoryImg} style={styles.img}/>
                    </View>
                </View>


    )
}
const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#D9E7ED",
        paddingHorizontal:28,
        paddingVertical:10, 
        borderRadius:16,
    },
    seen:{
        width:18,
        height:18,
        borderRadius:6,
    },
    notSeen:{
        width:18,
        height:18,
        borderRadius:6,
        backgroundColor:"red"
    },
    img:{
        borderRadius:16,
        width:100,
        height:100
    },
    Text:{
        fontSize:18,
        textAlign:"right",
    },
    subText:{
        fontSize:14,
        textAlign:"right",
        color:"#005F86"
    }
})
export default PendingCard