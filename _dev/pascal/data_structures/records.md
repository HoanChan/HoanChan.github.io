---
title: Bản ghi - Record
---

Bản ghi (Record) là một cấu trúc bao gồm một số (cố định hoặc thay đổi) các phần tử có kiểu khác nhau nhưng có liên quan với nhau. Các phần tử này gọi là các trường (Field).

Ví dụ: bảng điểm của lớp học bao gồm các trường Hoten, Ngaysinh, Toan,Ly, Hoa.. 

Dữ liệu điền vào các trường hình thành nên một bản ghi (Record). Có thể có những trường trong một bản ghi lại là một bản ghi, ví dụ trường Ngaysinh ở trên có thể là một bản ghi của 3 trường là Ngay, Thang, Nam. Bản ghi không phải là kiểu dữ liệu đã có sẵn trong Pascal mà do người sử dụng tự định nghĩa do đó chúng thường được khai báo ở phần Type.

Bản ghi bao gồm 2 loại:
- Bản ghi có cấu trúc không đổi
- Bản ghi có cấu trúc thay đổi

Điểm mạnh của bản ghi là cho phép xây dựng những cấu trúc dữ liệu đa dạng phục vụ công việc quản lý, tuy vậy muốn lưu trữ dữ liệu để sử dụng nhiều lần thì phải kết hợp kiểu bản ghi với [kiểu File](/dev/pascal/data_structures/files).

## Khai báo kiểu

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
        MaHS : String[15];
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
        MaHS : string[15];
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

## Khai báo biến

```
Var
    <Tên biến>: Record
        <Tên trường 1> : <Kiểu trường 1>
        <Tên trường 2> : <Kiểu trường 2>
        ...
    End;
```
{: .sh_pascal .sh_syntax }

Cụ thể:

```
Var
    hocSinhA, hocSinhB = Record
        MaHS : string[15];
        HoTen : string[30];
        NgaySinh : Record
            Ngay : 1..31;
            Thang : 1..12;
            Nam : word;
        End;
        Diachi : String;
    End;
```
{: .sh_pascal }

## Truy xuất

Để truy xuất đến biến kiểu Record ta phải truy xuất vào các trường của nó với cú pháp như sau:

```
<Tên biến Record>.<Tên trường>
```
{: .sh_syntax }

## Thao tác

– Các biến cùng kiểu Record có thể gán được cho nhau, khi đó toàn bộ thông tin từ biến Record này sẽ được gán cho biến kiểu Record kia.

    Ví dụ ta đơn giản là gán: 
    ```
    hocSinhA := hocSinhB
    ```
    {: .sh_pascal }

    Thay vì ta phải thực hiện gán từng trường của các biến:

    ```
    hocSinhA.HoTen := hocSinhB.HoTen;
    hocSinhA.NgaySinh := hocSinhB.NgaySinh;
    ```
    {: .sh_pascal }

– Có thể dùng phép so sánh `=`, `<>` cho 2 biến kiểu Record nhưng không thể dùng các phép so sánh `<`, `<=`, `>`, `>=`.

Ví dụ ta có thể so sánh:

```
If hocSinhA = hocSinhB Then 
    Writeln('Cùng một học sinh');
```
{: .sh_pascal }

hoặc 

```
If hocSinhA.HoTen = hocSinhB.HoTen Then 
    Writeln('Hai học sinh trùng tên');
```
{: .sh_pascal }

Nhưng không thể so sánh:

```
If hocSinhA > hocSinhB Then 
    Writeln('Học sinh A lớn hơn học sinh B');
```
{: .sh_pascal }

– Không dùng các thủ tục `Read`, `Readln`, `Write`, `Writeln` cho cả một biến Record

Ví dụ không được dùng:

```
Writeln(hocSinhA);
```
{: .sh_pascal }

– Không được dùng tất cả các phép toán số học và logic với biến kiểu Record.

## Câu lệnh with

Như trên ta thấy việc truy xuất một trường biến kiểu Record phải thông qua tên và dấu chấm, làm phức tạp thêm chương trình, giải quyết bớt phần nào sự phức tạp này, Pascal đưa ra câu lệnh `With … Do`

Cú pháp:

```
Width <Biến kiểu Record> Do <Công việc>;
```
{: .sh_pascal .sh_syntax }

Chú ý:

Chúng ta có thể lồng các câu lệnh with do vào với nhau để truy cập vào các trường nằm sâu bên trong Record.

Ví dụ với hocSinhA và NgaySinh đều là biến Record nhưng NgaySinh là một trường của hocSinhA ta có thể viết như sau:

```
Width hocSinhA Do
    Width NgaySinh Do
        <lệnh>;
```
{: .sh_pascal .sh_syntax }

Hoặc:

```
Width hocSinhA, NgaySinh Do
    <lệnh>;
```
{: .sh_pascal .sh_syntax }

## Bản ghi có cấu trúc thay đổi

Bản ghi có cấu trúc cố định dùng để mô tả một đối tượng mà các thể hiện của nó có các thuộc tính như nhau. Trong thực tế nhiều khi ta gặp những đối tượng mà thuộc tính của chúng gồm hai loại:

- Thuộc tính chung cho mọi đối tượng
- Thuộc tính riêng cho một số đối tượng đặc biệt

Ví dụ: Kiểu dữ liệu quản lý vé ngành đường sắt

