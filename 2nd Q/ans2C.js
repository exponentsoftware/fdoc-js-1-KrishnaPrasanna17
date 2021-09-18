function reverseArray(arr){
         let reversearr = [];
         for (let i = arr.length - 1; i >= 0; i--) {
            reversearr.push(arr[i]);
        }

return reversearr;
}
console.log(reverseArray(["A", "B", "C"]));

