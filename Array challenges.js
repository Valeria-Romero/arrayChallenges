/* ------------ First function ----------------------- */

function alwaysHungry(arr) {
        let count = 0;
        for(i=0; i<arr.length; i++){
            if(arr[i] === keyWord){
                console.log("Yummy");
                count = count +1;
            }
        }
        if (count === 0){
            console.log("I'm hungry");
        }
}

let count = 0;
let keyWord = "food";

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



/* ------------ Second function ----------------------- */

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0;i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]



/* ------------ Third function ----------------------- */

function betterThanAverage(arr) {
    // calculate the average
    var sum = 0;
    for(i=0; i<arr.length;i++){
        sum += arr[i];
    }
    let average = sum / arr.length;
    console.log(sum);
    console.log(average);

    // count how many values are greated than the average
    var count = 0
    for(i=0;i<arr.length; i++){
        if(arr[i]>average){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4 


/* ------------ Fourth function ----------------------- */

function reverse(arr) {
    // your code here
    let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    arr=newArr;
    return arr;
}
    
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

/* ------------ Fifth function ----------------------- */

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(i=0; i<n-2; i++){
        let sum = fibArr[i] + fibArr[i+1]
        fibArr.push(sum);
    }
    // your code here
    return fibArr;
}
    
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]