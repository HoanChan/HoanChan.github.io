---
title: Kiểu Record
---

http://nguyenvanquan7826.com/2013/11/26/pascal-tut-bai-9-kieu-ban-ghi-record/

## Khai báo:

### Khai báo gián tiếp

```
Type
    <Tên kiểu> = Record
        <Tên trường 1> : <Kiểu trường 1>
        <Tên trường 2> : <Kiểu trường 2>
        ...
    End;
```
{: .sh_pascal .sh_syntax }

Ví dụ:

```
Type
    Date = Record
        Ngay : 1..31;
        Thang : 1..12;
        Nam : Word;
    End;
 
    HocSinh = Record
        MaSV : String[15];
        HoTen : String[30];
        NgaySinh : Date;
        Diachi : String;
    End;
```
{: .sh_pascal }

Lưu ý: Nếu không có kiểu Date trước đó ta có thể mô tả trực tiếp như sau:

```
Type
    HocSinh = Record
        MaSV : string[15];
        HoTen : string[30];
        NgaySinh : Record {sử dụng khai báo trực tiếp}
            Ngay : 1..31;
            Thang : 1..12;
            Nam : word;
        End;
        Diachi : String;
    End;
```
{: .sh_pascal }

Khi sử dụng chỉ đơn giản là dùng:

``` 
Var
    hocSinhA, hocSinhB: HocSinh;
    lop11B5: Array[1..50] Of HocSinh;
```
{: .sh_pascal }

### Khai báo trực tiếp

```
Var
    <Tên biến>: Record
        <Tên trường 1> : <Kiểu trường 1>
        <Tên trường 2> : <Kiểu trường 2>
        ...
    End;
```
{: .sh_pascal .sh_syntax }

## Truy xuất

Để truy xuất đến biến kiểu Record ta phải truy xuất vào các trường của nó với cú pháp như sau:

```
<Tên biến Record>.<tên trường>
```
{: .sh_syntax }

Chú ý:
– Các biến cùng kiểu Record có thể gán được cho nhau khi đó toàn bộ thông tin từ biến Record này sẽ được gán cho biến kiểu Record kia.

Ví dụ ta gán: hocSinhA := hocSinhB thay vì ta phải thực hiện gán từng trường của các biến như

hocSinhA.HoTen := hocSinhB.HoTen;
hocSinhA.NgaySinh := hocSinhB.NgaySinh;


– Có thể dùng phép so sánh =, <> cho 2 biến kiểu Record nhưng không thể dùng các phép so sánh <,<=,>,>=.

Ví dụ ta có thể so sánh:

if hocSinhA=hocSinhB then writeln(‘Cung mot hoc sinh’);
hoặc if hocSinhA.HoTen=hocSinhB.HoTen then writeln(‘Hai hoc sinh trung ten’);

Nhưng không thể so sánh:

if hocSinhA>hocSinhB then writeln(‘HS A lon hon HS B’);

– Không dùng các thủ tục read, readln, write, writeln cho cả một biến Record

Ví dụ không được dùng:
writeln(hocSinhA);

– Không được dùng tất cả các phép toán số học và logic với biến kiểu Record.

## Câu lệnh with

Như trên ta thấy việc truy xuất một trường biến kiểu Record phải thông qua tên và dấu chấm, làm phức tạp thêm chương trình, giải quyết bớt phần nào sự phức tạp này, Pascal đưa ra câu lệnh With … do

Cú pháp:

```
Width <Biến kiểu Record> Do <Công việc>;
```
{: .sh_pascal .sh_syntax }

Chú ý:
Chúng ta có thể lồng các câu lệnh with do vào với nhau để truy cập vào các trường ở xâu trong Record.
Ví dụ với hocSinhA và NgaySinh đều là biến Record nhưng NgaySinh là một trường của hocSinhA ta có thể viết như sau:

```
Width hocSinhA DO
    Width NgaySinh DO
        <lệnh>;
```
{: .sh_pascal .sh_syntax }

Hoặc:

```
Width hocSinhA, NgaySinh DO
    <lệnh>;
```
{: .sh_pascal .sh_syntax }
