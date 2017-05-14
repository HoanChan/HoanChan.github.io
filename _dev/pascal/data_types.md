---
title: Các kiểu dữ liệu
---

Kiểu dữ liệu của một thực thể chỉ ra ý nghĩa của thực thể đó kèm theo các ràng buộc, giá trị, cách thức lưu trữ và các lệnh xử lý đi kèm với nó.

## Phân loại
{: #classify}

Kiểu dữ liệu có thể được phân loại với các dạng sau:
- Các kiểu vô hướng: 
	+ Kiểu dữ liệu chuẩn: số nguyên, số thực, logic, kí tự.
	+ Do người dùng định nghĩa: miền con, kiệt kê.
- Các kiểu dữ liệu có cấu trúc được tạo ra từ các kiểu dữ liệu vô hướng: mảng, chuỗi, bản ghi, tập tin và tập hợp.
- Kiểu dữ liệu con trỏ: *chúng ta sẽ tìm hiểu sau*.

## Khai báo kiểu dữ liệu
{: #type}

Khai báo kiểu được sử dụng nhằm xác định kiểu dữ liệu mới dùng khi khai báo biến. Cú pháp khai báo kiểu là

```
Type <Danh sách kiểu> = <Kiểu dữ liệu>;
```
{: .sh_pascal .sh_syntax }

Ví dụ sau đâu định nghĩa các kiểu dữ liệu mới:
- Kiểu dữ liệu **dates**{: .cl-hl } và **age**{: .cl-hl } là kiểu số nguyên.
- Kiểu dữ liệu **yes**{: .cl-hl } và **ok**{: .cl-hl } là kiểu logic.
- Kiểu dữ liệu **name**{: .cl-hl } và **city**{: .cl-hl } là kiểu chuỗi.
- Kiểu dữ liệu **fees**{: .cl-hl }, **expenses**{: .cl-hl } là kiểu số thực.

```
Type days, age = integer;
     yes, ok = boolean;
     name, city = string;
     fees, expenses = real;
```
{: .sh_pascal }

## Kiểu số nguyên
{: #int}

|   Kiểu       |  Tối thiểu     |   Tối đa      |   Định dạng        |
|--------------|----------------|---------------|--------------------|
|   Integer    |  -2147483648   |   2147483647  |   Có dấu 32-bit    |
|   Cardinal   |  0             |   4294967295  |   Không dấu 32-bit |
|   Shortint   |  -128          |   127         |   Có dấu 8-bit     |
|   Smallint   |  -32768        |   32767       |   Có dấu 16-bit    |
|   Longint    |  -2147483648   |   2147483647  |   Có dấu 32-bit    |
|   Int64      |  -2^63         |   2^63 - 1    |   Có dấu 64-bit    |
|   Byte       |  0             |   255         |   Không dấu 8-bit  |
|   Word       |  0             |   65535       |   Không dấu 16-bit |
|   Longword   |  0             |   4294967295  |   Không dấu 32-bit |
{: .table .table-bordered .table-responsive }

## Kiểu số thực
{: #real}

| Tên kiểu | Khoảng cách            | Số chữ số có nghĩa | Dung lượng theo bytes |
|----------|------------------------|--------------------|-----------------------|
| Real     | phụ thuộc vào nền tảng | Không rõ           | 4 đến 8               |
| Single   | 1.5E-45.. 3.4E38       | 7-8                | 4                     |
| Double   | 5.0E-324.. 1.7E308     | 15-16              | 8                     |
| Extended | 1.9E-4932.. 1.1E4932   | 19-20              | 10                    |
| Comp     | -2E64+1.. 2E63-1       | 19-20              | 8                     |
| Currency | -922337203685477.5808.. 922337203685477.5807 | 19-20 | 8            |
{: .table .table-bordered .table-responsive }

## Kiểu chữ
{: #text}

Tất cả các kiểu chữ đều có thể lưu được các ký tự trong bảng mã [ASCII](https://vi.wikipedia.org/wiki/ASCII)

| Tên         | Số ký tự lưu được     | Dung lượng theo bytes |
|-------------|-----------------------|-----------------------|
| Char        | 1                     | 1                     |
| Widechar    | ?                     | 2                     |
| String      | 255                   | ?                     |
| Shortstring | Tương tự String (255) | ?                     |
| Ansistring  | Tùy thuộc vào bộ nhớ  | ?                     |
{: .table .table-bordered .table-responsive }

## Kiểu logic
{: #logic}

Trong Pascal kiểu logic có tên là **Boolean**{: .cl-hl } là một đại lượng chỉ có thể nhận hai giá trị **True**{: .cl-hl } (đúng) hoặc **False**{: .cl-hl } (sai). Pascal giả định bất kỳ giá trị khác `0` và không phải là `nil` là **True**{: .cl-hl }, và nếu nó là `0` hoặc `nil`, thì nó được giả định là giá trị **False**{: .cl-hl }.

Nhìn chung kiểu **Boolean**{: .cl-hl } dùng để thể hiện kết quả của các [điều kiện và phép so sánh](/dev/pascal/conditions/#logic) thường được dùng để đưa ra một [lựa chọn](/dev/pascal/conditions) nào đó trong chương trình.

## Kiểu liệt kê
{: #list}

Kiểu liệt kê là các kiểu dữ liệu do người dùng tự định nghĩa. Chúng cho phép các giá trị được liệt kê trong một danh sách. Chỉ cho phép các toán tử gán và các toán tử quan hệ trên kiểu dữ liệu liệt kê. Các kiểu dữ liệu được khai báo như sau:

```
Type <Tên kiểu liệt kê> = (<Giá trị 1>, <Giá trị 2>, <Giá trị 3>, ...)
```
{: .sh_pascal .sh_syntax}

Sau đây là một số ví dụ về khai báo kiểu liệt kê:

```
Type SUMMER = (April, May, June, July, September);
     COLORS = (Red, Green, Blue, Yellow, Magenta, Cyan, Black, White);
     TRANSPORT = (Bus, Train, Airplane, Ship);
```
{: .sh_pascal }

Các giá trị trong danh sách liệt kê có thứ tự đúng như thứ tự chúng được khai báo. Kiểu liệt kê không hỗ trợ dạng số hoặc chuỗi kí tự.

## Kiểu miền con
{: #subrange}

Các kiểu miền con dùng để khai báo các biến có giá trị nằm trong một dải nhất định. Ví dụ, nếu là tuổi thì nên nằm giữa 18 đến 100 năm, một biến tuổi (age) có thể được khai báo là:

```
Var age: 18 ... 100;
```
{: .sh_pascal }

Chúng ta cũng có thế tự tạo ra 1 kiểu dữ liệu sử dụng miền con. Cú pháp để khai báo kiểu dữ liệu miền con là:

```
Type <Tên kiểu miền con> = <Giới hạn dưới> ... <Giới hạn trên>;
```
{: .sh_pascal .sh_syntax }

Sau đây là ví dụ về khai báo biến sử dụng kiểu miền con:

```
Const P = 18;
      Q = 90;
Type Number = 1 ... 100;
     Value = P ... Q;
```
{: .sh_pascal }

Các kiểu miền con cũng có thể được tạo ra từ một đoạn của kiểu liệt kê đã được khai báo từ trước. Ví dụ:

```
Type months = (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec);
     summer = Apr ... Aug;
     winter = Oct ... Dec;
```
{: .sh_pascal }

## Hằng số
{: #const}

Sử dụng hằng số làm cho một chương trình dễ đọc, dễ sửa đổi hơn. Pascal hỗ trợ các hằng số thuộc kiểu số, logic, chuỗi và các ký tự. Hằng số có thể được khai báo trong phần khai báo của chương trình bằng từ khoá **Const**{: .cl-hl }.

Cú pháp của khai báo hằng:

```
Const <Tên hằng> = <Giá trị>;
```
{: .sh_pascal .sh_syntax }

Sau đây là một số ví dụ về khai báo hằng:

```
Const VELOCITY_LIGHT = 10;
      PIE = 3.141592;
      NAME = 'Stuart Little';
      CHOICE = true;
      OPERATOR = '+';
```
{: .sh_pascal }

Tất cả các khai báo hằng phải được để trước khai báo biến.
