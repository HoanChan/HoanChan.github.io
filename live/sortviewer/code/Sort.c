#include<stdio.h>

void swapValue(int arr[], int i, int j)
{
    int t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

void bubbleSort(int arr[], int arrLength)
{
    int indexOfLastUnsortedElement = arrLength;
    int swapped = 0;
    while (swapped == 0)
    {
        swapped = 1;
        for (int i = 0; i < indexOfLastUnsortedElement - 1; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                swapValue(arr, i, i + 1);
                swapped = 0;
            }
        }
        indexOfLastUnsortedElement--;
    }
}

void selectionSort(int arr[], int arrLength)
{
    for (int i = 0; i < arrLength - 1; i++)
    {
        int minIdx = i;
        for (int j = i + 1; j < arrLength; j++)
            if (arr[j] < arr[minIdx])
                minIdx = j;
        if (i < minIdx)
            swapValue(arr, i, minIdx);
    }
}

void insertionSort(int arr[], int arrLength)
{
    int j = 0;
    for (int i = 1; i < arrLength; ++i)
    {
        int tempValue = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > tempValue; --j)
        {
            swapValue(arr, j, j + 1);
        }
        arr[j + 1] = tempValue;
    }
}

void quickSort(int arr[], int left, int right)
{
    int pivotidx = (left + right) / 2;
    int i = left;
    int j = right;
    int pivot = arr[pivotidx];
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

void mergeSort(int arr[], int left, int right) 
{
    if (right > left) 
    {
        int mid = left + ((right - left) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        int subLeft[100];
        int subRight[100];
        for (int i = left; i <= mid; i++) subLeft[i - left] = arr[i];
        for (int i = mid + 1; i <= right; i++) subRight[i - mid - 1] = arr[i];
        int leftIndex = 0;
        int rightIndex = 0;
        for (int i = left; i <= right; i++)
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

int main()
{
	int arr[]={5,4,9,6,8,3,2,0,7,1};
	int len = sizeof (arr) / sizeof (arr[0]);
	//bubbleSort(arr, len);
	//selectionSort(arr, len);
	//insertionSort(arr, len);
	//quickSort(arr, 0, len - 1);
	mergeSort(arr, 0, len - 1);
    for (int i = 0; i < len; i++) printf("%d ", arr[i]);
    return 0;
}

