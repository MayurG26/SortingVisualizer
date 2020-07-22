export function getMergeSortAnimations(array){
	const animations = [];
	if(array.length <= 1) return array;
	const auxArray = array.slice();
	mergeSort( array , 0 , array.length - 1 , auxArray , animations);
	return animations;
}



function mergeSort(mainArray , startIdx ,endIdx , auxArray,animations,) 
{
	if (startIdx === endIdx) return;
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergeSort(auxArray , startIdx, middleIdx , mainArray ,animations);
	mergeSort(auxArray , middleIdx+1, endIdx , mainArray ,animations);
	doMerge(mainArray, startIdx , middleIdx ,endIdx,auxArray,animations);
	
}



function doMerge( mainArray , startIdx,middleIdx,endIdx,auxArray,animations)
{
	let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxArray[i] <= auxArray[j]) {
        animations.push([k, auxArray[i],k]);
        mainArray[k++] = auxArray[i++];
    } else {
        animations.push([k, auxArray[j],k]);
        mainArray[k++] = auxArray[j++];
    }
    }
    while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxArray[i]]);
    mainArray[k++] = auxArray[i++];
    }
    while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxArray[j]]);
    mainArray[k++] = auxArray[j++];
    }
}
/*
export const mergeSort = array =>{
	if (array.length === 1) return array;
	const middleIdx = Math.floor(array.length / 2);
	const firstHalf = mergeSort(array.slice(0,middleIdx));
	const secondHalf = mergeSort(array.slice(middleIdx));
	const sortedArray = [];
	let i=0,j=0;
	while (i < firstHalf.length && j < secondHalf.length){
		if(firstHalf[i] < secondHalf[j]){
			sortedArray.push(firstHalf[i++]);
		} else {
			sortedArray.push(secondHalf[j++]);
		}
	}
	while(i< firstHalf.length) sortedArray.push(firstHalf[i++]);
	while(j< secondHalf.length) sortedArray.push(secondHalf[j++]);
	return sortedArray;
};*/