//Write an arrow function named sumEvens that accepts an array of numbers and returns the sum of the even numbers in the array.
//HINT: Use a for...of statement.



arr=[2,2,2,9,5]

let sum=0
function sumEvens(a){

    arr.forEach(
        (element,index, arr) => {
            if(element%2==0){
                sum=sum+element
                return sum
            }

    });
}

let sum1 = sumEvens(arr);
console.log(sum)