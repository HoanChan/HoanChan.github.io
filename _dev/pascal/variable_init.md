---
title: Khai báo biến
---

Mỗi biến trong chương trình Pascal là tên đại diện cho vùng bộ nhớ trên RAM mà Pascal sẽ thao tác để lưu trữ cũng như xử lý dữ liệu. Mỗi biến trong Pascal có một kiểu dữ liệu cụ thể xác định kích thước và cách bố trí của nó trong bộ nhớ.

Tên của một biến có thể bao gồm các chữ cái, chữ số, ký tự gạch dưới. Nó phải bắt đầu bằng một ký tự hoặc gạch dưới. Pascal không phân biệt chữ hoa chữ thường, chữ hoa và chữ thường có ý nghĩa tương tự như nhau. Dựa trên các loại cơ bản được trình bày trong chương trước, sẽ có các loại biến cơ bản sau đây:

|   Loại  	  |						Mô tả 									                              	    |
|-------------|-----------------------------------------------------------------------|
|   Ký tự 		|	Các kí tự trong bảng mã ASCII. Đây là một kiểu số nguyên. 		        |
|   Số nguyên	|	Các số nguyên. Độ lớn tuỳ loại kiểu số nguyên. 					              |
|   Số thực 	|	Các số thực. Độ lớn tuỳ loại kiểu số thực. 						                |
|   Logic		  |	Các giá trị logic **True**{: .cl-hl } hoặc **False**{: .cl-hl }. Đây cũng là một loại số nguyên.|
|   Liệt kê		|	Chỉ định danh sách các giá trị do người dùng tự định nghĩa. 	        |
|   Miền con 	|	Biểu diễn các biến, có giá trị nằm trong một dải. 				            |
|   Chuỗi 		|	Lưu trữ một mảng các ký tự. 									                        |
{: .table .table-bordered}

Ngôn ngữ lập trình Pascal cũng cho phép xác định các kiểu biến khác nhau, chúng ta sẽ đề cập đến trong các chương tiếp theo như Pointer, Array, Records, Sets và Files ... Trong chương này, chúng ta hãy nghiên cứu các kiểu biến cơ bản.

## Khai báo biến

Tất cả các biến phải được khai báo trước khi chúng ta sử dụng chúng trong chương trình Pascal. Tất cả các khai báo biến đều nằm sau từ khóa **Var**{: .cl-hl }. Một khai báo chỉ định một danh sách các biến, tiếp theo là dấu hai chấm `:` và kiểu dữ liệu của biến đó. Cú pháp khai báo biến là:

```
Var <Danh sách biến> : <Kiểu dữ liệu>;
```
{: .sh_pascal .sh_syntax }

Ở đây, `<Kiểu dữ liệu>`{: .sh_syntax } bao gồm các kiểu dữ liệu: ký tự, số nguyên, số thực, logic, hoặc bất kỳ kiểu dữ liệu do người dùng định nghĩa, vv. `<Danh sách biến>`{: .sh_syntax } có thể bao gồm một hoặc nhiều tên biến được phân cách bằng dấu phẩy `,`. Ví dụ một số khai báo biến:

```
Var age, weekdays : Integer;
    taxrate, net_income : Real;
    choice, isready : Boolean;
    initials, grade : Char;
    name, surname : String;
```
{: .sh_pascal }

Trong chương trước, chúng ta đã biết Pascal cho phép người dùng khai báo một kiểu. Kiểu này có thể được sử dụng để khai báo các biến kiểu đó. Ví dụ:

```
Type days, age = Integer;
     yes, ok = Boolean;
     name, city = String;
     fees, expenses = Real;
```
{: .sh_pascal }

Bây giờ, các kiểu được định nghĩa như vậy có thể được sử dụng trong các khai báo biến:

```
Var weekdays, holidays : days;
    choice : yes;
    student_name, emp_name : name;
    capital : city;
    cost : expenses;
```
{: .sh_pascal }

{::options parse_block_html="true" /}
<div class="note info">
##### Lưu ý sự khác biệt **Type**{: .cl-hl } và **Var**{: .cl-hl }

Khai báo kiểu cho biết loại dữ liệu như số nguyên, thực, vv, trong khi đó khai báo biến chỉ ra kiểu giá trị của một biến. Quan trọng nhất, tên biến đề cập đến vị trí bộ nhớ mà giá trị của biến sẽ được lưu trữ còn khai báo kiểu thì không như vậy.
</div>

