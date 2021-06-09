---
title: Trộn đề
description: Hướng dẫn trộn đề
---

## Trộn đề sau khi nhận diện xong

Việc trộn đề sẽ được thực hiện sau khi đã nhận diện hoàn thiện toàn bộ câu hỏi trong đề và không xuất hiện lỗi nào.
Hộp thoại trộn đề sẽ xuất hiện như sau:

{% include image.html url="mixdialog.png" class="img-m" %}

#### Ý nghĩa của từng thiết lập

- Số lượng đề: Thiết lập số lượng đề mong muốn được trộn.
- Trộn đề: Phân bố các câu con, nhóm con, hoán vị các câu hỏi, hoán vị các câu trả lời (trừ câu cố định) để tạo các đề kiểm tra khác nhau, đảm bảo tỉ lệ A, B, C, D là 25% mỗi loại. Phần mềm cũng sẽ cố gắn hạn chế hiện tượng có 3 câu liên tiếp có đáp án đúng như nhau (3 hay 4 câu A liên tiếp chẳng hạn) trong cùng 1 nhóm.
    Mỗi đề sẽ được hiển thị toàn bộ nội dung trên 1 Tab, người dùng có thể trộn lại từng đề nếu có nhu cầu. Mỗi câu hỏi sẽ có thêm ghi chú về thứ tự của nó trong đề gốc và thứ tự hoán vị các câu trả lời của nó so với câu trong đề gốc.
- Mục Thiếp lập chung:
+ In số trang: Các đề sẽ được đánh số trang. Nếu là in đề theo mẫu đầu đề và chân trang thì số trang sẽ được đánh vào chỗ [<Số trang>].
+ In kèm mã đề: Lựa chọn này chỉ chọn được khi In số trang được chọn. Khi in số trang, phần mềm sẽ in kèm luôn mã đề vào bên cạnh nó. 
Ví dụ như: Đề 104 - Trang 2/4
+ Mẫu đầu đề: Đầu trang và chân trang sẽ được lấy mẫu từ văn bản hiện tại. Số trang và mã đề sẽ được in vào chỗ [<Số trang>] ở phần chân trang.
 
{% include image.html url="footer.png" class="img-m" %}
 
+ Hỗ trợ in 2 cột: Các câu trắc nghiệm sẽ được in theo 2 cột, giúp tiết kiệm giấy tối đa (hiệu quả với các bài kiểm tra có các câu hỏi và câu trả lời có nội dung ngắn gọn).
+ Đáp án tô đen: Nếu được chọn, chương trình sẽ in đáp án theo dạng tô đen để dễ đục lỗ và chấm. Khi không chọn, đáp án sẽ được in ra dạng bình thường. Ví dụ: Câu 1 - A, Câu 2 - C ...
+ Giảm mực in: Lựa chọn này chỉ chọn được khi Đáp án tô đen được chọn. Thay in tô đen luôn thì nó chỉ tô vừa đẹp để nhìn thấy, giảm đáng kể lượng mực in.

{% include image.html url="saveink.png" class="img-m" %}

+ In đáp án kèm theo đề: Nếu được chọn, khi in đề sẽ kèm theo đáp án. Nếu không chọn thì người dùng có thể in đáp án thủ công bằng nút Xuất đáp án sau cũng được.

#### Cách thiết lập mã đề
- Mục Thiết lập mã đề: Danh sách mã đề có thể được nhập bằng tay hoặc được sinh tự động như sau:

Mã đề = Tiền tố + (Bắt đầu + (Thứ tự đề - 1) * Giãn) + Hậu tối

{% include image.html url="ids.png" class="img-m" %}

#### Thiết lập các định dạng của đề

Mục thiết lập định dạng cho phép thay đổi màu sắc của các thành phần trên đề cũng như lựa chọn các định dạng sẽ được copy từ câu đầu tiên gán cho các câu ở sau để đề được đồng bộ về định dạng.

{% include image.html url="format.png" class="img-m" %}

#### Cách xem phần xem trước KQ

Phần xem trước kết quả sẽ hiển thị cách đề sẽ được in cũng như các thành phần sẽ có trên đề dựa theo các thiết lập đang chọn
{% include image.html url="preview.png" class="img-m" %}
