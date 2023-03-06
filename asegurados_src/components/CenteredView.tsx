import React,  {PropsWithChildren} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";

const CenteredView = ({children}: PropsWithChildren) => {
    return <ScrollView contentContainerStyle={s.w}>
        {children}
    </ScrollView>
}

const s = StyleSheet.create({
    w: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
    }
})

export default CenteredView