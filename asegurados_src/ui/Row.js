import React from 'react';
import {View, StyleSheet} from "react-native";

const Row = ({children}) => <View style={s.w}>
    {children}
</View>;

const s = StyleSheet.create({
    w: {
        flexDirection: 'row'
    }
})

export default Row;