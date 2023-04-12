import CustomSelectTwoNative from "../src/components/CustomSelectTwo";
import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useQuery} from "@tanstack/react-query";
import {Test} from "../src/components/Test";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";


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


export default function SelectTwo() {

    const isMultiple = true
    const [search, setSearch] = useState("");

    const { data, isLoading} = useQuery<{ results: People[]}>({
        queryKey: ["swapi", search],
        queryFn: () => fetch(`https://swapi.dev/api/people/?search=${search}`).then(r => r.json())
    })
    const [selectedItems, setSelectedItems] = useState([]);
    const onChange = (items: People[]) => {
        console.log(items);
        setSelectedItems(items);
    }

    const clearValues = () => {
        setSelectedItems(isMultiple ? [] : undefined)
    }

    return <BottomSheetModalProvider>
        <View style={s.wrapper}>
        <View>
            <Text>Description here</Text>

            <Text>Selected Items:</Text>
            <Text>{JSON.stringify({items: selectedItems.map(i => i.name)}, null, 2)}</Text>
        </View>
        <Text>There is more content above</Text>
        <Text>There is more content above</Text>
        <Text>There is more content above</Text>
        <Text>There is more content above</Text>
        <Text>There is more content above</Text>
        <Text>There is more content above</Text>
        <Text>There is more content above</Text>
        <Text>There is more content above</Text>
        <Text>There is more content above</Text>

        <CustomSelectTwoNative<People>
            isMultiple={isMultiple}
            clearValues={clearValues}
            data={data?.results || []}
            onChange={onChange}
            selectedItems={selectedItems}
            searchValue={search}
            onSearchTextChange={v => setSearch(v)}
            isDataLoading={isLoading}
            getOptionLabel={item => item.name}
            getOptionValue={item => item.url}
            helpText="Selecciona clientes"
            onInputChange={console.log}
        />

        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>
        <Text>There is more content below</Text>



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

// todo
/**
 * Diferencia entre onInputChange y onSearchtextChange
 */