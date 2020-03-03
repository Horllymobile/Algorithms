function containDuplicate(array){
    for(let i = 0; i < array.length; i++){
        for(j = 0; j< array.length; j++){
            if(i != j){
                if(array[i] == array[j]){
                    return true;
                }
            }
        }
    }
    return false;
}


let numbers = [100,1,12,13,4,6,10,20,7];
console.log(containDuplicate(numbers));//false

let numbers = [100,1,1,12,13,4,6,10,20,7];
console.log(containDuplicate(numbers));//true

