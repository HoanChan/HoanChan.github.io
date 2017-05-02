---
title: Tham số
---

Các tham số thiết lập nên sự liên kết giữa thủ tục và chương trình gọi nó.

Các tham số của chương trình con chính là các dữ liệu cần thiết nhập vào để xử lý các phép toán trong chương trình con sử dụng. Các tham số này được gọi là tham số hình thức, bởi nó chỉ mang danh nghĩa là các đối số của chương trình con, chứ về mặt bản chất dữ liệu nó lại mang thông tin của các biến trong chương trình chính. Các tham số này có 2 loại: Tham biến và Tham trị. Các chương trình con có thể có nhiều loại Tham số hình thức khác nhau về kiểu tham số hay về kiểu dữ liệu của tham số.

- Tham biến: Là loại tham số hình thức mà giá trị của nó có thể thay đổi được trong các phép xử lý tính toán của chương trình con. Có thể dữ liệu nạp vào chương trình con là A, nhưng sau khi ra khỏi chương trình con ( kết quả sau khi thực hiện chương trình con ) nó lại mang kết quả B. Tham biến là tham số hình thức được khai báo ở chương trình con và bắt buộc phải được khai báo với từ kháo khai báo VAR. Các chương trình con có thể có nhiều loại tham biến, và cách khai báo các tham biến giống hệt như bạn khai báo biến trong chương trình chính.

- Tham trị: Là loại tham số hình thức mà giá trị của nó không thể thay đổi được trong các phép xử lý tính toán của chương trình con. Dữ liệu nạp vào chương trình con là A, nhưng sau khi ra khỏi chương trình con ( kết quả sau khi thực hiện chương trình con ) nó vẫn phải là A. Chính vì vậy, trong chương trình con bạn không thể nào thực hiện 1 phép toán làm thay đổi giá trị của tham trị, nếu có máy sẽ báo lỗi.Tham trị là tham số hình thức được khai báo ở chương trình con và không bắt buộc phải được khai báo với từ kháo khai báo VAR. Các chương trình con có thể có nhiều loại tham trị, và cách khai báo các tham trị giống hệt như bạn khai báo biến trong chương trình chính.

## Cách truyền tham số trong chương trình con

- Chương trình con không cần có tham số (sau tên chương trình con) nếu không dùng đến chúng hoặc dùng trực tiếp biến toàn cục.

- Khi truyền tham số các tham số trong lời gọi chương trình con phải đúng thứ tự và kiểu tương ứng với khi khai báo chương trình con.

Ví dụ:

```
Procedure inso(a:integer; ch:char);
begin
    {các lệnh của chương trình con}
end;
{gọi}
inso(13,’a’); {lời gọi đúng}
inso(‘a’,13); {loi goi sai}
inso(13);{lời gọi sai}
```
{: .sh_pascal }

- Tham số hình thức là các tham số sau tên hàm và thủ tục trong khai báo.

- Tham số thực sự là các tham số sau tên hàm và thủ tục trong lời gọi.

- Tham biến: là các tham số được khai báo sau từ khóa var. Các tham số thực phải là các biến chứ không được là giá trị. Tham biến có thể được thay đổi trong chương trình con và sau khi ra khỏi chương trình con nó vẫn giữ giá trị thay đổi đó.

- Tham trị: là các tham số được khia báo mà không đứng sau từ khóa var. Các tham số thực có thể là các giá trị, hằng, biến. Tham trị có thể thay đổi trong chương trình con nhưng sau khi kết thúc chương trình con giá trị của nó trở về như ban đầu.

- Các tham số trong hàm luôn là các tham trị, các tham số trong thủ tục có thể là tham trị hoặc tham biến.


## Biến toàn cục và biến cục bộ

- Biến toàn cục là biến được khai báo trong chương trình chính. Các biến này có thể được dùng ở mọi nơi trong chương trình và tồn tại trong suốt thời gian làm việc của chương trình.

- Biến cục bộ (biến địa phương) là các biến được khai báo trong chương trình con. Các biến này chỉ được sử dụng trong phạm vi chương trình con mà nó được khai báo. Sau khi kết thức chương trình con các biến này sẽ không còn tồn tại.
- Trong trường họp biến cục bộ trùng tên với biến toàn cục thì máy không bị nhầm lẫn mà sẽ thực hiện trên biến cục bộ. Biến toàn cục không bị ảnh hưởng.