---
title: Kiểu File
---
http://nguyenvanquan7826.com/2013/11/19/pascal-tep-trong-pascal/
 Khái niệm về tệp:
Tệp là một dãy các phần tử cùng kiểu được sắp xếp một cách tuần tự. Tệp dữ liệu được lưu trữ ở bộ nhớ ngoài dưới một tên nào đó.
Tệp tập hợp trong nó một số phần tử dữ liệu có cùng cấu trúc giống như mảng nhưng khác mảng là số phần tử của tệp chưa được xác định.
[qads]

Trong Pascal có 3 loại tệp được sử dụng là:
1. Tệp văn bản:Dùng để lưu trữ dữ liệu dưới dạng các ký tự của bảng mã ASCII, các ký tự này được lưu thành từng dòng, độ dài các dòng có thể khác nhau. Ví dụ 2008 (kiểu word) khi ghi vào tệp văn bản cần 4 Byte (không phải 2 Byte).
2. Tệp có kiểu: Tệp có kiểu là tệp mà các phần tử của nó có cùng độ dài và cùng kiểu dữ liệu.
3. Tệp không kiểu: Tệp không kiểu là một loại tệp không cần quan tâm đến kiểu dữ liệu ghi trên tệp. Dữ liệu ghi vào tệp không cần chuyển đổi.
 Tác dụng lớn nhất của kiểu dữ liệu tệp là ta có thể lưu trữ các dữ liệu nhập vào từ bàn phím và các kết quả xử lý trong bộ nhớ RAM ra tệp để dùng nhiều lần.
* Khai báo:
– Định nghĩa kiểu tệp với từ khóa FILE OF trong phần mô tả kiểu sau từ TYPE, tiếp theo là khai báo biến tệp trong phần khai báo biến.
Ví dụ:
01
02
03
04
05
06
07
08
09
10
11
12
13
Type
    Arr = array[1..100] of integer; {dinh nghia mang Arr}
    TArr = FILE of Arr; {dinh nghia tep TArr co cac phan tu la mang Arr}
    TStr = FILE of String[50]; {tep TStr co cac phan tu la chuoi co do dai 50 ky tu}
    SinhVien = Record
        Msv, Hoten : String[50];
        Diem : real;
    end;
    TSv = FILE of SinhVien; {tep TSv gom cac phan tu la kieu SinhVien}
Var
    T1 : TArr;
    T2 : TStr;
    T3 : TSv;
Định nghĩa trực tiếp biến kiểu tệp trong phần khai báo biến
1
2
3
Var
    T4 : FILE of array[1..100] of real;
    T5 : FILE of SinhVien;
1. Nhập xuất với tệp văn bản
Truy nhập vào tệp được hiểu là nhập dữ liệu vào tệp, ghi lại dữ liệu trên thiết bị nhớ ngoài, đọc dữ liệu đó ra màn hình hoặc máy in và xử lý nó.

Trước khi thao tác với tệp chúng ta cần sử dụng thủ tục assign(bientep, tentep). Thủ tục này nhằm mục đích gán một tập tin trên đĩa (tentep) cho Tên biến tệp trong RAM (bientep).

Mở tệp mới để ghi:
1
2
Assign(bientep, tentep);
Rewrite(bientep);
Thủ tục Rewrite tạo một tập tin trên đĩa có tên đã gán cho Tên biến File bằng lệnh gán Assign đồng thời mở tập tin đó ra để truy xuất dữ liệu.Khi mở tập tin bằng lệnh Rewrite nếu trên đĩa đã có tập tin trùng với tên bạn đặt thì tập tin trên đĩa sẽ bị xoá thay vào đó là một tập tin trống mà bạn đã gán tên cho Tên biến File. Nên bạn cần cẩn thận khi mở tập tin bằng lệnh Rewrite.

Mở tệp đã có để ghi thêm:
1
2
Assign(bientep, tentep);
Append(bientep);
Mở tệp để đọc dữ liệu:
1
2
Assign(bientep, tentep);
Reset(bientep);
Chú ý: Khi mở một tập tin bằng lệnh Reset nếu tập tin không có trên đĩa sẽ gây lỗi.

