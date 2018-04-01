---
title: Ghi chú - Soạn theo ma trận
---

Hiện tại các đề trắc nghiệm được biên soạn dựa theo ma trận đề cho nên lúc biên soạn thường được soạn theo các chủ đề và được chia thành các mức độ: nhận biết, thông hiểu, vận dụng thấp, vận dụng cao. Mọi người thường sẽ ghi chú câu trắc nghiệm đó thuộc chủ đề nào, mức độ nào. Các ghi chú này chỉ có ở đề gốc và sẽ ẩn đi ở các đề đã trộn.

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
- Chú thích sẽ được nhận dạng như 1 câu hỏi, tức là sẽ thuộc nhóm.

</div>

Ví dụ đề trắc nghiệm có sử dụng chú thích

{% include image.html url="exam.png" class="img-m" %}

Sẽ được nhận diện như sau:

{% include image.html url="result.png" class="img-m" %}