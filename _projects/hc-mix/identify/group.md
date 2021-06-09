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

Cấu trúc hoàn chỉnh của một nhóm như sau:
```
<Phần nhận diện của nhóm>
[<Nội dung văn bản của nhóm>]
[<Danh sách các câu hỏi trong nhóm>]
```
{: .sh_syntax }

Có nhiều loại nhóm phục vụ cho nhiều nhu cầu soạn thảo đề:

<div class="note" id="group">
##### <span>{% include image.html url="Group.png" %}</span>: Nhóm câu hỏi

- Là nơi chứa các câu hỏi.
- Các câu hỏi trong nhóm này sẽ được xáo vị trí và đáp án khi trộn đề.
- Vị trí của nhóm không đổi khi tiến hành trộn đề.

</div>

<div class="note" id="contentGroup">
##### <span>{% include image.html url="ContentGroup.png" %}</span>: Nhóm nội dung

- Chữ <u>Nhóm</u> được gạch chân.
- Là nơi chứa các phần văn bản trong đề như tiêu đề, tên mã đề hay phiếu tô trắc nghiệm.
- Các văn bản ở trong nhóm này sẽ không được nhận dạng như câu hỏi đề trộn đề.
- Có thể được chèn một số thành phần tự động khi in đề như Mã đề, Phiếu tô trắc nghiệm, Danh sách câu hỏi.
- Vị trí của nhóm không đổi khi tiến hành trộn đề.

</div>

<div class="note" id="childGroup">
##### <span>{% include image.html url="ChildGroup.png" %}</span>: Nhóm nội dung

- Chữ _Nhóm_ được in nghiêng.
- Là nhóm nằm trong một [**Nhóm câu hỏi**](#group), có vai trò như 1 câu hỏi và sẽ được xáo vị trí khi trộn đề như câu hỏi.
- Các câu hỏi trong nhóm con sẽ được xáo trong nội bộ nhóm con.

    Ví dụ như cho một bảng dữ liệu và có 3 4 câu hỏi cho bảng dữ liệu đó thì ta cần nhóm con để các câu hỏi này luôn được đi kèm sau bảng dữ liệu.

Cách soạn 1 đề có sử dụng nhóm con hoàn chỉnh xin mời xem đề mẫu ➔ [Tải về đề mẫu](/download/hc-mix_demau.7z){: .btn .btn-primary }

</div>

<div class="note info" id="code">
##### Lưu ý

Trong nội dung nhóm có thể chèn thêm một số thành phần sinh tự động khác ví dụ như mã đề, phiếu trả lời trắc nghiệm hay danh sách các câu hỏi trong nhóm. Đánh dấu chỗ muốn chèn bằng các thẻ thay thế như sau:
- Mã đề: `[<Mã đề>]`{: .sh_syntax }.
- Phiếu trắc nghiệm: `[<Phiếu trắc nghiệm>]`{: .sh_syntax }.
- Danh sách các câu hỏi trong nhóm: `[<Danh sách câu hỏi>]`{: .sh_syntax }.
</div>