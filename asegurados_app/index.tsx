import {Button, Text, View} from "react-native";
import React from "react";
import {Link} from "expo-router";
import Title from "../src/ui/Title";

export default function Index() {
  return <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
    <Title>Página de inicio</Title>
    <Text>Dev: {__DEV__.toString()}</Text>
    <Link href="/sign-in">ir a login</Link>
  </View>
}