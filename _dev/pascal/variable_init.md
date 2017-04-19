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

{::options parse_block_html="true" /}
<div class="note info">
##### Lưu ý sự khác biệt `Type` và `Var`

Khai báo kiểu cho biết loại dữ liệu như số nguyên, thực, vv, trong khi đó khai báo biến chỉ ra kiểu giá trị của một biến. Quan trọng nhất, tên biến đề cập đến vị trí bộ nhớ mà giá trị của biến sẽ được lưu trữ còn khai báo kiểu thì không như vậy.
</div>

## Khởi tạo giá trị của biến

Các biến được gán giá trị với dấu hai chấm và dấu bằng `:=`, tiếp theo là một biểu thức hay hằng. Cấu trúc chung của thao tác gán giá trị là:

```
Variable_name: = giá trị;
```
{: .sh_pascal }

Theo mặc định, các biến trong Pascal không được khởi tạo bằng không lúc khai báo biến. Chúng có thể chứa các giá trị rác. Vì vậy, sẽ tốt hơn nếu gán luôn giá trị ban đầu cho các biến khi khai báo chúng. Cú pháp như sau:

```
Var Tên_biến : Kiểu_giá_trị = Giá_trị;
```
{: .sh_pascal }

Cụ thể hơn:

```
age: integer = 15;
taxrate: real = 0.5;
grade: char = 'A';
name: string = 'John Smith';
```
{: .sh_pascal }

Hãy xem một chương trình hoàn chỉnh sử dụng các biến:

```
Program Greetings;
Const message = ' Welcome to the world of Pascal ';
Type name = string;
Var firstname, surname: name;
Begin
   Writeln('Please enter your first name: ');
   Readln(firstname);
   Writeln('Please enter your surname: ');
   Readln(surname);
   Writeln;
   Writeln(message, ' ', firstname, ' ', surname);
End.
```
{: .sh_pascal }

Đoạn chương trình trên sẽ cho chúng ta kết quả như sau khi chạy chương trình:

> Please enter your first name:  
> John  
> Please enter your surname:  
> Smith  
> Welcome to the world of Pascal John Smith

## Các biến kiểu liệt kê

Bạn đã thấy cách sử dụng các kiểu biến đơn giản như integer, real và boolean. Bây giờ, hãy xem các biến của kiểu liệt kê, có thể được khai báo như sau:

```
Var Tên_biến_1, Tên_biến_2, ...  : Kiểu_liệt_kê;
```
{: .sh_pascal}

Khi bạn khai báo kiểu liệt kê, bạn có thể khai báo các biến kiểu đó. Ví dụ:

```
Type months = (Jan, Feb, Mar, Apr, May, June, July, Aug, Sep, Oct, Nov, Dec);
Var m: months;
...
m := Jan;
```
{: .sh_pascal }

Ví dụ sau minh hoạ cách sử dụng trong một chương trình thực tế:

```
Program exEnumeration;
Type beverage = (coffee, tea, milk, water, coke, limejuice);
Var drink : beverage;
Begin
   Writeln('Which drink do you want?');
   drink := limejuice;   
   Writeln('You can drink ', drink);
End.
```
{: .sh_pascal }

Khi đoạn code trên được biên dịch và thực thi, nó tạo ra kết quả như sau:

> Which drink do you want?  
> You can drink limejuice

## Các biến kiểu miền con

Có thể khai báo trực tiếp kiểu miền con như sau:

```
Var Tên_biến : Giá_trị_đầu ... Giá_trị_cuối;
```
{: .sh_pascal }

Ví dụ khai báo các biến kiểu miền con như sau:

```
var marks: 1 ... 100;
    grade: 'A' ... 'E';
    age: 1 ... 25;
```
{: .sh_pascal }

Chương trình cụ thể sử dụng các biến kiểu miền con:

```
Program exSubrange;
Var marks: 1 .. 100;
    grade: 'A' .. 'E';
Begin
   Writeln( 'Enter your marks(1 - 100): ');
   Readln(marks);
   Writeln( 'Enter your grade(A - E): ');
   Readln(grade);
   Writeln('Marks: ' , marks, ' Grade: ', grade);
End.
```
{: .sh_pascal }
Khi đoạn code trên được biên dịch và thực thi, nó tạo ra kết quả như sau:

> Enter your marks(1 - 100):  
> 100  
> Enter your grade(A - E):  
> A  
> Marks: 100 Grade: A