Trên một tuyến đường sắt có nhiều đoàn tàu chạy trong ngày, có những chuyến tốc hành chỉ dừng lại ở một vài ga dọc đường, có những chuyến tàu thường dừng lại tất cả các ga lẻ. Với tàu tốc hành, hành khách chỉ được mang theo hành lý không quá 20 kg và sẽ có suất ăn trên tàu. Với tàu thường hành khách phải mua vé hàng hóa nếu có vận chuyển hàng hóa và không có suất ăn trên tàu.

Thuộc tính chung: tên đoàn tàu (TDT), tuyến đường (TD), giờ đi (GD), loại tàu (LT) ( ví dụ tốc hành – TH, tàu thường TT)

Thuộc tính riêng với tàu tốc hành: Số xuất ăn (SXA), số ga lẻ dừng dọc đường (SGD), còn tàu thường có thuộc tính riêng là cước hàng hóa (CHH).

Xây dựng các bản ghi dữ liệu:

```
Type QLDS = Record
    Ten_doan_tau : String[3];
    Tuyen_duong : String[15];
    Gio_di : Record
        Gio : 1..24;
        Phut, Giay : 1..60;
    End;
    Case Loai_tau : (Toc_hanh, Tau_thuong) Of
        Toc_hanh : (So_xuat_an:Word; So_ga_do:Byte);
        Tau_thuong : (cuoc_hang_hoa:real);
End;
```
{: .sh_pascal }

Ví dụ: Kiểu dữ liệu quản lý điểm của sinh viên:

SV là kiểu dữ liệu bản ghi dùng để quản lý điểm của sinh viên. Các trường cố định của SV gồm MHS (mã hồ sơ), HOTEN (họ tên), NS (ngày sinh), GIOI (giới tính), Khoa (Sư phạm- SP, Kinh tế - KT, Cơ điện – CD). Các môn học tùy thuộc vào khoa mà sinh viên đang theo học, giả sử chúng ta quy định khoa sư phạm có các môn : Toán, Lý, Tin cơ bản, lập trình nâng cao; khoa Kinh tế có các môn : Kế toán máy, Marketing; khoa Cơ điện có các môn: Cơ học máy, Sức bền vật liệu. Tất cả sinh viên nếu là Nam thì học thêm môn Bơi lội, nếu là Nữ thì học thêm Thể dục nghệ thuật.

Mỗi bản ghi kiểu sinh viên có cấu trúc thuộc một trong các dạng sau:

* Sinh viên khoa sư phạm:

1. Mhs, Hoten, Ns, Boi_loi, Toan, Ly, Tincoban, Lap_trinh_nang_cao

2. Mhs, Hoten, Ns, The_duc, Toan, Ly, Tincoban, Lap_trinh_nang_cao

* Sinh viên khoa cơ điện:

3. Mhs, Hoten, Ns, Boi_loi, Co_hoc_may, Suc_ben_vat_lieu

4. Mhs, Hoten, Ns, The_duc, Co_hoc_may, Suc_ben_vat_lieu

* Sinh viên khoa Kinh tế:

5. Mhs, Hoten, Ns, Boi_loi, Ke_toan_may, Marketing

6. Mhs, Hoten, Ns, The_duc, Ke_toan_may, Marketing

Kiểu dữ liệu bản ghi SV được khai báo như sau:

```
Type SV = Record
    Mhs : Byte;
    Hoten : String[20];
    NS : Record
        Ngay : 1..31;
        Thang : 1..12;
        Nam : Word;
    End;
    Case MonHoc : (pl1, pl2) of
        pl1 : (
            case gioi:(Nam,Nu) of
                Nam : (Boi_loi:real);
                Nu : (the_duc:real)
        );
        pl2 : (
            case KHOA:(SP,CD,KT) of
                SP : (Toan, Ly, Tincb, Ltnc:Real);
                CD : (Co_hoc_may, Suc_ben_vat_lieu: real);
                KT : (Ke_toan_may, Marketing:real)
        );
End;
```
{: .sh_pascal }

Từ cách khai báo trên, ta rút ra một số nhận xét sau:

**Nhận xét 1:** Trong một kiểu Record các trường cố định được khai báo trước, trường phân loại khai báo sau, như vậy truờng phân loại phải là trường khai báo cuối cùng. Các trường thay đổi khai báo bên trong trường phân loại.

**Nhận xét 2:** Mỗi kiểu dữ liệu Record có cấu trúc thay đổi chỉ được phép có duy nhất một trường phân loại, nghĩa là không thể có hai toán tử case…of ngang hàng khi khai báo.

**Nhận xét 3:** Vì mỗi trường lại có thể là một bản ghi cho nên bên trong trường phân loại lại có thể chứa các trường phân loại khác, đây là trường hợp bản ghi thay đổi nhiều mức.

Việc truy nhập vào các trường cố định của bản ghi có cấu trúc thay đổi hoàn toàn giống như bản ghi thường. Còn việc truy nhập vào các trường thay đổi cần phải chú ý một số điểm sau:

Không dùng phép gán hoặc nhập dữ liệu từ bàn phím cho các trường phân loại.
Lệnh With…do có tác dụng với tất cả các trường kể cả các trường thay đổi bên trong các trường phân loại.
Tên các trường phân loại không thể đưa ra màn hình như một tên trường bình.