import {Link, useNavigation} from "expo-router";
import * as React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import DebugNavigatorInfo from "./DebugNavigatorInfo";

const SampleMenu: React.FC = () => {
    const navigation = useNavigation();

    return <>
        <View style={s.w}>
            <Link href="/">Inicio</Link>
            <Link href="/items/modal">Modal</Link>
            <Link href="/home">Home</Link>
            <Link href="/items">Items</Link>
        </View>
        <DebugNavigatorInfo/>

    </>
}

const s = StyleSheet.create({
    w: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 8,
    }
})

export default SampleMenu