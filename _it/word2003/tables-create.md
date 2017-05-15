---
title: Tạo bảng
---

## Nội dung chính:
{:.no_toc}
* Menu
{:toc}

Bảng (Table) là một chức năng đặc biệt rất hữu ích của các phần mềm soạn thảo văn bản. Đây là chức năng cho phép tạo ra các lưới trên trang soạn thảo dùng để chứa chữ, số hoặc hình ảnh. Bảng cho phép chúng ta có thể trình bày văn bản dưới dạng các hàng và các cột. Trên thực tế nhu cầu gõ những dạng văn bản như vậy rất cao ví dụ như một danh sách lớp học, danh sách học sinh, bảng điểm, thời khóa biểu, ....

## I. Tạo bảng, nhập dữ liệu cho bảng

### 1. Cách tạo bảng

{% include image.html url="ct.png" class="float-right" %}

**<u>Bước 1:</u>** Đặt trỏ văn bản tại dòng định tạo bảng.

**<u>Bước 2:</u>** Gọi lệnh tạo bảng bằng các cách sau:
- <u>Cách 1</u>: Nhấn nút tạo bảng trên thanh công cụ ➔ Dùng chuột để chọn số hàng, cột định tạo trong phần mở rộng của nút.
- <u>Cách 2</u>: Sử dụng hộp thoại `Insert Table` bằng cách vào menu `Table` ➔ `Insert` ➔ `Table` thiết lập các thông số:
    - **Table size**: Thiết lập kích thước cho bảng.{% include image.html url="it.png" class="float-right" %}
        + **Number of columns**: Số lượng cột.
        + **Number of rows**: Số lượng dòng.
    - **AutoFit behavior**: Thiết lập chế độ tính toán chiều rộng bảng
        + **Fixed column width**: Các cột có độ rộng cố định và bằng nhau.
        + **AutoFit to contents**: Các cột có độ rộng được tính toán theo nội dung văn bản trong cột.
        + **AutoFit to window**: Các cột có độ rộng được tính toán sao cho chiều rộng toàn bộ bảng vừa khít chiều rộng tính từ lề trái sang lề phải của dòng văn bản hiện tại.
    - **Table style**: Kiểu định dạng bảng – Mặc định là `Table Grid`, có thể nhấn nút `AutoFormat` để thay đổi định dạng dựa và các mẫu sẵn có.
    - **Remember dimensions for new tables**: Ghi nhớ các thông số ở trên cho lần tạo bảng mới tiếp theo.

➔ Nhấn `OK` để tạo bảng
{: .ml-4 .pl-4 }

<u>Cách 3:</u> Tạo bảng không cần sử dụng chuột bằng cách nhập văn bản có dạng: `+=+=+` hoặc `+–+–+` rồi nhấn <kbd>Enter</kbd>. Với dấu cộng `+` thể hiện cho nơi giao nhau giữa đường kẻ hàng và cột, dấu bằng `=` hoặc trừ `–` thể hiện phần ô trống.

<div class = "note primary" markdown="1">
##### Ví dụ

`+=+=+=+` ➔ vẽ bảng có 1 hàng và 4 cột

`+–+–+–+–+–+` ➔ vẽ bảng có 1 hàng và 5 cột
</div>

Sau khi tạo bảng có thể tiếp tục nhập nội dung và chèn thêm hàng hoặc định dạng.

### 2. Nhập dữ liệu cho bảng

Sử dụng chuột hoặc các phím <kbd>Tab</kbd>, <kbd>Shift</kbd> + <kbd>Tab</kbd>, các phím mũi tên để chuyển trỏ văn bản đến vị trí ô cần nhập nội dung. Việc nhập nội dung được thực hiện giống như văn bản bình thường.

Khi con trỏ văn bản nằm tại ô ở góc dưới bên phải của bảng, nhấn phím <kbd>Tab</kbd> sẽ chèn thêm một hàng ở cuối bảng. Đây là cách đơn giản nhất để chèn thêm hàng cho bảng, nhất là đối với cách tạo bảng thứ 3.

