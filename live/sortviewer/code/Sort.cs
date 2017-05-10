void swapValue(List<int> arr, int i, int j)
{
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

void bubbleSort(List<int> arr)
{
    var indexOfLastUnsortedElement = arr.Count;
    var swapped = true;
    while (swapped)
    {
        swapped = false;
        for (var i = 0; i < indexOfLastUnsortedElement - 1; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                swapValue(arr, i, i + 1);
                swapped = true;
            }
        }
        indexOfLastUnsortedElement--;
    }
}

void selectionSort(List<int> arr)
{
    for (var i = 0; i < arr.Count - 1; i++)
    {
        var minIdx = i;
        for (var j = i + 1; j < arr.Count; j++)
            if (arr[j] < arr[minIdx])
                minIdx = j;
        if (i < minIdx)
            swapValue(arr, i, minIdx);
    }
}

void insertionSort(List<int> arr)
{
    var j = 0;
    for (var i = 1; i < arr.Count; ++i)
    {
        var tempValue = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > tempValue; --j)
        {
            swapValue(arr, j, j + 1);
        }
        arr[j + 1] = tempValue;
    }
}

void quickSort(List<int> arr, int left, int right)
{
    int pivotidx = (left + right) / 2;
    var i = left;
    var j = right;
    var pivot = arr[pivotidx];
    while (i <= j)
    {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;
        if (i <= j)
        {
            if (arr[i] > arr[j] && i < j)
                swapValue(arr, i, j);
            i++;
            j--;
        }
    }
    if (left < j) quickSort(arr, left, j);
    if (i < right) quickSort(arr, i, right);
}

void mergeSort(List<int> arr, int left, int right) 
{
    if (right > left) 
    {
        int mid = left + ((right - left) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        var subLeft = new List<int>();
        var subRight = new List<int>();
        for (var i = left; i <= mid; i++) subLeft.Add(arr[i]);
        for (var i = mid + 1; i <= right; i++) subRight.Add(arr[i]);
        var leftIndex = 0;
        var rightIndex = 0;
        for (var i = left; i <= right; i++)
            if (left + leftIndex <= mid && (mid + 1 + rightIndex > right || subLeft[leftIndex] < subRight[rightIndex])) 
            {
                arr[i] = subLeft[leftIndex];
                leftIndex++;
            } else {
                arr[i] = subRight[rightIndex];
                rightIndex++;
            }
    }
}

var arr = new List<int>(){6, 5, 3, 1, 5, 7, 2};
bubbleSort(arr);
Console.WriteLine(string.Join(", ", arr));
arr = new List<int>(){6, 5, 3, 1, 5, 7, 2};
selectionSort(arr);
Console.WriteLine(string.Join(", ", arr));
arr = new List<int>(){6, 5, 3, 1, 5, 7, 2};
insertionSort(arr);
Console.WriteLine(string.Join(", ", arr));
arr = new List<int>(){6, 5, 3, 1, 5, 7, 2};
quickSort(arr, 0, arr.Count - 1);
Console.WriteLine(string.Join(", ", arr));
arr = new List<int>(){6, 5, 3, 1, 5, 7, 2};
mergeSort(arr, 0, arr.Count - 1);
Console.WriteLine(string.Join(", ", arr));