Cuối cùng, ta phải đóng tệp bằng thủ tục:
1
CLOSE(bientep);
Thủ tục này chuyển nội dung trong bộ nhớ vào tập tin trên đĩa đồng thời đóng tập tin lại giải toả bộ nhớ dành cho biến tập tin. Các tập tin khi đã mở nếu không đóng lại sẽ mất các dữ liệu truy xuất trên Tên biến File.
Việc xuất nhập dữ liệu trên biến File có kiểu chỉ được thực hiện như sau:
– Ðọc dữ liệu từ tập tin dùng thủ tục Readln(bientep,bien);
– Ghi dữ liệu vào đĩa: dùng thủ tục Writeln(bientep,bien);
Ví dụ:

01
02
03
04
05
06
07
08
09
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
uses crt;
var
        t : Text;
        str : string;
BEGIN
        clrscr;
        assign(t, 'inputText.txt'); {gan ten bien tep cho tep}
        rewrite(t); {mo tep de ghi du lieu}
        writeln(t, 'nguyenvanquan');
        writeln(t, '7826');
 
        reset(t);   {mo tep de doc du lieu}
        writeln('Data of file inputText.txt:');
        {trong khi con tro tep chua den cuoi tep thi cu doc}
        while not eof(t) do
        begin
                readln(t, str);
                writeln(str);
        end;
 
        append(t);  {mo tep de ghi them du lieu}
        writeln(t, 'test');
 
        close(t);
 
        reset(t);
        writeln;
        writeln('Data of file inputText.txt after change:');
        {trong khi con tro tep chua den cuoi tep thi cu doc}
        while not eof(t) do
        begin
                readln(t, str);
                writeln(str);
        end;
 
        close(t);   {dong tep}
        readln;
END.
file trong pascal

2. Tệp có kiểu
Như chúng ta đã biết khi nhập xuất file có kiểu text gây ra nhiều khó khăn khi phải ghi dữ liệu như khi đọc, ghi dữ liệu của 1 sinh viên phải làm rất phức tạp. Chúng ta có thể xử lý đơn giản hơn với tệp có kiểu.
Đọc và ghi :
– Ghi lên tệp: Write(bientep,bien1,bien2,…); với bien1,bien2,…là các biến cùng kiểu với biến tệp.
– Đọc tệp: Read(bientep,bien1,bien2,…);
Chú ý:
Khác với tệp văn bản, việc ghi và đọc tệp có kiểu không sử dụng các lệnh Writeln hoặc readln nghĩa là tệp có kiểu không ghi dữ liệu thành các dòng. Các phần tử của tệp có kiểu được ghi liên tục trong các ô nhớ và chỉ có ký hiệu kết thúc tệp EOF. Khi chúng ta đọc hoặc ghi xong một phần tử thì con trỏ tệp sẽ tự động chuyển đến vị trí kế tiếp.

Truy nhập vào phần tử thứ i của tệp: Seek(bientep,i); i=0,1,2,…
Thủ tục seek sẽ định vị con trỏ tại vị trí thứ i của tệp.
Các hàm xử lý tệp:
* Filesize(bientep) cho biết số phần tử có trong tệp
* FilePos(bientep) cho biết vị trí hiện thời của con trỏ tệp
* Eof(Bientep) cho giá trị là True nếu con trỏ tệp ở vị trí cuối tệp, ngược lại cho giá trị False

Ví dụ:

01
02
03
04
05
06
07
08
09
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
uses crt;
Type
        SinhVien = Record
                MSv, Hoten : String;
                Diem : real;
        end;
Var
        TSv : FILE of SinhVien;
        sv : SinhVien;
        i : integer;
BEGIN
        clrscr;
        assign(TSv, 'SV.dat');
        rewrite(TSv);
        for i:= 1 to 3 do {ghi du lieu 3 sinh vien vao tep}
        begin
                {nhap du lieu}
                write('Nhap ma sinh vien thu ', i, ' : ');
                readln(sv.MSv);
                write('   Nhap ten sinh vien: ');
                readln(sv.Hoten);
                write('   Nhap diem cua sinh vien: ');
                readln(sv.diem);
 
                {ghi du lieu vao tep}
                write(TSv, sv);
        end;
        close(TSv);
        reset(TSv); {mo tep de doc}
        writeln;
        writeln('Thong tin sinh vien thu 2 trong tep:');
        seek(TSv, 2);
        read(TSv, sv);
        writeln('MSV: ', sv.MSv);
        writeln('Ho ten: ', sv.Hoten);
        writeln('Diem: ', sv.diem:3:2);
        close(TSv);
        readln;
END.
Khi các bạn mở tệp SV.dat ra thì sẽ không thể thấy thông tin như mong muốn vì nó được ghi dưới dạng nhị phân chứ không phải text nhưng thông tin của nó chứ thì vẫn chính xác.