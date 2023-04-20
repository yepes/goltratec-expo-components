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
     * Tanto para web como para móvil
     * @param option
     */
    getOptionLabel: (option: T) => string;

    /**
     * Callback para definir el value que va a tener cada option
     * Tanto para web como para móvil
     * @param option
     */
    getOptionValue: (option: T) => string;

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
    selectedItems: T[];

    /**
     * Si los elementos se están cargando
     * Tanto para web como para móvil
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
}