---
title: Lịch sử
---

##### 27/03/2018 - 1.4.0.0 - Cập nhật lớn
{: .post-category}
- Bổ sung Link dự phòng cho file thông tin cập nhật, tránh cập nhật bị lỗi.
- Sửa lỗi in bị dư 1 dòng trống.
- Chấp nhận câu hỏi không có câu trả lời khi nhận diện câu hỏi (đề tiếng Anh)! Các câu này sẽ được gắn thuộc tính để chỉ đáp án đúng riêng! ➔ Hoàn thiện việc hỗ trợ biên soạn đề tiếng Anh.
- Với câu hỏi có hơn 4 câu trả lời, chỉ nhận 4 câu trả lời cuối, các câu trước cho vào nội dung câu hỏi!
- Khi nhận diện câu trả lời, nếu có dòng văn bản sau câu trả lời thì câu trả lời đó và dòng văn bản sẽ được đưa vào nội dung câu hỏi.
- Không thông báo có ngắt dòng thủ công nữa.
- Giờ đây nhận diện câu trả lời cần 1 hoặc nhiều dấu cách trắng hoặc Tab sau `A.`, `B.`, `C.`, `D.` để hạn chế tình trạng nhận sai, nhận nhầm không cần thiết!
- Loại bỏ  thông tin chương trình vì đã có trên web.
- Thông tin cập nhật nay sẽ không hiện trên hộp thoại thông báo nữa để tránh làm phiền người dùng! Khi nào cần sử dụng sẽ thấy được thông báo cập nhật cùng nút kết nối máy chủ để cập nhật!
- Sửa lỗi không hiển thị cây kết quả nhận diện.
- Bổ sung các nút lệnh để chèn mẫu nhóm, nhóm nội dung, nhóm con, câu hỏi, câu con, chú thích
- Xử lý đề MC-MIX ở phần câu hỏi gán mã đáp án `[<o A="D">]`
- Nếu câu hỏi không được gạch chân câu trả lời thì chương trình sẽ tự đi tìm câu nào có định dạng màu sắc hoặc in đậm khác biệt so với 3 câu còn lại làm câu trả lời đúng.
- Sửa 1 lỗi khiến việc nhận diện câu con cho các câu hỏi không có nội dung không thực hiện được.
- Nội dung câu hỏi nay có thể thêm các thành phần như `Câu 3.` hay `5.` vào mà không bị hiểu nhầm là câu hỏi tiếp theo.
- Thay đổi 1 chút icon nhóm, nhóm con, nhóm có nội dung và cách quản lý icon của cây kết quả.
- Hỗ trợ chỉnh sửa đáp án các câu hỏi ngay từ cây kết quả thông qua menu chuột phải. Người dùng không cần phải chạy nhận diện lại khi sửa đáp án của các câu hỏi nữa.
- Sửa lỗi bị treo, bị dừng khi đang in đáp án.
- Giờ đây nếu in đáp án ra nhiều file thì sẽ được lưu tự động và thư mục chỉ định.
- Sửa một lỗi khiến việc in số trang bị sai khi người dùng chọn đề gốc có trang đầu hoặc trang chẵn, trang lẻ được đánh số trang khác nhau ➔ chương trình sẽ tự chỉnh lại.
- Sử dụng chức năng Undo của Word hiệu quả cho các chức năng cơ bản của HC-MIX.
- Thêm tính năng phản hồi cho phép người dùng yêu cầu thêm tính năng hoặc báo lỗi về cho lập trình viên.
- Hoàn thiện và bổ sung đề mẫu các môn học ➔ [Tải về đề mẫu](/download/hc-mix_demau.7z){: .btn .btn-primary }
- Sửa lỗi không nhận diện các câu hỏi nằm ngay sau bảng.


##### 01/02/2018 - 1.3.0.1
{: .post-category}
- Sửa lỗi không kết nối được với máy chủ! Do máy chủ Github thay đổi chính sách bảo mật.
- Tách phần xử lý dữ liệu ra thư viện riêng.

##### 16/01/2018 - 1.3.0.0 - Cập nhật lớn
{: .post-category}
- Thêm mã thay thế `[<Tổng số trang>]` dùng trong nội dung nhóm
- Thêm khả năng sửa tên câu hỏi (Giờ thì câu hay bài hay chỉ là số cũng được), số bắt đầu đánh số (không bắt đầu từ 1 nữa)
- Hỗ trợ nhận diện câu trả lời nằm cùng dòng với câu hỏi
- Xử lý in ấn với câu hỏi không có phần dẫn! các câu trả lời nằm trên 1 dòng
- Bổ sung mã thay thế `[<?>]` thể hiện mối liên hệ giữa phần dẫn của nhóm với tên câu hỏi trong nhóm, các câu hỏi trong nhóm này sẽ không được thay đổi vị trí khi trộn đề
- Sửa lỗi bị xuống dòng, tạo dòng trống khi in nhóm
- Thụt lề của đáp án giờ được tính bằng cách quy đổi cỡ font của câu hỏi chứ không cố định như trước
- Thêm nút để chèn tổng số trang và tham chiếu
- Sửa tên nút phiếu tô trắc nghiệm thành phiếu tô
- Không dùng comment để hiển thị lỗi mà đưa lỗi nhận diện trên 1 danh sách để dễ theo dõi
- Sửa một chút thông báo kết quả nhận diện
- Sửa lại 1 chút chỗ lệnh chỉ hiện câu hỏi cho chính xác vì trước đây nó không bung nhóm con
- Chỉnh sửa chức năng xử lý đề MCMIX cho chính xác, nay đã có thể nhận diện và thay thế nhóm, câu hỏi, thứ tự cần thay thế trong nội dung nhóm câu hỏi
- Sửa một lỗi không bung được cây nhận diện khi có chú thích

##### 17/12/2017 - 1.2.0.6
{: .post-category}
- Sửa một lỗi khiến cho việc in phiếu tô trắc nghiệm bị sai số lượng câu khi nhận dạng đề có chú thích

##### 14/12/2017 - 1.2.0.5
{: .post-category}
- Sửa một lỗi làm cho chức năng sửa dấu câu hoạt động không đúng
- Bổ sung thêm tính năng chú thích -> Chi tiết xem [tại đây](/projects/hc-mix/comment)
- Sửa mặc định tạo mã đề bắt đầu từ `132` thay vì `123`
- Tìm và thay thế mã đề nay có thể tìm được trong Textbox hay trong Shapes
- Chương trình sẽ thông báo khi số câu con lớn hơn số đề, số câu con dư ra sẽ không bao giờ được in
- Sửa một lỗi khiến cho việc nhận diện nội dung câu con trên nhiều dòng không hoạt động
- Đảm bảo định dạng bảng tô câu hỏi trên toàn văn bản được thống nhất, không bị sai cỡ nữa
- Sửa một lỗi khiến cho việc tạo mã đề không phủ tới được số lớn nhất trong dãy
- Sửa lỗi không thay thế [<Danh sách câu hỏi>] khi chèn danh sách câu hỏi
- Xoá bớt 1 dấu xuống dòng khi in bảng tô trắc nghiệm
- Sửa một lỗi khiến cho các ô tô trắc nghiệm bị méo

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
- Cập nhật đề mẫu cho rõ ràng hơn ➔ [Tải về đề mẫu](/download/hc-mix_demau.7z){: .btn .btn-primary }

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

