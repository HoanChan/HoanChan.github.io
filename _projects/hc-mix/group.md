---
title: Gom nhóm
---
{::options parse_block_html="true" /}

Chương trình hỗ trợ nhận diện và tạo đề kiểm tra có các thành phần khác không phải là các câu hỏi ví dụ như `phần tô đáp án`, `phần ghi tên bài kiểm tra`, `ghi số báo danh`, `tên học sinh hoặc phần tự luận`. 

Bài trắc nghiệm có cấu trúc gồm nhiều nhóm, mỗi nhóm có thể chỉ có nội dung hoặc có cả các câu hỏi. Các câu hỏi trong mỗi nhóm sẽ chỉ được trộn nội bộ trong nhóm đó. Sau đây là cách viết phần nhận diện của nhóm:
```
<Nhóm><Số thứ tự><Dấu hoặc khoảng trống>
```
{: .sh_syntax }

  VD: `NHÓM 1.`, `nhóm 03:`, `Nhóm 2`

<div class="note">
  <h5>Áp dụng đối với phần không có trắc nghiệm</h5>
  Nếu nhóm chỉ chứa nội dung văn bản, không có câu trắc nghiệm nào thì gạch chân chữ <u>Nhóm</u>.
</div>

<div class="note info">
  <h5>Lưu ý</h5>
  Trong nội dung nhóm có thể chèn thêm một số thành phần sinh tự động khác ví dụ như mã đề, phiếu trả lời trắc nghiệm hay danh sách các câu hỏi trong nhóm. Đánh dấu chỗ muốn chèn bằng các thẻ thay thế như sau:

  * Mã đề: `[<Mã đề>]`{: .sh_syntax }
  * Phiếu trắc nghiệm: `[<Phiếu trắc nghiệm>]`{: .sh_syntax }
  * Danh sách các câu hỏi trong nhóm: `[<Danh sách câu hỏi>]`
</div>