import { Stack } from "expo-router/stack";
import React from "react";
//@ts-expect-error
import ItemsLayout from "../../src/navigation/ItemsLayout";
import {Link} from "expo-router";


export default function Layout() {

    return <ItemsLayout />
}