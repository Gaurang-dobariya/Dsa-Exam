let arr = [5, 0, 1, 9, 3, 4, 7, 6]

let min

for (let i = 0; i < arr.length; i++){
    
    min = i

    for (let j = i; j < arr.length; j++) {
        
        if (arr[min] > arr[j]) {
            
            min= j

        }

    }

    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp

}
console.log(arr);