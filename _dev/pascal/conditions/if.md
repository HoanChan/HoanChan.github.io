---
title: Câu lệnh If - Then - Else
---

Trong cuộc sống, có những hoạt động chỉ được thực hiện khi một điều kiện cụ thể được xảy ra. Điều kiện thường là một sự kiện được mô tả sau từ “Nếu”. Vd: Nếu em bị ốm, em sẽ không tập thể dục buổi sáng... Trong Pascal cũng như vậy.

Trước khi bắt đầu về câu lệnh điều kiện, chúng ta sẽ tìm hiểu tính đúng/sai, phép so sánh và cấu trúc rẽ nhánh.

## Tính đúng hoặc sai của các điều kiện

Khi kết quả kiểm tra là đúng, ta nói điều kiện được thỏa mãn, còn khi kết quả kiểm tra là sai, ta nói điều kiện không thỏa mãn.

> Nếu x chia hết cho 2, thì x là số chẵn; ngược lại x là số lẻ.
>
> Nếu nhấn phím Enter, thì sẽ đưa con trỏ soạn thảo xuống dòng.

## Điều kiện và phép so sánh

Các phép so sánh có vai trò rất quan trọng trong việc mô tả thuật toán và lập trình. Chúng thường được sử dụng để biểu diễn các điều kiện. Ví dụ:

> Tìm số lớn nhất: Nếu a > b, thì a là số lớn nhất; ngược lại b là số lớn nhất.

## Câu lệnh If - Then - Else

Trong Pascal, câu lệnh điều kiện được viết như sau:

### Dạng thiếu:

```
If <điều kiện> Then <câu lệnh>; 
```
{: .sh_pascal .sh_syntax }

Trong đó `<Điều kiện>`{: .sh_syntax} là biểu thức hoặc biến có kiểu dữ liệu là **Boolean**{: .cl-hl } (chỉ nhận 1 trong 2 giá trị là **True**{: .cl-hl } hoặc **False**{: .cl-hl }). Pascal giả định bất kỳ giá trị khác không và không phải là **nil**{: .cl-hl } là **True**{: .cl-hl }, và nếu nó là **0**{: .cl-hl } hoặc **nil**{: .cl-hl }, thì nó được giả định là giá trị **False**{: .cl-hl }. Ví dụ:

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

### Dạng đầy đủ:

```
If <điều kiện> Then 
    <câu lệnh 1> 
Else 
    <câu lệnh 2>; 
```
{: .sh_pascal .sh_syntax }

Tương tự như dạng thiếu tuy nhiên khi điều kiện nhận giá trị là **False**{: .cl-hl } thì `<câu lệnh 2>`{: .sh_syntax } sẽ được thực thi thay vì không làm gì cả như dạng thiếu.

Ví dụ:

```
If (x mod 2) = 0 Then 
    Writeln(x,' la so chan') 
Else 
    Writeln(x,' la so le');
```
{: .sh_pascal }

{::options parse_block_html="true" /}
<div class="note info">
##### Lưu ý dấu **;**{: .cl-hl } và từ khoá **Else**{: .cl-hl }

Câu lệnh đứng trước **Else**{: .cl-hl } thì không được có dấu chấm phẩy **;**{: .cl-hl } vì Pascal hiểu là gặp dấu chấm phẩy **;**{: .cl-hl } thì kết thúc luôn câu lệnh **If**{: .cl-hl }.
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