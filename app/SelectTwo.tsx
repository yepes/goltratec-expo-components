import CustomSelectTwoNative from "../src/components/CustomSelectTwo";
import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useQuery} from "@tanstack/react-query";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";

import Select from "react-select";
import {parse} from "expo-linking";


interface People {
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    url: string;
};

 const CustomSampleSelectedComponent = ({ isSelected, item }: { isSelected: boolean, item: ParsedData}) => {
    return <View>
        <Text>{isSelected.toString()}</Text>
        <Text>{item.label}</Text>
    </View>
}

interface ParsedData {
    value: string;
    label: string;
    eye_color: string;

}

export default function SelectTwo() {

    const isMultiple = true
    const [search, setSearch] = useState("");

    const { data, isLoading} = useQuery<{ results: People[]}>({
        queryKey: ["swapi", search],
        queryFn: () => fetch(`https://swapi.dev/api/people/?search=${search}`).then(r => r.json())
    })

    const parsedData: ParsedData[] = data?.results.map(item => ({value: item.url, label: item.name, eye_color: item.eye_color})) || []

    // ponemos un elemento seleccionado a modo prueba
    const [selectedItems, setSelectedItems] = useState([{
        value: 'https://swapi.dev/api/people/1/', label: 'Luke Skywalker', eye_color: 'blue'}]);
    const onChange = (items: ParsedData[]) => {
        console.log('onChange triggered');
        console.log(items);
        setSelectedItems(items);
    }

    const clearValues = () => {
        setSelectedItems(isMultiple ? [] : undefined)
    }

    return <BottomSheetModalProvider>
        <View style={s.wrapper}>
        <View>

            <Text>Selected Items:</Text>
            <Text>{JSON.stringify(selectedItems, null, 2)}</Text>
        </View>

        <CustomSelectTwoNative<ParsedData>
            isMulti={isMultiple}
            clearValues={clearValues}
            options={parsedData}
            onChange={onChange}
            searchValue={search}
            onSearchTextChange={v => setSearch(v)}
            isLoading={isLoading}
            helpText="Selecciona clientes"
            defaultValue={selectedItems}
            // MobileSelectedComponent={CustomSampleSelectedComponent}
        />
    </View>
    </BottomSheetModalProvider>
}

const s = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderColor: "red",
        flex: 1
    }
})