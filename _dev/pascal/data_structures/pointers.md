---
title: Con trỏ
---

http://nguyenvanquan7826.com/2013/12/01/pascal-tut-bai-11-con-tro-trong-pascal/

Trong quá trình làm việc chúng ta thường phải làm việc với các danh sách dài và tất nhiên chúng ta sẽ nghĩ đến việc dùng mảng ngay lập tức. Tuy nhiên việc dùng mảng không phải lúc nào cũng được, với các danh sách dài tới vài nghìn phần tử, chẳng hạn danh sách nhân viên trong một công ty lớn vì không đủ bộ nhớ. Mặt khác khi khai báo mảng chúng ta phải khai báo trước số lượng phần tử, trong khi đó chúng ta không thể biết trước và tất nhiên chúng ta sẽ phải khai báo số phần tử là lớn nhất có thể để đủ cho công việc dẫn đến gây lãng phí bộ nhớ hoặc trường hợp xấu mà không đủ số phần tử thì coi như máy treo =)).

Biến tĩnh là biến có kích thước, kiểu dữ liệu và địa chỉ của biến là không đổi, các biến này tồn tại trong suốt quá trình chạy chương trình. Và từ trước đến này chúng ta vẫn dùng biến tĩnh, đó là lý do gây lãng phí bộ nhớ.Biến động là biến có thể thay đổi được kích thước và địa chỉ vùng nhớ được cấp phát trong quá trình chạy chương trình. Đây chính là giải pháp của chúng ta. hehe. Tuy nhiên vấn đề là biến động không có địa chỉ cố định nên không thể truy xuất đến chúng được.
Biến con trỏ là bién chuyên dùng để chứa địa chỉ của biến động giúp ta truy cập đến biến động. Woa, giải pháp là đây =)). Dữ liệu của kiểu biến con trỏ gọi là kiểu con trỏ.

Bây giờ ta sẽ đi vào một vài phần của biến con trỏ.

1. Định nghĩa kiểu con trỏ
Cú pháp:

1
2
Type
    <Kieu con tro> = <^Kieu du lieu>
Ví dụ:

1
2
Type
    int = ^integer;
Lưu ý: Khi định nghĩa kiểu con trỏ kiểu cấu trúc tự trỏ (kiểu bản ghi tự trỏ) ta phải định nghĩa kiểu con trỏ trước rồi mới định nghĩa kiểu bản ghi.
Ví dụ:

1
2
3
4
5
6
7
8
Type
        ControSV = ^sinhvien;
        sinhvien = record
                MSV : string;
                Hoten : string;
                Diem : real;
                next : ControSV;
        end;
2. Khai báo biến con trỏ
Chúng ta có thể khai báo trực tiếp hoặc giản tiếp. Ví dụ với kiểu sinhvien và ControSV ta có thể khai báo

1
2
3
var
        sv1 : ControSV;         {khai bao gian tiep}
        sv2 : ^sinhvien;        {khai bao truc tiep}
Ngoài ra chúng ta có thể khai báo như sau khi không quan tâm tới một kiểu dữ liệu nào.

1
2
var
        p : pointer;
Sau khi khai báo biến con trỏ p là một con trỏ tổng quá không thuộc một kiểu dữ liệu cụ thể nào.

3. Cấp phát vùng nhớ cho các biến.
Chúng ta chú ý rằng biến con trỏ cũng là biến tĩnh nên nó được máy cấp phát vùng nhớ 4 byte. Ví dụ với biến sv1 như trên thì sv1 là 1 biến con trỏ, nó được cấp phát vùng nhớ 4 byte còn biến sv1^ mới là biến động và chưa được cấp phát. Tức ta có thể hiểu sv1 là biến con trỏ chứa địa chỉ của biến động sv1^.
Để cấp phát vùng nhớ cho biến động sv1 ta dùng toán tử New(sv1);
con trỏ trong pascal
Con trỏ NIL là con trỏ đặc biệt, không trỏ tới đâu cả. Giá trị của con trỏ NILL bằng 0 hay là rỗng tương ứng với mọi kiểu con trỏ.

