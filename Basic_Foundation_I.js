// #1. Get 1 to 255 Array
function get_array() {
    var arr = [];
    for(var i=1; i<256; i++){
        arr.push(i);
    }
    return arr;
} 
console.log(get_array())
// #2 Get even from 1 to 1000
function get_even() {
    var sum = 0;
    var i=1; 
    while (i<=1000){
        if(i%2===0){    
            sum = sum+i;
        }
        i++;
    }
    return sum;
}
console.log(get_even())
// #3 Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function get_odd() {
    var sum = 0;
    var i=1
    while (i<=5000){
        if(i%2===1){
            sum = sum+i;
        }
    i++;
    }
    return sum; 
}
console.log(get_odd())
// #4 Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function iterate_arr() {
    arr = [100000,242,25252];
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(iterate_arr())
// #5 Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function find_max() {
    arr = [100000,242,2525200000]
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
return max;
}
console.log(find_max())
// #6 Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function find_avg(){
    arr = [100000,242,45678];
    var avg;
    var sum=0;
    arr.forEach(function(elem){
        sum += elem;
    });
    avg = sum/arr.length;
    return avg;
}
console.log(find_avg())
// #7 Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function odd_arr() {
    var arr = [];
    var i=1;
    while(i<50){
        if(i%2===1){
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(odd_arr())
// #8 Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greater_than(){
    arr = [100000,242,45678];
    Y=242;
    var count=0;
    arr.forEach(function(elem){
        if (elem>Y){
            count++;
        }
    });
    return count; 
}
console.log(greater_than())
// #9 Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function square_value(arr){
    arr = [1,2,4];
    var arr1 = arr.map(function(val){
        return val*val;
    });
    return arr1; 
}
console.log(square_value())
// #10 Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function noNeg(){
    arr = [-1,2,-4];
    var noneg = arr.map(function(elem){
        if (elem<0){
            elem = 0;
        }
        return elem;
    });
    return noneg; 
}
console.log(noNeg())
// #11 Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function max_min_avg(){
    arr = [-1,250,100,25];
    var arrnew=[];
    var sum = 0;
    arr.forEach(function(elem){
        sum += elem;
    });
    arrnew.push(Math.max.apply(null,arr));
    arrnew.push(Math.min.apply(null,arr));
    arrnew.push(sum/arr.length);
    return arrnew; 
}
console.log(max_min_avg())

// #12 Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(){
    arr = [-1,250,100,25];
    var arrnew = arr.slice();
    var temp = arrnew[0];
    arrnew[0] = arrnew[arrnew.length-1];
    arrnew[arrnew.length-1] = temp;
    return arrnew; 
}
console.log(swap())
// #13 Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function dojo(arr){
    arr = [-1,250,100,-25];
	arr = arr.map(function(elem){
		if (elem<0){
			return 'Dojo';
		} else {
			return elem;
		}
	});
	return arr;
}
console.log(dojo())