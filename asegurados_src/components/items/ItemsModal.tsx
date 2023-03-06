import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export const ItemsModal = () => {
    return <View style={s.w}>
    <Text style={s.text}>Modal de los items</Text>
    </View>;
}


const s = StyleSheet.create({
    text: {
        fontSize: 18
    },
    w: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: '100%'
    }
})

export default ItemsModal