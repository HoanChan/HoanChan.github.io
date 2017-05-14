---
title: Định dạng đoạn văn
---

Để định dạng đoạn văn bản, cần xác định đâu là đoạn văn cần định dạng bằng cách đặt con trỏ soạn thảo và đoạn văn đó hoặc có thể bôi đen một phần văn bản của nó. Có thể định dạng nhiều đoạn văn cùng một lúc bằng cách chọn một phần hoặc tất cả văn bản trong các đoạn văn đó.

## 1. Căn lề cho đoạn văn

- <span>{% include image.html url="al.png"%}<span> **Align Left** (<kbd>Ctrl</kbd> + <kbd>L</kbd>): Căn trái - Căn nội dung với lề trái. Thường được dùng cho phần thân và giúp dễ đọc tài liệu hơn. Đây là kiểu căn lề mặc định của Word
- <span>{% include image.html url="ac.png"%}<span> **Center** (<kbd>Ctrl</kbd> + <kbd>E</kbd>): Căn giữa - Căn giữa nội dung văn bản so với 2 lề trái và phải. Thường được dùng cho trang bìa, chú thích, trích dẫn và một số đầu đề.
- <span>{% include image.html url="ar.png"%}<span> **Align Right** (<kbd>Ctrl</kbd> + <kbd>R</kbd>): Căn phải - Căn nội dung với lề phải. Thường được dùng cho các phần nhỏ của nội dung như đầu trang, chân trang, ngày tháng năm.
- <span>{% include image.html url="aj.png"%}<span> **Justify** (<kbd>Ctrl</kbd> + <kbd>J</kbd>): Căn đều - Phân bố văn bản đều nhau ở cả 2 lề. Thường áp dụng cho đoạn văn nhiều dòng, giúp cho đoạn văn trông bắt mắt hơn.

## 2. Chỉnh lề cho đoạn văn

Ta có thể dùng chuột kéo các nút chỉnh lề trên thước ngang để chỉnh lề cho đoạn văn bất kì:

{% include image.html url="ruler.png" class="float-mid" %}

<div class="note primary" markdown="1">
##### Lưu ý

Dòng treo là các dòng từ dòng thứ 2 trở đi trong đoạn văn. Trong khi kéo các nút chỉnh lề có thể đè nút **Alt** để hiển thị các số đo chính xác hơn.
</div>

## 3. Định dạng tổng hợp bằng hộp thoại Paragraph

{% include image.html url="pis.png" class="float-right" %}

Chúng ta có thể định dạng tất cả các kiểu ở các mục trên cũng như định dạng thêm các kiểu nâng cao bằng cách hộp thoại **Paragraph**: Vào menu **Format** ➔ **Paragraph**.

### a. Căn chỉnh đoạn văn – thẻ **Indents and Spacing**

Mục **General**: định dạng cơ bản

- **Alignment**: Căn lề cho đoạn văn
- **Left**: Căn trái.
- **Center**: Căn giữa.
- **Right**: Căn phải.
- **Justify**: Căn đều.
- **Outline level**: Mức dàn bài, có các mức sau để chọn: Body text, Level 1 ➔ 10

Mục **Indentation**: Thụt lề – Khoảng cách trái phải

- **Left**: Khoảng cách thụt lề trái.
- **Right**: Khoảng cách hụt lề phải.
- **Special**: Thụt lề đặc biệt
- **(none)**: Không có
- **First line**: Thụt dòng đầu vào.
- **Handing**: Thụt các dòng sau.
- **By**: Giá trị cho phần thụt lề đặc biệt nếu không phải là **(none)**

Mục **Spacing**: Giãn dòng – Khoảng cách trên dưới

- **Before**: Khoảng cách phía trên
- **After**: Khoảng cách phía dưới
- **Line** **spacing**: Khoảng cách giữa các dòng
- **Single**: Bằng một dòng bình thường.
- **5 lines**: Bằng một dòng rưỡi.
- **Double**: Lớn gấp đôi dòng bình thường.
- **At least**: Khoảng cách ít nhất là giá trị được ghi trong ô **At**.
- **Exactly**: Khoảng cách bằng giá trị được ghi trong ô **At**.
- **Multiple**: Khoảng cách gấp số lần được ghi trong ô **At**.
- **Don't add space between paragraphs of the same style**: Tự động điều chỉnh khoảng cách chiều dọc giữa các đoạn được định dạng cùng một kiểu (**Style**). Tùy chọn này chỉ hiện lên khi được phép áp dụng.

Xem trong phần Preview để thấy trước các thay đổi trước khi nhấn **OK** để áp dụng định dạng.

<div class="note danger" markdown="1">
##### Áp dụng nhanh định dạng

Sau khi định dạng khoảng cách này, Word sẽ tự thêm vào danh sách các kiểu (**Style**). Người dùng có thể áp dụng nhanh định dạng này cho các đoạn văn bản khác bằng cách chọn đoạn văn bản và vào công cụ **Style** chọn tiếp kiểu nào muốn định dạng (Mục này xem phần [định dạng với kiểu](/it/word/styles)).
</div>

### b. Dòng và ngắt trang – thẻ **Line and Page Break**

{% include image.html url="plp.png" class="float-right" %}

Thẻ này chứa các lựa chọn điều khiển điều gì xảy ra nếu dòng hoặc đoạn văn bản bị ngắt qua một trang. Bao gồm các lựa chọn:

- **Widow/Orphan Control**: Kiểm soát không cho Word hiện một dòng cuối của đoạn ở đầu trang (hiện tượng này gọi là **Widow**) hoặc hiện một dòng đầu của đoạn ở cuối trang (hiện tượng này gọi là **Orphan**).
- **Keep Lines Together**: Đoạn văn bản phải nằm trọn trên một trang.
- **Page Break Before**: Ngắt trang trước đoạn (đoạn văn bản phải nằm ở đầu trang).
- **Keep with Next**: Đoạn văn bản hiện thời và ngay sau nó không nằm trên các trang khác nhau (đoạn văn bản được chọn không nằm ở cuối trang).
- **Suppress line numbers**: Không hiện số dòng.
- **Don’t hyphenate**: Không gạch nối từ khi xuống dòng.

➽ Nhấn **OK** để áp dụng các định dạng vừa thiết lập.

## 4. Định dạng điểm dừng – Tab Stop

**Tab Stop** là các vị trí xác định trên các dòng của đoạn văn bản có tác dụng định vị, tạo các cột văn bản của đoạn. Khi ta nhấn **phím Tab**, con trỏ soạn thảo sẽ được tự động chuyển đến vị trí điểm dừng bên phải gần nhất. Khi gõ văn bản tại vị trí điểm dừng, văn bản sẽ được căn chỉnh thẳng hàng tại vị trí hiện thời theo kiểu của điểm dừng này.

Sau đây là hình ảnh của một cách bố trí điểm dừng trên thước ngang.

{% include image.html url="tabstops.png" class="float-mid" %}

Có 5 loại điểm dừng cơ bản sau:

- <span>{% include image.html url="lt.png"%}<span> **Left Tab** – Điểm dừng căn trái: Văn bản sẽ căn thẳng hàng trái tại vị trí hiện thời.
- <span>{% include image.html url="ct.png"%}<span> **Center Tab**– Điểm dừng căn giữa: Văn bản sẽ căn thẳng hàng giữa tại vị trí hiện thời.
- <span>{% include image.html url="rt.png"%}<span> **Right Tab** – Điểm dừng căn phải: Văn bản sẽ căn thẳng hàng phải tại vị trí hiện thời.
- <span>{% include image.html url="dt.png"%}<span> **Decimal Tab** – Điểm dừng thập phân: Căn thẳng hàng theo vị trí dấu chấm thập phân của số.
- <span>{% include image.html url="bt.png"%}<span> **Bar Tab** – Điểm dừng phân cách: Tự động tạo các nét thẳng `|` trên dòng của văn bản.

Sau đây là mô tả các thao tác cơ bản với điểm dừng:

### a. Tạo điểm dừng:

**<u>Bước 1:</u>** Dùng chuột chọn loại điểm dừng tại vị trí trái ngoài cùng của thước ngang.

**<u>Bước 2:</u>** Nhấn chuột trên thước ngang để tạo điểm dừng tương ứng.

### b. Xóa điểm dừng:

Di chuyển chuột lên vị trí của điểm dừng trên thước ngang và kéo ra khỏi thước.

### c. Thay đổi vị trí điểm dừng:

Di chuyển chuột lên vị trí của điểm dừng trên thước ngang và kéo sang trái hoặc phải.

### d. Thay đổi tích chất của điểm dừng – Hộp thoại **Tabs**:

Có thể gọi hộp thoại **Tabs** bằng các cách:

**<u>Cách 1:</u>** DoubleClick tại vị trí của điểm dừng trên thước ngang.

**<u>Cách 2:</u>** Vào menu **Format** ➔ **Paragraph** ➔ Nhấn nút <kbd>Tab</kbd>.

- **Tab stop position**: Danh sách các điểm dừng hiện có.
- **Default tab stops**: khoảng cách mặc định sẽ thụt vào khi nhấn nút <kbd>Tab</kbd> trên bàn phím.

Khi lựa chọn điểm dừng trong danh sách, ta có thể điều chỉnh các thông số sau:

- Kiểu điểm dừng – mục **Alignment**
    + <span>{% include image.html url="lt.png"%}<span> **Left** – Điểm dừng căn trái
    + <span>{% include image.html url="ct.png"%}<span> **Center** – Điểm dừng căn giữa
    + <span>{% include image.html url="rt.png"%}<span> **Right** – Điểm dừng căn phải
    + <span>{% include image.html url="dt.png"%}<span> **Decimal** – Điểm dừng thập phân
    + <span>{% include image.html url="bt.png"%}<span> **Bar** – Điểm dừng phân cách
- Kiểu thể hiện của tab – mục **Leader**: Mặc định kí tự **Tab** chỉ có tác dụng giãn cách văn bản, tức là nó chỉ là một khoảng trống. Tuy nhiên ta có thể thay đổi điều này bằng cách chọn các kiểu sau:
    + **1 None**: Kiểu mặc định – Là một khoảng trống.
    + **2 .......**: Sử dụng cách dấu chấm thay cho khoảng trống.
    + **3 <span style="font-size: 0.75rem;">.........</span>**: Sử dụng các dấu chấm khít nhau thay cho khoảng trống.
    + **4 _____**: Sử dụng dấu gạch dưới thay cho khoảng trống.

Sau khi thiết lập thông số ➔ nhấn nút `Set` để lưu lại các thay đổi cho điểm dừng đang chọn.

Có thể xoá điểm dừng đang chọn bằng nút `Clear` hoặc xoá tất cả các điểm dừng bằng nút `Clear All`.