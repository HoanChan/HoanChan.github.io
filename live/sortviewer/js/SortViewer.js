// <reference path="TweenMax.js" />
// <reference path="jquery.js" />
//main class
(function($) {
    $(document).ready(function () {    
        setCode(1); // thiết lập mã nguồn mặc định là Bubble Sort

        var sortType = $('#slSortType');
        var boxPanel = $('#boxPanel');
        var btnCreateValue = $('#btnCreateValue');
        var btnSort = $('#btnSort');
        var slider = $("#progressSlider");
        var progress = $("#progress");
        var timeScaleSlider = $('#timeScaleSlider');
        var timeScale = $("#timeScale");
        var textPanel = $('#textPanel');
        var itemCount = $('#itemCount');

        var stepID = 0; // Dùng để đặt tên cho các step hỗ trợ cho tua qua lại

        var count = parseInt(itemCount.val());
        var margin = 10;
        var maxWidth = 75;
        var heightPerValue = 4;
        var width = Math.min((boxPanel.innerWidth() - count * margin) / count, maxWidth);

        var Boxs = []; 
        var value = [];
        var tl = new TimelineMax({onUpdate:updateSlider});

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        itemCount.spinner({
            min: 5,
            max: 40,
            step: 1,
            start: 16,
        });

        $("#play").click(function() {
            if(tl.paused()) {
                $('#play').removeClass("fa-play").addClass('fa-pause');
                tl.play();
            } else {
                $('#play').removeClass("fa-pause").addClass('fa-play');
                tl.pause();
            }
        });              
        $("#restart").click(function() { tl.restart(); });     
        
        $("#prev").click(function() { 
            tl.gotoAndStop(tl.currentLabel());
            tl.tweenTo(tl.getLabelBefore(tl.currentTime));
            updateSlider();
        });
        $("#next").click(function() { 
            tl.gotoAndStop(tl.currentLabel());
            tl.tweenTo(tl.getLabelAfter(tl.currentTime));
            updateSlider();
        });

        slider.slider({
            range: false,
            min: 0,
            max: 100,
            step:.1,
            slide: function ( event, ui ) {
                $('#play').removeClass("fa-pause").addClass('fa-play');
                tl.pause();
                //adjust the timeline's progress() based on slider value
                tl.progress(ui.value/100);
            }
        });
        timeScaleSlider.slider({
            value:1,
            range: false,
            min: 0.25,
            max: 5,
            step: 0.25,
            slide: function ( event, ui ) {
                tl.timeScale(ui.value);
                timeScale.html('x' + ui.value);
            },
            change: function() {
                // if(tl.paused()) tl.resume();
                // if (tl.progress() == 1) tl.restart();
                // if(tl.reversed() && tl.progress() === 0) tl.restart();
            }
        });    
                
        function updateSlider() {
            slider.slider("value", tl.progress() *100);
        }

        btnCreateValue.click(function(event) {
            count = parseInt(itemCount.val());
            width = Math.min((boxPanel.innerWidth() - count * margin) / count, maxWidth);
            boxPanel.html(""); textPanel.html("");
            Boxs = []; value = []; stepID = 0;
            var ctl = new TimelineLite();
            for (var i = 0; i < count; i++) {
                var val = getRandomInt(2, 50);
                var height = val * heightPerValue;
                var box = $('<div class="box" style="width: ' + width + 'px; height:' + height + 'px; left:'+(width+margin)*i+'px;"><span>'+val+'</span></div>').appendTo(boxPanel);
                Boxs.push(box); value.push(val);
                // các Box roi từ phía trên 150px xuống và hiện ra, hiệu ứng rơi là đàn hồi, rơi trong 2s
                // hiệu ứng của box phía sau bắt đầu khi còn 1,9s nữa là box trước rơi xong            
                ctl.from(box, 2, {y: -150, autoAlpha: 0,ease: Elastic.easeOut}, "-=1.9");
            }
            // Làm mới Timeline
            tl.clear();
            tl = new TimelineMax({onUpdate:updateSlider});
            showText('Bắt đầu!');
            slider.slider("value", 0);
            tl.timeScale(timeScaleSlider.slider("value"));
        });
    // Hiển thị mã nguồn các giải thuật sắp xếp {
        function setModal(element, title, content)
        {
            $(element).html(`
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">` + title + `</h4>
                    </div>
                    <div class="modal-body">
                        <pre><code>` + content + `</code></pre>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    </div>
                  </div>
                </div>`).find('pre code').each(function(i, block) {
                            hljs.highlightBlock(block);
                        });
        }

        function setJS(content){ setModal('#JS',"Mã nguồn JavaScript", content); }
        function setCSharp(content){ setModal('#CSharp',"Mã nguồn C#", content); }
        function setVB(content){ setModal('#VB',"Mã nguồn Visual Basic", content); }
        function setC(content){ setModal('#C',"Mã nguồn C / C++", content); }
        function setPascal(content){ setModal('#Pascal',"Mã nguồn Pascal", content); }
        function decode(content){ return content.replace(/~/g,"\n"); }
        function setCode(index){
            switch(index) {
                case 1: //createBubbleSortCode(); 
                    setJS(decode('function swapValue(arr, i, j) {~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~function bubbleSort(arr) {~    var indexOfLastUnsortedElement = arr.length;~    var swapped = true;~    while (swapped) {~        swapped = false;~        for (var i = 0; i < indexOfLastUnsortedElement - 1; i++)~            if (arr[i] > arr[i + 1]) {~                swapValue(arr, i, i + 1);~                swapped = true;~            }~        indexOfLastUnsortedElement--;~    }~}'));
                    setCSharp(decode('void swapValue(List<int> arr, int i, int j)~{~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void bubbleSort(List<int> arr)~{~    var indexOfLastUnsortedElement = arr.Count;~    var swapped = true;~    while (swapped)~    {~        swapped = false;~        for (var i = 0; i < indexOfLastUnsortedElement - 1; i++)~        {~            if (arr[i] > arr[i + 1])~            {~                swapValue(arr, i, i + 1);~                swapped = true;~            }~        }~        indexOfLastUnsortedElement--;~    }~}'));
                    setVB(decode('Sub swapValue(ByVal arr As List(Of Integer), ByVal i As Integer, ByVal j As Integer)~    Dim t = arr(i)~    arr(i) = arr(j)~    arr(j) = t~End Sub~Sub bubbleSort(ByVal arr As List(Of Integer))~    Dim indexOfLastUnsortedElement = arr.Count~    Dim swapped = True~    Do While swapped~        swapped = False~        For i = 0 To indexOfLastUnsortedElement - 2~            If arr(i) > arr(i + 1) Then~                swapValue(arr, i, i + 1)~                swapped = True~            End If~        Next i~        indexOfLastUnsortedElement -= 1~    Loop~End Sub'));
                    setC(decode('void swapValue(int arr[], int i, int j)~{~    int t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void bubbleSort(int arr[], int arrLength)~{~    int indexOfLastUnsortedElement = arrLength;~    int swapped = 0;~    while (swapped == 0)~    {~        swapped = 1;~        for (int i = 0; i < indexOfLastUnsortedElement - 1; i++)~        {~            if (arr[i] > arr[i + 1])~            {~                swapValue(arr, i, i + 1);~                swapped = 0;~            }~        }~        indexOfLastUnsortedElement--;~    }~}'));
                    setPascal(decode('Procedure swapValue(Var arr: arrayType; i, j: byte);~var t: integer;~Begin~    t:= arr[i];~    arr[i]:= arr[j];~    arr[j]:= t;~End;~Procedure bubbleSort(Var arr: arrayType; arrLength: byte);~var lastUnsort, i: byte;~    swapped: boolean;~Begin~    lastUnsort:= arrLength;~    swapped:= true;~    while swapped do~    Begin~        swapped:= false;~        for i:= 1 to lastUnsort - 1 do~            if arr[i] > arr[i + 1] then~            Begin~                swapValue(arr, i, i + 1);~                swapped:= true;~            End;~        lastUnsort:= lastUnsort - 1;~    End;~End;'));
                    break;
                case 2: //createSelectionSortCode(); 
                    setJS(decode('function swapValue(arr, i, j) {~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~function selectionSort(arr) {~    for (var i = 0; i < arr.length - 1; i++) {~        var minIdx = i;~        for (var j = i + 1; j < arr.length; j++)~            if (arr[j] < arr[minIdx]) minIdx = j;~        if (i < minIdx) swapValue(arr, i, minIdx)~    }~}'));
                    setCSharp(decode('void swapValue(List<int> arr, int i, int j)~{~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void selectionSort(List<int> arr)~{~    for (var i = 0; i < arr.Count - 1; i++)~    {~        var minIdx = i;~        for (var j = i + 1; j < arr.Count; j++)~            if (arr[j] < arr[minIdx])~                minIdx = j;~        if (i < minIdx)~            swapValue(arr, i, minIdx);~    }~}'));
                    setVB(decode('Sub swapValue(ByVal arr As List(Of Integer), ByVal i As Integer, ByVal j As Integer)~    Dim t = arr(i)~    arr(i) = arr(j)~    arr(j) = t~End Sub~Sub selectionSort(ByVal arr As List(Of Integer))~    For i = 0 To arr.Count - 2~        Dim minIdx = i~        For j = i + 1 To arr.Count - 1~            If arr(j) < arr(minIdx) Then~                minIdx = j~            End If~        Next j~        If i < minIdx Then~            swapValue(arr, i, minIdx)~        End If~    Next i~End Sub'));
                    setC(decode('void swapValue(int arr[], int i, int j)~{~    int t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void selectionSort(int arr[], int arrLength)~{~    for (int i = 0; i < arrLength - 1; i++)~    {~        int minIdx = i;~        for (int j = i + 1; j < arrLength; j++)~            if (arr[j] < arr[minIdx])~                minIdx = j;~        if (i < minIdx)~            swapValue(arr, i, minIdx);~    }~}'));
                    setPascal(decode('Procedure swapValue(Var arr: arrayType; i, j: byte);~var t: integer;~Begin~    t:= arr[i];~    arr[i]:= arr[j];~    arr[j]:= t;~End;~Procedure selectionSort(Var arr: arrayType; arrLength: byte);~var i, j, minIdx: byte;~Begin~    for i:= 1 to arrLength - 1 do~    Begin~        minIdx:= i;~        for j:= i + 1 to arrLength do~            if arr[j] < arr[minIdx] then minIdx:= j;~        if i < minIdx then swapValue(arr, i, minIdx);~    End;~End;'));
                    break;
                case 3: //createInsertionSortCode();
                    setJS(decode('function swapValue(arr, i, j) {~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~function insertionSort(arr) {~    for (var i = 1; i < arr.length; ++i) {~        var tempValue = arr[i];~        for (var j = i - 1; j >= 0 && arr[j] > tempValue; --j)~            swapValue(arr, j, j + 1);~        arr[j + 1] = tempValue;~    }~}'));
                    setCSharp(decode('void swapValue(List<int> arr, int i, int j)~{~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void insertionSort(List<int> arr)~{~    var j = 0;~    for (var i = 1; i < arr.Count; ++i)~    {~        var tempValue = arr[i];~        for (j = i - 1; j >= 0 && arr[j] > tempValue; --j)~        {~            swapValue(arr, j, j + 1);~        }~        arr[j + 1] = tempValue;~    }~}'));
                    setVB(decode('Sub swapValue(ByVal arr As List(Of Integer), ByVal i As Integer, ByVal j As Integer)~    Dim t = arr(i)~    arr(i) = arr(j)~    arr(j) = t~End Sub~Sub insertionSort(ByVal arr As List(Of Integer))~    Dim j = 0~    For i = 1 To arr.Count - 1~        Dim tempValue = arr(i)~        j = i - 1~        Do While j >= 0 AndAlso arr(j) > tempValue~            swapValue(arr, j, j + 1)~            j -= 1~        Loop~        arr(j + 1) = tempValue~    Next i~End Sub'));
                    setC(decode('void swapValue(int arr[], int i, int j)~{~    int t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void insertionSort(int arr[], int arrLength)~{~    int j = 0;~    for (int i = 1; i < arrLength; ++i)~    {~        int tempValue = arr[i];~        for (j = i - 1; j >= 0 && arr[j] > tempValue; --j)~        {~            swapValue(arr, j, j + 1);~        }~        arr[j + 1] = tempValue;~    }~}'));
                    setPascal(decode('Procedure swapValue(Var arr: arrayType; i, j: byte);~var t: integer;~Begin~    t:= arr[i];~    arr[i]:= arr[j];~    arr[j]:= t;~End;~Procedure insertionSort(Var arr: arrayType; arrLength: byte);~var i, j: byte;~    tempValue: integer;~Begin~    j:= 0;~    for i:= 2 to arrLength do~    Begin~        tempValue:= arr[i];~        for j:= i - 1 downto 1 do~            if arr[j] > tempValue then~                swapValue(arr, j, j + 1)~            else break;~        arr[j + 1]:= tempValue;~    End;~End;'));
                    break;
                case 4: //createQuickSortCode(); 
                    setJS(decode('function swapValue(arr, i, j) {~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~function quickSort(arr, left, right) {~    var pivotidx = ((left + right) / 2).toFixed();~    var i = left;~    var j = right;~    var pivot = arr[pivotidx];~    while (i <= j) {~        while (arr[i] < pivot) i++;~        while (arr[j] > pivot) j--;~        if (i <= j) {~            if (arr[i] > arr[j] && i < j)~                swapValue(arr, i, j);~            i++;~            j--;~        }~    }~    if (left < j) quickSort(arr, left, j);~    if (i < right) quickSort(arr, i, right);~    return arr;~}'));
                    setCSharp(decode('void swapValue(List<int> arr, int i, int j)~{~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void quickSort(List<int> arr, int left, int right)~{~    int pivotidx = (left + right) / 2;~    var i = left;~    var j = right;~    var pivot = arr[pivotidx];~    while (i <= j)~    {~        while (arr[i] < pivot) i++;~        while (arr[j] > pivot) j--;~        if (i <= j)~        {~            if (arr[i] > arr[j] && i < j)~                swapValue(arr, i, j);~            i++;~            j--;~        }~    }~    if (left < j) quickSort(arr, left, j);~    if (i < right) quickSort(arr, i, right);~}'));
                    setVB(decode('Sub swapValue(ByVal arr As List(Of Integer), ByVal i As Integer, ByVal j As Integer)~    Dim t = arr(i)~    arr(i) = arr(j)~    arr(j) = t~End Sub~Sub quickSort(ByVal arr As List(Of Integer), ByVal left As Integer, ByVal right As Integer)~    Dim pivotidx As Integer = (left + right) / 2~    Dim i = left~    Dim j = right~    Dim pivot = arr(pivotidx)~    Do While i <= j~        Do While arr(i) < pivot~            i += 1~        Loop~        Do While arr(j) > pivot~            j -= 1~        Loop~        If i <= j Then~            If arr(i) > arr(j) AndAlso i < j Then~                swapValue(arr, i, j)~            End If~            i += 1~            j -= 1~        End If~    Loop~    If left < j Then~        quickSort(arr, left, j)~    End If~    If i < right Then~        quickSort(arr, i, right)~    End If~End Sub'));
                    setC(decode('void swapValue(int arr[], int i, int j)~{~    int t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void quickSort(int arr[], int left, int right)~{~    int pivotidx = (left + right) / 2;~    int i = left;~    int j = right;~    int pivot = arr[pivotidx];~    while (i <= j)~    {~        while (arr[i] < pivot) i++;~        while (arr[j] > pivot) j--;~        if (i <= j)~        {~            if (arr[i] > arr[j] && i < j)~                swapValue(arr, i, j);~            i++;~            j--;~        }~    }~    if (left < j) quickSort(arr, left, j);~    if (i < right) quickSort(arr, i, right);~}'));
                    setPascal(decode('Procedure swapValue(Var arr: arrayType; i, j: byte);~var t: integer;~Begin~    t:= arr[i];~    arr[i]:= arr[j];~    arr[j]:= t;~End;~Procedure quickSort (Var arr: arrayType; left, right: byte);~var pivotidx, i, j: byte;~    pivot: integer;~Begin~    pivotidx:= (left + right) div 2;~    i:= left;~    j:= right;~    pivot:= arr[pivotidx];~    //partition~    while i <= j do~    Begin~        while arr[i] < pivot do i:= i + 1;~        while arr[j] > pivot do j:= j - 1;~        if i <= j then~        Begin~            if (arr[i] > arr[j]) and (i < j) then swapValue(arr, i, j);~            i:= i + 1;~            j:= j - 1;~        End;~    End;~    // recursion~    if left < j then quickSort(arr, left, j);~    if i < right then quickSort(arr, i, right);~End;'));
                    break;
                case 5: //createMergeSortCode(); 
                    setJS('function swapValue(arr, i, j) {~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~function mergeSort(arr, left, right) {~    if (right > left) {~        var mid = left + Math.floor((right - left) / 2);~        mergeSort(arr, left, mid);~        mergeSort(arr, mid + 1, right);~        var subLeft = [];~        var subRight = [];~        for (var i = left; i <= mid; i++) subLeft.push(arr[i]);~        for (var i = mid + 1; i <= right; i++) subRight.push(arr[i]);~        var leftIndex = 0;~        var rightIndex = 0;~        for (var i = left; i <= right; i++)~            if (left + leftIndex <= mid && (mid + 1 + rightIndex > right || subLeft[leftIndex] < subRight[rightIndex])) {~                arr[i] = subLeft[leftIndex];~                leftIndex++;~            } else {~                arr[i] = subRight[rightIndex];~                rightIndex++;~            }~    }~}');
                    setCSharp('void swapValue(List<int> arr, int i, int j)~{~    var t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void mergeSort(List<int> arr, int left, int right) ~{~    if (right > left) ~    {~        int mid = left + ((right - left) / 2);~        mergeSort(arr, left, mid);~        mergeSort(arr, mid + 1, right);~        var subLeft = new List<int>();~        var subRight = new List<int>();~        for (var i = left; i <= mid; i++) subLeft.Add(arr[i]);~        for (var i = mid + 1; i <= right; i++) subRight.Add(arr[i]);~        var leftIndex = 0;~        var rightIndex = 0;~        for (var i = left; i <= right; i++)~            if (left + leftIndex <= mid && (mid + 1 + rightIndex > right || subLeft[leftIndex] < subRight[rightIndex])) ~            {~                arr[i] = subLeft[leftIndex];~                leftIndex++;~            } else {~                arr[i] = subRight[rightIndex];~                rightIndex++;~            }~    }~}');
                    setVB('Sub swapValue(ByVal arr As List(Of Integer), ByVal i As Integer, ByVal j As Integer)~    Dim t = arr(i)~    arr(i) = arr(j)~    arr(j) = t~End Sub~Sub mergeSort(ByVal arr As List(Of Integer), ByVal left As Integer, ByVal right As Integer)~    If right > left Then~        Dim mid As Integer = left + ((right - left) / 2)~        mergeSort(arr, left, mid)~        mergeSort(arr, mid + 1, right)~        Dim subLeft = New List(Of Integer)()~        Dim subRight = New List(Of Integer)()~        For i = left To mid~            subLeft.Add(arr(i))~        Next i~        For i = mid + 1 To right~            subRight.Add(arr(i))~        Next i~        Dim leftIndex = 0~        Dim rightIndex = 0~        For i = left To right~            If left + leftIndex <= mid AndAlso (mid + 1 + rightIndex > right OrElse subLeft(leftIndex) < subRight(rightIndex)) Then~                arr(i) = subLeft(leftIndex)~                leftIndex += 1~            Else~                arr(i) = subRight(rightIndex)~                rightIndex += 1~            End If~        Next i~    End If~End Sub');
                    setC(decode('void swapValue(int arr[], int i, int j)~{~    int t = arr[i];~    arr[i] = arr[j];~    arr[j] = t;~}~void mergeSort(int arr[], int left, int right) ~{~    if (right > left) ~    {~        int mid = left + ((right - left) / 2);~        mergeSort(arr, left, mid);~        mergeSort(arr, mid + 1, right);~        int subLeft[100];~        int subRight[100];~        for (int i = left; i <= mid; i++) subLeft[i - left] = arr[i];~        for (int i = mid + 1; i <= right; i++) subRight[i - mid - 1] = arr[i];~        int leftIndex = 0;~        int rightIndex = 0;~        for (int i = left; i <= right; i++)~            if (left + leftIndex <= mid && (mid + 1 + rightIndex > right || subLeft[leftIndex] < subRight[rightIndex])) ~            {~                arr[i] = subLeft[leftIndex];~                leftIndex++;~            } else {~                arr[i] = subRight[rightIndex];~                rightIndex++;~            }~    }~}'));
                    setPascal(decode('Procedure swapValue(Var arr: arrayType; i, j: byte);~var t: integer;~Begin~    t:= arr[i];~    arr[i]:= arr[j];~    arr[j]:= t;~End;~Procedure mergeSort (Var arr: arrayType; left, right: byte);~Var mid, i, leftIndex, rightIndex : byte;~    subLeft, subRight : arrayType;~Begin~    If right > left Then~    Begin         ~        mid:= (left + right) Div 2;~        mergeSort (arr, left, mid);~        mergeSort (arr, mid + 1, right);~        For i:= left to mid Do subLeft[i - left + 1]:= arr[i];~        For i:= mid + 1 To right Do subRight[i - mid]:= arr[i];~        leftIndex := 1;~        rightIndex := 1;~        for i:= left to right do~            if (left + leftIndex - 1 <= mid) and ((mid + rightIndex > right) ~                or (subLeft[leftIndex] < subRight[rightIndex])) then~            Begin~                arr[i]:= subLeft[leftIndex];~                leftIndex:= leftIndex + 1;~            End else Begin~                arr[i]:= subRight[rightIndex];~                rightIndex:= rightIndex + 1;~            End;~    End;~End;'));
                break;
                default:    
            }
        }
        sortType.change(function() {
            setCode(parseInt(sortType.val()));
        });
    // Các hàm hỗ trợ sắp xếp {
        function toSelect(i, delay = 0.3){
            tl.to(Boxs[i],delay,{css:{background:"#0000FF"}});
        }

        function toGroup(left, right, delay = 0.3){
            for (var i = left; i <= right; i++) 
                toGroupItem(i, 0);
            tl.delay(delay);
        }
        function toGroup2(left, right, delay = 0.3){
            for (var i = left; i <= right; i++) 
                toGroupItem2(i, 0);
            tl.delay(delay);
        }
        function toGroupNormal(left, right, delay = 0.3){
            for (var i = left; i <= right; i++) 
                toNormal(i, 0);
            tl.delay(delay);     
        }

        function toGroupItem(i, delay = 0.3){ tl.to(Boxs[i], delay,{css:{background:"#660066"}}); }

        function toGroupItem2(i, delay = 0.3){ tl.to(Boxs[i], delay,{css:{background:"#006666"}}); }

        function toHighlight(i, delay = 0.3){ tl.to(Boxs[i], delay,{css:{background:"#ff0000"}}); }

        function toHighlight2(i, delay = 0.3){ tl.to(Boxs[i], delay,{css:{background:"#00ff00"}}); }

        function toNormal(i, delay = 0.3){ tl.to(Boxs[i], delay,{css:{background:"#666666"}}); }

        function toOK(i, delay = 0.3){ tl.to(Boxs[i], delay,{css:{background:"#FF6666"}}); }

        function swapValue(aValue, i, j, delay = 1){ 
            var x = Boxs[i].position().left - Boxs[j].position().left;
            tl.to(Boxs[i], delay, {x: -x, ease:Linear.easeNone});
            tl.to(Boxs[j], delay, {x: x, ease:Linear.easeNone}, "-="+delay);
            // Giả vờ chuyển thế thôi chứ ẻm vẫn như cũ, bản chất vẫn là đổi giá trị thôi :p
            tl.set(Boxs[i], {x: 0, height: aValue[j] * heightPerValue});
            tl.set(Boxs[j], {x: 0, height: aValue[i] * heightPerValue});
            tl.set(Boxs[i].children('span'), {text: aValue[j] + ""}); // chuyển sang chuỗi không thì
            tl.set(Boxs[j].children('span'), {text: aValue[i] + ""}); // nó bị lỗi
            var t = aValue[i];
            aValue[i] = aValue[j];
            aValue[j] = t;
        }
        function moveValue(aValue, i, j, delay = 1){ 
            swapValue(aValue, i, j, delay);
            toOK(j, 0);
            toSelect(i, 0);
            tl.set(Boxs[i], {bottom: -value[i] * heightPerValue - 25}); // 25 là chiều cao của cái span chứa giá trị
            tl.set(Boxs[j], {bottom: 0});
        }
        function showText(){
            var args = arguments;
            var text = args[0];
            for (var key = 1; key < args.length; key++) 
                text = text.replace(new RegExp('\\{' + (key - 1) + '\\}', 'g'), args[key]);
            tl.to(textPanel, 0.001, {text: text}, "step"+ ++stepID);
        }
        // Dành cho Insertion Sort
        var tempValue = 0;
        function setValue(i, delay = 1){
            tl.to(Boxs[i], delay, {bottom: -value[i] * heightPerValue - 25}); // 25 là  chiều cao của span chứa giá trị
            tempValue = value[i];
        }
        function getValue(i, delay = 1){
            tl.to(Boxs[i], delay, {bottom: 0});
            value[i] = tempValue;
        }
        // Dành cho Merge Sort
        function pushValue(index, valueIndex){
            tl.to(Boxs[index], 1, {left: valueIndex * (width + margin), bottom: -220});
        }
        function correctValue(i, newValue){
            tl.set(Boxs[i], {x:0, left: i * (width + margin), height: newValue * heightPerValue});
            tl.set(Boxs[i].children('span'), {text: newValue + ""}); // chuyển sang chuỗi không thì sai
        }
    // Các giải thuật sắp xếp {
        btnSort.click(function(event) {
            $('#play').removeClass("fa-play").addClass('fa-pause');
            switch(parseInt(sortType.val())) {
                case 1: bubbleSort(value); break;
                case 2: selectionSort(value); break;
                case 3: insertionSort(value); break;
                case 4: quickSort(value, 0, value.length - 1); break;
                case 5: mergeSort(value, 0, value.length - 1); break;
                default: // ---
            }
            showText('Kết thúc!');
        });

        function bubbleSort(arr){
            var indexOfLastUnsortedElement = arr.length;
            var swapped = true;
            while (swapped){
                swapped = false;
                  for (var i = 0; i < indexOfLastUnsortedElement - 1; i++){
                      toSelect(i);        // chọn 2 cái để đem so
                    showText("Chọn phần tử thứ {0} ({1}) và đem so với phần tử thứ {2} ({3})", i + 1, arr[i], i + 2, arr[i+1]);
                      toHighlight(i + 1);
                    if (arr[i] > arr[i + 1]){
                        showText("Vì {0} > {1} nên tráo đổi giá trị của phần tử thứ {2} và {3} cho nhau!", arr[i], arr[i + 1], i + 1, i + 2 );
                         swapValue(arr, i, i + 1);
                        swapped = true;
                      } else showText('Vì {0} ' + (arr[i] == arr[i + 1] ? '=' : '<') + ' {1} nên tiếp tục!', arr[i], arr[i + 1]);
                      toNormal(i, 0);
                  }
                  toOK(i, 0);
                  indexOfLastUnsortedElement--;
            }
            // Mấy cái còn lại là đã được xếp cả rồi!
            showText("Không còn phần tử nào để tráo đổi! Mảng đã xếp xong!");
            for (var i = 0; i < indexOfLastUnsortedElement; i++) toOK(i, i==0?null:0);
            // tách cái đầu ra cho chạy riêng để cả chuyển động không bị chồng lên chuyển động trước!
        }

        function selectionSort(arr){
            for(var i = 0; i < arr.length - 1; i++){
                showText('Xem {0} là bé nhất', arr[i]);
                toHighlight2(i); // coi như phần tử đầu tiên là bé nhất
                var minIdx = i; // lưu vị trí phần tử bé nhất
                for(var  j = i + 1; j < arr.length; j++){
                    showText('So sánh {0} với phần tử bé nhất đã chọn ({1})', arr[j], arr[minIdx]);
                    toHighlight(j); // phần tử cần đem so giá trị
                    if(arr[j] < arr[minIdx]) {
                        toNormal(minIdx, 0); // cái min trước cho nó về bình thường
                        toHighlight2(j); // phần tử có giá trị bé nhất
                        showText('Vì {0} > {1} nên xem phần tử thứ {3} là bé nhất', arr[j], arr[minIdx], arr[j]);
                        minIdx = j;
                    } else {
                        showText('Vì {0} > {1} không đúng nên tiếp tục!', arr[j], arr[minIdx]);
                        toNormal(j, 0); // so không thấy gì thì cho nó về bình thường
                    }
                }
                if(i < minIdx){ // tìm thấy thằng bé nhất
                    showText('Tìm thấy phần tử bé nhất là {0}, tráo đổi nó với phần tử {1}', arr[minIdx], arr[i]);
                    toSelect(i); // phần tử được chọn
                    swapValue(arr, i, minIdx); // tráo đổi giá trị
                    toNormal(minIdx, 0); // cho min về bình thường
                }
                toOK(i, 0); // cho phần tử được chọn về bình thường
            }
            showText('Phần tử cuối cùng của mảng không cần xếp nữa');
            toOK(arr.length-1, 0);
        }

        function insertionSort(arr){
            showText('Xem phần tử đầu tiên của mảng là đã xếp, xét từ phần tử thứ 2 trở đi!');
            toOK(0);
            for(var i = 1; i < value.length; ++i) { // xét từ phần tử thứ 2 về sau
                showText('Chọn phần tử {0}, lưu giá trị của nó lại!', arr[i]);
                toSelect(i); // chọn phần tử hiện tại
                setValue(i); // lưu giá trị của nó lại
                for(var j = i - 1; j >= 0 && value[j] > tempValue; --j){ //xét các phần tử trước nó và lớn hơn nó
                    showText('Vì {0} > {1} nên lùi {0} ra sau', arr[j], tempValue);
                    moveValue(arr, j, j + 1); // lùi ra sau
                }
                showText('Chèn {0} vào vị trí hiện tại!', tempValue);
                getValue(j + 1); // chèn nó vào vị trí hiện tại
                toOK(j + 1);
            }
            showText('Hoàn thành sắp xếp!');
        }

        function  quickSort(arr, left, right)
        {
            var tmp;
            var pivotidx = ((left + right) / 2).toFixed(); 
            var i = left; 
            var j = right;
            var pivot = arr[pivotidx];  
            showText('Sắp xếp trong đoạn [{0}({1})..{2}({3})], chọn phần tử ở giữa ({4}) làm phần tử chốt', left+1, arr[left], right+1, arr[right], pivot);
            /* partition */
            while (i <= j)
            {
                toGroup(left, right);
                toSelect(pivotidx);
                toHighlight(i);
                while (arr[i] < pivot){
                    showText('Vì {0} < {1} nên thử chọn {2}', pivot, arr[i], arr[i+1]);
                    toGroupItem(i,0);
                    i++;
                    toHighlight(i,1);
                    //if (i < pivotidx) toHighlight(i); // nếu lỡ mà nó trùng với cái giữa thì khỏi đổi màu
                }
                showText('Tìm được {0} ' + (arr[i] == pivot ? '=' : '>') + ' {1}', arr[i], pivot);
                tl.delay(1000);
                toHighlight2(j);
                while (arr[j] > pivot){
                    showText('Vì {0} > {1} nên thử chọn {2}', pivot, arr[j], arr[j-1]);
                    toGroupItem(j,0);
                    j--; 
                    toHighlight2(j,1);
                    //if (j > pivotidx) toHighlight2(j); // cần delay chút
                }
                showText('Tìm được {0} ' + (arr[j] == pivot ? '=' : '<') + ' {1}', arr[j], pivot);
                if (i <= j)
                {
                    if(arr[i] > arr[j] && i < j){
                        showText('Đổi chỗ {0}, cho {1} vì {0} ≥ {2} ≥ {1}',arr[i], arr[j], pivot);
                        swapValue(arr, i, j);
                        //pivotidx = i==pivotidx?j:j==pivotidx?i:pivotidx;
                    }
                    i++;
                    j--;
                }
            }
            // showText('Đã xếp xong trong đoạn [{0}({1})..{2}({3})]!', left+1, arr[left], right+1, arr[right]);
            // tl.delay(1);
            toGroupNormal(left, right); // cho tất cả về bình thường
            /* recursion */
            if (left < j) quickSort(arr, left, j);
            if (i < right) quickSort(arr, i, right);
            return arr;
        }

        function mergeSort (arr, left, right){
            if (right > left) {
                var mid = left + Math.floor((right - left) / 2);
                mergeSort (arr, left, mid);
                mergeSort (arr, mid + 1, right);
                var subLeft = [];
                var subRight = [];
                for (var i = left; i <= mid; i++) subLeft.push(arr[i]);
                for (var i = mid + 1; i <= right; i++) subRight.push(arr[i]);
                showText('Trộn 2 dãy con [{0}] và [{1}]', subLeft, subRight);
                toGroup(left, mid); toGroup2(mid + 1, right);
                tl.set({}, {}, "+=1");
                var leftIndex = 0;
                var rightIndex = 0;
                var indexResult = [];
                for (var i = left; i <= right; i++)
                    if (left + leftIndex <= mid && (mid + 1 + rightIndex > right || subLeft[leftIndex] < subRight[rightIndex])){
                        if (mid + 1 + rightIndex > right)
                            showText('Vì dãy con bên phải hết phần tử nên đưa {0} ở dãy con bên trái vào danh sách chờ!', subLeft[leftIndex]);
                        else
                            showText('Vì {0} < {1} nên đưa {0} vào danh sách chờ!', subLeft[leftIndex], subRight[rightIndex]);
                        arr[i] = subLeft[leftIndex];
                        tl.to(Boxs[leftIndex + left], 1, {left: i * (width + margin), bottom: -230});
                        indexResult.push(leftIndex + left);
                        leftIndex++;
                    } else {
                        if (left + leftIndex > mid)
                            showText('Vì dãy con bên trái hết phần tử nên đưa {0} ở dãy con bên phải vào danh sách chờ!', subRight[rightIndex]);
                        else
                            showText('Vì {0} ' + (subLeft[leftIndex] < subRight[rightIndex] ? '=' : '>') + ' {1} nên đưa {1} vào danh sách chờ!', subLeft[leftIndex], subRight[rightIndex]);
                        arr[i] = subRight[rightIndex];
                        tl.to(Boxs[rightIndex + mid + 1], 1, {left: i * (width + margin), bottom: -230});
                        indexResult.push(rightIndex + mid + 1);
                        rightIndex++;
                    }
                showText('Đưa toàn bộ các phần tử trong danh sách chờ vào lại mảng!');
                for (var i = left; i <= right; i++) {
                    tl.to(Boxs[indexResult[i - left]], 1, {left: i * (width + margin), bottom: 0}, i==left ? "-=0" : "-=1");
                    correctValue(i, arr[i]);
                }
            }
            toGroupNormal(left, right);
        }
    });
})(window.jQuery);