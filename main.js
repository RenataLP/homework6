//поиск семерок в массиве
function getSevenCol(arr)
{
	return arr.join(' ').split('7').length-1
}

console.log(getSevenCol([1, 7, 4, 77, 777]));

//выводит строку из членов массива 
function arrToStr (arr) {
	var arr1 = []
    	for (let i = 0; i < arr.length; i++) {
    		if (i <= (arr.length - 1) / 2) {
    			arr1.push(arr[i], arr[arr.length - i - 1])
    		}
	}
	return arr1.join('');
}

console.log(arrToStr(["a", "b", "c", "d"]));
