---
title: Tập hợp - Set Of ...
---

Kiểu tập hợp là một kiểu dữ liệu có cấu trúc nhằm thể hiện mô hình dữ liệu tập hợp trong toán học. Nó thể hiện loại dữ liệu có thể xác nhận giá trị không phải chỉ là một phần tử đơn lẻ trong miền xác định  mà là một tập hợp nhiều phần tử cùng thuộc một kiểu dữ liệu vô hướng đếm được nào đó. 

## Cú pháp

Phần mô tả khai báo kiểu tập hợp có cú pháp như sau: 

```
Type <Tên kiểu tập hợp> = Set Of <Tên kiểu dữ liệu cơ sở>; 
Var <Tên biến> : <Tên kiểu tập hợp>; 
```
{: .sh_pascal .sh_syntax }

Trong đó: `<Tên kiểu dữ liệu cơ sở>`{: .sh_pascal } có thể là một kiểu dữ liệu vô hướng đếm được bất kỳ, kể cả [Kiểu miền con](/dev/pascal/data_types/#subrange), [Kiểu liệt kê](/dev/pascal/data_types/#list).

Chú ý: Turbo Pascal hạn chế số phần tử có thể của mỗi giá trị kiểu tập hợp là 256.

## Một số tính chất

- Một giá trị của dữ liệu kiểu tập hợp được thể hiện bằng cách liệt kê mọi phần tử của tập, cách nhau bởi dấu phẩy `,` và đóng trong hai dấu ngoặc vuông `[ ... ]`.
- Thứ tự liệt kê các phần tử không quan trọng.
- Có thể gán giá trị cho biến tập hợp như thông thường.
- Tập rỗng ký hiệu là `[]`.

## Các phép toán trên tập hợp

### Phép toán quan hệ

Để thực hiện các phép toán quan hệ thì các toán hạng phải cùng kiểu. Thực hiện như sau:

| Phép so sánh     | Ví dụ  | Kết quả                                  |
|------------------|--------|------------------------------------------|
| Bằng nhau        | A = B  | Là `True` nếu A và B hoàn toàn như nhau  |
| Khác nhau        | A <> B | Là `False` nếu A và B hoàn toàn như nhau |
| Nhỏ hơn hay bằng | A <= B | Là `True` nếu A là tập con của B         |
| Lớn hơn hay bằng | A >= B | Là `True` nếu B là tập con của A         |
{: .table .table-bordered }

**Chú ý:** không có so sánh nhỏ hơn chặt `<`, lớn hơn chặt `>` đối với kiểu tập hợp. Muốn thể hiện quan hệ "là tập con thực sự" ta phải kết hợp hai điều kiện: `(A <= B) And (A <> B)`

### Phép tìm kiếm (thuộc về)

Để diễn tả một phần tử `x` có thuộc một tập hợp `A` hay không ta sử dụng toán tử `In`: `x In A` cho kết quả là `True` nếu `x` là một phần tử của `A` ngược lại cho kết quả là `False`.

### Phép hợp, giao, hiệu

Để thực hiện các phép hợp, giao, hiệu thì hai toán hạng cũng phải cùng kiểu. Cho: `A := ['a', 'b', 'c']; B := ['c', 'd', 'e'];`

| Phép toán     |  Cụ thể  |           Kết quả                                      |
|---------------|----------|--------------------------------------------------------|
| Phép hợp      |  A + B   | Tất cả phần tử trong A, B: ['a', 'b', 'c', 'd', 'e']   |
| Phép giao     |  A * B   | Các phần tử thuộc A và thuộc B: ['c']                  |
| Phép hiệu     |  A - B   | Các phần tử thuộc A nhưng không thuộc B: ['a', 'b']    |
| Phép bù       | A >< B   | Các phần tử khác nhau của A và B: ['a', 'b', 'd', 'e'] |
{: .table .table-bordered }

## Viết và đọc dữ liệu kiểu tập hợp

Nói chung ta không thể dùng các thủ tục [Write/Writeln](/dev/pascal/io/#output) và [Read/Readln](/dev/pascal/io/#input) để viết ra và đọc vào các dữ liệu kiểu tập hợp. Tuy nhiên chúng ta có thể lập trình để thực hiện các thao tác này khi mà các phần tử của tập hợp là các số nguyên hoặc ký tự. 

Ví dụ: Nhập vào `N` ký tự rồi lựa chọn trong đó các chữ hoa để thành lập một tập hợp và cuối cùng là in ra các ký tự trong tập vừa tạo.

```
Program setOfUpcase;
Var tapChuHoa : Set Of 'A'..'Z';
    i, N : Integer;
    kyTu : Char;
Begin 
    Write(' Nhap so N = '); Readln(n);
    tapChuHoa := []; { Cho tập hợp ban đầu là rỗng }
    For i := 1 To N Do { Đọc vào N ký tự }
    Begin
        Write('Nhập Ký tự thứ ', i , ' : ' );
        Readln(Ch);
        If kyTu = Upcase(ch) Then { Nếu kyTu là chữ hoa thì cho nó vào tapChuHoa }
            tapChuHoa := tapChuHoa + [Ch];
    End; 
    For kyTu := 'A' To 'Z' Do { In các ký tự trong tapChuHoa ra màn hình }
        If kyTu In Tap_Chu_Hoa Then Write(kyTu : 4);
End.
```
{: .sh_pascal }

Ví dụ: Đếm số kí tự là nguyên âm, là phụ âm trong một dãy kí tự. Để đơn giản ta dùng kí tự số 0 để đánh dấu kết thúc dãy.

Dễ thấy rằng cần phải có hai tập hợp chữ cái là các nguyên âm và các phụ âm để phục vụ cho việc kiểm tra từng kí tự đọc vào. Chương trình cần phải định nghĩa kiểu dữ liệu TapKiTu và hai biến nguyenAm, phuAm có kiểu là tập hợp bộ chữ cái như đã nêu trên.

```
Program vowelAndConsonant;
Type TapKiTu = Set Of Char;
Var nguyenAm, phuAm : TapKiTu;
    ch : Char;
    soNguyenAm, soPhuAm : Byte;
Begin 
    soNguyenAm := 0; soPhuAm:= 0;
    nguyenAm := ['a','e','i','o','u'];
    phuAm := ['a'..'z'] - nguyenAm;
    Write('Nhập dãy ký tự, kết thúc bằng số 0: ');
    Read(ch);
    While ch <> '0' Do
    Begin
        If ch In nguyenAm Then soNguyenAm:= soNguyenAm + 1;
        If ch In phuAm Then soPhuAm:= soPhuAm + 1;
        Read(ch);
    End;
    Writeln('Số lượng nguyên âm: ', soNguyenAm);
    Writeln('Số lượng phụ âm: ', soPhuAm);
End.
```
{: .sh_pascal }

Ví dụ: Tìm các số nguyên tố trong khoảng 1..N

Thuật toán sàng Eratosthene. 

Phân tích: Sàng ban đầu chứa toàn bộ dãy số 2 .. N. Bắt đầu từ số nhỏ nhất là 2, ta loại bỏ khỏi sàng tất cả các số là bội số của 2. Số nhỏ nhất còn lại trên sàng sẽ là số nguyên tố thứ nhất là 3. Bỏ số này ra khỏi sàng, ghi nó vào tập số nguyên tố.

Tiếp tục loại bỏ khỏi sàng các số là bội số của các số nguyên tố vừa chọn được. Số nhỏ nhất còn lại trên sàng sẽ là số nguyên tố tiếp theo.

Lặp lại việc này ta sàng dần được hết các số nguyên tố.

```
Program Sang_Eratosthene;
Const N = 100;
Type Nguyen = 1..N;
Var NguyenTo, Sang: Set Of Nguyen;
    Number: Nguyen;
    i: Integer;
Begin
    NguyenTo := [ ];
    Sang := [ 2..N];
    Number := 2;
    Repeat
        While Not (Number IN Sang) Do
            Number := Number + 1;
        NguyenTo := NguyenTo + [Number];
        Write (Number , ' ' );
        i := Number;
        While i <= N Do
        Begin 
            Sang := Sang - [i];
            i := i + Number;
        End.
    Until Sang = [];
End.
```
{: .sh_pascal }