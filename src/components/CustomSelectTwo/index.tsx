import {View} from "react-native";
import Select from "react-select";
import React from "react";
import {ICustomSelectTwoNative} from './types'

const CustomSelectTwoNative = <T extends unknown>(props: ICustomSelectTwoNative<T>) => {

    const {
        isDataLoading,
        onChange,
        onSearchTextChange,
        data,
        isMultiple,
        getOptionValue,
        getOptionLabel,
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
