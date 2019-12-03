---
title: Biên soạn câu hỏi
description: Hướng dẫn biên soạn các câu hỏi cho đề kiểm tra
---

Một câu hỏi bao gồm các bộ phận sau đây:
- Nội dung câu hỏi
- Danh sách các câu trả lời
- Phần thuộc tính (phần đáp án)
- Phần giải thích. 

Để chương trình nhận diện được thì cần soạn câu hỏi theo đúng cú pháp

## Cú pháp câu hỏi 1 lựa chọn, nhiều lựa chọn hoặc sắp xếp:

```
<Phần nhận diện câu hỏi> <Nội dung câu hỏi>
<Phần nhận diện câu A> <Nội dung câu A>
<Phần nhận diện câu B> <Nội dung câu B>
..........................
<Phần nhận diện câu Z> <Nội dung câu Z>
<Phần thuộc tính>
<Phần giải thích>
```
{: .sh_syntax }

## Viết phần câu hỏi

Có 2 cách viết `<phần nhận diện câu hỏi>`{: .sh_syntax }  như sau:

```
<Bài hoặc Câu> <Số thứ tự> <Dấu hoặc khoảng trống>
```
{: .sh_syntax }

VD: `Bài 1:`, `Câu 05.`, `CÂU 2`, `bài 0005`

```
<Số thứ tự> <Dấu ngăn cách>
```
{: .sh_syntax }

VD:  `002)`, `004.`, `5:`

`<Nội dung câu hỏi>`{: .sh_syntax } có thể được viết trên nhiều dòng.

## Viết các câu trả lời

`<Phần nhận diện>`{: .sh_syntax } được viết như sau:

```
<Một chữ cái từ A đến Z> <Dấu>
```
{: .sh_syntax }

VD: `A.`, `B:`, `c)`

Nếu câu hỏi không có đủ 4 câu trả lời, nó sẽ bị bỏ qua.

<div class="note">
##### Với các quy ước sau:

- `<Dấu>`{: .sh_syntax} là các dấu: chấm `.`, hai chấm `:`, đóng ngoặc đơn `)`.
- `<Khoảng trống>`{: .sh_syntax} là một hoặc nhiều dấu `cách trắng` hay dấu `Tab` hoặc kết hợp 2 loại này.
- Trước, sau hoặc giữa các thành phần có thể để thêm các `<khoảng trống>`{: .sh_syntax}.
- Các câu trả lời trên 1 dòng cách nhau bởi `<khoảng trống>`{: .sh_syntax}.
- Câu hỏi không chỉ ra đâu là câu trả lời đúng thì câu trả lời `đầu tiên` được xem là đúng.
- Chương trình không quan tâm `tên` và `thứ tự` của các thành phần, nêu nhiều câu là `câu 1` hay có 3 `đáp án A` cũng không sao!
</div>

<div class="note info">
##### Lưu ý

Nội dung câu hỏi có thể được soạn trên nhiều dòng, tuy nhiên nội dung câu trả lời bắt buộc phải trên 1 dòng. Nhiều câu trả lời cùng soạn trên 1 dòng cũng được, không sao cả. Đối với các câu trả lời để trên cùng 1 dòng thì các câu trả lời đó phải cách nhau ít nhất là 1 dấu `Tab` hoặc từ 2 dấu `cách trắng` trở lên.

Đối với đáp án:
- Để chỉ ra đán án đúng thì gạch chân kí tự `A`, `B`, `C` ... ở `<Phần nhận diện>`{: .sh_syntax}.
- Câu trả lời cần cố định vị trí (VD: D. Tất cả các ý trên) thì in nghiêng ở chữ cái `A`, `B`, `C`... ở `<Phần nhận diện>`{: .sh_syntax}.
</div>

## Ví dụ:

```
Bài 1. Tính 1 + 2 bằng bao nhiêu?  
a. 1    b. 2    _c_. 3   d. 4

câu 01 Tính 1 + 2 bằng bao nhiêu?  
A. 1    A. 2  
_B_. 3   B. 4

001: Tính 1 + 2 bằng bao nhiêu?  
A) 1  
b) 2    _c_. 3    d: 4

002) Con người là gì?  
a. Động vật có vú  
b. Động vật có xương sống  
C) Động vật hằng nhiệt  
*_D_*: Cả A, B, C đều đúng

Câu 02) Con người là gì?  
a. Động vật có vú  
b. Động vật không xương sống  
C) Động vật biến nhiệt  
*_D_*: Cả A, B, C đều đúng

BÀI 2 Con người là gì?  
_a_. Động vật có vú  
b. Động vật không xương sống  
C) Động vật biến nhiệt  
*D*: Cả A, B, C đều đúng
```
{: .sh_hc-mix }