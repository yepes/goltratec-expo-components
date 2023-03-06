// import React from "react";
// import { Text } from "react-native";
// import CenteredView from "../src/components/CenteredView";
// import SampleMenu from "../src/components/SampleMenu";
//
// export default function Index() {
//     return <CenteredView>
//         <Text>Index Page</Text>
//         <SampleMenu />
//     </CenteredView>
// }

import {Button, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SampleMenu from "../src/components/SampleMenu";
import {Slot} from "expo-router";



export default function Index() {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


        <Button title="Get local storage" onPress={() => {
            AsyncStorage.getItem('user').then(console.log)
        }} />

        <SampleMenu />
    </View>
  );
}