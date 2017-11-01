---
title: Lịch sử
---
##### 01/11/2017 - 1.2.0.4
{: .post-category}
- Xoá nút cập nhật! Vì đã tự cập nhật lúc khởi động!
- Ẩn nút xuất CSDL (Tính năng này sẽ quay trở lại để phục vụ xuất CSDL dùng trong thi trắc nghiệm qua LAN)
- Thêm các nút chèn mã dành sẵn như `[<Phiếu trắc nghiệm>]` `[<Mã đề>]` `[<Số Trang>]` `[<Danh sách câu hỏi>]`
- Tự mở hướng dẫn cập nhật khi có phiên bản mới
- Sửa lỗi in bảng tô trắc nghiệm bị méo, bị đứng
- Sửa khả năng nhận diện với các câu `A`, `B`, `C`, `D` nằm cùng dòng thì phải cách nhau ít nhất 1 dấu `Tab` hoặc 2 dấu `cách trắng`.
- Nếu không nhận diện được gì thì ẩn Panel kết quả đi
- Sửa lỗi không thay thế [<Danh sách câu hỏi>] khi chèn danh sách câu hỏi
- Xoá bớt 1 dấu xuống dòng khi in bảng tô trắc nghiệm
- Cập nhật đề mẫu cho rõ ràng hơn -> [Tải về đề mẫu](/download/hc-mix_demau.7z){: .btn .btn-primary }

##### 22/10/2017 - 1.2.0.3
{: .post-category}
- Hiển thị thông báo cho người dùng biết không có Internet nên bị khoá chức năng.
- Bỏ luôn Style vì gây lỗi khi in, Chức năng này sẽ trở lại sớm nhất có thể.

##### 27/06/2017 - 1.2.0.2
{: .post-category}
- Sửa lỗi nhận diện thiếu nhóm không có câu hỏi nếu không khai báo nhóm
- Sửa lỗi xuất kết quả số liệu tổng hợp bị sai
- Thêm màu có bảng xuất kết quả số liệu tổng hợp

##### 22/06/2017 - 1.2.0.1
{: .post-category}
- Không sử dụng Style cho đề toán vì gây sai định dạng công thức
- Sửa lỗi sai font ở câu hỏi đầu tiên
- Chân trang và phần tô câu hỏi sẽ có font chữ giống như định dạng câu hỏi
- Sửa lại tên cho 2 Style dùng để định dạng câu hỏi và câu trả lời

##### 18/06/2017 - 1.2.0.0 - Cập nhật lớn
{: .post-category}
- Sửa lỗi đánh số trang sai khi bắt đầu thừ 0 thay vì 1
- Sử dụng Style cho câu hỏi và câu trả lời - Hỗ trợ định dạng lại cực nhanh chóng
- Bổ sung thêm tính năng nhóm con. Chi tiết xem [tại đây](/projects/hc-mix/group)
- Người dùng sẽ bắt buộc nâng cấp khi có phiên bản mới nếu muốn tiếp tục sử dụng chương trình.

##### 17/05/2017 - 1.1.0.0 - Cập nhật lớn
{: .post-category}
- Hỗ trợ tạo mã đề tuỳ chỉnh, tạo nhanh chóng, đơn giản, hiệu quả, trực quan theo ý muốn.
- Hỗ trơ nhập danh sách mã đề thủ công.
- Hiển thị nút trợ giúp dẫn đến [trang web](/projects/hc-mix).
- Thêm lựa chọn có in kèm đáp án khi in đề không.
- Hỏi người dùng có muốn tách các đề ra từng file riêng không trước khi in tất cả các đề.
- Nút xuất đáp án sẽ được đổi tên là xuất số liệu.
- Thêm cột quan hệ thể hiện mối liên hệ giữa các câu hỏi trong các đề với nhau (Ví dụ như câu 3 ở đề 001 là câu 7 ở đề 002 ...) trong phần xuất số liệu.
- Thêm nút xuất đáp án để in đáp án cho tất cả các đề.

##### 09/05/2017 - 1.0.0.5
{: .post-category}
- Thay tính năng xoá khoảng cách bằng tính năng chuyển đánh số đầu dòng sang văn bản thuần. 
- Thay link [download](/download/hc-mix.7z) và kiểm tra [phiên bản](/download/hc-mix.xml).

##### 22/03/2017 - 1.0.0.4
{: .post-category}
- Sửa một lỗi khiến cho việc thay thế [<Danh sách câu hỏi>] bị lỗi khi nhóm có quá nhiều câu làm cho in phần đầu của nhóm rồi bị đứng.
- Sửa cách nhóm được in ra, nếu có nội dung thì in trên cùng 1 hàng với chữ nhóm, không có nội dung thì in chữ nhóm rồi xuống hàng.
- Thông báo cho người dùng biết lưu tài liệu trước khi cho in đề!
- Thêm ghi chú số lượng câu trong mỗi nhóm ở TreeView.
- Thêm menu giúp thu gọn TreeView tới mức nhóm hoặc câu.
- Chuyển server lên github.

##### 22/03/2017 - 1.0.0.3
{: .post-category}
- In 2 cột liên tiếp với các Group trắc nghiệm - không còn tách riêng như trước.
- Hỗ trợ thêm in danh sách các câu hỏi trong nhóm (xem hướng dẫn sử dụng).

##### 18-02-2017 - 1.0.0.2
{: .post-category}
- Sửa một lỗi khiến cho việc đánh số trang không phải từ 1.
- Sửa một lỗi khiến cho việc cập nhật không hoạt động được.
- Thêm chức năng xuất đáp án ra dạng CSDL để chấm tự động.

##### 10-01-2017 - 1.0.0.1
{: .post-category}
- Sửa một lỗi khiến cho đề có Nhóm được tạo tự động bị lỗi.
- Sửa một lỗi khiến cho việc in đề có in luôn Comments.

##### 04-01-2017 - 1.0.0.0
{: .post-category}
- Phiên bản chính thức đầu tiên.

