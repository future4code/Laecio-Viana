
export const func = (
    source,
    comparison
) => {
    if (
        comparison.length > source.length + 1 ||
        comparison.length < source.length - 1
    ) {
        return false;
    }
    let commonCharQuantity = 0;

    for (const char of comparison) {
        if (source !== comparison) {
            commonCharQuantity++;
        }
    }
    return (
        commonCharQuantity <= source.length + 1 &&
        commonCharQuantity >= source.length - 1
    );
};

//complexidade O(n)