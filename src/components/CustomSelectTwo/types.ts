/**
 *
 */
export interface ICustomSelectTwoNative<T> {
    /**
     * Array con los valores a mostrar
     */
    data: T[];

    /**
     * Callback que devuelve una cadena que será la que se mostrará en pantalla por item
     * @param option
     */
    getOptionLabel: (option: T) => string;

    /**
     * Callback para definir el value que va a tener cada option
     * @param option
     */
    getOptionValue: (option: T) => string;

    /**
     * Callback que recibe todos los elementos seleccionados
     * @param items
     */
    onChange: (items: T[]) => void;

    /**
     * Array con los elementos seleccionados
     */
    selectedItems: T[];

    /**
     * Si los elementos se están cargando
     */
    isDataLoading: boolean;

    /**
     * Si es multiple
     */
    isMultiple: boolean;

    /**
     * Callback al que se va a llamar cuando el usuario pinche en limpiar valores
     * Sólo para móvil
     */
    clearValues: () => void;

    /**
     * Callback al que se llama cuando el usuario introduce algo en el campo de búsqueda
     * Sólo para móvil
     * @param value
     */
    onInputChange: (value: string) => void;

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
     * Sólo para móvil
     * @param value
     */
    onSearchTextChange: (value: string) => void;
}