---
title: Hỏi - đáp
description: Hướng dẫn các trường hợp bị lỗi của chương trình
---

##### Tôi không cài đặt được HC-MIX, nó bị báo lỗi!
{: .post-category}

Có thể bạn quên cài đặt thư viện hoặc làm sai bước nào đó trong [Hướng dẫn cài đặt](/projects/hc-mix/installation#install)! Hãy đọc kỹ phần hướng dẫn và nếu có lỗi hãy khắc phục bằng cách đọc phần [Một số lỗi thường gặp](/projects/hc-mix/installation#error) ở hướng dẫn!

##### Tôi không thấy HC-MIX xuất hiện trong Word!
{: .post-category}

Có thể **HC-MIX**{: .cl-hl} đã bị tắt bởi 1 nguyên nhân nào đó! Bạn hãy thực hiện các bước sau đây để bật lại:

- **Bước 1:** Khởi động lại máy (Không làm bước này cũng được, nhưng mà nên khởi động lại).
- **Bước 2:** Mở Microsoft Word ➔ Vào menu `File` (Tệp) ➔ Nhấn vào nút `Options` (Tuỳ chọn) ➔ Chọn mục `Add-Ins` (Phần bổ trợ) ở bên trái.
- **Bước 3:** Tìm xem có **HC-MIX**{: .cl-hl} trong danh sách không. Nếu có thì thực hiện các bước ở dưới, nếu không thì **HC-MIX**{: .cl-hl} chưa được cài đặt hoặc đã bị gỡ bỏ rồi, bạn chỉ cần cài lại là được.
- **Bước 4:** Chọn `COM Add-ins` (Bổ trợ COM) ở mục `Manage` (Quản lý) ➔ nhấn nút `Go...` (Đến...).
- **Bước 5:** Chọn đặt dấu check ở mục **HC-MIX**{: .cl-hl} trong danh sách bổ trợ ➔ Nhấn Ok.
- **Bước 6:** Tắt Word và mở lại xem thử **HC-MIX**{: .cl-hl} có chạy chưa. Nếu vẫn chưa chạy thì bạn nên vào `Control Panel` gỡ cài đặt **HC-MIX**{: .cl-hl} rồi cài lại.

##### Nội dung câu hỏi của tôi bị nhận dạng không đúng ý!
{: .post-category}

Một số trường hợp đặc biệt **HC-MIX**{: .cl-hl} không thể nhận dạng chính xác thì bạn hãy làm như sau:

- **Bước 1:** Ở tất cả các dòng bị nhận dạng nhầm, thêm 1 cụm ký tự không xuất hiện trong văn bản hiện tại vào đầu dòng. Ví dụ như trong văn bản của bạn không có dấu `$` thì bạn có thể thêm dấu `$` vào đầu các dòng bị nhận nhầm.
- **Bước 2:** Nhận dạng và in đề như bình thường.
- **Bước 3:** Sau khi đã in ra kết quả cuối cùng, dùng trình tìm kiếm và thay thế của Word để tìm và loại bỏ tất cả các cụm ký tự đánh dấu bạn thêm vào ở bước 1. Ví dụ nếu dùng dấu `$` thì ta tìm dấu `$` và thay thế bằng `"không có gì"` là coi như xoá nó.

Bạn có thể sử dụng cả 1 cụm ký tự như `@$@` hay `[<Đánh dấu>]` cũng được. Gõ vào hơi dài thôi :)

Và đương nhiên là xin bạn hãy gởi đề có chứa câu hỏi bị nhận dạng sai về cho tác giả để phiên bản tiếp theo sẽ không bị nhận nhầm nữa: [Le.Hoan.Chan@gmail.com](mailto:Le.Hoan.Chan@gmail.com)

##### Hình ảnh của tôi bị mất / sai vị trí khi tiến hành in đề!
{: .post-category}

Hiện tại **HC-MIX**{: .cl-hl} chỉ xử lý tốt với hình ảnh được đặt ở chế độ `In line with text` (Cùng dòng với văn bản) vậy nên tất cả hình ảnh bạn sử dụng trong Word nên được đặt ở chế độ này. Nếu vẫn muốn dùng hình ảnh ở chế độ khác thì nhớ đặt neo của ảnh nằm ở dòng thứ 2, 3 ... trong đoạn văn là nội dung của câu hỏi hoặc nhóm. Nếu đặt ở dòng đầu có thể bị cắt mất khi tiến hành nhận dạng.