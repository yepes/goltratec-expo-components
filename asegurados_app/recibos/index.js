import React from 'react';
import {generateListWithIds} from "../../src/util/generateListWithIds";
import CenteredView from "../../src/components/CenteredView";
import Title from "../../src/ui/Title";
import {Button, View} from "react-native";
import {Link} from "expo-router";
import fakeModal from "../../src/components/Modal/FakeModal";

const Index = props => {
        const data = generateListWithIds('Recibo - poliza', 40)
    return <CenteredView>
        <Title>Recibos</Title>

        {data.map((p, i) => <View key={i}>
                <Link href={`/poliza/${Date.now()}`}>{p}</Link>
                <Button onPress={() => fakeModal('Ver PDF')} title="Ver pdf" />

            </View>
        )}
    </CenteredView>;
}

export default Index;