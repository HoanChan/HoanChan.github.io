---
title: Biên soạn câu hỏi
series_index: 2
---
{::options parse_block_html="true" /}

Một câu hỏi bao gồm 2 bộ phận: nội dung câu hỏi và 4 câu trả lời `A`, `B`, `C`, `D`. Để chương trình nhận diện được thì cần soạn câu hỏi theo đúng cú pháp

### Cú pháp
```
<Phần nhận diện câu hỏi> <Nội dung câu hỏi>
<Phần nhận diện câu trả lời> <Nội dung câu trả lời>
<Phần nhận diện câu trả lời> <Nội dung câu trả lời>
<Phần nhận diện câu trả lời> <Nội dung câu trả lời>
<Phần nhận diện câu trả lời> <Nội dung câu trả lời>
```
### Viết phần câu hỏi

Có 2 cách viết `<phần nhận diện câu hỏi>`  như sau:

```
<Bài hoặc Câu> <Số thứ tự> <Dấu hoặc khoảng trống>
```

VD: `Bài 1:`, `Câu 05.`, `CÂU 2`, `bài 0005`

```
<Số thứ tự> <Dấu ngăn cách>
```

VD:  `002)`, `004.`, `5:`

### Viết các câu trả lời

`<Phần nhận diện>` được viết như sau:

```
<A hoặc B hoặc C hoặc D> <Dấu>
```

VD: `A.`, `B:`, `c`


<div class="note">
  <h5>Với các quy ước sau:</h5>
  - `<Dấu>` là các dấu: chấm `.`, hai chấm `:`, đóng ngoặc đơn `)`.
  - `<Khoảng trống>` là một hoặc nhiều dấu `cách trắng` hay dấu `Tab` hoặc kết hợp 2 loại này.
  - Trước, sau hoặc giữa các thành phần có thể để thêm các `<khoảng trống>`.
  - Các câu trả lời trên 1 dòng cách nhau bởi `<khoảng trống>`.
  - Câu hỏi không chỉ ra đâu là câu trả lời đúng thì câu trả lời `đầu tiên` được xem là đúng.
  - Chương trình không quan tâm `tên` và `thứ tự` của các thành phần, nêu nhiều câu là `câu 1` hay có 3 `đáp án A` cũng không sao! Mỗi câu hỏi _phải có đúng 4 câu trả lời_{: .cl-dh}.
</div>

<div class="note info">
  <h5>Lưu ý</h5>
  Nội dung câu hỏi có thể được soạn trên nhiều dòng, tuy nhiên nội dung câu trả lời bắt buộc phải trên 1 dòng. Nhiều câu trả lời cùng soạn trên 1 dòng cũng được, không sao cả.

  Đối với đáp án:
  - Để chỉ ra đán án đúng thì gạch chân kí tự `A`, `B`, `C` hoặc `D` ở `<Phần nhận diện>`
  - Câu trả lời cần cố định vị trí (VD: D. Tất cả các ý trên) thì in nghiêng ở chữ cái `A`, `B`, `C` hoặc `D` ở `<Phần nhận diện>`.
</div>

**Ví dụ:**
Bài 1. Tính 1 + 2 bằng bao nhiêu?  
a. 1    b. 2    <u>c</u>. 3   d. 4

câu 01 Tính 1 + 2 bằng bao nhiêu?  
A. 1    A. 2  
<u>B</u>. 3   B. 4

001: Tính 1 + 2 bằng bao nhiêu?  
A) 1  
b) 2    <u>c</u>. 3    d: 4

002) Con người là gì?  
a. Động vật có vú  
b. Động vật có xương sống  
C) Động vật hằng nhiệt  
**<u>D</u>**: Cả A, B, C đều đúng

Câu 02) Con người là gì?  
a. Động vật có vú  
b. Động vật không xương sống  
C) Động vật biến nhiệt  
**<u>D</u>**: Cả A, B, C đều đúng

BÀI 2 Con người là gì?  
a. Động vật có vú  
b. Động vật không xương sống  
C) Động vật biến nhiệt  
**<u>D</u>**: Cả A, B, C đều đúng