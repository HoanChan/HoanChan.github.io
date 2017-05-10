Private Sub swapValue(ByVal arr As List(Of Integer), ByVal i As Integer, ByVal j As Integer)
    Dim t = arr(i)
    arr(i) = arr(j)
    arr(j) = t
End Sub

Private Sub bubbleSort(ByVal arr As List(Of Integer))
    Dim indexOfLastUnsortedElement = arr.Count
    Dim swapped = True
    Do While swapped
        swapped = False
        For i = 0 To indexOfLastUnsortedElement - 2
            If arr(i) > arr(i + 1) Then
                swapValue(arr, i, i + 1)
                swapped = True
            End If
        Next i
        indexOfLastUnsortedElement -= 1
    Loop
End Sub

Private Sub selectionSort(ByVal arr As List(Of Integer))
    For i = 0 To arr.Count - 2
        Dim minIdx = i
        For j = i + 1 To arr.Count - 1
            If arr(j) < arr(minIdx) Then
                minIdx = j
            End If
        Next j
        If i < minIdx Then
            swapValue(arr, i, minIdx)
        End If
    Next i
End Sub

Private Sub insertionSort(ByVal arr As List(Of Integer))
    Dim j = 0
    For i = 1 To arr.Count - 1
        Dim tempValue = arr(i)
        j = i - 1
        Do While j >= 0 AndAlso arr(j) > tempValue
            swapValue(arr, j, j + 1)
            j -= 1
        Loop
        arr(j + 1) = tempValue
    Next i
End Sub

Private Sub quickSort(ByVal arr As List(Of Integer), ByVal left As Integer, ByVal right As Integer)
    Dim pivotidx As Integer = (left + right) / 2
    Dim i = left
    Dim j = right
    Dim pivot = arr(pivotidx)
    Do While i <= j
        Do While arr(i) < pivot
            i += 1
        Loop
        Do While arr(j) > pivot
            j -= 1
        Loop
        If i <= j Then
            If arr(i) > arr(j) AndAlso i < j Then
                swapValue(arr, i, j)
            End If
            i += 1
            j -= 1
        End If
    Loop
    If left < j Then
        quickSort(arr, left, j)
    End If
    If i < right Then
        quickSort(arr, i, right)
    End If
End Sub

Private Sub mergeSort(ByVal arr As List(Of Integer), ByVal left As Integer, ByVal right As Integer)
    If right > left Then
        Dim mid As Integer = left + ((right - left) / 2)
        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)
        Dim subLeft = New List(Of Integer)()
        Dim subRight = New List(Of Integer)()
        For i = left To mid
            subLeft.Add(arr(i))
        Next i
        For i = mid + 1 To right
            subRight.Add(arr(i))
        Next i
        Dim leftIndex = 0
        Dim rightIndex = 0
        For i = left To right
            If left + leftIndex <= mid AndAlso (mid + 1 + rightIndex > right OrElse subLeft(leftIndex) < subRight(rightIndex)) Then
                arr(i) = subLeft(leftIndex)
                leftIndex += 1
            Else
                arr(i) = subRight(rightIndex)
                rightIndex += 1
            End If
        Next i
    End If
End Sub

Private arr = New List(Of Integer)(){6, 5, 3, 1, 5, 7, 2}
bubbleSort(arr)
Console.WriteLine(String.Join(", ", arr))
arr = New List(Of Integer)(New Integer() {6, 5, 3, 1, 5, 7, 2})
selectionSort(arr)
Console.WriteLine(String.Join(", ", arr))
arr = New List(Of Integer)(New Integer() {6, 5, 3, 1, 5, 7, 2})
insertionSort(arr)
Console.WriteLine(String.Join(", ", arr))
arr = New List(Of Integer)(New Integer() {6, 5, 3, 1, 5, 7, 2})
quickSort(arr, 0, arr.Count - 1)
Console.WriteLine(String.Join(", ", arr))
arr = New List(Of Integer)(New Integer() {6, 5, 3, 1, 5, 7, 2})
mergeSort(arr, 0, arr.Count - 1)
Console.WriteLine(String.Join(", ", arr))