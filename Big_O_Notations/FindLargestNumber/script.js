function findLargest(array){
    let largest = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i]
        }
    }
    return largest;
}
let number = [100,1,3,4,6,10,20,7];
console.log(findLargest(number))