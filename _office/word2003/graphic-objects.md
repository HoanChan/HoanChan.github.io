---
title: Đối tượng đồ hoạ
---

## 1. Giới thiệu

Đối với một văn bản, ngoài phần chữ thường chiếm số lớn, nhiều khi rất cần minh họa bằng các hình vẽ, ảnh, văn bản đi kèm hiệu ứng nghệ thuật, ta gọi chung là các đối tượng đồ họa (Graphic Object). Do đó, phần mềm soạn thảo văn bản phải hỗ trợ khả năng chèn và xử lý hình ảnh đồ họa.

Word cho phép làm việc với các dạng đối tượng đồ họa cơ bản:

- **AutoShapes**: Các đối tượng này bao gồm các công cụ vẽ trực tiếp như đường thẳng, đường cong, hình chữ nhật, đa giác, hình tròn, elip, các hình có dạng đặc biệt, ...
- **WordArt**: Tạo ra các đối tượng đồ họa là văn bản có hiệu ứng nghệ thuật.
- **Picture / ClipArt**: Là các loại ảnh được chụp, vẽ hay tạo ra từ những phần mềm khác.
- **Text Box**: Hộp văn bản
- **Diagram**: Biểu đồ
- **Organization chart**: Sơ đồ tổ chức

## 2. Định dạng

Khi cần điều chỉnh đối tượng đồ họa, ta bấm chuột lên đối tượng để chọn, có thể kết hợp phím <kbd>Ctrl</kbd> để chọn nhiều đối tượng cùng lúc. Mặc định, các thanh công cụ liên quan đến điều chỉnh đối tượng cũng sẽ xuất hiện theo. Nếu vì một lý do nào đó các thanh công cụ không bật, ta sẽ dùng lệnh: `View` ➔ `Toolbars` ➔ `<Tên thanh công cụ>`.

<div>
{% include image.html url="obj.png" class="img" %}

- Để điều chỉnh kích thước đối tượng, chúng ta chú ý các hình tròn nhỏ nằm trên đường viền của đối tượng mỗi khi được chọn. Nếu di chuyển chuột qua đó, con trỏ chuột sẽ chuyển sang hình mũi tên hai chiều <span>{% include image.html url="c1.png" %}</span>, <span>{% include image.html url="c2.png" %}</span>, <span>{% include image.html url="c3.png" %}</span> hoặc <span>{% include image.html url="c4.png" %}</span> cho ta biết hướng thay đổi kích thước. Nhấn, giữ chuột đồng thời kéo con trỏ chuột ra các hướng để thay đổi kích thước.
</div>
<div class="note danger" markdown="1">
##### Hãy đảm bảo giữ đúng tỉ lệ của hình

Nên kéo các hình tròn nhỏ ở 4 góc để đảm bảo tỉ lệ giữa chiều cao và chiều rộng của hình, tránh tình trạng sau khi thay đổi kích thước, hình bị bóp méo. Có thể nhấn thêm nút <kbd>Ctrl</kbd> để kéo giãn hình ở cả 2 phía.
</div>

- Để di chuyển đối tượng, chọn và đưa con trỏ chuột vào trong đối tượng cho đến khi con trỏ chuột chuyển thành hình mũi tên 4 chiều <span>{% include image.html url="ca.png" %}</span>, nhấn giữ chuột và di chuyển.
- Để xoay đối tượng, chọn và rê chuột vào hình tròn nhỏ màu xanh lá cây. Khi đó con trỏ chuột biến thành <span>{% include image.html url="cr.png" %}</span>, nhấn giữ chuột và di chuyển để xoay.

Tùy theo đối tượng được chọn trong văn bản, trên menu `Format` của Word sẽ xuất hiện thêm một lệnh tương ứng cho phép ta mở hộp thoại điều chỉnh đối tượng.

**Ví dụ:** Đối tượng là ảnh, lệnh sẽ là `Format` ➔ `Picture`. Đối tượng là `WordArt`, lệnh sẽ là `Format` ➔ `WordArt`.

Các lệnh này đều mở hộp thoại **Format Object**:
<div>
{% include image.html url="fas.png" class="img" %}

- **Color and Line**: xác định nền và đường viền.
    + **Fill**: Tô nền.
        - **Color**: Màu tô.
        - **Transparence**: Độ trong suốt.
    + **Line**: Định dạng đường viền.
        - **Color**: Màu đường viền.
        - **Style**: Kiểu đường viền (Đơn, đôi, …).
        - **Dashed**: Kiểu nét liền hay đứt.
        - **Weight**: Độ dày.
    + **Arrows**: Định dạng kiểu mũi tên
        - **Begin style**: Kiểu đầu mũi tên.
        - **Begin size**: Kích cỡ đầu mũi tên.
        - **End style**: Kiểu đuôi mũi tên.
        - **End size**: Kích cỡ đuôi mũi tên

</div><div>
{% include image.html url="fp.png" class="img" %}

- **Size**: xác định kích thước, góc quay.
    + **Size and rotate**: Kích thước và góc quay.
        - **Height**: Chiều cao.
        - **Width**: Chiều rộng.
        - **Rotation**: Góc quay.
    + **Scale**: Độ phóng đại.
        - **Height**: Tỉ lệ phóng đại chiều cao.
        - **Width**: Tỉ lệ phóng đại chiều rộng.
        - **Lock aspect ratio**: Khoá tỉ lệ khung – đảm bảo tỉ lệ giữ chiều rộng và chiều cao.
        - **Relative to original picture size**: So với kích thước ảnh gốc.
    + **Original size**: Kích thước ảnh gốc.
    + **Reset**: Khôi phục về các thông số mặc định.

</div><div>
{% include image.html url="fasl.png" class="img" %}

- **Layout**: Thiết lập bố cục cho đối tượng.
    + **Wrapping style**: Chọn kiểu đối tượng tương tác với văn bản xung quanh nó.
        - **In line with text**. Cùng dòng với văn bản.
        - **Square**: Chữ bao theo hình chữ nhật.
        - **Tight**: Chữ bao sát viền 2 bên.
        - **Behind text**. Nằm dưới văn bản.
        - **In front of text**. Nằm trên văn bản.
    + **Horizontal alignment**: Căn theo chiều ngang.
        - **Left**: Căn trái.
        - **Center**: Căn giữa.
        - **Right**: Căn phải.
        - **Other**: Vị trí tuỳ ý.
    + **Advanced**: Các thiết lập bố cục nâng cao.
- **Picture**: Thiết lập các thông số cho hình ảnh.
- **Text box**: Thiết lập các thông số cho Text box.

</div>