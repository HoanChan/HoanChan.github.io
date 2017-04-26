---
title: Câu lệnh rẽ nhánh
permalink: /dev/pascal/conditions/
redirect_from: /dev/pascal/conditions/index.html
breadcrumb: Câu lệnh rẽ nhánh
---

Trong cuộc sống, có những hoạt động chỉ được thực hiện khi một điều kiện cụ thể được xảy ra. Điều kiện thường là một sự kiện được mô tả sau từ “Nếu”. Vd: Nếu em bị ốm, em sẽ không tập thể dục buổi sáng... Trong Pascal cũng như vậy.

Trước khi bắt đầu về câu lệnh điều kiện, chúng ta sẽ tìm hiểu tính đúng/sai, phép so sánh và cấu trúc rẽ nhánh.

## Tính đúng hoặc sai của các điều kiện

Khi kết quả kiểm tra là đúng, ta nói điều kiện được thỏa mãn, còn khi kết quả kiểm tra là sai, ta nói điều kiện không thỏa mãn.

> Nếu x chia hết cho 2, thì x là số chẵn; ngược lại x là số lẻ.  
> Nếu nhấn phím Enter, thì sẽ đưa con trỏ soạn thảo xuống dòng.

## Điều kiện và phép so sánh

Các phép so sánh có vai trò rất quan trọng trong việc mô tả thuật toán và lập trình. Chúng thường được sử dụng để biểu diễn các điều kiện. Ví dụ:

> Tìm số lớn nhất: Nếu a > b, thì a là số lớn nhất; ngược lại b là số lớn nhất.

Cụ thể hơn, Pascal hỗ trợ các loại phép so sánh như sau:

|   Phép toán       |  Toán tử  | Ví dụ a = 2 và b = 3  |
|-------------------|-----------|-----------------------|
|    Lớn hơn        |    `>`    |    a > b ⇒ False     |
|    Bé hơn         |    `<`    |    a < b ⇒ True      |
| Lớn hơn khoặc bằng|    `>=`   |   a >= b ⇒ False     |
| Bé hơn hoặc bằng  |    `<=`   |   a <= b ⇒ True      |
| Bằng              |    `=`    |    a = b ⇒ False     |
| Khác              |    `<>`   |   x <> y ⇒ True      |
{: .table .table-bordered }

Kết quả của các phép so sánh đều thuộc kiểu dữ liệu là [Boolean][/dev/pascal/data_types]

Ngoài các phép so sánh, Pascal còn hỗ trợ các phép toán logic như sau:

|   Phép toán   |  Toán tử  | Ví dụ                                                                           |
|---------------|-----------|----------------------------------------------------------------------------------|
|    Và         |    `AND`  | True AND False ⇒ False  | True AND True ⇒ True  | False AND False ⇒ False      |
|    Hoặc       |    `OR`   | True OR False ⇒ True    | True OR True ⇒ True   | False OR False ⇒ False       |
|    Phủ định   |    `NOT`  | NOT(True) ⇒ False       | NOT(False) ⇒ True     | Not(False And False) ⇒ True  |
{: .table .table-bordered }

