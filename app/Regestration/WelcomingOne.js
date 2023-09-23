import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import {Link} from 'expo-router'
//Components
import Welcome from '../../Componentes/Regestration/Welcome'

const WelcomingOne =()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Welcome/>
                <TouchableOpacity style={styles.btn}>
                    <Link href="/Regestration/WelcomingTwo" style={styles.btnText}>تعرف على المزيد</Link>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9E7ED',
        alignItems:"center",
        flexDirection:"column",
        justifyContent:'center'
    },
    text: {
      color: 'red', // Set the text color here
    },
    content:{
        alignItems:"center",
        flexDirection:"column",
        gap:96
    },
    btn:{
        backgroundColor:'#005F86',
        paddingHorizontal:16,
        paddingVertical:10,
        borderRadius:8
    },
    btnText:{
        fontSize:18,
        color:'white',
    }
});

export default WelcomingOne;