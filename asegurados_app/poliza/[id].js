import React from 'react';
import CenteredView from "../../src/components/CenteredView";
import Title from "../../src/ui/Title";
import {useSearchParams} from "expo-router";
import { Text } from 'react-native';

const PolizaDetalle = props => {
    const searchParems = useSearchParams()
    return <CenteredView>
        <Title>Detalle de póliza {searchParems.id} </Title>
    </CenteredView>;
}

export default PolizaDetalle;