Trong khi nhập dữ liệu vào các ô của bảng, hầu hết các chức năng định dạng văn bản với ký tự và đoạn văn bản vẫn giữ nguyên. Do vậy chúng ta có thể trình bày một bảng với dữ liệu được định dạng theo ý muốn.

## II. Các thao tác trên bảng
<div style="overflow: auto;" markdown="1">
### 1. Chèn thêm hoặc xoá bớt hàng, cột trong bảng

#### a. Chọn thành phần của bảng

{% include image.html url="tsc.png" class="float-right" %}

Tương tự như văn bản, muốn thao tác được trên bảng ta phải cho Word biết được thành phần cần thực hiện thao tác là gì bằng cách chọn hoặc đặt con trỏ văn bản vào thành phần đó.

Để chọn một hay nhiều ô, hàng, cột trong bảng ta làm như sau:

<u>Cách 1:</u> Đặt con trỏ văn bản vào một ô ➔ Vào menu `Table` ➔ `Select`, rồi chọn tiếp `Cell`, `Row`, `Column` hay `Table` để chọn ô, hàng, cột hay bảng đang có con trỏ văn bản bên trong.

</div><div style="overflow: auto;" markdown="1">
<u>Cách 2:</u> Dùng chuột:

{% include image.html url="ts.png" class="float-right" %}

- **Chọn ô:** Rê chuột vào viền trái ô cho đến khi con trỏ chuột biến thành <span>{% include image.html url="atr.png" %}</span> thì click chuột.
- **Chọn hàng**: Rê chuột vào bên trái hàng rồi click chuột.
- **Chọn cột:** Rê chuột vào phía trên cột cho đến khi con trỏ chuột biến thành <span>{% include image.html url="ab.png" %}</span> thì click chuột.
- **Chọn bảng:** Rê chuột vào góc trên bên trái bảng vào <span>{% include image.html url="aa.png"%}</span> và con trỏ chuột biến thành <span>{% include image.html url="ca.png" %}</span> thì click chuột.
</div><div style="overflow: auto;" markdown="1">
#### b. Lệnh chèn hàng / cột / ô

Chèn thêm hàng (hoặc cột, ô) vào bảng ta làm như sau:

{% include image.html url="tir.png" class="float-right" %}

<u>Bước 1:</u> Xác định vị trí cần chèn bằng cách đặt con trỏ văn bản vào ô hoặc chọn các ô ở vị trí đó.

<u>Bước 2:</u> Chọn đối tượng và vị trí cần chèn trong menu `Table` ➔ `Insert`.

- **Columns to the Left**: Chèn cột sang trái.
- **Columns to the Right**: Chèn cột sang phải.
- **Rows Above**: Chèn hàng lên trên.
- **Rows Below**: Chèn hàng xuống dưới.
</div><div style="overflow: auto;" markdown="1">
- **Cells**: Chèn thêm ô. Khi lựa chọn lệnh này hộp thoại `Insert Cells` sẽ mở ra để ta chọn thao tác cần xử lý. {% include image.html url="ic.png" class="float-right" %}
    + **Shift cells right**: Đẩy các ô hiện tại đang phải.
    + **Shift cell down**: Đẩy các ô hiện tại xuống dưới.
    + **Insert entire row**: Chèn nguyên một hàng lên trên.
    + **Insert entire column**: Chèn nguyên một cột sang trái.
</div><div style="overflow: auto;" markdown="1">
#### c. Lệnh xóa hàng / cột / ô

Xóa hàng (hoặc cột, ô) trong bảng bạn làm như sau:

{% include image.html url="tdc.png" class="float-right" %}

<u>Bước 1:</u> Xác định vị trí cần xoá bằng cách đặt con trỏ văn bản vào ô hoặc chọn các ô ở vị trí đó.

