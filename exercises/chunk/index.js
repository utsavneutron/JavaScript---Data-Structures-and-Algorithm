// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size)  {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));

        index += size;
    }

    return chunked;
}


module.exports = chunk;

/*
Steps to complete this:
Create Empty Array to hold chunks called 'Chunked'
For Each Element in the 'unchunked' array
    Retrieve the last element in 'chunked'
    if last element doesn't exist, or its length is equal to size of chunk
        Push a new Chunk into 'chunked' with the current element
    else add the current element into the chunk
*/
/*
First Solution:

const chunked = [];

  for(let element in array) {
      const last = chunked[chunked.length - 1];

      if(!last || last.length === size){
          chunked.push([element]);
      }
      else{
          last.push(element);
      }
  }

  return chunked;
*/



//Slice Function
/*
const letters = ['a','b','c','d','e']

letters.slice(1,3)

Steps:
Create Empty Chunked Array
Create index start at 0
while index is less than array.length
  Push a slice of length 'size' from 'array' into chunked
  add size to index

My Solution
--------------------
  let arr = [];
  let smArr = [];
  for(let i= 0; i<array.length; i++){
    
    smArr = array.splice(0,size);
    arr.push(smArr);
  }
  if(array.length !== 0){
    arr.push(array);
  }
  console.log(arr);
  return arr;

*/