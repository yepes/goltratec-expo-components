import {Button, Pressable, StyleSheet, Text, TextInput, View, Platform, FlatList} from "react-native";
import {
    BottomSheetFlatList,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetTextInput
} from "@gorhom/bottom-sheet";
import React, {useCallback, useMemo, useRef, useState} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import mockData from "../data";

export default function CustomSelectTwo() {

    const [search, setSearch] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);

    const data = useMemo(() => mockData.filter(item => {
        console.log({item, search})
        console.log(item.name.toLowerCase().includes(search.toLowerCase()))
        return item.name.toLowerCase().includes(search.toLowerCase())
    }), [search]);
    const sheetRef = useRef(null);

    const snapPoints = useMemo(() => ["80%"], []);


    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);

    }, []);
    const handlePresentModalPress = useCallback(() => {
        sheetRef.current?.present();
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    const renderItem = useCallback(
        (v) => {
            console.log(v);

            const { item, index } = v
            const isSelected = selectedItems.includes((item.id))
            return <View style={styles.itemContainer} key={index}>

                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>{item.id}</Text>
                </View>

                <Pressable onPress={() => {
                    if (isSelected) {
                        setSelectedItems(selectedItems.filter(i => i !== item.id))
                    } else {
                        setSelectedItems([...selectedItems, item.id])
                    }

                    console.log(item);
                    // Alert.alert(`Click on ${item.name}`, `Con el id ${item._id}`)
                }}>
                    <View style={[styles.button, isSelected && styles.buttonSelected]}/>
                </Pressable>
            </View>
        }, [selectedItems]
    );


    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <BottomSheetModalProvider>
                <View>
                    <Text>{JSON.stringify({selectedItems}, null, 2)}</Text>
                    <Button title="Open" onPress={handlePresentModalPress}/>
                    <Button title="Close" onPress={() => handleClosePress()}/>
                    <Text>{Platform.OS}</Text>
                    <BottomSheetModal
                        ref={sheetRef}
                        snapPoints={snapPoints}
                        onChange={handleSheetChange}
                        keyboardBehavior={Platform.OS === 'ios' ? "interactive" : 'fullScreen'}
                        keyboardBlurBehavior="restore"
                    >
                        <FlatList horizontal={true} data={selectedItems} renderItem={i => <Text>{JSON.stringify(i, null, 2)}</Text>} />
                        {selectedItems.length > 0 && <Button title="limpiar" onPress={() => setSelectedItems([])} />}
                        <Text>Selecciona un cliente</Text>
                        <BottomSheetTextInput value={search} style={styles.textInput} onChangeText={(text) => {
                            setSearch(text)
                        }}/>
                        <BottomSheetFlatList
                            data={data}
                            keyExtractor={(i) => i.id}
                            renderItem={renderItem}
                            keyboardDismissMode="interactive"
                            indicatorStyle="black"
                            contentContainerStyle={styles.contentContainer}
                            // focusHook={useFocusEffect}
                        >
                        </BottomSheetFlatList>
                    </BottomSheetModal>
                </View>

            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    textInput: {
        alignSelf: "stretch",
        marginHorizontal: 12,
        marginBottom: 12,
        padding: 12,
        borderRadius: 12,
        backgroundColor: "grey",
        color: "white",
        textAlign: "center",
    },
    itemContainer: {
        display: 'flex',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.15)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 4,
        marginBottom: 16
    },
    title: {
        fontSize: 18,
    },
    button: {
        backgroundColor: 'gray',
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    buttonSelected: {
        backgroundColor: 'red',
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.15)',
        marginBottom: 12
    },
    itemText: {
        fontSize: 16,
    },
    contentContainer: {
        paddingHorizontal: 16,
        overflow: 'visible',
    },
});