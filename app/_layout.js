import { Stack } from "expo-router";
import { useFonts } from "expo-font";



const Layout = ()=>{
            // const [fontsLoaded] = useFonts({
            // CairoBold: require("../assets/fonts/Cairo-Bold.ttf"),
            // CairoRegular: require("../assets/fonts/Cairo-Regular.ttf"),
            // });

            // if (!fontsLoaded) {
            // return null;
            // }

        return(
        <Stack screenOptions={{headerShown:false}}/>

        )
}


export default Layout;