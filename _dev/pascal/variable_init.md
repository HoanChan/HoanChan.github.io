---
title: Khai báo biến
---

Mỗi biến trong chương trình Pascal là tên đại diện cho vùng bộ nhớ trên RAM mà Pascal sẽ thao tác để lưu trữ cũng như xử lý dữ liệu. Mỗi biến trong Pascal có một kiểu dữ liệu cụ thể xác định kích thước và cách bố trí của nó trong bộ nhớ.

Tên của một biến có thể bao gồm các chữ cái, chữ số, ký tự gạch dưới. Nó phải bắt đầu bằng một ký tự hoặc gạch dưới. Pascal không phân biệt chữ hoa chữ thường, chữ hoa và chữ thường có ý nghĩa tương tự như nhau. Dựa trên các loại cơ bản được trình bày trong chương trước, sẽ có các loại biến cơ bản sau đây:

|   Loại 		|						Mô tả 										|
|---------------|-------------------------------------------------------------------|
|   Ký tự 		|	Các kí tự trong bảng mã ASCII. Đây là một kiểu số nguyên. 		|
|   Số nguyên	|	Các số nguyên. Độ lớn tuỳ loại kiểu số nguyên. 					|
|   Số thực 	|	Các số thực. Độ lớn tuỳ loại kiểu số thực. 						|
|   Logic		|	Các giá trị logic `True` hoặc `False`. Đây cũng là một loại số nguyên.|
|   Liệt kê		|	Chỉ định danh sách các giá trị do người dùng tự định nghĩa. 	|
|   Miền con 	|	Biểu diễn các biến, có giá trị nằm trong một dải. 				|
|   Chuỗi 		|	Lưu trữ một mảng các ký tự. 									|
{: .table .table-bordered}

Ngôn ngữ lập trình Pascal cũng cho phép xác định các kiểu biến khác nhau, chúng ta sẽ đề cập đến trong các chương tiếp theo như Pointer, Array, Records, Sets và Files ... Trong chương này, chúng ta hãy nghiên cứu các kiểu biến cơ bản.

## Khai báo biến

Tất cả các biến phải được khai báo trước khi chúng ta sử dụng chúng trong chương trình Pascal. Tất cả các khai báo biến đều nằm sau từ khóa `Var`. Một khai báo chỉ định một danh sách các biến, tiếp theo là dấu hai chấm `:` và kiểu dữ liệu của biến đó. Cú pháp khai báo biến là:

```
Var Danh_Sách_Biến : Kiểu_Dữ_Liệu;
```
{: .sh_pascal }

Ở đây, `Kiểu_Dữ_Liệu` bao gồm các kiểu dữ liệu: ký tự, số nguyên, số thực, logic, hoặc bất kỳ kiểu dữ liệu do người dùng định nghĩa, vv. `Danh_Sách_Biến`  có thể bao gồm một hoặc nhiều tên biến được phân cách bằng dấu phẩy `,`. Ví dụ một số khai báo biến:

```
Var age, weekdays : integer;
    taxrate, net_income: real;
    choice, isready: boolean;
    initials, grade: char;
    name, surname : string;
```
{: .sh_pascal }

Trong chương trước, chúng ta đã biết Pascal cho phép người dùng khai báo một kiểu. Kiểu này có thể được sử dụng để khai báo các biến kiểu đó. Ví dụ:

```
Type days, age = integer;
     yes, ok = boolean;
     name, city = string;
     fees, expenses = real;
```
{: .sh_pascal }

Bây giờ, các kiểu được định nghĩa như vậy có thể được sử dụng trong các khai báo biến:

```
Var weekdays, holidays : days;
    choice: yes;
    student_name, emp_name : name;
    capital: city;
    cost: expenses;
```
{: .sh_pascal }

