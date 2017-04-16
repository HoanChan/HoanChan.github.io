---
title: Sử dụng phần mềm
series_index: 6
---

### Các lệnh chính của phần mềm

* Mục xử lý đề
  * `Xử lý đề MC-MIX`: Chuyển đề gốc của MC-MIX sang dạng bình thường để phần mềm có thể nhận diện.
  * `Nhận diện các câu hỏi`: Tiến hành nhận diện tất cả các thành phần trong đề kiểm tra. Có gì bất thường thì chương trình sẽ thông báo bằng các bình luận tương ứng.
  * `Trộn và in đề kiểm tra`: Mở hộp thoại trộn đề để người dùng có thể:
    * `In đề gốc`: In đề theo đúng định dạng của chương trình đề chia sẻ và lưu trữ lâu dài sau này, làm mẫu để in ấn các đề được trộn.
    * `In đề nguyên mẫu`: là đề chưa trộn câu hỏi, dùng để kiểm tra lại theo tương ứng đề gốc.
    * `Trộn đề`: Hoán vị các câu hỏi, hoán vị các câu trả lời (trừ câu cố định) để tạo các đề kiểm tra khác nhau, đảm bảo tỉ lệ A, B, C, D là 25% mỗi loại. Hạn chế tối đa hiện tượng có 3 câu liên tiếp có đáp án đúng như nhau (3 hay 4 câu A liên tiếp chẳng hạn).
    * `In đề này`: In đề đang xem.
    * `In tất cả`: In tất cả các đề đã được trộn.
    * `Xuất đáp án`: xuất các đáp án ra dạng bảng để copy ra Excel phục vụ cho chấm tự động.
  * `In phiếu bài làm`: In thủ công phiếu bài làm, số câu trả lời tuỳ ý.
* `Mục tối ưu định dạng`: Đây là các tiện ích kèm theo để định dạng đề gốc tốt nhất có thể.
  * `Dấu câu`: Chỉnh sửa các dấu câu , . ? : ; ! phù hợp với quy ước soạn thảo văn bản.
  * `Các dấu Tab` sẽ được thay bằng dấu ngắt đoạn (xuống dòng)! Mỗi câu trả lời nằm riêng trên 1 đoạn sẽ giúp tăng tốc nhận diện câu hỏi!
  * `Cắt tỉa`: Nhiều dấu tab thành 1, nhiều dấu cách thành 1. Các dấu cách, dấu tab đầu và cuối đoạn sẽ bị xoá.
  * `Viết hoa`: Các chữ cái đầu câu và các chữ cái phía sau dấu chấm, chấm hỏi, chấm than sẽ được viết hoa.
  * `Xoá giãn cách`: Giãn cách ở trên và ở dưới của đoạn văn sẽ được gán là 0px.
  * `Xoá bình luận`: Xoá tất cả các bình luận (có thể được tạo ra bởi chương trình khi nhận diện câu hỏi).