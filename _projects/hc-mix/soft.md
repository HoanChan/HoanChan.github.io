---
title: Sử dụng phần mềm
---

## Các lệnh chính của phần mềm

{% include image.html url="ribon.png" class="img-m" %}

- Mục **Tối ưu định dạng**: Đây là các tiện ích kèm theo để định dạng đề gốc tốt nhất có thể.
    + **Dấu câu**: Chỉnh sửa các dấu câu , . ? : ; ! phù hợp với quy ước soạn thảo văn bản.
    + **Cắt tỉa**: Nhiều dấu tab thành 1, nhiều dấu cách thành 1. Các dấu cách, dấu tab đầu và cuối đoạn sẽ bị xoá.
    + **Viết hoa**: Các chữ cái đầu câu và các chữ cái phía sau dấu chấm, chấm hỏi, chấm than sẽ được viết hoa.
    + **Xử lý đánh số**: Biến đánh số tự động thành văn bản bình thường để có thể gạch chân hay in nghiêng được.
    + **Xoá bình luận**: Xoá tất cả các bình luận (có thể được tạo ra bởi chương trình khi nhận diện câu hỏi).
    + **Xử lý đề MC-MIX**: Chuyển đề gốc của MC-MIX sang dạng bình thường để phần mềm có thể nhận diện.
- Mục **Xử lý đề**:
    + **Nhận diện các câu hỏi**: Tiến hành nhận diện tất cả các thành phần trong đề kiểm tra. Có gì bất thường thì chương trình sẽ thông báo bằng các bình luận tương ứng.
    + **Trộn và in đề kiểm tra**: Mở hộp thoại trộn đề để người dùng có thể:
    + **In phiếu bài làm**: In thủ công phiếu bài làm, số câu trả lời tuỳ ý.
- Mục **Thông tin**:
    + **Thông tin trợ giúp**: Mở trang Web để hướng dẫn và giải thích tất cả chức năng của chương trình.
    + **Thông tin chương trình**: Xem thông tin về tác giả và phiên bản.
    + **Kiểm tra cập nhật**: Kiểm tra có phiên bản mới chưa.

## Kết quả nhận diện đề

Sau khi nhấn nút **Nhận diện các câu hỏi** thì chương trình tiến hành nhận diện đề kiểm tra và kết quả sẽ được thể hiện như sau:

{% include image.html url="result.png" class="img-m" %}

Bạn có thể kiểm tra từng nhóm, từng câu, từng đáp án bằng cách click vào mục tương ứng. Bạn cũng có thể bung rộng hay thu gọn kết quả bằng các lệnh trong menu chuột phải.

Sau đây là danh sách quy ước về các kí hiệu thể hiện trong kết quả nhận diện:

- <span>{% include image.html url="Group.png" %}</span>: Nhóm.
- <span>{% include image.html url="Question.png" %}</span>: Câu hỏi.
- <span>{% include image.html url="Child.png" %}</span>: Câu con.
- <span>{% include image.html url="Answer.png" %}</span>: Câu trả lời.
- <span>{% include image.html url="Correct.png" %}</span>: Câu đáp án đúng.
- <span>{% include image.html url="Fixed.png" %}</span>: Câu trả lời cố định.
- <span>{% include image.html url="CorrectFixed.png" %}</span>: Vừa là câu trả lời cố định vừa là đáp án đúng.

## Thiết lập trộn đề

Sau khi nhấn nút **Trộn và in đề kiểm tra** thì chương trình tiến hành sẽ mở hộp thoại thiết lập như sau:

{% include image.html url="main.png" class="img-m" %}

- **Số lượng đề**: Thiết lập số lượng đề mong muốn được trộn.
- **Trộn đề**: Phân bố các câu con, hoán vị các câu hỏi, hoán vị các câu trả lời (trừ câu cố định) để tạo các đề kiểm tra khác nhau, đảm bảo tỉ lệ A, B, C, D là 25% mỗi loại. Hạn chế tối đa hiện tượng có 3 câu liên tiếp có đáp án đúng như nhau (3 hay 4 câu A liên tiếp chẳng hạn) trong cùng 1 nhóm.
- Mục **Thiếp lập chung**:
    + **In số trang**: Các đề sẽ được đánh số trang. Nếu là in đề theo mẫu đầu đề và chân trang thì số trang sẽ được đánh và chỗ `[<Số trang>]`{: .sh_syntax}.
    + **In kèm mã đề**: Lựa chọn này chỉ chọn được khi **In số trang** được chọn. Khi in số trang, phần mềm sẽ in kèm luôn mã đề vào bên cạnh nó. Ví dụ như: `Đề 104 - Trang 2/4`
    + **Hỗ trợ in 2 cột**: Các câu trắc nghiệm sẽ được in theo 2 cột, giúp tiết kiệm giấy tối đa.
    + **Đáp án tô đen**: Nếu được chọn, chương trình sẽ in đáp án theo dạng tô đen để dễ đục lỗ và chấm. Khi không chọn, đáp án sẽ được in ra dạng bình thường. Ví dụ: `Câu 1 - A, Câu 2 - C ...`
    + **Giảm mực in**: Lựa chọn này chỉ chọn được khi **Đáp án tô đen** được chọn. Thay in tô đen thui luôn thì nó chỉ tô vừa đẹp để thấy thôi. giảm đáng kể lượng mực in.
    + **In đáp án kèm theo đề**: Nếu được chọn, khi in đề sẽ kèm theo đáp án. Nếu không chọn thì bạn có thể in đáp án thủ công bằng nút **Xuất đáp án** sau cũng được.
- Mục **Thiết lập mã đề**: Danh sách mã đề có thể được nhập bằng tay hoặc được sinh tự động như sau:
    ```
    Mã đề = Tiền tố + (Bắt đầu + (Thứ tự đề - 1) * Giãn) + Hậu tối
    ```
- Các nút xuất kết quả:
    + **In đề gốc**: In đề theo đúng định dạng của chương trình đề chia sẻ và lưu trữ lâu dài sau này, làm mẫu để trộn đề.
    + **In đề chuẩn**: In đề chưa trộn câu hỏi, dùng để kiểm tra lại trước khi trộn và in đề hàng loạt.
    + **In đề này**: In đề đang xem.
    + **In tất cả**: In tất cả các đề đã được trộn.
    + **Xuất số liệu**: Xuất các đáp án ra dạng bảng để copy ra Excel phục vụ cho chấm tự động cũng như số liệu về mối tương qua của các câu giữa các đề (Ví dụ như câu 3 ở đề 001 là câu 7 ở đề 002 ...).
    + **Xuất đáp án**: Xuất đáp án của tất cả các đề đã trộn.