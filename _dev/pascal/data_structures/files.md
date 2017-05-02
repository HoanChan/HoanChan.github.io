---
title: Tập tin - File
---

Nhập và xuất dữ liệu là hai công việc rất phổ biến khi thực hiện một chương trình. Cho đến nay, ta mới chỉ nhập dữ liệu từ bàn phím và xuất dữ liệu ra màn hình. Các dữ liệu này được tổ chức trong bộ nhớ của máy, chúng tồn tại khi chương trình đang chạy và bị xóa khi chương trình kết thúc. Muốn lưu trữ các dữ liệu lâu dài để sử dụng nhiều lần thì phải ghi chúng lên đĩa thành các tập tin.

> Tập tin (file) trong Pascal là một kiểu dữ liệu có cấu trúc. Mỗi tập tin là một tập hợp các phần tử có cùng chung một kiểu dữ liệu được nhóm lại thành một dãy và được ghi trên đĩa dưới một cái tên chung.

Khái niệm tập tin và mảng có những điểm rất gần nhau. Song tập tin khác mảng ở những điểm sau đây:
- Mảng được tổ chức trong bộ nhớ còn tập tin chủ yếu được tổ chức trên đĩa.
- Số phần tử của mảng được xác định ngay khi khai báo, còn số phần tử của tập tin thì không. Các tập tin được kết thúc bằng một dấu hiệu đặc biệt gọi là EOF ( End Of File).
- Các phần tử của mảng được truy xuất thông qua chỉ số. Các phần tử của tập tin được truy xuất nhờ một biến trung gian chỉ điểm vào vị trí của chúng trên đĩa, gọi là con trỏ tệp. Tại mỗi thời điểm, con trỏ sẽ chỉ vào một vị trí nào đó trong tập tin, gọi là vị trí hiện thời.

Dưới đây sẽ trình bày hai loại tập tin thường gặp là tập tin có định kiểu và tập tin văn bản.

## Tập tin văn bản

Để thao tác trên tập tin trong Pascal thì cần khai báo biến đại diện cho tập tin đó. Các biến kiểu tập tin là một loại biến đặc biệt, không dùng để gán giá trị như các biến nguyên, thực hay chuỗi. Mỗi biến này đại diện cho một tập tin mà thông qua các biến đó ta có thể thực hiện các thao tác trên tập tin như: tạo mới, mở, đóng, xóa, ghi dữ liệu hay đọc dữ liệu từ tập tin, ... Ta có thể khai báo biến kiểu tập tin văn bản như sau:

```
Var <Biến tập tin> : Text;
```
{: .sh_pascal .sh_syntax }

Các phần tử của tập tin văn bản là các ký tự được ghi thành từng dòng có độ dài khác nhau. Các dòng được phân cách nhờ các dấu kết thúc dòng (End of line). Ðó là hai ký tự điều khiển CR (Carriage return : nhảy về đầu dòng) và LF (Line feed: xuống dòng dưới). Ví dụ, đoạn văn bản sau:

``` text
Tap tin van ban Text
12345
Het
```

Được chứa trong tập tin văn bản thành một dãy :

``` text
Tap tin van ban Text    CR LF    12345    CR LF    Het    EOF
```

Trước khi thao tác với tập tin chúng ta cần sử dụng thủ tục:

```
Assign(<Biến tập tin>, <Tập tin>);
```
{: .sh_pascal .sh_syntax }

Thủ tục này là để gán một `<Tập tin>`{: .sh_syntax } trên đĩa cho `<Biến tập tin>`{: .sh_syntax } trong RAM. sau lệnh này, `<Biến tập tin>`{: .sh_syntax } sẽ được dùng để thực hiện tất cả thao tác cần thiết lên `<Tập tin>`{: .sh_syntax } được chỉ định.

### Mở tập tin mới để ghi:

```
Assign(<Biến tập tin>, <Tập tin>);
Rewrite(<Biến tập tin>);
```
{: .sh_pascal .sh_syntax }