<u>Bước 2:</u> Chọn đối tượng cần xoá trong menu `Table` ➔ `Delete`.

- **Table**: Xoá toàn bộ bảng.
- **Columns**: Cột.
- **Rows**: hàng.
</div><div style="overflow: auto;" markdown="1">
- **Cells**: Ô. Khi lựa chọn lệnh này hộp thoại `Delete Cells` sẽ mở ra để ta chọn thao tác cần xử lý {% include image.html url="dc.png" class="float-right" %}
    + **Shift cells left**: Đẩy các ô bên phải đang trái.
    + **Shift cell up**: Đẩy các ô ở dưới lên trên.
    + **Delete entire row**: Xoá toàn bộ dòng chứa các ô đang chọn.
    + **Delete entire column**: Xoá toàn bộ cột chứa các ô đang chọn.
</div>
### 2. Các thao tác hiệu chỉnh trong bảng

#### a. Thay đổi kích thước

<u>Cách 1:</u> Đưa con trỏ chuột vào đường biên của cột (hay hàng) cần thay đổi cho đến khi con trỏ có dạng <span>{% include image.html url="a-.png" %}</span> hoặc <span>{% include image.html url="ai.png" %}</span> và kéo thả chuột để thay đổi kích thước.

<u>Cách 2:</u> Dùng chuột kéo thả các nút <span>{% include image.html url="rbb.png" %}</span> hoặc <span>{% include image.html url="rbs.png" %}</span> trên thước ngang và dọc.

#### b. Gộp ô

<u>Bước 1:</u> Chọn các ô liền nhau (chọn được)

<u>Bước 2:</u> Gọi lệnh gộp ô
- <u>Cách 1:</u> Vào `Table` ➔ `Merge Cells`
- <u>Cách 2:</u> Nhấn nút `Merge Cells` <span>{% include image.html url="mc.png" %}</span> trên thanh `Tables and Borders`
- <u>Cách 3:</u> Gọi lệnh `Merge Cells` từ menu chuột phải

#### c. Tách ô

<u>Bước 1:</u> Chọn hoặc đặt con trỏ văn bản vào ô cần tách

<u>Bước 2:</u> Gọi lệnh tách ô
- <u>Cách 1:</u> Vào `Table` ➔ `Split Cells`
- <u>Cách 2:</u> Nhấn nút `Split Cells` <span>{% include image.html url="sc.png" %}</span> trên thanh `Tables and Borders`
- <u>Cách 3:</u> Gọi lệnh `Split Cells` từ menu chuột phải

<u>Bước 3:</u> Thiết lập các thông số tách ô trong hộp thoại `Split Cells` {% include image.html url="scd.png" class="float-right" %}

- **Number of columns**: Số cột cần tách.
- **Number of rows**: Số dòng cần tách.
- **Merge cells before split**: Khi ta chọn nhiều hơn 1 ô cần tách, lựa chọn này dùng để thực hiện việc gộp các ô đang được chọn lại trước khi tách.

➔ Nhấn `OK` để thực hiện lệnh.
<div style="overflow: auto;" markdown="1">
#### d. Định dạng văn bản trong ô

Văn bản trong ô được định dạng như văn bản bên ngoài. Ngoài ra Word còn hỗ trợ căn chỉnh văn bản theo các đường viền theo các thao tác sau:

<u>Bước 1:</u> Chọn hoặc đặt con trỏ văn bản tại ô cần định dạng

<u>Bước 2:</u> Gọi lệnh căn chỉnh
- <u>Cách 1:</u> Gọi lệnh `Cell Alignment` ở menu chuột phải
{% include image.html url="car.png" class="float-right" %}
- <u>Cách 2:</u> Nhấn nút `Cell Alignment` <span>{% include image.html url="cab.png" %}</span> trên thanh công cụ `Tables and Borders`
{% include image.html url="cat.png" class="float-mid" %}
</div>