---
title: Nhập xuất dữ liệu
---

Các nội dung chính
- TOC
{:toc}

Việc nhập xuất dữ liệu là đều luôn phải làm ở bất cứ chương trình nào! Ở Pascal, việc nhập xuất dữ liệu sẽ gồm các loại:

- Xuất dữ liệu ra màn hình.
- Nhập dữ liệu từ bàn phím.
- Xuất dữ liệu ra tập tin.
- Nhập dữ liệu từ tập tin.

Ở phần này, chúng ta cùng tìm hiểu các nhập xuất dữ liệu thông qua 2 thành phần cơ bản của máy tính là bàn phím và màn hình. Phần nhập xuất qua tập tin các bạn có thể xem [tại đây](/dev/pascal/files)

## Xuất dữ liệu

Các bạn còn nhớ chương trình sau đây chứ?

```
Program Hello_World;
Uses CRT;
Begin
   Writeln('Hello, World!');
   Readkey;
End.
```
{: .sh_pascal}

Ở chương trình trên lệnh `Writeln('Hello, World!');` dùng để viết dòng chữ `Hello, World!` ra màn hình. `Writeln` là lệnh dùng để xuất dữ liệu trong Pascal với cú pháp như sau:

```
Writeln(<nội dung cần viết>);
```
{: .sh_pascal}

Với `<nội dung cần viết>` là các giá trị sẽ được in ra màn hình, nếu có nhiều nội dung cần viết thì chúng được ngăn cách với nhau bởi dấu phẩy `,`. Có các loại sau:

### Văn bản

Văn bản cần được viết ra giống y như trong câu lệnh. Đây được gọi là các [chuỗi chữ](/dev/pascal/strings) và phải bắt đầu và kết thúc với một dấu trích dẫn đơn (dấu nháy đơn) `'`.

Ví dụ: `Writeln('Hello, I am Pascal!');` sẽ viết ra `Hello, I am Pascal!`.

{::options parse_block_html="true" /}
<div class="note info">
#### Lưu ý cách viết chuỗi

Cặp dấu `'` để bao quanh văn bản chỉ là để đánh dấu đó là 1 chuỗi chữ và sẽ không được in ra.
</div>

### Nội dung các biến

```
result := 5;
Writeln (result);
```
{: .sh_pascal}

Sẽ viết ra màn hình `5`

### Giá trị của biểu thức

```
a := 5; b := 3;
Writeln (a + b);
```
{: .sh_pascal}

Sẽ viết ra màn hình `8`

Một lệnh `Writeln` có thể kết hợp cả 2 hay 3 loại. Ví dụ:

```
result := 5;
Writeln('The Result is: ', result); { The Result is: 5 }
index := 3;
Writeln('A[', index, '] = ', result); { A[3] = 5 }
a := 3; b := 5; c:= 7;
Writeln('A[', index, '] = ', a + b + c); { A[3] = 8 }
```
{: .sh_pascal}

<div class="note warning">
#### Cẩn thận với số thực

Khi giá trị của một biến hoặc một biểu thức là một số thực thì mặc định nó được ghi ra dưới dạng dấu phẩy động, ta cần định dạng lại số thực như sau:

```
Writeln('The Result is: ', 4 / 3); { The Result is: 7.5000000000000000E-001 }
Writeln('The Result is: ', 4 / 3 :0:2); { The Result is: 0.75 }
```
{: .sh_pascal}

`:0:2` là dùng để định dạng số. Trong đó `:0` là chừa 0 khoảng trống để in phần nguyên và `:2` là in 2 chữ số ở phần thập phân. Muốn 4 số phần thập phân thì dùng `:0:4`
</div>

<div class="note">
#### Có thể dùng `Writeln;`

Lệnh `Writeln` có thể được dùng mà không cần chỉ định các giá trị cần được in ra! Khi không chỉ định các giá trị cần in ra thì lệnh `Writeln` sẽ in ra 1 dấu xuống dòng
</div>

## Nhập dữ liệu

Nhập dữ liệu tức là đưa một thông tin nào đó vào chương trình. Cú pháp cơ bản để nhập dữ liệu từ bàn phím vào Pascal như sau:

``` text
Read(<Danh sách biến>);
```
{: .sh_pascal }

Trong đó `Danh sách biến` là danh sách các biến cần được nhập dữ liệu từ bàn phím và được ngăn cách với nhau vởi dấu phẩy     `,` 
Lệnh `Read` xử lý đầu vào dưới dạng một chuỗi các kí tự với các dòng ngăn cách nhau bởi một kí tự kết thúc dòng. Các biến được đọc bằng `Read` có thể nằm trên 1 hoặc nhiều dòng, miễn sau chúng được ngăn cách nhau bởi dấu `cách trắng`, dấu `Tab` hay dấu `xuống dòng` là được.

Pascal còn có lệnh `Readln` để đọc dữ liệu đầu vào mà mỗi biến nằm riêng trên 1 dòng. Nếu có nhiều giá trị nằm chung 1 dòng thì lệnh `Readln` sẽ chỉ đọc giá trị đầu tiên. `Readln` có cú pháp như sau:

``` text
Readln(<Danh sách biến>);
```
{: .sh_pascal }

> Giả sử khi chạy chương trình người ta nhập dữ liệu đầu vào như sau:
> 45 97 3
> 1 2 3

Ví dụ như `a`, `b`, `c`, `d` đều là số nguyên thì các lệnh `Read` và `Readln` sẽ đọc được nội dung như sau:

``` text
Read(a); { a = 45 }		
Read(b); { b = 97 }
```
{: .sh_pascal }
```
Readln(a); { a = 45 }
Read(b); { b = 1 }
```
{: .sh_pascal }
```
Read(a, b, c, d); { a = 45, b = 97, c = 3, d = 1 }
```
{: .sh_pascal }
```
Readln(a, b); {a = 45, b = 97 }
Readln(c, d); { c = 1, d = 2 }
```
{: .sh_pascal }

Khi đọc bằng số nguyên, tất cả các khoảng trống được bỏ qua cho đến khi tìm thấy một số. Sau đó, tất cả các số tiếp theo sẽ được đọc, cho đến khi chạm tới một ký tự không phải số.

Ví dụ người dùng nhập: `8352.38`

Khi một số nguyên được đọc từ đầu vào ở trên, giá trị của nó sẽ là `8352`. Nếu ngay sau đó, bạn đọc một ký tự, giá trị sẽ là `.` Vì đầu đọc đã dừng lại ở ký tự không phải chữ số.

Giả sử ta cố gắng đọc hai số nguyên. Điều đó sẽ không thực hiện được, bởi vì khi máy tính tìm dữ liệu để lấp đầy biến thứ hai, nó sẽ thấy `.` Và dừng lại vì nó không thể tìm thấy bất kỳ số nào để đọc.

Với các giá trị thực, máy tính cũng bỏ qua các khoảng cách (`cách trắng` hoặc `Tab`) và sau đó đọc vào nhiều nhất có thể. Tuy nhiên, nhiều trình biên dịch Pascal đặt một hạn chế bổ sung: nếu là số N và `0 < N < 1` thì phải có dạng `0.xxx`. Vì vậy, `.678` là không đọc được, nhưng `0.678` là đọc bình thường.

Hãy chắc chắn rằng tất cả các định danh trong danh sách đối số phải là các biến! Hằng không thể gán một giá trị.
