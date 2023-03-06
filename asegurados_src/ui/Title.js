import {StyleSheet, Text} from "react-native";
import {PropsWithChildren} from "react";

export default function Title({children}) {
    return <Text style={s.text}>{children}</Text>
}

const s = StyleSheet.create({
    text: {
        fontSize: 18
    }
})