import {Button, Pressable, StyleSheet, Text, TextInput, View, Platform, FlatList} from "react-native";
import {
    BottomSheetFlatList,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetTextInput
} from "@gorhom/bottom-sheet";
import React, {useCallback, useMemo, useRef, useState} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";


export default function CustomSelectTwo({ onChange, searchValue, onSearchTextChange, selectedItems, data, clearValues, isMultiple }) {

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

    const onItemPress = (item) => {
        const isSelected = selectedItems.includes(item.id);
        let res = [];
        if (isSelected) {
            res = selectedItems.filter(i => i !== item.id)
        } else {
            res = [...selectedItems, item.id]
        }
        onChange(res);
    }

    const renderItem = useCallback(
        (v) => {

            const { item, index } = v
            const isSelected = selectedItems.includes((item.id))
            return <Pressable style={styles.itemContainer} key={index} onPress={() => {
                    onItemPress(item)
                }}>

                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>{item.id}</Text>
                </View>

                <View style={[styles.button, isSelected && styles.buttonSelected]}/>
            </Pressable>
        }, [selectedItems]
    );

    const onSelectedItemPress = (item) => {
        // fixme
        onItemPress({id: item.item});
    }

    return (
            <BottomSheetModalProvider>
                <View>
                    <Pressable onPress={handlePresentModalPress} style={styles.mainPresstable}>
                        <Text numberOfLines={1} ellipsizeMode="tail">{selectedItems.join(", ")}</Text>
                    </Pressable>

                    <Button title="Close" onPress={() => handleClosePress()}/>
                    <BottomSheetModal
                        ref={sheetRef}
                        snapPoints={snapPoints}
                        onChange={handleSheetChange}
                        keyboardBehavior={Platform.OS === 'ios' ? "interactive" : 'fullScreen'}
                        keyboardBlurBehavior="restore"
                    >

                        {isMultiple && <FlatList
                            horizontal={true}
                            data={selectedItems}
                            ListEmptyComponent={ListEmpty}
                            style={styles.selectedItemsWrapper}
                            ItemSeparatorComponent={() => <View style={{ width: 10, backgroundColor: "yellow"}} />}
                            renderItem={i =>
                                <ItemSelected
                                    item={i}
                                    onPress={() => onSelectedItemPress(i)}
                                />
                            } />
                        }

                        {selectedItems.length > 0 && <Button title="limpiar" onPress={clearValues} />}
                        <BottomSheetTextInput
                            value={searchValue}
                            style={styles.textInput}
                            onChangeText={(text) => {
                                onSearchTextChange(text)
                            }}
                        />
                        <BottomSheetFlatList
                            data={data}
                            keyExtractor={(i) => i.id}
                            renderItem={renderItem}
                            keyboardDismissMode="interactive"
                            indicatorStyle="black"
                            contentContainerStyle={styles.contentContainer}
                        >
                        </BottomSheetFlatList>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
    );
}

const ItemSelected = ({item, onPress}) => <Pressable style={styles.selectedItem} onPress={onPress}>
        <Text style={styles.selectedItemText}>{item.item}</Text>
    </Pressable>

const ListEmpty = () => <Text>Seleccione clientes</Text>

const styles = StyleSheet.create({
    mainPresstable: {
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 2,
        padding: 8
    },
    selectedItemsWrapper: {
        flexGrow: 0
    },
    selectedItem: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        padding:10,
        borderColor: 'rgba(0,0,0,.2)',
        backgroundColor: "white",
    },
    selectedItemText: {
        fontSize: 18
    },
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