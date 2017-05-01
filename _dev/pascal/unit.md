---
title: Tạo thư viện
---

Việc tạo ra các chương trình con trong một chương trình đã làm cho việc lập trình đỡ vất vã hơn rất nhiều. Tuy nhiên, các chương trình con này chỉ có tác dụng trong chương trình chứa chúng mà thôi, trong một chương trình khác muốn sử dụng chương trình con này bắt buộc phải viết lại chúng, như vậy rất mất thời gian. Để khắc phục, người ta gom các chương trình con thường sử dụng thành một module độc lập và biên dịch sẵn trên đĩa. Sau đó, bất kỳ chương trình nào cũng có thể sử dụng lại các chương trình con này mà không cần phải viết lại chúng. Các module như vậy được gọi là UNIT.

Có hai loại UNIT là Unit chuẩn của Pascal tạo ra và Unit do người lập trình tự tạo để phục vụ riêng cho mình.

pascal

1. Một số unit chuẩn

a. Một số unit chuẩn

– Unit CRT: Gồm các hằng, kiểu, biến, hàm, thủ tục liên quan đến chế độ màn hình văn bản (TEXT mode).
– Unit PRINTER: Gồm các hằng, kiểu, biến, hàm, thủ tục liên quan đến chế độ in ấn qua cổng LPT1 (Connector DB25).
– Unit GRAPH: Gồm các hằng, kiểu, biến, hàm, thủ tục liên quan đến chế độ đồ họa.
– Unit DOS: Gồm các hằng, kiểu, biến, hàm, thủ tục liên quan đến việc xử lí trực tiếp các thanh ghi, các ngắt và lời gọi đến các hàm chức năng của hệ điều hành MS-DOS.
– Unit OVERLAY: Gồm các hằng, kiểu, biến, hàm, thủ tục liên quan đến việc bố trí các đoạn mã thực thi được truy xuất trên đĩa (nạp/ nhã) thay vì đặt hết một lúc vào bộ nhớ khi chạy chương trình.

Khi muốn sử dụng một Unit nào thì ta phải khai báo tên Unit đó ở đầu chương trình (trừ các unit mặc định của Pascal như unit SYSTEM) với cú pháp”

1
USES <tên unit>;
b. Một số hàm và thủ tục hay dùng trong Unit CRT
– ClrScr: Thủ tục xoá màn hình.
– GotoXY(x, y: Byte): Dời con trỏ tới vị trí cột x, dòng y trên màn hình. Thông thường, màn hình trong TextMode(Co80) có 25 dòng (từ dòng 1 đến dòng 25) và 80 cột (cột 1 đến cột 80). Vậy toạ độ góc trên trái của màn hình là (1, 1), toạ độ góc dưới phải là (80, 25) .
– Delay(ms: Word): Thủ tục trì hoãn chương trình trong ms mili-giây.
– Sound(hz: Word): Thủ tục phát ra âm thanh qua loa bên trong (internal speaker) với tần số hz.
– Nosound: Thủ tục ngừng phát ra âm thanh.
– Keypressed: Hàm cho kết quả là TRUE nếu có một phím được ấn.
– Readkey: đọc phím từ bộ đệm bàn phím.
– TextBackGround(color: Byte): Thủ tục chọn màu nền. Ta có thể đặt màu nền cho toàn màn hình bằng cách đặt lệnh này vừa trước lệnh ClrScr.
– TextColor(color: Byte): Thủ tục chọn màu cho chữ.
Dưới đây là danh sách các hằng màu mà Pascal định sẵn.
• Black = 0 Đen.
• Blue = 1 Xanh dương.
• Green = 2 Xanh lục.
• Cyan = 3 Xanh trứng sáo.
• Red = 4 Đỏ.
• Magenta = 5 Tím cánh sen.
• Brown = 6 Nâu.
• LightGray = 7 Xám sáng.
• DarkGray = 8 Xám tối.
• LightBlue = 9 Xanh dương sáng.
• LightGreen = 10 Xanh lục sáng.
• LightCyan = 11 Xanh trứng sáo sáng.
• LightRed = 12 Đỏ sáng.
• LightMagenta = 13 Tím cánh sen sáng.
• Yellow = 14 Vàng.
• White = 15 Trắng.
(8 hằng trị đầu tiên từ Black đến LightGray áp dụng cho cả màu chữ lẫn màu nền. Các hằng trị còn lại chỉ áp dụng cho màu chữ).
Color + blink: chữ nhấp nháy.

