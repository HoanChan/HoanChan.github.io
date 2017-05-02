---
title: Thủ tục - Procedure
---

Thủ tục (Procedure) là một chương trình con mà thay vì trả về một giá trị nào đó, nó cho phép thu về một nhóm các kết quả.

## Khai báo

Trong Pascal, thủ tục được khai báo bằng cách sử dụng từ khoá `Procedure`. Cú pháp khai báo như sau:

```
Procedure <Tên thủ tục> (<Danh sách tham số>);
<Khai báo cục bộ>
Begin
    <Công việc 1>;
    <Công việc 2>;
    ...
    <Công việc n>;
End;
```
{: .sh_pascal .sh_syntax }

Sau đây là các thành phần của một thủ tục:

- `<Danh sách tham số>`{: .sh_syntax } − Các tham số thiết lập nên sự liên kết giữa thủ tục và chương trình gọi nó và thường được gọi là các tham số hình thức. Khi thủ tục được gọi, các giá trị sẽ được truyền vào thủ tục thông qua các tham số. Các giá trị này được gọi là đối số hay tham số thực tế. Danh sách tham số sẽ thể hiện kiểu dữ liệu, thứ tự cũng như số lượng các tham số trong thủ tục. Tuy nhiên không phải thủ tục nào cũng cần có tham số. Không dùng thì cũng khỏi cần khai báo. Các tham số có thể thuộc kiểu dữ liệu cơ bản, do người dùng định nghĩa hoặc là kiểu miền con.

- Danh sách các tham số hình thức xuất hiện trong lệnh gọi thủ tục có thể là các biến đơn, các mảng, các biến có cấu trúc, hoặc các chương trình con.

- `<Khai báo cục bộ>`{: .sh_syntax } - Là các khai báo cho các nhãn, hằng số, biến, các hàm và các thủ tục. Các khai báo này chỉ được sử dụng trong phần thân của thủ tục.

- Phần thân − Thân thủ tục nằm giữa `Begin` và `End;`. Đây là nơi các công việc được thực hiện. 

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

## Lời gọi thủ tục

Khi khai báo một thủ tục, chúng ta tạo ra một công việc được gắn cho một cái tên và các tham số. Khi cần thực hiện công việc đó thì đơn giản là gọi tên thủ tục kèm theo các tham số cần thiết. Vì thủ tục trả về một giá trị nên nó được sử dụng trong một biểu thức hoặc gán vào một biến.

```
<Tên thủ tục>(<Danh sách tham số thực tế>);
```
{: .sh_syntax }

Ví dụ một chương trình hoàn chỉnh sử dụng thủ tục:

```
Program findMax;
Var a, b, c, m : integer;

Procedure max(num1, num2, num3 : Integer; var result : Integer);
Begin
    result := num1;
    If result < num2 Then result := num2;
    If result < num3 Then result := num3;
End;

Begin
    a := 5;
    b := 3; 
    c := 7;
    max(a, b, c, m);
    Writeln('Max(', a,', ', b, ', ', c,') = ', m);
End.
```
{: .sh_pascal }

Sau khi biên dịch và thực thi chương trình thì sẽ có kết quả như sau:

> Max(5, 3, 7) = 7