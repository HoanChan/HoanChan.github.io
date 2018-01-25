---
title: Câu lệnh Case - Of
---

Chúng ta có thể thấy câu lệnh [If - Then - Else](/dev/pascal/if) cho phép chúng ta kiểm tra và thực hiện nhiều quyết định trong chương trình. Tuy nhiên khi có quá nhiều giá trị cần phải kiểm tra thì Pascal cung cấp thêm câu lệnh **Case - Of**{: .cl-hl } để thực hiện điều này dễ dàng hơn.

Giống như [If - Then - Else](/dev/pascal/if), **Case - Of**{: .cl-hl } cũng có 2 dạng như sau:

## Dạng thiếu

Cú pháp:

```
Case <Giá trị> Of
    <Trường hợp 1> : <Công việc 1>;
    <Trường hợp 2> : <Công việc 2>;
    ...
    <Trường hợp n> : <Công việc n>;
End;
```
{: .sh_pascal .sh_syntax }

Trong đó `<Giá trị>`{: .sh_syntax } là một biến hoặc biểu thức là kiểu đếm được ([kiểu số nguyên](/dev/pascal/data_types/#int), [kiểu liệt kê](/dev/pascal/data_types/#list) hoặc [kiểu miền con](/dev/pascal/data_types/#subrange)). Nếu giá trị của biểu thức hoặc biến đó rơi vào trường hợp nào thì công việc tương ứng sẽ được thực hiện rồi kết thúc lệnh **Case - Of**{: .cl-hl }.
Nếu giá trị của biểu thức hoặc biến không rơi vào trường hợp nào thì sẽ kết thúc lệnh **Case - Of**{: .cl-hl } mà không làm gì.

```
Program checkCase;
Var grade: char;
Begin
    grade := 'A';
    Case grade Of
        'A' : Writeln('Excellent!');
        'B', 'C': Writeln('Well done');
        'D' : Writeln('You passed');
        'F' : Writeln('Better try again');
    End;
    Writeln('Your grade is  ', grade );
end.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó in ra kết quả như sau:

> Excellent!  
> Your grade is A

Ví dụ về sử dụng [kiểu miền con](/dev/pascal/data_types/#subrange) trong việc kiểm tra giá trị:

```
Program charChecking;
Var c : char;
Begin
    c := 'X';
    Write(c,' là: ')
    Case c Of
     '0' .. '9' : Writeln('chữ số (0-9)');
     'a' .. 'z' : Writeln('chữ viết thường (a-z)');
     'A' .. 'Z' : Writeln('chữ viết hoa (A-Z)');
     '+' , '-'  : Writeln('dấu (+ hoặc -)');
    end;
    result := s;
End.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó in ra kết quả như sau:

> X là: chữ viết hoa (A-Z)

## Dạng đầy đủ

Cú pháp:

```
Case <Giá trị> Of
    <Trường hợp 1>: <Công việc 1>;
    <Trường hợp 2>: <Công việc 2>;
    ...
    <Trường hợp n>: <Công việc n>;
    Else <Công việc n + 1>;
End;
```
{: .sh_pascal .sh_syntax }

Nếu giá trị của biểu thức hoặc biến đó rơi vào trường hợp nào thì công việc tương ứng sẽ được thực hiện rồi kết thúc lệnh **Case - Of**{: .cl-hl }.
Nếu giá trị của biểu thức hoặc biến không rơi vào trường hợp nào thì sẽ thực hiện `<Công việc n + 1>`{: .sh_syntax } và kết thúc lệnh **Case - Of**{: .cl-hl }.

```
Program checkCase;
Var grade: char;
Begin
    grade := 'F';
    Case grade Of
        'A' : Writeln('Excellent!');
        'B', 'C': Writeln('Well done');
        'D' : Writeln('You passed');
    Else 
        Writeln('Better try again');
    End;
    Writeln('Your grade is  ', grade );
end.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó in ra kết quả như sau:

> Better try again 
> Your grade is F