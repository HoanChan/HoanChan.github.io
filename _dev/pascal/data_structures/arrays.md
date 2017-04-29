---
title: Kiểu mảng
---

Mảng (Array) là một tập hợp các phần tử cố định có cùng kiểu dữ liệu.

## Mảng 1 chiều
{: #1d}

Khai báo

Cách 1:

```
Type <Tên kiểu mảng> = Array[Chỉ số] Of <Kiểu phần tử>;
Var <Tên biến mảng> : <Tên kiểu mảng>;
```
{: .sh_pascal .sh_syntax }

Cách 2:
```
Var <Tên biến mảng> : Array[Chỉ số] Of <Kiểu phần tử>;
```
{: .sh_pascal .sh_syntax }

Trong đó chỉ số phải là một kiểu miền con, kiểu vô hướng liệt kê, kiểu char hoặc kiểu boolean. {Tuy nhiên. người ta thường dùng kiểu miền con các số nguyên là dễ hình dung nhất vì nó gần giống với khái niệm chỉ số trong toán học.}

Ví dụ:

```
Type Mangnguyen = Array[1..5] Of Integer;
    MangKytu = Array[Byte] Of Char;
Var A : Mangnguyen;
    C : MangKytu;
```
{: .sh_pascal }

hoặc:

```
Var A : Array[1..5] Of Integer;
    C : Array[Byte] Of Char;
```
{: .sh_pascal }

Cách khai báo trực tiếp có vẻ đơn giản và ngắn gọn hơn so với cách khai báo gián tiếp nhưng nhiều TH ta bắt buộc phải dùng cách khai báo gián tiếp.

## Truy xuất

Mỗi phần tử của mảng được truy xuất thông qua cú pháp:

```
<Tên biến mảng>[<Chỉ số>]
```
{: .sh_syntax }

Ví dụ: A[1], A[2],…

Chú ý: Hai mảng A và B có cùng số phần tử và cùng kiểu phần tử, ta có thể thay toàn bộ phần tử A bởi các phần tử tương ứng của B bằng một phép gán A := B.

## Mảng nhiều chiều
{: #nd}

Khai báo

Cách 1:

```
Type <Tên kiêu mảng> = Array[Chỉ số 1, Chỉ số 2] Of <Kiểu phần tử>;
Var <Tên biến mảng> : <Tên kiểu mảng>;
```
{: .sh_pascal .sh_syntax }

Cách 2:

```
Var <Tên biến mảng> : Array[chỉ số 1, chỉ số 2] Of <Kiểu phần tử>;
```
{: .sh_pascal .sh_syntax }

Chỉ số 1 và chỉ số 2 là các chỉ số của hàng và cột, chúng cách nhau bởi dấu phẩy

Ví dụ:

```
Type Mangnguyen = Array[1..5,1..3] Of Integer;
Var A : Mangnguyen;
```
{: .sh_pascal }

hoặc:

```
Var a: Array[1..5, 1..3] Of Integer;
```
{: .sh_pascal }

Sau khi khai báo mảng A sẽ có 5 hàng và 3 cột.

Chú ý: Mảng 2 chiều còn gọi là ma trận.

## Cách truy xuất

Để truy xuất đến phần tử hàng i cột j ta viết A[i, j] hoặc a[i][j].

Ví dụ: A[1, 2], A[2][5].
