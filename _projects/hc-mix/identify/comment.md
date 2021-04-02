---
title: Chú thích - Soạn theo ma trận
---

Hiện tại các đề trắc nghiệm được biên soạn dựa theo ma trận đề cho nên lúc biên soạn thường được soạn theo các chủ đề và được chia thành các mức độ: nhận biết, thông hiểu, vận dụng thấp, vận dụng cao. Mọi người thường sẽ chú thích câu trắc nghiệm đó thuộc chủ đề nào, mức độ nào. Các chú thích này chỉ có ở đề gốc và sẽ ẩn đi ở các đề đã trộn.

Để đánh dấu 1 dòng nào đó là chú thích thì ta biên soạn như sau:
```
//<Khoảng trống><Nội dung chú thích>
```
{: .sh_syntax }

    VD: `// Chương 1`, `// Nhận biết`, `// Câu khó:`


<div class="note info">
##### Lưu ý

- Mỗi chú thích chỉ trên 1 đoạn văn.
- Chú thích chỉ được in kèm đề gốc, các đề khác không có.
- Chú thích được dùng để gom nhóm các thành phần như câu hỏi hay nhóm / nhóm con trên cây kết quả để người dùng dễ dàng đối chiếu và quan sát! Việc gom nhóm này không ảnh hưởng đến việc in ấn của đề. Trước khi in đề chương trình sẽ loạt bỏ tất cả các chú thích

</div>

Ví dụ đề trắc nghiệm có sử dụng chú thích

{% include image.html url="exam.png" class="img-m" %}

Sẽ được nhận diện như sau:

{% include image.html url="result.png" class="img-m" %}