Thủ tục `Rewrite` tạo một tập tin trên đĩa có tên đã gán cho `<Biến tập tin>`{: .sh_syntax } bằng lệnh gán `Assign` đồng thời mở tập tin đó ra để ghi dữ liệu. Khi mở tập tin bằng lệnh `Rewrite` nếu trên đĩa đã có tập tin trùng với tên bạn đặt thì tập tin trên đĩa sẽ bị xoá thay vào đó là một tập tin trống. Nên bạn cần cẩn thận khi mở tập tin bằng lệnh `Rewrite`.

### Mở tập tin đã có để ghi thêm:

```
Assign(<Biến tập tin>, <Tập tin>);
Append(<Biến tập tin>);
```
{: .sh_pascal .sh_syntax }

### Mở tập tin để đọc dữ liệu:

```
Assign(<Biến tập tin>, <Tập tin>);
Reset(<Biến tập tin>);
```
{: .sh_pascal .sh_syntax }

Chú ý: Khi mở một tập tin bằng lệnh Reset nếu tập tin không có trên đĩa sẽ gây lỗi.

### Đóng tập tin

Cuối cùng, ta phải đóng tập tin bằng thủ tục:

```
Close(<Biến tập tin>);
```
{: .sh_pascal .sh_syntax }

Thủ tục này chuyển nội dung trong bộ nhớ vào tập tin trên đĩa đồng thời đóng tập tin lại giải toả bộ nhớ dành cho biến tập tin. Các tập tin khi đã mở nếu không đóng lại sẽ mất các dữ liệu truy xuất trên Tên biến File.

Việc xuất nhập dữ liệu trên biến File có kiểu chỉ được thực hiện như sau:
– Ðọc dữ liệu từ tập tin dùng thủ tục 

```
Readln(<Tên biến tập tin>, <Danh sách biến>);
```
{: .sh_pascal .sh_syntax }

– Ghi dữ liệu vào đĩa: dùng thủ tục

```
Writeln(<Tên biến tập tin>, <Danh sách biến>);
```
{: .sh_pascal .sh_syntax }

Ví dụ:

```
Var t : Text;
    str : String;
Begin
    Assign(t, 'inputText.txt'); {Gắn inputText.txt và biến t}
    Rewrite(t); {Tạo mới tập tin để ghi dữ liệu}
    Writeln(t, 'Lê Hoàn Chân');
    Writeln(t, '============');
    Reset(t); {Mở tập tin để đọc dữ liệu}
    Writeln('Dữ liệu trong file inputText.txt:');
    While Not EOF(t) Do {Đọc dữ liệu tới hết tập tin}
    Begin
        Readln(t, str);
        Writeln(str);
    End;
    Append(t); {Mở tập tin để ghi thêm dữ liệu}
    Writeln(t, 'Kiểm tra thử xem sao');
    Close(t); {Đóng tập tin lại}
    Reset(t);
    Writeln;
    Writeln('Dữ liệu trong file inputText.txt sau khi thay đổi:');
    While Not EOF(t) Do {Đọc dữ liệu tới hết tập tin}
    Begin
        Readln(t, str);
        Writeln(str);
    End;
    Close(t); {Đóng tập tin lại}
End.
```
{: .sh_pascal }

## Tập tin có định kiểu

Tập tin mà các phần tử của nó có cùng một kiểu dữ liệu gọi là tập tin có định kiểu. Kiểu dữ liệu của các phần tử của tập tin có thể là kiểu đơn giản (nguyên, thực, ký tự , logic, chuỗi ký tự…) hoặc kiểu có cấu trúc (mảng, bản ghi, ...). 

### Khai báo

```
Type
    <Tên kiểu tập tin> = File Of <Kiểu phần tử>;
Var
    <Biến tập tin> : <Tên kiểu tập tin>;
```
{: .sh_pascal .sh_syntax }

Cụ thể:

```
Type
    Arr = Array[1..100] Of Integer; {Kiểu mảng Arr}
    TArr = File of Arr; {Kiểu tập tin TArr có các phần tử là mảng Arr}
    TStr = File of String[50]; {Tập tin TStr có các phần tử là chuỗi có độ dài tối đa 50 ký tự}
    SinhVien = Record
        Msv, Hoten : String[50];
        Diem : Real;
    end;
    TSv = File Of SinhVien; {Tập tin TSv có các phần tử có kiểu là SinhVien}
Var
    T1 : TArr;
    T2 : TStr;
    T3 : TSv;
```
{: .sh_pascal }

