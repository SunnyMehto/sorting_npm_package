

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
                array[j+1] = temp
            }
            //console.log('step->',array);
        }
    }
    return array;
}
// BUBBLE SORT - END

module.exports = {
	mergeSort: _mergeSort,
	quickSort: _quickSort,
	bubbleSort: _bubbleSort
};
