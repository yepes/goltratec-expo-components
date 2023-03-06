import React from 'react';
import {View, StyleSheet} from "react-native";

const ViewCenter = props => <View style={s.w}>
    {props.children}
</View>;

    const s = StyleSheet.create({
        w: {
            height: '100%',
            alignItems: "center",
            justifyContent: "center"
        }
    })

export default ViewCenter;