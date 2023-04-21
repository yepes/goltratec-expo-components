import {View, Text} from "react-native";
import Select from "react-select";
import React from "react";
import {BaseOption, ICustomSelectTwoNative} from './types'

const CustomSelectTwoNative = <T extends BaseOption>(props: ICustomSelectTwoNative<T>) => {

    const {
        isLoading,
        onChange,
        onSearchTextChange,
        options,
        isMulti,
        defaultValue
    } = props
    return <View>
        <Select
            isMulti={isMulti}
            options={options}
            onChange={onChange}
            isLoading={isLoading}
            defaultValue={defaultValue}
            // onInputChange={onSearchTextChange}
        />
    </View>
}

export default CustomSelectTwoNative
