import {View, Text} from "react-native";
import Select from "react-select";
import React from "react";
import {ICustomSelectTwoNative} from './types'

const CustomSelectTwoNative = <T extends unknown>(props: ICustomSelectTwoNative<T>) => {

    const {
        isDataLoading,
        onChange,
        searchValue,
        onSearchTextChange,
        selectedItems,
        data,
        clearValues,
        isMultiple,
        getOptionValue,
        getOptionLabel,
        onInputChange
    } = props
    return <View>
        <Select
            isMulti={isMultiple}
            options={data}
            onChange={onChange}
            getOptionLabel={getOptionLabel}
            isLoading={isDataLoading}
            onInputChange={onSearchTextChange}
            getOptionValue={getOptionValue}
        />
    </View>
}

export default CustomSelectTwoNative
