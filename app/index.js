import CustomSelectTwo from "../src/components/CustomSelectTwo";
import React, {useMemo, useState} from "react";
import mockData from "../src/data";
import {View, StyleSheet, Text, ScrollView} from "react-native";
import {useQuery} from "@tanstack/react-query";

export default function Index() {

    const isMultiple = true
    const [search, setSearch] = useState("");
    // const data = useMemo(() => mockData.filter(item => {
    //     return item.name.toLowerCase().includes(search.toLowerCase())
    // }), [search]);

    const { data, isLoading} = useQuery({
        queryKey: ["swapi", search],
        queryFn: () => fetch(`https://swapi.dev/api/people/?search=${search}`).then(r => r.json())
    })
    const [selectedItems, setSelectedItems] = useState([]);
    const onChange = (items) => {
        console.log('onChange');
        console.log(items);
        setSelectedItems(items);
    }

    const clearValues = () => {
        setSelectedItems([])
    }

    return <View style={s.wrapper}>
        <View>
            <Text>Parent View</Text>
        </View>
        <CustomSelectTwo
            isMultiple={isMultiple}
            clearValues={clearValues}
            data={data ? data.results : []}
            onChange={onChange}
            selectedItems={selectedItems}
            searchValue={search}
            onSearchTextChange={v => setSearch(v)}
            isDataLoading={isLoading}
        />
        {/*<Text>{JSON.stringify(data, null, 2)}</Text>*/}
    </View>
}

const s = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderColor: "red",
        flex: 1
    }
})