export function getHeapSortAnimations(array)
{
	
	const animations = [];
	if(array.length <= 1) return array;
	const auxArray = array.slice();
	heapSort( array , 0 , array.length - 1 , auxArray , animations);
	const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxArray));
    array = auxArray;
    console.log(animations);
    return [animations, array];
}
function heapSort(array , startIdx , endIdx , auxArray , animations)
{
	let n=array.length;
	for(let i = Math.floor(n / 2)-1; i>=0; i-- )
	{
		heapify(auxArray, n , i , animations);
	}
	for(let i = n-1; i>0 ; i--)
	{
		swap(auxArray, 0,i);
		animations.push([0,i]);
		animations.push([0,i]);
		animations.push([i , auxArray[0]]);
		animations.push([0 , auxArray[i]]);
		heapify(auxArray , i ,0,animations);
	}
}


function heapify(array , n , i , animations)
{
	let largest = i;
	let l = 2*i+1;
	let r = 2*i+2;
	//animations.push([l,largest]);
	//animations.push([l,largest]);
	if( l < n && array[l]>array[largest])
	{
		//animations.push([l,largest]);
		largest = l;
	}
	//animations.push([r,largest]);
	//animations.push([r,largest]);
	if( r < n && array[r]>array[largest])
	{
		//animations.push([r,largest]);
		largest = r;
	}
	if( largest !== i)
	{
		//animations.push([i , array[largest]]);
		//animations.push([largest , array[i]]);
		swap(array,i,largest);
		heapify(array ,n , largest);
	}
	else
	{
		//animations.push([-1 , -1]);
		//animations.push([-1 , -1]);
	}
}

function swap(auxArray,firstIndex, secondIndex) {
    let temp = auxArray[firstIndex];
    auxArray[firstIndex] = auxArray[secondIndex];
    auxArray[secondIndex] = temp;
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