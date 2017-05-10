type arrayType = array[1..100] of integer;
var myArr: arrayType;
    len, i: byte;

Procedure swapValue(Var arr: arrayType; i, j: byte);
var t: integer;
Begin
    t:= arr[i];
    arr[i]:= arr[j];
    arr[j]:= t;
End;

Procedure bubbleSort(Var arr: arrayType; arrLength: byte);
var lastUnsort, i: byte;
    swapped: boolean;
Begin
    lastUnsort:= arrLength;
    swapped:= true;
    while swapped do
    Begin
        swapped:= false;
        for i:= 1 to lastUnsort - 1 do
            if arr[i] > arr[i + 1] then
            Begin
                swapValue(arr, i, i + 1);
                swapped:= true;
            End;
        lastUnsort:= lastUnsort - 1;
    End;
End;

Procedure selectionSort(Var arr: arrayType; arrLength: byte);
var i, j, minIdx: byte;
Begin
    for i:= 1 to arrLength - 1 do
    Begin
        minIdx:= i;
        for j:= i + 1 to arrLength do
            if arr[j] < arr[minIdx] then minIdx:= j;
        if i < minIdx then swapValue(arr, i, minIdx);
    End;
End;

Procedure insertionSort(Var arr: arrayType; arrLength: byte);
var i, j: byte;
    tempValue: integer;
Begin
    j:= 0;
    for i:= 2 to arrLength do
    Begin
        tempValue:= arr[i];
        for j:= i - 1 downto 1 do
            if arr[j] > tempValue then
                swapValue(arr, j, j + 1)
            else break;
        arr[j + 1]:= tempValue;
    End;
End;

Procedure quickSort (Var arr: arrayType; left, right: byte);
var pivotidx, i, j: byte;
    pivot: integer;
Begin
    pivotidx:= (left + right) div 2;
    i:= left;
    j:= right;
    pivot:= arr[pivotidx];
    //partition
    while i <= j do
    Begin
        while arr[i] < pivot do i:= i + 1;
        while arr[j] > pivot do j:= j - 1;
        if i <= j then
        Begin
            if (arr[i] > arr[j]) and (i < j) then swapValue(arr, i, j);
            i:= i + 1;
            j:= j - 1;
        End;
    End;
    // recursion
    if left < j then quickSort(arr, left, j);
    if i < right then quickSort(arr, i, right);
End;

Procedure mergeSort (Var arr: arrayType; left, right: byte);
Var mid, i, leftIndex, rightIndex : byte;
    subLeft, subRight : arrayType;
Begin
    If right > left Then
    Begin         
        mid:= (left + right) Div 2;
        mergeSort (arr, left, mid);
        mergeSort (arr, mid + 1, right);
        For i:= left to mid Do subLeft[i - left + 1]:= arr[i];
        For i:= mid + 1 To right Do subRight[i - mid]:= arr[i];
        leftIndex := 1;
        rightIndex := 1;
        for i:= left to right do
            if (left + leftIndex - 1 <= mid) and ((mid + rightIndex > right) 
                or (subLeft[leftIndex] < subRight[rightIndex])) then
            Begin
                arr[i]:= subLeft[leftIndex];
                leftIndex:= leftIndex + 1;
            End else Begin
                arr[i]:= subRight[rightIndex];
                rightIndex:= rightIndex + 1;
            End;
    End;
End;

Begin
    Write('Nhap so luong phan tu: '); readln(len);
    for i:= 1 to len do
    Begin
        Write('[', i, '] = '); readln(myArr[i]);
    End;
    Writeln('Mang da xep: ');
    bubbleSort(myArr, len);
    for i:=1 to len do Write(myArr[i], ' '); Writeln;
    selectionSort(myArr, len);
    for i:=1 to len do Write(myArr[i], ' '); Writeln;
    insertionSort(myArr, len);
    for i:=1 to len do Write(myArr[i], ' '); Writeln;
    quickSort(myArr,1, len);
    for i:=1 to len do Write(myArr[i], ' '); Writeln;
    mergeSort(myArr, 1, len);
    for i:=1 to len do Write(myArr[i], ' '); Writeln;
End.