Định nghĩa trực tiếp biến kiểu tập tin trong phần khai báo biến:

```
Var <Biến tập tin> : File Of <Kiểu phần tử>;
```
{: .sh_pascal .sh_syntax }

Cụ thể:

```
Var
    T4 : File of array[1..100] of Real;
    T5 : File of SinhVien;
```
{: .sh_pascal }

### Đọc và ghi

Như chúng ta đã biết khi nhập xuất file có kiểu text gây ra nhiều khó khăn khi phải ghi dữ liệu như khi đọc, ghi dữ liệu của 1 sinh viên phải làm rất phức tạp. Chúng ta có thể xử lý đơn giản hơn với tập tin có kiểu.

– Ghi lên tập tin:

```
Write(<Biến tập tin>, <Danh sách giá trị>); 
```
{: .sh_pascal .sh_syntax }

Với các giá trị trong `<Danh sách giá trị>`{: .sh_syntax } phải cùng kiểu với `<Biến tập tin>`{: .sh_syntax }.

– Đọc tập tin: 

```
Read(<Biến tập tin>, <Danh sách biến>);
```
{: .sh_pascal .sh_syntax }

**Chú ý:**

Khác với tập tin văn bản, việc ghi và đọc tập tin có kiểu không sử dụng các lệnh Writeln hoặc readln nghĩa là tập tin có kiểu không ghi dữ liệu thành các dòng. Các phần tử của tập tin có kiểu được ghi liên tục trong các ô nhớ và chỉ có ký hiệu kết thúc tập tin `EOF`. Khi chúng ta đọc hoặc ghi xong một phần tử thì con trỏ tập tin sẽ tự động chuyển đến vị trí kế tiếp.

Truy nhập vào phần tử thứ i của tập tin: Seek(<Biến tập tin>, i); i=0,1,2,…

Thủ tục seek sẽ định vị con trỏ tại vị trí thứ i của tập tin.

Các hàm xử lý tập tin:
* Filesize(<Biến tập tin>) cho biết số phần tử có trong tập tin
* FilePos(<Biến tập tin>) cho biết vị trí hiện thời của con trỏ tập tin
* Eof(<Biến tập tin>) cho giá trị là True nếu con trỏ tập tin ở vị trí cuối tập tin, ngược lại cho giá trị False

Ví dụ:
```
Type
    SinhVien = Record
        MSV, Hoten : String;
        Diem : Real;
    End;
Var
    TSv : FILE of SinhVien;
    sv : SinhVien;
    i : integer;
Begin
    Assign(TSv, 'SV.dat');
    Rewrite(TSv);
    For i:= 1 To 3 Do {Ghi dữ liệu của 3 sinh viên vào tập tin}
    Begin
        {Nhập dữ liệu}
        Write('Nhập mã của sinh viên thứ ', i, ' : ');
        Readln(sv.MSV);
        Write('Nhập tên: ');
        Readln(sv.Hoten);
        Write('Nhập điểm: ');
        Readln(sv.Diem);
        {Ghi vào tập tin}
        Write(TSv, sv);
    End;
    Close(TSv);
    Reset(TSv); {Mở tập tin để đọc}
    Writeln;
    Writeln('Thông tin của sinh viên thứ 2 trong tệp:');
    Seek(TSv, 2);
    Read(TSv, sv);
    Writeln('Mã số: ', sv.MSV);
    Writeln('Học tên: ', sv.Hoten);
    Writeln('Điểm: ', sv.Diem:0:2);
    Close(TSv);
    Readln;
End.
```
{: .sh_pascal }

Khi các bạn mở tập tin `SV.dat` ra thì sẽ không thể thấy thông tin như mong muốn vì nó được ghi dưới dạng mã nhị phân chứ không phải Text nhưng thông tin của nó chứa thì vẫn chính xác.