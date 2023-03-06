import {useNavigation, usePathname, useRootNavigation, useSearchParams} from "expo-router";
import {Button, Text, View} from "react-native";
import React from "react";
import SampleMenu from "../../src/components/SampleMenu";

export default function ItemSlug(){

    const searchParams = useSearchParams();
    const n = useNavigation()
    const rn = useRootNavigation()
    return <View>
        <Text>{JSON.stringify({n, rn }, null, 2)}</Text>
        <Text>-------------</Text>

        <Button title="asd" onPress={() => console.log(n)} />
        <Text>{JSON.stringify(searchParams, null, 2)}</Text>
        <SampleMenu />
    </View>
}