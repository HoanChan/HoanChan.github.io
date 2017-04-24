---
title: Các cú pháp cơ bản
---

Chúng ta đã biết cấu trúc cơ bản của chương trình pascal, các khối lệnh cơ bản khác của ngôn ngữ lập trình Pascal cũng chỉ đơn giản tương tự vậy thôi.

## Biến - Variables

Một khai báo biến được bắt đầu bởi từ khóa var, theo sau là các danh sách các biến như sau:

```
Var A_Variable, B_Variable ...: Variable_Type;
```
{: .sh_pascal}

Các biến Pascal được khai báo bên ngoài phần mã của hàm có nghĩa là chúng không được khai báo trong cặp `Begin` và `End`, nhưng chúng được khai báo sau `Function` hoặc `Procedure` và trước từ khoá `Begin`. Đối với các biến toàn cục, chúng được khai báo ở phần đầu chương trình.

## Hàm - Functions / Thủ tục - Procedures
Trong Pascal, một thủ tục là tập hợp các lệnh để thực hiện một nhiệm vụ nào đó và không trả về một giá trị nào. Hàm là một thủ tục có trả về giá trị nào đó. Khai báo hàm và thủ tục được thực hiện như sau:

```
Function Func_Name(params...) : Return_Value;
Procedure Proc_Name(params...);
```
{: .sh_pascal}

## Chú thích

Các chú thích nhiều dòng được viết trong dấu ngoặc và dấu hoa thị như `(* ... *)`. Pascal cho phép chú thích đơn dòng được bao quanh trong ngoặc nhọn `{...}`.

```
(* This is a multi-line comments
   and it will span multiple lines. *)
{ This is a single line comment in pascal }
```
{: .sh_pascal}

## Phân biệt hoa thường

Pascal là một ngôn ngữ lập trình không phân biệt hoa thường, có nghĩa là có thể viết các biến, hàm và thủ tục hoa hay thường gì cũng được. Ví dụ `A_Variable`, `a_variable` và `A_VARIABLE` có cùng ý nghĩa trong Pascal.

## Các câu lệnh trong Pascal

Các chương trình Pascal được viết bằng các câu lệnh. Mỗi câu lệnh xác định một công việc cần thực hiện của chương trình. Những công việc này có thể là khai báo, gián biến, đọc dữ liệu, ghi dữ liệu, đưa ra các quyết định hợp lý hay kiểm soát luồng chương trình, v.v.

Ví dụ

```
Readln (a, b, c);
s := (a + b + c) / 2;
area: = sqrt (s * (s - a) * (s - b) * (s - c));
Writeln (area);
```
{: .sh_pascal}

## Từ khoá

Các câu lệnh của Pascal được thiết kế với một vài từ dành riêng, chúng được gọi là các từ khoá trong Pascal. Ví dụ như các từ: `Program` `Input` `Output` `Var` `Real` `Begin` `Readline` `Writeln` và `End` đều là các từ khoá.

Đây là danh sách các từ khoá trong Pascal.

|  and		|  array	|  begin	|  case		|  const	|
|  div		|  do		|  downto	|  else		|  end		|
|  file		|  for		|  function	|  goto		|  if		|
|  in		|  label	|  mod		|  nil		|  not		|
|  of		|  or		|  packed	|  procedure|  program	|
|  record	|  repeat	|  set		|  then		|  to		|
|  type		|  until	|  var		|  while	|  with		|
{: .table .table-bordered style="font-weight: bold;"}

## Ký tự đặt tên trong Pascal

Bộ ký tự Pascal bao gồm:

- Tất cả chữ hoa (A-Z)
- Tất cả chữ thường (a-z)
- Tất cả các chữ số (0-9)
- Ký hiệu đặc biệt - + * /: =,. ; () [] = {} \`
- Dấu cách trắng;

Các thành phần trong một chương trình Pascal như các biến và các hằng số, các kiểu, các hàm, các thủ tục và các bản ghi ... có một cái tên hoặc một định danh. 

> Một định danh là một dãy chữ cái và chữ số, bắt đầu bằng một chữ cái. Không được sử dụng ký hiệu và dấu cách trắng trong tên của chúng.
>
> Ví dụ: `menuIndex`, `_index` hay `menu_Index` là đúng nhưng `menu Index` hay `menu#Index` là sai.