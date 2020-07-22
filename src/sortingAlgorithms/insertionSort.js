export function getInsertionSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    insertionSort(auxillaryArray, 0, auxillaryArray.length , animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function insertionSort(array, startIdx, n, animations)
{

    for (let i = 1; i < n; i++) 
    {  
        let key = array[i];  
        let j = i - 1;  
        animations.push(["comparision1", j, i]);
        animations.push(["comparision2", j, i]);
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && array[j] > key) 
        {  
            animations.push(["overwrite", j + 1, array[j]]);
            array[j + 1] = array[j];  
            j = j - 1; 
            if(j >= 0) {
                animations.push(["comparision1", j, i]);
                animations.push(["comparision2", j, i]);
            }
        }
        animations.push(["overwrite", j + 1, key]);
        array[j + 1] = key;  
    }  
}







function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
}