4. Các phép toán.
a. Phép gán
Hai con trỏ có thể gán cho nhau bằng phép gán ( := ) nếu như chúng cùng kiểu. Trong ví dụ trên chúng ta có thể gán:

1
sv1 := sv2;
Ngoài ra chúng ta cũng có thể gán

1
p := sv1;
nhưng không thể gán ngược lại vì p là con trỏ pointer có kiểu tổng quát.
Chúng ta có thể gán giá trị NIL cho bất kỳ con trỏ nào.

b. Phép so sánh
Chúng ta chỉ sử dụng được phép so sánh bằng ( = ) và phép so sánh khác ( <> ) cho kiểu con trỏ. Nếu con trỏ p và q cũng trỏ tới một địa chỉ của một biến động (cùng trỏ tới một biến động) thì chúng được coi là bằng nhau, ngược lại sẽ khác nhau.

5. Trỏ con trỏ tới 1 biến
Khi ta có 1 biến a thuộc kiểu integer, ta sẽ dùng toán tử @ để trỏ con trỏ p tới vùng nhớ của biến a.

1
p := @a;
6. Truy xuất dữ liệu
Biến con trỏ chỉ chứa địa chỉ của biến động nên chúng ta không thể nhập xuất trực tiếp cho biến con trỏ mà phải nhập xuất cho biến động mà nó trỏ tới.
Ví dụ sau thực hiện truy xuất, tính toán trên con trỏ.

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
uses crt;
var
        p : ^integer;
        a, s : integer;
BEGIN
        clrscr;
        write('Nhap vao mot so (kieu con tro) p^ = ');
        new(p);
        readln(p^);
        write('Nhap vao mot so (kieu so nguyen) a =  ');
        readln(a);
        s := 100*p^ + a;
        writeln('100p^ + a = : ', s);
        readln;
END.
con trỏ trong pascal

Ứng dụng lớn nhất của con trỏ giống như phần mở đầu đã nói, tạo ra một danh sách liên kết thay cho mảng. Về danh sách liên kết các bạn có thể xem tại đây, rất đầy đủ, chi tiết bằng C rồi. (Nó cũng giống như Pascal thôi hehee).
Và dưới đây là một bài minh họa bằng Pascal về nhập xuất danh sách liên kết.

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
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
Program DSLK;
uses crt;
type
        {dinh nghia kieu sinhvien}
        sinhvien = record
                MSV, Hoten : string;
                Diem : real;
        end;
        {dinh nghia Plist va list}
        Plist = ^list;
        list = record
                data : sinhvien;
                next : Plist;
        end;
 
var
        first, last, newp : Plist;
        ch : char;
        i : integer;
BEGIN
        clrscr;
        writeln('Danh sach sinh vien su dung con tro - danh sach lien ket');
        writeln('-------------');
        writeln;
        i := 0;
        repeat
                inc(i);
                new(newp); {cap phat o nho}
                with newp^.data do
                begin
                        write('Nhap ma sinh vien thu ', i, ' : ');
                        readln(MSV);
                        write('Nhap ho ten : ');
                        readln(Hoten);
                        write('Nhap diem tong ket : ');
                        readln(Diem);
                        write('Tiep tuc ? (y/ n)');
                        readln(ch);
                        ch := upcase(ch);
                end;
 
                if first = nil then     {Gan phan tu dau tien}
                        first := newp
                else                    {Gan phan tu cuoi cung}
                        last^.next := newp;
                last := newp;           {Cap nhat con tro last}
                last^.next := nil;
        until ch = 'N';
        clrscr;
 
        writeln('Danh sach sinh vien su dung con tro - danh sach lien ket');
        writeln('-------------');
        writeln;
 
        newp := first;
        writeln('STT':5, ' | ', 'Ma sinh vien':20,' | ', 'Ho va ten' : 20,' | ', 'Diem':5);
        for i:= 1 to 50 do write('-');
        writeln;
        i := 0;
        while newp <> nil do
                with newp^ do
                begin
                        inc(i);
                        writeln(i:5,' | ', data.MSV:20, ' | ', data.Hoten:20, ' | ', data.Diem:5:2);
                        newp := next;
                end;
        readln;
END.