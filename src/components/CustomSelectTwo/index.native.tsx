import {ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View, Platform} from "react-native";
import {
    BottomSheetBackdropProps,
    BottomSheetFlatList,
    BottomSheetModal,
    BottomSheetTextInput
} from "@gorhom/bottom-sheet";
import React, {useCallback, useMemo, useRef} from "react";
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";
import {NativeViewGestureHandler} from "react-native-gesture-handler";
import {BaseOption, ICustomSelectTwoNative} from "./types";
import NativeSelectedComponent from "./NativeSelectedComponent";


const EmptlyListComponent = () => <View><Text style={styles.emptyListText}>Sin resultados</Text></View>

const ItemSelected = ({item: {item}, onPress}) => <Pressable style={styles.selectedItem} onPress={onPress}>
    <Text style={styles.selectedItemText}>{item.label}</Text>
</Pressable>

const CustomBackdrop = ({animatedIndex, style}: BottomSheetBackdropProps) => {

    const containerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            animatedIndex.value,
            [-1, 0],
            [0, 0.9],
            Extrapolate.CLAMP
        ),

    }));

    // styles
    const containerStyle = useMemo(
        () => [
            style,
            {
                backgroundColor: "#fff",
            },
            containerAnimatedStyle,
        ],
        [style, containerAnimatedStyle]
    );

    return <Animated.View style={containerStyle}/>;
};


const CustomSelectTwoNative = <T extends BaseOption>(props: ICustomSelectTwoNative<T>) => {


    const {
        isLoading,
        onChange,
        searchValue,
        onSearchTextChange,
        defaultValue,
        options,
        clearValues,
        isMulti,
        helpText,
        MobileSelectedComponent = NativeSelectedComponent
    } = props;

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

        // if (isMulti) {
        const isSelected = defaultValue.some(i => i.value === item.value);
        console.log('selected items');
        console.log(defaultValue);
        console.log(item);
        let res = [];
        if (isSelected) {
            res = defaultValue.filter(i => JSON.stringify(i) !== JSON.stringify(item))
        } else {
            res = [...defaultValue, item]
        }
        onChange(res);
        // } else
        //     onChange(item);
    }

    const renderItem = useCallback(
        (v) => {

            const {item, index} = v
            // const isSelected = isMulti ? defaultValue.includes(item) : JSON.stringify(defaultValue) === JSON.stringify(item)
            const isSelected = defaultValue.some(i => i.value === item.value)
            return <Pressable style={styles.itemContainer} key={index} onPress={() => {
                onItemPress(item)
            }}>

                <View>
                    <Text style={styles.title}>{item.label}</Text>
                </View>

                <MobileSelectedComponent isSelected={isSelected} item={item} />
            </Pressable>
        }, [defaultValue]
    );

    const onSelectedItemPress = (item) => {
        onItemPress(item.item);
    }

    return (
        <NativeViewGestureHandler disallowInterruption={true}>

            <View>
                <Pressable onPress={handlePresentModalPress} style={styles.mainPresstable}>
                    <Text numberOfLines={1} ellipsizeMode="tail">
                        {defaultValue.map(i => i.label).join(", ")}
                    </Text>
                </Pressable>

                <BottomSheetModal
                    ref={sheetRef}
                    snapPoints={snapPoints}
                    onChange={handleSheetChange}
                    keyboardBehavior={Platform.OS === 'ios' ? "interactive" : null}
                    keyboardBlurBehavior="restore"
                    backdropComponent={(backgdropProps) => <CustomBackdrop {...backgdropProps}  />}
                    style={styles.modal}
                >

                    <View style={styles.modalHeader}>
                        <Text>{helpText}</Text>
                        {isMulti && defaultValue.length > 0 &&
                            <Pressable style={styles.modalHeaderButton} onPress={clearValues}>
                                <Text>Limpiar</Text>
                            </Pressable>}
                    </View>

                    {isMulti && <>
                        <FlatList
                            horizontal={true}
                            data={defaultValue}
                            style={styles.selectedItemsWrapper}
                            contentContainerStyle={styles.selectedItemsWrapperContent}
                            ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                            renderItem={i =>
                                <ItemSelected
                                    item={i}
                                    onPress={() => onSelectedItemPress(i)}
                                />
                            }/>

                    </>
                    }
                    <BottomSheetTextInput
                        value={searchValue}
                        style={styles.textInput}
                        onChangeText={(text) => {
                            onSearchTextChange(text)
                        }}
                    />

                    {isLoading ? (
                        <ActivityIndicator/>
                    ) : (

                        <BottomSheetFlatList
                            data={options}
                            keyExtractor={(i) => i.value}
                            renderItem={renderItem}
                            keyboardDismissMode="interactive"
                            indicatorStyle="black"
                            contentContainerStyle={styles.contentContainer}
                            ListEmptyComponent={<EmptlyListComponent/>}
                        />
                    )}
                </BottomSheetModal>
            </View>
        </NativeViewGestureHandler>
    );
}

export default CustomSelectTwoNative;


const styles = StyleSheet.create({
    modal: {
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 8,
        marginHorizontal: 8
    },
    modalHeaderButton: {},
    emptyListText: {
        textAlign: "center",
        marginVertical: 8
    },
    mainPresstable: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 2,
        padding: 8
    },
    selectedItemsWrapper: {
        flexGrow: 0,
        paddingVertical: 8
    },
    selectedItemsWrapperContent: {
        paddingHorizontal: 8,
        marginBottom: 4,
    },
    selectedItem: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'rgba(0,0,0,.30)',
        borderRadius: 4,
        backgroundColor: "white",
    },
    selectedItemText: {
        fontSize: 16
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