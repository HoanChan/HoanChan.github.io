---
title: Chương trình con
permalink: /dev/pascal/subprogram/
redirect_from: /dev/pascal/subprogram/index.html
breadcrumb: Chương trình con
---

http://nguyenvanquan7826.com/2013/11/26/pascal-tut-bai-7-chuong-trinh-con/

Lợi ích của dùng chương trình con(CTC)
– Chương trình có nhiều phân đoạn mỗi phân đoạn thực hiện một chức năng nào đó{ khi đó ta sử dụng ctc để làm các phân đoạn trên}
– Trong chương trình, có những đoạn cần phải lập đi, lập lại nhiều lần ở những chỗ khác nhau. Để tránh phải viết lại các đoạn đó người ta thường phân chương trình ra thành nhiều CTC
– Một tiện lợi khác của việc sử dụng CTC là ta có thể dễ dàng kiểm tra tính đúng đắn của nó trước khi ráp nối vào chương trình chính. Do đó việc xác định sai sót và tiến hành điều chỉnh trong chương trình sẽ thuận lợi hơn.
=> CTC là một đoạn chương trình thực hiện trọn vẹn hay một chức năng nào đó. Trong Turbo Pascal, có 2 dạng CTC: Hàm và Thủ tục. Hàm và thủ tục đều là những CTC, nhưng hàm khác thủ tục ở chỗ hàm trả về một giá trị cho lệnh gọi thông qua tên hàm còn thủ tục thì không

2. Khai báo CTC
– Nhắc lại cấu trúc của một chươn trình

1
2
3
4
5
6
7
8
9
PROGRAM Tên_chương_trình; { Tên chương trình}
USES ...; {Khai báo thư viện}
CONST ...;{Khai báo hằng}
TYPE ...;{Khai báo kiểu}
VAR ...;{Khai báo biến}
Khai báo CTC
BEGIN {Chương trình chính}
    <các lệnh>;
END.
Như vậy phần khai báo CTC nằm ở phần cuối của phần khai báo
a. Khai báo và lời gọi hàm
– Khai báo:

1
2
3
4
5
6
FUNCTION <tên hàm>(Danh sách ác tham số):<Kiểu dữ liệu>;
[Khai báo Const, Type, Var]
BEGIN
    <các lệnh trong thân hàm>;
    <tên hàm>:=<Giá trị>;
END;
Chú ý luôn có phép gán tên hàm cho giá trị để hàm trả về giá trị khi được gọi
Ví dụ: tính tổng của 2 số x và y

1
2
3
4
5
6
Function tong(x,y:integer):integer; {Do có giá trị trả về}
var s:integer;
begin
    s:=x+y;
    tong:=s;
end;
– Lời gọi hàm

1
<tên hàm>(danh sách các tham số thực);
Ví dụ:
tong(4,5);

b. Khai báo và lời gọi thủ tục
– Khai báo:

1
2
3
4
5
PROCEDURE <tên thủ tục>(Danh sách các tham số);{không có giá trị trả về}
[Khai báo Const, Type, Var]
BEGIN
    <các câu lệnh>;
END;
Ví dụ:

1
2
3
4
5
6
Procedure inso(n:integer);
var i:inteher;
Begin
    for i:=1 to n do
        write(i:5);
end;
– Lời gọi thủ tục

1
<tên thủ tục>(danh sách các tham số thực);
Ví dụ:
inso(6);

3. Biến toàn cục và biến cục bộ
– Biến toàn cục là biến được khai báo trong chương trình chính. Các biến này co thẻ được dùng ở mọi nơi trong chương trình và tồn tại trong suốt thời gian làm việc của chương trình
– Biến cục bộ (biến địa phương) là các biến được khai báo trong CTC. Các biến này chỉ được sử dụng trong phạm vi ctc mà nó được khai báo. Sau khi kết thức ctc các biến này sẽ không còn tồn tại.
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
PROGRAM vidu;
Var a,b,c:integer; {3 biến toàn cục}
PROCEDURE thutuc(n:integer);{n là biến cục bộ}
var i:integer; {i là biến cục bộ}
begin
    for i:=1 to 10 do writeln(i);
end;
BEGIN
    a:=5;b:=6;c:=8;
    thutuc( a);
    thutuc( b);
    thutuc( c);
    readln;
