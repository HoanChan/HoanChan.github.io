function swapValue(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function bubbleSort(arr) {
    var indexOfLastUnsortedElement = arr.length;
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < indexOfLastUnsortedElement - 1; i++)
            if (arr[i] > arr[i + 1]) {
                swapValue(arr, i, i + 1);
                swapped = true;
            }
        indexOfLastUnsortedElement--;
    }
}

function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var minIdx = i;
        for (var j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[minIdx]) minIdx = j;
        if (i < minIdx) swapValue(arr, i, minIdx)
    }
}

function insertionSort(arr) {
    for (var i = 1; i < arr.length; ++i) {
        var tempValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > tempValue; --j)
            swapValue(arr, j, j + 1);
        arr[j + 1] = tempValue;
    }
}

function quickSort(arr, left, right) {
    var pivotidx = ((left + right) / 2).toFixed();
    var i = left;
    var j = right;
    var pivot = arr[pivotidx];
    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;
        if (i <= j) {
            if (arr[i] > arr[j] && i < j)
                swapValue(arr, i, j);
            i++;
            j--;
        }
    }
    if (left < j) quickSort(arr, left, j);
    if (i < right) quickSort(arr, i, right);
    return arr;
}

function mergeSort(arr, left, right) {
    if (right > left) {
        var mid = left + Math.floor((right - left) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        var subLeft = [];
        var subRight = [];
        for (var i = left; i <= mid; i++) subLeft.push(arr[i]);
        for (var i = mid + 1; i <= right; i++) subRight.push(arr[i]);
        var leftIndex = 0;
        var rightIndex = 0;
        for (var i = left; i <= right; i++)
            if (left + leftIndex <= mid && (mid + 1 + rightIndex > right || subLeft[leftIndex] < subRight[rightIndex])) {
                arr[i] = subLeft[leftIndex];
                leftIndex++;
            } else {
                arr[i] = subRight[rightIndex];
                rightIndex++;
            }
    }
}

var arr = [6, 5, 3, 1, 5, 7, 2];
bubbleSort(arr);
console.log(arr);
arr = [6, 5, 3, 1, 5, 7, 2];
selectionSort(arr);
console.log(arr);
arr = [6, 5, 3, 1, 5, 7, 2];
insertionSort(arr);
console.log(arr);
arr = [6, 5, 3, 1, 5, 7, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
arr = [6, 5, 3, 1, 5, 7, 2];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);