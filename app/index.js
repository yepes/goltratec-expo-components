import CustomSelectTwo from "../src/components/CustomSelectTwo";
import React, {useMemo, useState} from "react";
import mockData from "../src/data";
import {View, StyleSheet, Text} from "react-native";

export default function Index() {

    const isMultiple = true
    const [search, setSearch] = useState("");
    const data = useMemo(() => mockData.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    }), [search]);
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
            <Text>{JSON.stringify({selectedItems}, null, 2)}</Text><Text>{JSON.stringify(data, null, 2)}</Text>
        </View>
        <CustomSelectTwo
            isMultiple={isMultiple}
            clearValues={clearValues}
            data={data}
            onChange={onChange}
            selectedItems={selectedItems}
            searchValue={search}
            onSearchTextChange={v => setSearch(v)}
        />
    </View>
}

const s = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderColor: "red",
        flex: 1
    }
})