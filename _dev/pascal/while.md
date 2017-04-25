---
title: Vòng lặp While - Do
---

Ngoài vòng lặp **For**{: .cl-hl } với số lần lặp xác định thì Pascal còn cung cấp thêm loại vòng lặp để thực hiện một công việc nào đó mà không xác định trước số lượt lặp lại.

## Vòng lặp while

Cú pháp:  

```
While <Điều kiện> Do <Công việc>
```
{: .sh_pascal .sh_syntax}

Trong khi `<Điều kiện>`{: .sh_syntax} còn đúng thì `<Công việc>`{: .sh_syntax} sẽ được thực hiện. Như vậy để vòng lặp **While**{: .cl-hl } không bị lặp lại mãi mãi thì bản thân `<Công việc>`{: .sh_syntax} phải chứa lệnh nào đó làm cho `<Điều kiện>`{: .sh_syntax} không còn đúng nữa hoặc bắt buộc thoát ra khỏi vòng lặp **While**{: .cl-hl }. 

Ví dụ tính tổng các số chẵn từ 0 đến 100:

```
Program evenSum;
Var number : Byte;
    sum : Integer;
Begin
    sum := 0;
    number := 100;
    While number > 0 Do
    Begin
       sum := sum + number;
       number := number - 2;
    End;
    Writeln('Sum = ', sum);
End.
```
{: .sh_pascal }

Về bản chất thì có thể thay thế vòng lặp **For - To - Do**{: .cl-hl } bằng vòng lặp **While**{: .cl-hl } như sau:

```
<Biến điều khiển> := <Giá trị đầu>
While <Biến điều khiển> <= <Giá trị cuối> Do
Begin
    ...
    <Biến điều khiển> := <Biến điều khiển> + 1;
End;
```
{: .sh_pascal .sh_syntax }

Cụ thể:

```
Program whileLoop;
Var a : Byte;
Begin
   a := 10;
   While  a <= 15  do
   Begin
      Writeln('a = ', a);
      a := a + 1;
   End;
End.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó in ra kết quả như sau:

> a = 10  
> a = 11  
> a = 12  
> a = 13  
> a = 14  
> a = 15