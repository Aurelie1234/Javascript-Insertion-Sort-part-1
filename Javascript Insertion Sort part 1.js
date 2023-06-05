function insertionSort1(n, arr) {
    // Write your code here
    
let stored = arr[n-1];
  
for (let i = n-1; i>= 0; i--) {
        if(arr[i-1] > stored) {
            arr[i] = arr[i-1]
            console.log(...arr)
        }
        else {
            arr[i] = stored
            console.log(...arr)
            break
        }
    }
    }
