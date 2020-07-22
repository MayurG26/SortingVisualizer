export function getSelectionSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    selectionSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}
function selectionSort(array , startIdx , endIdx , animations)
{

    for(let i=0;i< array.length;i++)
    {
    let min =i;
     for(let j=i+1;j<array.length;j++)
     {
      if(array[j]<array[min])
      {
       min=j;
	  }
	 }
     animations.push([i,min]);
     animations.push([i,min]);
     animations.push([i,array[min]]);
     animations.push([min,array[i]]);
     swap(array,i,min);
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