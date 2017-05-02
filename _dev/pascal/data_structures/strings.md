---
title: Xâu - String
---

Để xử lý văn bản, Pascal đưa ra một kiểu dữ liệu mới gọi là chuỗi hoặc xâu ký tự và được định nghĩa bằng từ khóa **String**{: .cl-hl }. Xâu ký tự là dữ liệu bao gồm một dãy các ký tự trong bảng mã [ASCII](https://vi.wikipedia.org/wiki/ASCII).

## Khai báo:

```
Var <Tên xâu> : String[<Độ dài tối đa>];
```
{: .sh_pascal .sh_syntax }

Với cách khai báo này, độ dài của xâu được quy định bởi `<Độ dài tối đa>`{: .sh_syntax }. `<Độ dài tối đa>`{: .sh_syntax } nhận các giá trị nguyên trong đoạn `1..255`{: .sh_pascal}. Trên bộ nhớ, byte đầu tiên chứa số ký tự hiện có của xâu, các byte sau ghi giá trị của từng kí tự trong xâu. Độ dài tối đa của xâu ký tự là 255. Kiểu **String**{: .cl-hl } có thể chiếm tối đa 256 byte bộ nhớ. Ngoài ra còn có cách khai báo xâu ngắn gọn hơn như sau:

```
Var <Tên xâu> : String;
```
{: .sh_pascal .sh_syntax }

Với cách khai báo này, Pascal tự hiểu là độ dài tối đa có giá trị là 255.

## Nhập/xuất

Cách đọc hay viết kiểu **String**{: .cl-hl } cũng tương tự như các kiểu dữ liệu khác, ta sử dụng các thủ tục [Read / Readln](/dev/pascal/io/#input), hoặc [Write / Writeln](/dev/pascal/io/#output).

Ví dụ: 

```
Program exString;
Var greetings : String;
    name : String[30];
    organisation : String[10];
    message : String[100];

Begin
   greetings := 'Hello ';
   message := 'Good Day!';
   
   Writeln('Please Enter your Name');
   Readln(name);
   
   Writeln('Please Enter the name of your Organisation');
   Readln(organisation);
   
   Writeln(greetings, name, ' from ', organisation);
   Writeln(message); 
End.
```
{: .sh_pascal }

Sau khi đoạn code trên được biên dịch và thực thi thì sẽ cho ra kết quả nhau sau:
> Please Enter your Name  
> John Smith  
> Please Enter the name of your Organisation  
> Infotech  
> Hello John Smith from Infotech

## Truy xuất

Xâu kí tự có thể được xem như mảng 1 chiều các phần tử có kiểu dữ liệu là Char. Truy cập từng phần tử của xâu ký tự tương tự mảng 1 chiều:

```
<Tên biến xâu>[<Chỉ số>]
```
{: .sh_syntax }

Ví dụ: 

```
St := 'Lê Hoàn Chân';
Write(st[4]);
```
{: .sh_pascal }

> Kết quả sẽ là: H.

## Các thao tác trên xâu ký tự

Xâu kí tự được sử dụng rất nhiều nên Pascal xây dựng một hệ thống các lệnh để xử lý xâu như sau:

### Phép ghép xâu:

Để nối các xâu lại với nhau, Pascal sử dụng toán tử là dấu cộng `+` như sau:

```
st1 := 'Lê'; 
st2 := 'Hoàn Chân'; 
St := st1 + ' ' + st2; 
```
{: .sh_pascal }

> Kết quả sẽ là: St = 'Lê Hoàn Chân'

### Phép so sánh: 

Các phép so sánh (=, >=, <=, >, <) có thứ tự ưu tiên thực hiện thấp hơn phép ghép xâu. Ví dụ: 

```
If 'ab' + 'c' = 'abc' Then … 
```
{: .sh_pascal }

Phép ghép xâu sẽ được thực hiện trước rồi mới đem giá trị đó đem so sánh.

Các quy tắc so sánh: 
+ Hai xâu bằng nhau nếu giống nhau hoàn toàn. 
+ Xâu A lớn hơn xâu B nếu ký tự đầu tiên khác nhau của xâu A có mã ASCII lớn hơn. 
+ Nếu A và B là 2 xâu có độ dài khác nhau và xâu A là đoạn đầu của xâu B thì xâu A < xâu B 

Ví dụ có các xâu như sau: 

```
a := 'Asus U80V';
b := 'Asus U85V';
c := 'Sony VAIO SVF15';
d := 'Sony VAIO';
e := 'Sony VAIO Svf15';
f := 'Lenovo G80';
g := 'LenovoG850'; 
```
{: .sh_pascal }

Thì ta có:

> e > c > d > g > f > b > a

### Các thủ tục và hàm chuẩn xử lý xâu ký tự

> #### Hàm Length(st)
**Ý nghĩa:** Cho độ dài thực của xâu ký tự  
**Ví dụ:**
```
st:='Hoàn Chân';
Writeln(Length(st));
```
Kết quả: `9`
{: .sh_pascal }

> #### Thủ tục Delete(st, pos, num)
**Ý nghĩa:** Xóa `num` ký tự trong xâu `st` kể từ vị trí `pos`  
**Ví dụ:**
```
st:= 'FILENAME'; 
Delete(st,5,4);
Writeln(st);
```
Kết quả: `FILE`
{: .sh_pascal }

> #### Thủ tục Insert(obj, st, pos)
**Ý nghĩa:** Thủ tục cho kết quả bằng cách chèn xâu ký tự có tên là Obj vào xâu st tại vị trí pos, những ký tự đứng sau pos sẽ được dời về phía sau của xâu ký tự obj  
**Ví dụ:**
```
obj:= 'Hoàn ';
st:= 'Lê Chân';
Insert(obj, st, 4);
Writeln(st);
```
Kết quả: `Lê Hoàn Chân`
{: .sh_pascal }

> #### Thủ tục Str(value, st)
**Ý nghĩa:** Chuyển đối giá trị kiểu số(value) sang dạng xâu ký tự và gán cho biến st.  
**Ví dụ:**
```
n := 150; 
Str(n:5, st);
Writeln(st);
```
Kết quả: `  150`
{: .sh_pascal }


> #### Thủ tục Val(st, value, code) 
**Ý nghĩa:** Đối một xâu ký tự st sang dạng số và gán cho biến value, nếu biến đối thành công thì code sẽ nhận giá trị bằng 0. ngược lại thì cho giá trị khác không  
**Ví dụ:**
```
Val('123', value, code);
Writeln(value, ' - ', code);
```
Kết quả: `123 - 0`
{: .sh_pascal }


> #### Hàm Copy(st, pos, num) 
**Ý nghĩa:** Sao chép trong xâu st, num ký tự tại vị trí pos  
**Ví dụ:**
```
st := 'Lê Hoàn Chân';
Writeln('Result =', Copy(st, 3, 4));
```
Kết quả: `Result = Hoàn`
{: .sh_pascal }


> #### Hàm Concat(s1, s2, …, sn) 
**Ý nghĩa:** Hàm cho ra 1 xâu mới bằng cách nối đuôi các xâu s1,s2,…,sn lại với nhau.  
**Ví dụ:**
```
a := 'Lê';
b := ' Hoàn ';
Writeln(Concat(a, b, 'Chân')); 
```
Kết quả: `Lê Hoàn Chân`
{: .sh_pascal }

> #### Hàm Pos(st1, st2) 
**Ý nghĩa:** Hàm cho ta vị trí tìm thấy đầu tiên của xâu s1 trong xâu s2.  
**Ví dụ:**
```
a := Pos('Chân', 'Lê Hoàn Chân');
Writeln('Position = ', a);
```
Kết quả: `Position = 8`
{: .sh_pascal }

> #### Hàm UPCASE(Ký tự) 
**Ý nghĩa:** Đổi Ký tự thành "KÝ TỰ" in hoa
{: .sh_pascal }

## Truy xuất từng ký tự trong chuỗi

Có thể kết hợp dùng vòng lặp truy xuất các ký tự trong chuỗi.

Ví dụ: In ra các ký tự của chuỗi st[i] ra màn hình theo từng dòng

```
st:='PASCAL';
for i:=1 to 6 do writeln(st[i]);
```
{: .sh_pascal }