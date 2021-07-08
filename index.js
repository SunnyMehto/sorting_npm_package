

// MEGRE SORT - START
function _mergeSort(array)
{
    //console.log('Called-->', array);
    if(array.length <= 1) return array;
    const middle = Math.floor(array.length/2);
    const left = array.slice(0,middle);
    const right = array.slice(middle);
    //console.log('BEFORE SORT - LEFT -->', left);
    //console.log('BEFORE SORT - RIGHT -->', right);
    return mergreTopDown(mergeSort(left),mergeSort(right))
}

function mergreTopDown(left,right)
{ 
    const array = [];
    
    while(left.length && right.length)
    {
        if(left[0] < right[0])
        {
            array.push(left.shift());
        }
        else{
            array.push(right.shift());
        }
    }
    //console.log('AFTER SORTING - LEFT -->', left);
    //console.log('AFTER SORTING - RIGHT -->', left);
    //console.log('Concatinated SORTED ARRAY -->',array.concat(left.slice()).concat(right.slice()));
    return array.concat(left.slice()).concat(right.slice());
}
// MEGRE SORT - END
// QUICK SORT - START
function _quickSort(array)
{
    //console.log('Called-->', array);
    if(array.length <= 1) return array;

    const pivot = array[array.length-1];
    const left = [];
    const right = [];
    for(const item of array.slice(0,array.length-1))
    {
        item < pivot ? left.push(item) : right.push(item);
    }
    
    if(left.length > 0 && right.length > 0)
    {
        return [...quickSort(left),pivot,...quickSort(right)]
    }
    else if(left.length > 0){
        return [...quickSort(left),pivot]
    }
    else{
        return [pivot,...quickSort(right)]
    }  
}
// QUICK SORT - END
// BUBBLE SORT - START
function _bubbleSort(array)
{
    let arrLen = array.length;
    for(var i=0; i < arrLen-1; i++)
    {
        for(var j=0; j < arrLen-i-1; j++)
        {
            if(array[j] > array[j+1])
            {
                let temp;
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            //console.log('step->',array);
        }
    }
    return array;
}
// BUBBLE SORT - END

// SELECTION SORT - START
function _selectionSort(array)
{
    let arrLen = array.length;
    for(var i=0; i < arrLen; i++)
    {
        let min = i;
        for(var j=i+1; j < arrLen; j++)
        {
            if(array[j] < array[min])
            {
                min = j;
            }
        }  
        if(min != i)
        {
            let temp;
            temp = array[min];
            array[min] = array[i];
            array[i] = temp;
        }
    }
    return array;
}
// SELECTION SORT - END

// INSERTION SORT - START
function _insertionSort(array)
{
    let postionToInsert;
    let valueToInsert;
    let arrLen = array.length;
    for(var i=1; i < arrLen; i++)
    {
        valueToInsert = array[i];
        postionToInsert = i;
        
        while(postionToInsert > 0 && array[postionToInsert-1] > valueToInsert)
        {
            array[postionToInsert] = array[postionToInsert-1];
            postionToInsert = postionToInsert-1;
        }
        array[postionToInsert] = valueToInsert;
    }
    return array;
}
// INSERTION SORT - END

// HEAP SORT - START
function _heapSort(array)
{
    let arrLen = array.length;
    for(var i=Math.floor(arrLen/2)-1 ; i >= 0; i--)
    {
        heapify(array,arrLen,i);
    }
    for (var i = arrLen - 1; i > 0; i--) {
        var temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        heapify(array, i, 0);
    }
    return array;
}

function heapify(array, arrLen, i)
{
    var largest = i; 
    var l = 2 * i + 1; 
    var r = 2 * i + 2;

    if (l < arrLen && array[l] > array[largest])
        largest = l;

    if (r < arrLen && array[r] > array[largest])
        largest = r;

    if (largest != i) {
        var temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        heapify(array, arrLen, largest);
    }
}

// HEAP SORT - END

module.exports = {
	mergeSort: _mergeSort,
	quickSort: _quickSort,
	bubbleSort: _bubbleSort,
    selectionSort:_selectionSort,
    insertionSort:_insertionSort,
    heapSort:_heapSort
};
