import React from 'react';
import CenteredView from "../../src/components/CenteredView";
import Title from "../../src/ui/Title";
import {generateListWithIds} from "../../src/util/generateListWithIds";
import {Button, View} from "react-native";
import {Link} from "expo-router";
import fakeModal from "../../src/components/Modal/FakeModal";

const Index = () => {
        const data = generateListWithIds('Asegurado - poliza', 4)
    return <CenteredView>
        <Title>Asegurados</Title>

        {data.map((p, i) => <View key={i}>
                <Link href={`/poliza/${Date.now()}`}>{p}</Link>
                <Button onPress={() => fakeModal('Condiciones aquí')} title="Ver condiciones" />
                <Button onPress={() => fakeModal('Duplicado de tarjeta response')} title="Solicitud de duplicado de tarjeta" />
            </View>
        )}
    </CenteredView>;
}

export default Index;