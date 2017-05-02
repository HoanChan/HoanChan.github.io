---
title: Hàm - Function
---

Hàm (Function) là một chương trình con có thể trả về một giá trị nào đó khi thực hiện xong.

## Khai báo:

Một khai báo hàm trong Pascal bao gồm phần đầu của hàm, các khai báo cục bộ và thân của hàm. Phần đầu của hàm bao gồm từ khoá `Function` và tên của hàm đó:

```
Function <Tên hàm> (<Danh sách tham số>) : <Kiểu trả về>;
<Khai báo cục bộ>
Begin
    <Công việc 1>;
    <Công việc 2>;
    ...
    <Công việc n>;
    <Tên hàm> := <Giá trị>;
End;
```
{: .sh_pascal .sh_syntax }

Sau đây là các thành phần của một hàm:

- `<Danh sách tham số>`{: .sh_syntax } − Các tham số thiết lập nên sự liên kết giữa hàm và chương trình gọi nó và thường được gọi là các tham số hình thức. Khi hàm được gọi, các giá trị sẽ được truyền vào hàm thông qua các tham số. Các giá trị này được gọi là đối số hay tham số thực tế. Danh sách tham số sẽ thể hiện kiểu dữ liệu, thứ tự cũng như số lượng các tham số trong hàm. Tuy nhiên không phải hàm nào cũng cần có tham số. Không dùng thì cũng khỏi cần khai báo. Các tham số có thể thuộc kiểu dữ liệu cơ bản, do người dùng định nghĩa hoặc là kiểu miền con.

- Danh sách các tham số hình thức xuất hiện trong lệnh gọi hàm có thể là các biến đơn, các mảng, các biến có cấu trúc, hoặc các chương trình con.

- `<Kiểu trả về>`{: .sh_syntax } - Tất cả các hàm phải trả lại một giá trị, vì vậy tất cả các hàm đều phải được gán một kiểu. Nó chính là kiểu dữ liệu của giá trị mà hàm trả về. Nó có thể là các kiểu dữ liệu cơ bản, kiểu vô hướng hoặc miền con do người dùng tự định nghĩa. Pascal không hỗ trợ trả về kiểu dữ liệu có cấu trúc như [Array](/dev/pascal/data_structures/arrays) hay [Record](/dev/pascal/data_structures/records).

- `<Khai báo cục bộ>`{: .sh_syntax } - Là các khai báo cho các nhãn, hằng số, biến, các hàm và các thủ tục. Các khai báo này chỉ được sử dụng trong phần thân của hàm.

- Phần thân − Thân hàm nằm giữa `Begin` và `End;`. Đây là nơi các công việc được thực hiện. Luôn phải có phép gán `<Tên hàm> := <Giá trị>;`{: .sh_syntax } để hàm trả về giá trị khi được gọi.

Ví dụ chương trình con tìm số lớn nhất trong 2 số:

```
Function max(a, b : Integer) : Integer;
Var result: Integer; (* Khai báo biến cục bộ *)
Begin
    result := a;
    If result < b Then result := b;
    max := result; { Trả về kết quả }
End;
```
{: .sh_pascal }

## Lời gọi hàm

Khi khai báo một hàm, chúng ta tạo ra một công việc được gắn cho một cái tên và các tham số. Khi cần thực hiện công việc đó thì đơn giản là gọi tên hàm kèm theo các tham số cần thiết. Vì hàm trả về một giá trị nên nó được sử dụng trong một biểu thức hoặc gán vào một biến.

```
<Tên Hàm>(<Danh sách tham số thực tế>);
```
{: .sh_syntax }

Ví dụ một chương trình hoàn chỉnh sử dụng hàm:

```
Program findMax;
Var a, b, c : integer;

Function max(num1, num2 : Integer) : Integer;
Var result: Integer; (* Khai báo biến cục bộ *)
Begin
    result := num1;
    If result < num2 Then result := num2;
    max := result; { Trả về kết quả }
End;

Begin
    a := 5;
    b := 3;
    c := 7;
    Writeln('Max(', a,', ', b,') = ', max(a, b));
    Writeln('Max(', b,', ', c,') = ', max(b, c));
    Writeln('Max(', a,', ', b, ', ', c,') = ', max(max(a, b),c));
End.
```
{: .sh_pascal }

Sau khi biên dịch và thực thi chương trình thì sẽ có kết quả như sau:

> Max(5, 3) = 5  
> Max(3, 7) = 7  
> Max(5, 3, 7) = 7