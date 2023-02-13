export const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue', isDisabled: true },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'forest', label: 'Forest' },
    { value: 'slate', label: 'Slate' },
    { value: 'silver', label: 'Silver' },
];

const otherColourOptions = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
    { value: 'five', label: 'Five' },
];

export const GroupedColorOptions = [
    { options: otherColourOptions, label: 'One' },
    { options: otherColourOptions, label: 'Two' },
    { options: otherColourOptions, label: 'Three' },
    { options: otherColourOptions, label: 'Four' },
    { options: otherColourOptions, label: 'Five' },
    { options: otherColourOptions, label: 'Six' },
];

const sleep = (ms: number) =>
    new Promise((resolve: any) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

export const loadOptions = async (searchString: string, prevItems: any) => {
    await sleep(1000);
    if (searchString) {
        const filteredItems = colourOptions.filter((item) => item.label.includes(searchString));
        return {
            options: [...filteredItems],
            hasMore: false,
        };
    }

    const otherItems = {
        options: [...otherColourOptions],
        hasMore: false,
    };
    return otherItems;
};
