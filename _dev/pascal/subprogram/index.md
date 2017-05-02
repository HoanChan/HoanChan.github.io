---
title: Chương trình con
permalink: /dev/pascal/subprogram/
redirect_from: /dev/pascal/subprogram/index.html
breadcrumb: Chương trình con
---

Chương trình con là một chương trình độc lập, xử lý một công việc nhất định nào đó trong chương trình chính, nó có chỉ có thể thực hiện được công việc đã được lập trình khi ở chương trình chính có lời gọi đến nó.

Trong khi lập trình giải 1 bài toán, đôi khi chúng ta gặp phải những đoạn chương trình lặp đi lặp lại nhiều lần ở những phần xử lý khác nhau, để cho tiện lợi và không mất công, chúng ta định nghĩa 1 chương trình con với công việc được lập trình sẵn, khi cần thiết chỉ việc gọi chương trình con ra để làm việc mà không cần phải lập trình lại phần đã làm ở trên. Việc sử dụng chương trình con vô cùng tiện lợi và đảm bảo tính chặt chẽ của chương trình, thậm chí nhiều khi nếu không sử dụng chương trình con thì bài toán sẽ trở nên vô cùng rắc rối, và việc gỡ lỗi trong chương trình trở nên rất nan giải.

Pascal cung cấp cho chúng ta 2 loại chương trình con là Procedure ( Thủ tục ) và Function ( Hàm ). Đây là hai chương trình con sẽ theo các bạn trong suốt quá trình học. Đây chính là cơ sở để khi các bạn học lên các ngôn ngữ lập trình 32 bit, các bạn sẽ không bị bỡ ngỡ khi lập trình với lớp ( Class ) và Thư viện ( Library ). Hay nói một cách ngắn gọn, đây chính là phần quan trọng nhất trong kỹ thuật lập trình Pascal. Phần này tương đối phức tạp, nên bạn cố gắng tập trung để phân biệt, khi nào nên dùng Thủ thục, khi nào nên dùng Hàm, và các khái niệm liên quan khi tham chiếu các thành phần của các chương trình con.

## Vị trí chương trình con

Nhắc lại cấu trúc của một chương trình Pascal

```
Program { tên của chương trình }
Uses { khai báo các thư viện }
Const { khai báo các hằng toàn cục }
Var { khai báo các biến toàn cục }

{ khai báo hàm / thủ tục (nếu cần) }

Begin { bắt đầu khối chương trình chính }
...
End. { kết thúc khối chương trình chính }
```
{: .sh_pascal}

Như vậy phần khai báo chương trình con phía sau phần khai báo biến toàn cục (sau từ khoá `Var`) và trước phần thân của chương trình chính (Trước `Begin` của chương trình chính)

## Phân biệt cách sử dụng hàm và thủ tục

Hàm khác thủ tục ở chỗ hàm trả về một giá trị cho lệnh gọi thông qua tên hàm còn thủ tục thì không.

* Dùng hàm
– Kết quả của bài toán trả về 1 giá trị duy nhất (kiểu vô hướng, kiểu string hoặc kiểu con trỏ).
– Lời gọi chương trình con cần nằm trong các biểu thức tính toán.

* Dùng thủ tục
– Kết quả của bài toán không trả về giá trị nào hoặc trả về nhiều giá trị hoặc trả về kiểu dữ liệu có cấu trúc (Array, Record, File)
– Lời gọi chương trình con không nằm trong các biểu thức tính toán.

Chú ý: Nếu một công việc có thể làm bằng hàm thì chắc chắn sẽ làm được bằng thủ tục {tuy nhiên sẽ phức tạp hơn khi dùng hàm} nhưng một chương trình làm bằng thủ tục thì chưa chắc ta đã làm được bằng hàm.

