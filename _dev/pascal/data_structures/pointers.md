---
title: Con trỏ - Pointer
---

Trong quá trình làm việc chúng ta thường phải làm việc với các danh sách dài và tất nhiên chúng ta sẽ nghĩ đến việc dùng mảng ngay lập tức. Tuy nhiên việc dùng mảng không phải lúc nào cũng được, với các danh sách dài tới vài nghìn phần tử, chẳng hạn danh sách nhân viên trong một công ty lớn vì không đủ bộ nhớ. Mặt khác khi khai báo mảng chúng ta phải khai báo trước số lượng phần tử, trong khi đó chúng ta không thể biết trước và tất nhiên chúng ta sẽ phải khai báo số phần tử là lớn nhất có thể để đủ cho công việc dẫn đến gây lãng phí bộ nhớ hoặc trường hợp xấu mà không đủ số phần tử thì coi như máy treo =)).

Biến tĩnh là biến có kích thước, kiểu dữ liệu và địa chỉ của biến là không đổi, các biến này tồn tại trong suốt quá trình chạy chương trình. Và từ trước đến này chúng ta vẫn dùng biến tĩnh, đó là lý do gây lãng phí bộ nhớ.Biến động là biến có thể thay đổi được kích thước và địa chỉ vùng nhớ được cấp phát trong quá trình chạy chương trình. Đây chính là giải pháp của chúng ta. hehe. Tuy nhiên vấn đề là biến động không có địa chỉ cố định nên không thể truy xuất đến chúng được.
Biến con trỏ là bién chuyên dùng để chứa địa chỉ của biến động giúp ta truy cập đến biến động. Woa, giải pháp là đây ^.^. Dữ liệu của kiểu biến con trỏ gọi là kiểu con trỏ.

Bây giờ ta sẽ đi vào một vài phần của biến con trỏ.

## Định nghĩa kiểu con trỏ

Cú pháp:

```
Type <Kiểu con trỏ> = ^<Kiểu dữ liệu>;
Var <Danh sách biến> : <Kiểu con trỏ>;
```
{: .sh_pascal .sh_syntax }

Ví dụ:

```
Type
    Rptr = ^Real;
    Cptr = ^Char;
    Bptr = ^Boolean;
    Aptr = ^Array[1..5] Of Real;
    date-ptr = ^ Date;
        Date = Record
            Day : 1..31;
            Month : 1..12;
            Year : 1900..3000;
        End;
Var a, b : Rptr;
    d : date-ptr;
```
{: .sh_pascal }

Lưu ý: Khi định nghĩa kiểu con trỏ kiểu cấu trúc tự trỏ (kiểu bản ghi tự trỏ) ta phải định nghĩa kiểu con trỏ trước rồi mới định nghĩa kiểu bản ghi.
Ví dụ:

```
Type
    ControSV = ^sinhvien;
    sinhvien = record
        MSV : string;
        Hoten : string;
        Diem : real;
        next : ControSV;
    end;
```
{: .sh_pascal }

## Khai báo biến con trỏ

Chúng ta có thể khai báo trực tiếp hoặc giản tiếp. Ví dụ với kiểu sinhvien và ControSV ta có thể khai báo

```
Var sv1 : ControSV;  { Khai báo gián tiếp }
    sv2 : ^sinhvien; { Khai báo trực tiếp }
```
{: .sh_pascal }

Ngoài ra chúng ta có thể khai báo như sau khi không quan tâm tới một kiểu dữ liệu nào.

```
Var p : pointer;
```
{: .sh_pascal }

Sau khi khai báo biến con trỏ p là một con trỏ tổng quá không thuộc một kiểu dữ liệu cụ thể nào.

## Cấp phát vùng nhớ cho các biến.

Chúng ta chú ý rằng biến con trỏ cũng là biến tĩnh nên nó được máy cấp phát vùng nhớ 4 byte. Ví dụ với biến `sv1` như trên thì `sv1` là 1 biến con trỏ, nó được cấp phát vùng nhớ 4 byte còn biến `sv1^` mới là biến động và chưa được cấp phát. Tức ta có thể hiểu `sv1` là biến con trỏ chứa địa chỉ của biến động `sv1^`.
Để cấp phát vùng nhớ cho biến động `sv1` ta dùng toán tử `New(sv1);`

