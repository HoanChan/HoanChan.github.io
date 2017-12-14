---
title: Thủ thuật
---

## Nhận dạng không đúng ý!

Một số trường hợp với nội dung câu hỏi kèm theo danh sách a, b, c ... hay kèm theo mã nguồn Pascal chẳng hạn thì HC-MIX nhận nhầm các câu trả lời! Một vài trường hợp khác nhận nhầm nhóm hay câu hỏi trong khi nó lại là nội dung văn bản bình thường!

### Lý do

Vì muốn người dùng có thể soạn thảo thoải mái nên chương trình không yêu cầu có dấu cách trắng sau phần xác định câu hay nhóm hay đáp án A, B, C gì cả, cho nên đôi khi nhận nhầm như sau:

```
a:= 5;
b:= 4;
c:= a + b;
```

Lại bị nhận nhầm là các câu trả lời A, B, C

### Khắc phục

Vì không muốn bó buộc người dùng nên HC-MIX sẽ không có sửa lỗi cho phần này! Để khắc phục thì bạn cần đánh lừa trình nhận dạng của HC-MIX như sau:

- **Bước 1:** Ở tất cả các dòng bị nhận dạng nhầm, thêm 1 cụm ký tự không xuất hiện trong văn bản hiện tại vào đầu dòng. Ví dụ như trong văn bản của bạn không có dấu `$` thì bạn có thể thêm dấu `$` vào đầu các dòng bị nhận nhầm.
- **Bước 2:** Nhận dạng và in đề như bình thường.
- **Bước 3:** Sau khi đã in ra kết quả cuối cùng, dùng trình tìm kiếm và thay thế của Word để tìm và loại bỏ tất cả các cụm ký tự đánh dấu bạn thêm vào ở bước 1. Ví dụ nếu dùng dấu `$` thì ta tìm dấu `$` và thay thế bằng `"không có gì"` là coi như xoá nó.

Bạn có thể sử dụng cả 1 cụm ký tự như `@$@` hay `[<Đánh dấu>]` cũng được. Gõ vào hơi dài thôi :)

