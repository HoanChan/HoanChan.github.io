---
title: Chương trình đầu tiên
series_index: 1
---

Trước khi nghiên cứu những thành phần cơ bản của ngôn ngữ lập trình Pascal, chúng ta hãy nghiên cứu một  chương trình Pascal đơn giản để có thể xem nó như một chương trình mẫu cho các ví dụ trong các phần tiếp theo.

## Cấu trúc chương trình Pascal

Một chương trình Pascal về cơ bản bao gồm các phần sau đây:

``` pascal
Program { tên của chương trình }
Uses { khai báo các thư viện }
Const { khai báo các hằng toàn cục }
var { khai báo các biến toàn cục }

Function { khai báo hàm (nếu cần) }
{ các biến cục bộ }
Begin
...
End;

Procedure { khai báo thủ tục (nếu cần) }
{ các biến cục bộ }
Begin
...
End;

Begin { bắt đầu khối chương trình chính }
...
End. { kết thúc khối chương trình chính }
```

Ví dụ về một chương trình Pascal đơn giản nhất:

``` pascal
Program Hello_World;
Uses CRT;
(* Đây là nơi bắt đầu chương trình chính *)
Begin
   Writeln('Hello, World!');
   Readkey;
End.
```

Chúng ta hãy phân tích các thành phần của chương trình trên:

- Dòng đầu tiên `Program Hello_World;` Cho biết tên của chương trình là `Hello_World`.
- Dòng thứ hai `Uses CRT;` Là một lệnh tiền xử lý, cho trình biên dịch biết là cần chèn các lệnh trong thư viện `CRT` vào (sẽ dùng các lệnh trong thư viện `CRT`) trước khi thực hiện biên dịch.
- Các dòng tiếp theo được đóng trong cặp `Begin` và `End` là khối chương trình chính. Mỗi khối trong Pascal được đóng trong cặp `Begin` và `End`. Tuy nhiên, `End.` cho biết đây là kết thúc của chương trình chính thay vì `End;` là kết thúc của một chương trình con.
- Câu lệnh `Begin` của khối chương trình chính là nơi chương trình được bắt đầu thực thi.
- Các dòng trong `(* ... *)` sẽ bị bỏ qua bởi trình dịch và nó đã được đưa vào để thêm một bình luận hay chú thích trong chương trình.
- Lệnh `Writeln ('Hello, World!');` Sử dụng lệnh `Writeln` có sẵn trong Pascal để viết ra thông báo `Hello, World!` lên màn hình.
- Lệnh `Readkey;` dùng để tạm dừng chương trình cho đến khi người dùng nhấn một phím bất kì. Nó là một phần của thư viện `CRT` trong Pascal.
- Lệnh `End` cuối cùng chính là nơi chương trình kết thúc.

## Biên dịch và thực thi chương trình Pascal

Mở Borland Pascal hoặc Sublime Text và viết mã lệnh của chương trình phía trên vào.

Lưu tập tin là hello.pas

> Với Borland Pascal thì nhấn `F9` để kiểm tra chương trình có lỗi gì không và `Ctrl+F9` để chạy chương trình

> Với Sublime Text thì nhấn `Ctrl + Shift + B` rồi chọn `Build` để biên dịch chương trình hoặc chọn `Run` để chạy chương trình