## Khởi tạo giá trị của biến

Các biến được gán giá trị với dấu hai chấm và dấu bằng `:=`, tiếp theo là một biểu thức hay hằng. Cấu trúc chung của thao tác gán giá trị là:

```
<Tên biến> := <Giá trị>;
```
{: .sh_pascal .sh_syntax }

Theo mặc định, các biến trong Pascal không được khởi tạo bằng không lúc khai báo biến. Chúng có thể chứa các giá trị rác. Vì vậy, sẽ tốt hơn nếu gán luôn giá trị ban đầu cho các biến khi khai báo chúng. Cú pháp như sau:

```
Var <Tên biến> : <Kiểu giá trị> = <Giá trị>;
```
{: .sh_pascal .sh_syntax }

Cụ thể hơn:

```
Var age : integer = 15;
    taxrate : real = 0.5;
    grade : char = 'A';
    name : string = 'John Smith';
```
{: .sh_pascal }

Hãy xem một chương trình hoàn chỉnh sử dụng các biến:

```
Program Greetings;
Const message = ' Welcome to the world of Pascal ';
Type name = string;
Var firstname, surname : name;
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

Bạn đã thấy cách sử dụng các kiểu biến đơn giản như **Integer**{: .cl-hl }, **Real**{: .cl-hl } và **Boolean**{: .cl-hl }. Bây giờ, hãy xem các biến của kiểu liệt kê, có thể được khai báo như sau:

```
Var <Danh sách biến> : <Kiểu liệt kê>;
```
{: .sh_pascal .sh_syntax }

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
Var <Tên biến> : <Giá trị đầu> ... <Giá trị cuối>;
```
{: .sh_pascal .sh_syntax }

Ví dụ khai báo các biến kiểu miền con như sau:

```
var marks : 1 ... 100;
    grade : 'A' ... 'E';
    age : 1 ... 25;
```
{: .sh_pascal }

Chương trình cụ thể sử dụng các biến kiểu miền con:

```
Program exSubrange;
Var marks : 1 .. 100;
    grade : 'A' .. 'E';
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

### Phương pháp khai báo biến

Đây là một số khai báo kiểu của Pascal:

``` pascal
type (* Khai báo kiểu*)
KieuSoNguyen = integer;
KieuSoNguyenDuong = QWord;
MangSoNguyen = array[1..239] of KieuSoNguyen;

DiaChi = record
  xa, huyen, tinh: string;
  SoNha: integer;
end;

{ hướng đối tượng }
ConVat = object
  Ten: string;
  Lop: string;
end;
  
ConGa = object(ConVat)
  TiengGay: string;
end;

{ Kiểu đoạn con, kiểu tự định nghĩa }
SoDem = (mot, hai, ba, bon, nam);
SoNho = 0..10;
SoDemNho = mot.. ba;
```

Từ đó, ta có thể khai báo các biến và sử dụng chúng:

``` pascal
var
  x: integer; y: KieuSonguyenduong;
  A: mangsonguyen;
  GaTrong: ConGa;
  z: SoDemNho;
Begin {thân chương trình }
  x:= 5;
  y:= x+10;
  y:= y-1;
  GaTrong.TiengGay:= 'O O O...';
  writeln(GaTrong.TiengGay);
End.
```

Các kiểu phức có thể được xây dựng từ các kiểu đơn:

``` pascal
type
    a = array [1..10] of integer;
    b = record
            a: integer;
            b: char
        end;
    c = file of a;
```

Kiểu chuỗi ký tự (string) là kiểu dữ liệu rất mạnh.

Pascal cũng hỗ trợ dùng [con trỏ]:

``` pascal
type
     a = ^b;
     b = record
            a: integer;
            b: char;
            c: a
         end;
var
     pb: a
```

Ở đây biến `pb` là một con trỏ đến kiểu dữ liệu `b`, là một `record`. Để tạo record mới và gán các giá trị `10` và `A` vào các trường `a` và `b` trong record, có thể dùng các câu lệnh sau:

``` pascal
new(pb);
pb^.a:= 10;
pb^.b:= 'A';
pb^.c:= nil;
...
```

[Danh sách liên kết] cũng có thể được tạo ra bằng cách cho một trường *kiểu con trỏ* (`c`) vào trong record.

  [con trỏ]: con_trỏ "wikilink"
  [Danh sách liên kết]: Danh_sách_liên_kết "wikilink"
