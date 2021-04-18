export const replaceMatrixValue = (
    matrix,
    rowIndex,
    columnIndex,
    value
) => {
    if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ) {
        throw new Error("Fora do intervalo da matriz");
    }

    matrix[rowIndex][columnIndex] = value;
};

//complexidade O(1)