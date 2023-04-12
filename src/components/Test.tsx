import React from 'react';

interface ITestProps<T> {
    data: T[];
    onChange: (item: T) => void
}
export const Test = <T extends unknown>(props: ITestProps<T>) => {
    return null;
}