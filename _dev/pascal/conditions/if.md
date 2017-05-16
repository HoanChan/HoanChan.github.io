---
title: Câu lệnh If - Then - Else
---

Trong Pascal, câu lệnh điều kiện được viết như sau:

## Dạng thiếu:

```
If <Điều kiện> Then <Công việc>; 
```
{: .sh_pascal .sh_syntax }

Trong đó `<Điều kiện>`{: .sh_syntax} là biểu thức hoặc biến có kiểu dữ liệu là [Boolean](/dev/pascal/data_types/#logic). Khi `<Điều kiện>`{: .sh_syntax} nhận giá trị là **True**{: .cl-hl } thì `<Công việc>`{: .sh_syntax} sẽ được thực hiện. Khi `<Điều kiện>`{: .sh_syntax} nhận giá trị là **False**{: .cl-hl } thì không làm gì cả. Ví dụ:

```
If (x mod 2) = 0 Then Writeln(x,' la so chan');
```
{: .sh_pascal }

Chúng ta hãy thử xem một ví dụ hoàn chỉnh:

```
Program ifChecking;
Var a : Integer;
Begin
    a := 10;  
    If a < 20 Then { Nếu a bé hơn 20 thì thông báo: }
        Writeln('a be hon 20 ' );
    Writeln('gia tri cua a là: ', a);
End.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó in ra kết quả như sau:

> a be hon 20  
> gia tri cua a la: 10

## Dạng đầy đủ:

```
If <Điều kiện> Then 
    <Công việc 1> 
Else 
    <Công việc 2>; 
```
{: .sh_pascal .sh_syntax }

Tương tự như dạng thiếu tuy nhiên khi `<Điều kiện>`{: .sh_syntax} nhận giá trị là **False**{: .cl-hl } thì `<Công việc 2>`{: .sh_syntax } sẽ được thực thi thay vì không làm gì cả như dạng thiếu.

Ví dụ:

```
If (x mod 2) = 0 Then 
    Writeln(x,' la so chan') 
Else 
    Writeln(x,' la so le');
```
{: .sh_pascal }

<div class="note info">
##### Lưu ý dấu `;` và từ khoá **Else**{: .cl-hl }

Câu lệnh đứng trước **Else**{: .cl-hl } thì không được có dấu chấm phẩy `;` vì Pascal hiểu là gặp dấu chấm phẩy `;` thì kết thúc luôn câu lệnh **If**{: .cl-hl }.
</div>

Chúng ta hãy thử xem một ví dụ hoàn chỉnh:

```
Program ifelseChecking;
Var a : Integer;
Begin
    a := 100;
    If a < 20 Then { Nếu a bé hơn 20 thì thông báo: }
        Writeln('a be hon 20')
    Else (* Nếu điều kiện sai thì in ra: *) 
        Writeln('a khong lon hon 20' );
    writeln('gia tri cua a la: ', a);
end.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó in ra kết quả như sau:

> a khong be hon 20  
> gia tri cua a la: 100

Và đương nhiên câu lệnh sau **Then**{: .cl-hl } và sau **Else**{: .cl-hl } cũng có thể là một khối lệnh được bao bởi cặp **Begin**{: .cl-hl } và **End**{: .cl-hl } hoặc thậm chí là một câu lệnh **If**{: .cl-hl } khác.

```
Program ifelse_ifelseChecking;
Var a : Integer;

Begin
    a := 100;
    If a = 10 Then
      Writeln('gia tri cua a = 10')
    Else If a = 20 Then
      Writeln('gia tri cua a = 20')
    Else If a = 30 Then 
      Writeln('gia tri cua a = 30')
    Else
        Begin
            Writeln('khong co gia tri nao phu hop');
            Writeln('chinh xac gia tri cua a = ', a);
        End;
End.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó in ra kết quả như sau:

> khong co gia tri nao phu hop  
> chinh xac gia tri cua a = 100