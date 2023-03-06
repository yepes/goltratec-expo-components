import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import {generateListWithIds} from "../../util/generateListWithIds";
import {Link} from "expo-router";
import Title from "../../ui/Title";

const PolizasList = props => {
    const data = generateListWithIds('Poliza', 2)
    return <View>
        {data.map((p, i) => <View key={i}>
                <Link href={`/poliza/${Date.now()}`}>{p}</Link>
            </View>
        )}
    </View>;
}


// const s = StyleSheet.create()

export default PolizasList;