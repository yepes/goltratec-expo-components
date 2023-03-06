import React from 'react';
import Title from "../../src/ui/Title";
import ViewCenter from "../../src/ui/ViewCenter";
import PolizasList from "../../src/components/polizas/PolizasList";

const Index = props => <ViewCenter>
    <Title>Tomador index</Title>
    <PolizasList />
</ViewCenter>;

export default Index;