2. Xây dựng unit

a. Bước 1
Tạo ra một tập tin Pascal có đuôi .PAS và có cấu trúc như trình bày dưới đây, lưu ý là tên của unit phải trùng với tên tập tin. Dạng mẫu của một Unit (tên tệp là MyUnit.pas):

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
Unit MyUnit ;
Interface
Khai báo Uses
Khai báo Const, Type, Var
Khai báo Procedure, Function
Implementation
Khai báo Uses
Khai báo Const, Type, Var
Cài đặt các Procedure, Function
Begin
    Các lệnh khởi tạo – chỉ xuất hiện khi có từ khoá Begin
End;
 
UNIT <Tên Unit>; {Tên unit bắt buộc phải trùng với tên tập tin}
INTERFACE {Không có dấu ; ở đây}
{Đây là phần giao diện của Unit. Trong phần này chúng ta sẽ khai báo các unit
đã có mà các unit này sử dụng, khai báo các hằng, kiểu, biến mà các chương
trình khác sẽ sử dụng. Khai báo các hàm, thủ tục mà chương trình khác sẽ gọi
tới, chỉ khai báo tên chương trình con, các tham số, kiểu kết quả. Những hàm,
thủ tục thiết lập ở phần sau mà không khai báo trong phần này thì các chương
trình khác không gọi tới được.}
IMPLEMENTATION {Không có dấu ; ở đây}
{Đây là phần hiện thực các hàm, thủ tục đã khai báo trong phần Interface. Trong
phần này nếu có các chương trình con được dùng riêng bên trong Unit mà không
khai báo trong phần Interface, các chương trình con này sẽ không thể truy cập
được bởi người dùng Unit.}
 
BEGIN
{Phần chứa các câu lệnh sẽ được thực thi ngay trước khi câu lệnh đầu tiên của
chương trình gọi Unit này được thực hiện. Phần này không bắt buộc phải có, tuy
nhiên trong trường hợp đó vẫn phải giữ lại từ khóa "END." dưới đây.}
END.
b. Bước 2
Unit không được thiết kế để chạy mà để biên dịch đặt lên đĩa nên ta không thể nhấn CTRL+F9 mà làm theo trình tự sau:
– Chọn menu Compile (Alt + C).
– Tiếp tục chọn Destination để chuyển thành Disk. Lưu ý: Destination Disk là tạo unit lên đĩa, Memory là tạo unit lên bộ nhớ RAM.
– Chọn lại menu Complie và chọn tiếp chức năng Complie (Alt + F9). Lúc này trên đĩa xuất hiện tập tin là tên của unit ta tạo với phần mở rộng là TPU. Kể từ đây, ta có thể sử dụng unit này bằng cách gọi nó trong câu lệnh USES như đã nói trên.

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
40
41
42
43
44
Unit MyUnit; {Trùng tên với tập tin MyUnit.pas}
INTERFACE
Function HamMu(a: Real; n: Integer): Real;
Function GiaiThua(n: Integer): Longint;
Function USCLN(X,Y:Word):word;
IMPLEMENTATION
    Function HamMu(a: Real; n: Integer): Real;
    Var tam: Real;
    i: Integer;
    Begin
        tam := 1;
        For i:=1 to n do
            tam := tam * a;
        HamMu := tam;
    End;
 
    Function GiaiThua(n: Integer): Longint;
    Var tam: Longint;
    i: Integer;
    Begin
        tam := 1;
        For i:=1 to n do
            tam := tam * i;
        GiaiThua := tam;
    End;
 
    Procedure HoanChuyen(var x,y:word);
    Var Tam:word;
    begin
        Tam:=x;
        x:=y;
        y:=Tam;
    End;
 
    Function USCLN(x,y:Word):word;
    begin
        While (y<>0) DO
        Begin
            if (x<y) then HoanChuyen(x,y)
            else x:=x-y;
        End;
        USCLN:=x;
    End;
END.