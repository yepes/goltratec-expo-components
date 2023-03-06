import React from "react";
import { Text } from "react-native";
import CenteredView from "../src/components/CenteredView";
import SampleMenu from "../src/components/SampleMenu";
import { Home as HomePage} from "../src/pages/home";

export default function Home() {
    return <CenteredView>
        <HomePage />
        <SampleMenu />
    </CenteredView>
}