import React from "react";

export interface BaseOption {
    value: string;
    label: string;
}

/**
 *
 */
export interface ICustomSelectTwoNative<T extends BaseOption> {
    /**
     * Array con los valores a mostrar
     */
    options: T[];

    /**
     * Callback que se llama cada vez que se selecciona o deselecciona un elemento.
     * Recibe un array todos los elementos seleccionados
     * @param items
     */
    onChange: (items: T[]) => void;

    /**
     * Array con los elementos seleccionados
     * Tanto para web como para móvil
     */
    defaultValue: T[];

    /**
     * Si los elementos se están cargando
     * Tanto para web como para móvil
     */
    isLoading: boolean;

    /**
     * Si es multiple
     */
    isMulti: boolean;

    /**
     * Callback al que se va a llamar cuando el usuario pinche en limpiar valores
     * Sólo para móvil
     */
    clearValues: () => void;

    /**
     * Texto a modo de ayuda.
     * Sólo para móvil
     */
    helpText: string;

    /**
     * Valor de búsqueda inicial.
     * Sólo para móvil
     */
    searchValue: string;

    /**
     * Callback al que se llama cuando el usuario introduce algo en el campo de búsqueda
     * Tanto para web como para móvil
     * @param value
     */
    onSearchTextChange: (value: string) => void;


    MobileSelectedComponent?: React.FC<{isSelected: boolean, item: T}>
}