---
title: Gom nhóm
description: Hướng dẫn chia phần cho đề kiểm tra
---

Chương trình hỗ trợ nhận diện và tạo đề kiểm tra có các thành phần khác không phải là các câu hỏi ví dụ như `phần tô đáp án`, `phần ghi tên bài kiểm tra`, `ghi số báo danh`, `tên học sinh hoặc phần tự luận`. 

Bài trắc nghiệm có cấu trúc gồm nhiều nhóm, mỗi nhóm có thể chỉ có nội dung hoặc có cả các câu hỏi. Các câu hỏi trong mỗi nhóm sẽ chỉ được trộn nội bộ trong nhóm đó. Sau đây là cách viết phần nhận diện của nhóm:
```
<Nhóm><Số thứ tự><Dấu hoặc khoảng trống>
```
{: .sh_syntax }

    VD: `NHÓM 1.`, `nhóm 03:`, `Nhóm 2`

<div class="note" id="contentGroup">
##### Áp dụng đối với phần không có trắc nghiệm

Nếu nhóm chỉ chứa nội dung văn bản, không có câu trắc nghiệm nào thì gạch chân chữ <u>Nhóm</u>.
</div>

<div class="note" id="childGroup">>
##### Áp dụng đối với nhóm con

Nhóm con được hiểu là nhóm nằm trong 1 nhóm. Thay vì cố định trên đề như nhóm bình thường, Nhóm con sẽ được trộn với các câu hỏi. 

Ví dụ như cho một bảng dữ liệu và có 3 4 câu hỏi cho bảng dữ liệu đó thì ta cần nhóm con để các câu hỏi này luôn được đi kèm bảng dữ liệu

 Chỉ cần in nghiêng chữ _Nhóm_ để xác định 1 nhóm con.

 Cách soạn 1 đề có sử dụng nhóm con hoàn chỉnh xin mời xem đề mẫu ➔ [Tải về đề mẫu](/download/hc-mix_demau.7z){: .btn .btn-primary }
 
</div>

<div class="note info" id="code">
##### Lưu ý

Trong nội dung nhóm có thể chèn thêm một số thành phần sinh tự động khác ví dụ như mã đề, phiếu trả lời trắc nghiệm hay danh sách các câu hỏi trong nhóm. Đánh dấu chỗ muốn chèn bằng các thẻ thay thế như sau:
- Mã đề: `[<Mã đề>]`{: .sh_syntax }.
- Phiếu trắc nghiệm: `[<Phiếu trắc nghiệm>]`{: .sh_syntax }.
- Danh sách các câu hỏi trong nhóm: `[<Danh sách câu hỏi>]`{: .sh_syntax }.
</div>