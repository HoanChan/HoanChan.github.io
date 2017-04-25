---
title: Vòng lặp For - To - Do
---

- Chép phạt 100 lần
- Chạy 10 vòng quanh sân
- Hôn nhau 3 cái khi chia tay

Trong cuộc sống, những hành động trên được gọi là được lặp lại và số lần lặp lại là đếm được. Trong Pascal, để mô phỏng thao tác lặp lại một hành động nào đó, Pascal cung cấp vòng lặp For với 2 dạng nhau sau:

## Vòng lặp For - To - Do

Cấu trúc:

```
For <Biến điều khiển> := <Giá trị đầu> To <Giá trị cuối> Do <Công việc>;
```
{: .sh_pascal .sh_syntax }

Với `<Biến điều khiển>`{: .sh_syntax } là một biến kiểu đếm được (số nguyên, liệt kê, miền con), được gọi là biến điều khiển, biến chỉ mục hoặc biến đếm. `<Giá trị đầu>`{: .sh_syntax } và `<Giá trị cuối>`{: .sh_syntax } quy định khoản giá trị mà biến điều khiển có thể nhận được. Và `<Công việc>`{: .sh_syntax} là phần thân của vòng lặp, có thể là một lệnh đơn giản hoặc một khối lệnh được đặt trong cặp **Begin**{: .cl-hl } và **End**{: .cl-hl }.

Ví dụ:

```
For i:= 1 To 10 Do Writeln(i);
```
{: .sh_pascal }

Vòng lặp For - To - Do được thực hiện như sau:
- Bước 1: Gán giá trị đầu cho `<Biến điều khiển>`{: .sh_syntax }
- Bước 2: Kiểm tra giá trị của `<Biến điều khiển>`{: .sh_syntax }
    + Nếu `<Biến điều khiển>`{: .sh_syntax } ≤ `<Giá trị cuối>`{: .sh_syntax } thì thực hiện `<Công việc>`{: .sh_syntax}
    + Nếu `<Biến điều khiển>`{: .sh_syntax } > `<Giá trị cuối>`{: .sh_syntax } thì kết thúc vòng lặp.
- Bước 3: Nếu `<Biến điều khiển>`{: .sh_syntax } < `<Giá trị cuối>`{: .sh_syntax } thì tăng giá trị của `<Biến điều khiển>`{: .sh_syntax } lên 1 đơn vị rồi quay lại bước 2.

Ví dụ một chương trình cụ thể:

```
Program forLoop;
Var a : Byte;
Begin
    For a := 10  To 15 Do
        Writeln('a = ', a);
end.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó in ra kết quả như sau:

> a = 10  
> a = 11  
> a = 12  
> a = 13  
> a = 14  
> a = 15

Ví dụ tính tổng các số liên tiếp từ 1 đến 100

```
Program sumCalc;
Var num : Byte;
    sum : Integer;
Begin
    sum := 0;
    For num := 1 To 100 Do
        sum := sum + i;
    Writeln('1 + 2 + 3 + ... + 100 = ', sum);
End.
```
{: .sh_pascal }

## Vòng lặp For - DownTo - Do

Cấu trúc:

```
For <Biến điều khiển> := <Giá trị đầu> DownTo <Giá trị cuối> Do <Công việc>;
```
{: .sh_pascal .sh_syntax }

Vòng lặp For - DownTo - Do được thực hiện như sau:
- Bước 1: Gán giá trị đầu cho `<Biến điều khiển>`{: .sh_syntax }
- Bước 2: Kiểm tra giá trị của `<Biến điều khiển>`{: .sh_syntax }
    + Nếu `<Biến điều khiển>`{: .sh_syntax } ≥ `<Giá trị cuối>`{: .sh_syntax } thì thực hiện `<Công việc>`{: .sh_syntax}
    + Nếu `<Biến điều khiển>`{: .sh_syntax } < `<Giá trị cuối>`{: .sh_syntax } thì kết thúc vòng lặp.
- Bước 3: Nếu `<Biến điều khiển>`{: .sh_syntax } > `<Giá trị cuối>`{: .sh_syntax } thì giảm giá trị của `<Biến điều khiển>`{: .sh_syntax } xuống 1 đơn vị rồi quay lại bước 2.

Ví dụ một chương trình cụ thể:

```
Program forLoop;
Var a : Byte;
Begin
    For a := 10  DownTo 5 Do
        Writeln('a = ', a);
end.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó in ra kết quả như sau:

> a = 10  
> a = 9  
> a = 8  
> a = 7  
> a = 6  
> a = 5