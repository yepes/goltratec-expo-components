import CustomSelectTwo from "../src/components/CustomSelectTwo";
import {View, Text, Pressable, ScrollView, Button, Platform} from "react-native";
import MultiSelect from "react-native-multiple-select";
import {useCallback, useMemo, useRef, useState} from "react";
import mockData from "../src/data";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";

const items = mockData;
export default function App() {
    const [selectedItems, setSelectedItems] = useState([]);
    const ref = useRef()

    const onSelectedItemsChange = items => {
        setSelectedItems(items);
    }
    const handleRemoveItem = removedItem => {
        console.log(removedItem)
        const filtered = selectedItems.filter(oldItem => oldItem !== removedItem.id)
        console.log({filtered, selectedItems})

        setSelectedItems(filtered)
    }

    const sheetRef = useRef(null);
    const snapPoints = useMemo(() => ["95%"], []);
    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);
        if (index === 0 && selectedItems.length === 0) {
            console.log({length: selectedItems.length})
            ref.current._toggleSelector()
        }
    }, [selectedItems]);

    const handlePresentModalPress = useCallback(() => {
        // ref.current._toggleSelector()
        sheetRef.current?.present();
    }, []);

    return <GestureHandlerRootView style={{flex: 1}}>

        <Text>{JSON.stringify(Platform.OS, null, 2)}</Text>

        <Button title="Show Sheet" onPress={() => handlePresentModalPress()}/>
        <Button title="Focus" onPress={() => console.log(ref.current._toggleSelector())}/>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Pressable onPress={handlePresentModalPress}>
            <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Cliente</Text>
        </Pressable>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Campo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Antepenultimo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Penultimo</Text>
        <Text style={{marginBottom: 20, padding: 6, borderWidth: 1, borderColor: 'gray'}}>Ultimo</Text>

        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={sheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
                keyboardBehavior={Platform.OS === 'ios' ? "interactive" : 'fullScreen'}
                keyboardBlurBehavior="restore"
            >
                <Text>{JSON.stringify(selectedItems.length, null, 2)}</Text>
                <MultiSelect
                    hideTags={false}
                    items={items}
                    uniqueKey="id"
                    ref={ref}
                    // fixedHeight={true}
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="Selecciona clientes"
                    searchInputPlaceholderText="Buscar cliente..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    selectedText="Seleccionados"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{color: 'red'}}
                    submitButtonColor="#CCC"
                    submitButtonText="Enviar"
                    single={false}
                    // hideDropdown={true}
                    canAddItems={true}
                />
            </BottomSheetModal>
        </BottomSheetModalProvider>


    </GestureHandlerRootView>
}

const SelectedItems = ({currentItems, handleRemoveItem}) => {
    const parsedItems = currentItems.map(itemId => items.find(i => i.id === itemId))

    return <View>
        {parsedItems.map(item => <SelectedItem key={item.id} item={item} onPress={handleRemoveItem}/>)}
    </View>
}

const SelectedItem = ({item, onPress}) => {
    return <View>
        <Pressable onPress={() => onPress(item)}>
            <Text>{item.name} - {item.id}</Text>
        </Pressable>
    </View>
}