Con trỏ `NIL` là con trỏ đặc biệt, không trỏ tới đâu cả. Giá trị của con trỏ `NIL` bằng `0` hay là `rỗng` tương ứng với mọi kiểu con trỏ.

## Các phép toán.

### Phép gán

Hai con trỏ có thể gán cho nhau bằng phép gán `:=` nếu như chúng cùng kiểu. Trong ví dụ trên chúng ta có thể gán: `sv1 := sv2;`. Ngoài ra chúng ta cũng có thể gán `p := sv1;` nhưng không thể gán ngược lại vì `p` là con trỏ `pointer` có kiểu tổng quát.

Chúng ta có thể gán giá trị `NIL` cho bất kỳ con trỏ nào.

### Phép so sánh

Chúng ta chỉ sử dụng được phép so sánh bằng `=` và phép so sánh khác `<>` cho kiểu con trỏ. Nếu con trỏ `p` và `q` cũng trỏ tới một địa chỉ của một biến động (cùng trỏ tới một biến động) thì chúng được coi là bằng nhau, ngược lại sẽ khác nhau.

### Trỏ con trỏ tới 1 biến

Khi ta có 1 biến `a` thuộc kiểu `Integer`, ta có thể dùng toán tử `@` để trỏ con trỏ `p` tới vùng nhớ của biến `a` như sau: `p := @a;`

## Truy xuất dữ liệu

Biến con trỏ chỉ chứa địa chỉ của biến động nên chúng ta không thể nhập xuất trực tiếp cho biến con trỏ mà phải nhập xuất cho biến động mà nó trỏ tới.

Ví dụ sau thực hiện truy xuất, tính toán trên con trỏ.

```
Var p : ^Integer;
    a, s : Integer;
Begin
    Write('Nhap vao mot so (kieu con tro) p^ = ');
    New(p);
    Readln(p^);
    Write('Nhap vao mot so (kieu so nguyen) a =  ');
    Readln(a);
    s := 100*p^ + a;
    Writeln('100p^ + a = : ', s);
End.
```
{: .sh_pascal }

Ứng dụng lớn nhất của con trỏ giống như phần mở đầu đã nói, tạo ra một danh sách liên kết thay cho mảng. Và dưới đây là một bài minh họa bằng Pascal về nhập xuất danh sách liên kết.

```
Program DSLK;
Uses Crt;
Type
    sinhvien = Record
        MSV, Hoten : String;
        Diem : Real;
    End;
    Plist = ^list;
    list = Record
        data : sinhvien;
        next : Plist;
    End;
Var first, last, newp : Plist;
    ch : Char;
    i : Integer;
Begin
    Clrscr;
    Writeln('Danh sách sinh viên sử dụng con trỏ - Danh sách liên kết');
    Writeln('--------------------------------------------------------');
    Writeln;
    i := 0;
    Repeat
        Inc(i);
        New(newp); { Cập nhật ô nhớ }
        With newp^.data Do
        Begin
            Write('Nhập mã sinh viên thứ ', i, ' : ');
            Readln(MSV);
            Write('Họ tên : ');
            Readln(Hoten);
            Write('Điểm tổng kết : ');
            Readln(Diem);
            Write('Tiếp tục ? (y/ n)');
            Readln(ch);
            ch := Upcase(ch);
        End;

        If first = nil Then     {Gán phần tử đầu tiên}
            first := newp
        Else                    {Gán phần tử cuối cùng}
            last^.next := newp;
        last := newp;           {Cập nhật con trỏ last}
        last^.next := Nil;
    Until ch = 'N';

    Clrscr;
    Writeln('Danh sách sinh viên sử dụng con trỏ - Danh sách liên kết');
    Writeln('--------------------------------------------------------');
    Writeln;
    newp := first;
    Writeln('STT':5, ' | ', 'Mã sinh viên':20,' | ', 'Họ và tên' : 20,' | ', 'Điểm':5);
    For i:= 1 To 50 Do Write('-');
    Writeln;
    i := 0;
    While newp <> Nil Do
        With newp^ Do
        Begin
            Inc(i);
            Writeln(i:5,' | ', data.MSV:20, ' | ', data.Hoten:20, ' | ', data.Diem:5:2);
            newp := next;
        End;
    Readln;
End.
```
{: .sh_pascal }