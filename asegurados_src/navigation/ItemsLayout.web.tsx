import { Stack } from "expo-router/stack";
import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {ItemsList} from "../../src/components/items";

export default function ItemsLayout() {
    return <View style={s.w}>
        <View style={s.c}>
            <ItemsList />
        </View>
        <View style={s.c}>
            <Stack>
        <Stack.Screen
        name="index"
        />
        <Stack.Screen
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
            headerTitle: "this is an items"
        }}
      />
    </Stack>
        </View>
    </View>
}

const s = StyleSheet.create({
    w: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'orange',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.02)'
    },
    c: {
        flexGrow: 1,
    }
})