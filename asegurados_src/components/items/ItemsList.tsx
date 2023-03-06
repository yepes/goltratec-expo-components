import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {Link, useNavigation, useRootNavigation} from "expo-router";
import SampleMenu from "../SampleMenu";
import CenteredView from "../CenteredView";

export function ItemsList() {
    const items = [
        {id: 1, title: 'asd'},
        {id: 2, title: 'asd'},
        {id: 3, title: 'asd'},
        {id: 4, title: 'asd'},
    ]

    const n = useNavigation()
    const rn = useRootNavigation()

    // React.useLayoutEffect(() => {
    //     console.log('useEffect')
    //     n.getParent().setOptions({
    //         headerShown: false
    //     })
    // })

    return <CenteredView>
        {items.map((item) =>
            <View key={item.id}>
                <Link href={`/items/${item.id}`}>
                    {item.title} - {item.id} (como en web, path)
                </Link>
            </View>
        )}
        <Link href="modal">Abrir modal</Link>
        <SampleMenu />
    </CenteredView>
}
