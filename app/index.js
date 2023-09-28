import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { Redirect } from "expo-router";

export default function Index(){
    return <Redirect href="/home/Dashboard"/>
    // return (<Text>This is us we are here</Text>)
}