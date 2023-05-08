//let list=[1,2,3,4,5,6,7,8,9,10];
//Use the map() function with arrow notation => to multiply each number by 10 and return the result.


let list=[1,2,3,4,5,6,7,8,9,10];
newlist = list.map(
    (element,index,list) => {
            return{ list : element*10}

});

console.log(newlist)