import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import {Link} from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'

//Assets
import LogoSm from '../../assets/imgs/Logo-sm.png'

//Components
import CategoryCard from '../../Componentes/Home/CategoryCard';

const categories = [
    {
        id:1,
        categoryName:'مسح رمز ال QR',
        categoryImg: require('../../assets/imgs/scanQR-illustration.png'),
        seen:true,
        path:'/home/QRscan'       
    },
    {
        id:2,
        categoryName:'التبرعات في انتظار الموافقة ',
        categoryImg: require('../../assets/imgs/pending-illustration.png'),
        seen:true,
        path:'/home/Pending'       
    },
    {
        id:3,
        categoryName:'التبرعات المقبولة',
        categoryImg: require('../../assets/imgs/accepet-illustration.png'),
        seen:true,
        path:'/home/Accepted'       
    },
    {
        id:4,
        categoryName:'الأجهزة المُمنَحة',
        categoryImg: require('../../assets/imgs/given-illustration.png'),
        seen:true,
        path:'/home/Given'       
    },
    {
        id:5,
        categoryName:'الأجهزة المرفوضة',
        categoryImg: require('../../assets/imgs/reject-illustration.png'),
        seen:true,
        path:'/home/Rejected'       
    },

]

const Dashboard = () => {

    const renderCategoryCard = ({item})=>{
        return(
            <Link href={item.path} style={styles.Cards}>
                <CategoryCard 
                    seen={item.seen} 
                    categoryImg={item.categoryImg} 
                    categoryType={item.categoryName}
                />            
            </Link>
        )
    }

return (
    <SafeAreaProvider  style={styles.container}>
    {/* Top Nav */}
    <ScrollView>
    <View style={styles.tobNav}>
        <Image source={LogoSm}/>
    </View>
    <Text style={styles.headerText}>
        معنا، كل تبرع يحمل قصة عن الرعاية والعطاء   
    </Text>
    {/* CategoryCards */}
    <View style={styles.Cards}>
        <FlatList
            data={categories}
            renderItem={renderCategoryCard}
            keyExtractor={(item) => (item && item.id ? item.id.toString() : 'defaultKey')}
        />
    </View>
    </ScrollView>
    </SafeAreaProvider>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    tobNav:{
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        marginHorizontal:24,
        marginTop:36,
        marginBottom:24
    },
    headerText:{
        textAlign:"right",
        fontSize:26,
        fontWeight:'bold',
        marginHorizontal:24,
        marginBottom:24
    },
    Text:{
        textAlign:"right",
        fontSize:16,
        width:150
    },
    Cards:{
        marginVertical:12,
        alignItems:'center'
    }
})

export default Dashboard

