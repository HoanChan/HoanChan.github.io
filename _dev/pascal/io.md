---
title: Nhập xuất dữ liệu
series_index: 2
---

Các nội dung chính
- TOC
{:toc}

Việc nhập xuất dữ liệu là đều luôn phải làm ở bất cứ chương trình nào! Ở Pascal, việc nhập xuất dữ liệu sẽ gồm các loại:

- Xuất dữ liệu ra màn hình.
- Nhập dữ liệu từ bàn phím.
- Nhập dữ liệu từ tập tin.
- Xuất dữ liệu ra tập tin.

Ở phần này, chúng ta cùng tìm hiểu các nhập xuất dữ liệu thông qua 2 thành phần cơ bản của máy tính là bàn phím và màn hình. Phần nhập xuất qua tập tin các bạn có thể xem [tại đây](/dev/pascal/files)

## Xuất dữ liệu

Các bạn còn nhớ chương trình sau đây chứ?

``` pascal
Program Hello_World;
Uses CRT;
Begin
   Writeln('Hello, World!');
   Readkey;
End.
```

Ở chương trình trên lệnh `Writeln('Hello, World!');` dùng để viết dòng chữ `Hello, World!` ra màn hình. `Writeln` là lệnh dùng để xuất dữ liệu trong Pascal với cú pháp như sau:

``` pascal
Writeln(<nội dung cần viết>);
```

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

``` pascal
result := 5;
Writeln (result);
```
Sẽ viết ra màn hình `5`

### Giá trị của biểu thức

``` pascal
a := 5; b := 3;
Writeln (a + b);
```
Sẽ viết ra màn hình `8`

Một lệnh `Writeln` có thể kết hợp cả 2 hay 3 loại. Ví dụ:

``` pascal
result := 5;
Writeln('The Result is: ', result); { The Result is: 5 }
index := 3;
Writeln('A[', index, '] = ', result); { A[3] = 5 }
a := 3; b := 5; c:= 7;
Writeln('A[', index, '] = ', a + b + c); { A[3] = 8 }
```
<div class="note warning">
#### Cẩn thận với số thực

Khi giá trị của một biến hoặc một biểu thức là một số thực thì mặc định nó được ghi ra dưới dạng dấu phẩy động, ta cần định dạng lại số thực như sau:

``` pascal
Writeln('The Result is: ', 4 / 3); { The Result is: 7.5000000000000000E-001 }
Writeln('The Result is: ', 4 / 3 :0:2); { The Result is: 0.75 }
```

`:0:2` là dùng để định dạng số in ra là số phập phân có 2 chữ số ở phần thập phân. Muốn 4 số phần thập phân thì dùng `:0:4`
</div>