END.
– Trong trường họp biến cục bộ trùng tên với biến toàn cục thì máy không bị nhầm lẫn mà sẽ thực hiện trên biến cục bộ. Biến toàn cục không bị ảnh hưởng.

4. Cách truyền tham số trong chương trình con
– CTC không cần có tham số (sau tên ctc) nếu không dùng đến chúng hoặc dùng trực tiếp biến toàn cục
– Khi truyền tham số các tham số trong lời gọi ctc phải đúng thứ tự và kiểu tương ứng với khi khai báo ctc.
Ví dụ:

1
2
3
4
Procedure inso(a:integer; ch:char);
begin
    {các lệnh của CTC}
end;
{gọi}
inso(13,’a’); {lời gọi đúng}
inso(‘a’,13); {loi goi sai}
inso(13);{lời gọi sai}

– Tham số hình thức (đối) là các tham số sau tên hàm và thủ tục trong khai báo.
– Tham số thực sự là các tham số sau tên hàm và thủ tục trong lời gọi.
– Tham biến: là các tham số được khai báo sau từ khóa var. Các tham số thực phải là các biến chứ không được là giá trị. Tham biến có thể được thay đổi trong CTC và sau khi ra khỏi CTC nó vẫn giữ giá trị thay đổi đó.
– Tham trị: là các tham số được khia báo mà không đứng sau từ khóa var. Các tham số thực có thể là các giá trị, hằng, biến. Tham trị có thể thay đổi trong ctc nhưng sau khi kết thúc ctc giá trị của nó trở về như ban đầu.
– Các tham số trong hàm luôn là các tham trị, các tham số trong thủ tục có thể là tham trị hoặc tham biến.

5. Phân biệt cách sử dụng hàm và thủ tục
Hàm khác thủ tục ở chỗ hàm trả về một giá trị cho lệnh gọi thông qua tên hàm còn thủ tục thì không.

*Dùng hàm
– Kết quả của bài toán trả về 1 giá trị duy nhất (kiểu vô hướng, kiểu string hoặc kiểu con trỏ).
– Lời gọi CTC cần nằm trong các biểu thức tính toán.

*Dùng thủ tục
– Kết quả của bài toán không trả về giá trị nào hoặc trả về nhiều giá trị hoặc trả về kiểu dữ liệu có cấu trúc (Array, Record, File)
– Lời gọi CTC không nằm trong các biểu thức tính toán.

Chú ý: Nếu một công việc có thể làm bằng hàm thì chắc chắn sẽ làm được bằng thủ tục {tuy nhiên sẽ phức tạp hơn khi dùng hàm} nhưng một chương trình làm bằng thủ tục thì chưa chắc ta đã làm được bằng hàm.

Đối với Borland Pascal 7.0 ta có thể gọi hàm như gọi một thủ tục. Không nhất thiết phải lấy giá trị trả về. Để thực hiện được điều này trong menu Options >Compiler cần khai báo cú pháp mở rộng (Extended syntax), hoặc trong chương trình cần có dẫn hướng biên dịch {$ X+}. Nếu không, khi biên dịch (gõ F9) Pascal sẽ thông báo lỗi “Error 122: Invalid variable reference”.

6. Tính đệ quy của chương trình con
Một CTC trong Pascal có thể gọi về chính nó. Một lời gọi như thế gọi là một lời gọi đệ quy

Ta xét ví dụ sau:
Nhập vào 1 số n và tính n!
Ta đã biết n! = 1 nếu n =0 trong trường hợp n>=1 ta có n!=n.(n-1)!
Hàm tính n!

1
2
3
4
5
function giai_thua(n:integer):longint;
begin
    if n=0 then giai_thua:=1
    else giai_thua:=n*giai_thua(n-1);
end;
– Lưu ý:
+ Khi sử dụng đệ quy phải có điều kiện kết thúc đệ quy (TH suy biến). Trong ví dụ ta xét điều kiện kết thúc đệ quy chính là n=0. Nếu không có điều kiện kết thúc này chương trình của ta sẽ lặp vô hạn.
+ Luôn có lời gọi đệ quy, trong TH trên là lời gọi giai_thua(n-1);