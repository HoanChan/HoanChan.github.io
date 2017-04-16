---
title: Lịch sử
---

## 1.1.1.0 - 23/03/2017
  - Sửa lỗi bị ngắt liên lạc với bàn phím vì một lý do nào đó, nhất là ở Windows 7

## 1.1.0.9 - 22/03/2017
  - Sửa lại hệ thống Single Instance để chương trình chỉ chạy lên 1 hệ thống thực thi thôi.
  - Sửa lại hệ thống khởi động cùng Windows chạy chính xác với hệ điều hành 32, 64 bit
  - Nâng cấp chương trình lên .Net 4.0
  - Bỏ cái vụ chữ Côg => Công đi vì gõ log.txt thì toàn thành long.txt chán vãi :))

## 1.1.0.8 - 07/06/2016
  - Thay đổi hệ thống bắt sự kiện bấm chuột (mouse hook) giảm tình trạng mở lại máy tính từ chế độ Hibernate bị mất quyền điều khiển chuột.

## 1.1.0.7 - 27/05/2016
  - Hỗ trợ gõ tắt chữ ng ở cuối từ bằng g: Côg -> Công

## 1.1.0.6 - 16/05/2016
  - Điều chỉnh lại cách chương trình tái thiết lập khi hệ thống resume

## 1.1.0.5 - 04/11/2015
  - Sửa một lỗi khiến chữ gìn bị sai chính tả (04/11)
  - Sửa một lỗi khiến cho khi nhấn một số tổ hợp phím VD như ctrl + shift + = thì chế độ V - A - E bị chuyển, thay bằng Ctrl + shift + alt (28/11)
  - Sửa một lỗi khiến cho chương trình không khởi động cùng Windows (28/11)
  - Đã có thể sử dụng chuyển đổi văn bản dạng RTF khi dùng clipboard.

## 1.1.0.4 - 26/10/2015
  - Thêm chức năng gõ uơ rồi gõ thêm nguyên âm thì nó chuyển thành ươ, sửa việc ươ bị sai chính tả.

## 1.1.0.3 - 21/10/2015
  - Thêm chức năng gõ uơ rồi gõ phụ âm thì nó tự chuyển sang ươ, kiểm chính tả cho uơ có kèm phụ âm cuối là sai

## 1.1.0.2 - 20/10/2015
  - Sửa lỗi không gõ được chữ thuở, sửa một chút cách bỏ dấu cho cặp uơ và ươ!

## 1.1.0.1 - 26/08/2015
  - Sửa một lỗi khiến cho chương trình không thể hoạt động khi resume từ chế độ Hibernate

## 1.1.0.0 - 17/08/2015
  - Loại bỏ hàng loạt chức năng, rút gọn bớt chương trình. Giờ đây chỉ hỗ trợ gõ kiểu telex trên bộ mã Unicode
  - Lý do đơn giản là: ai cũng xài Unicode và Telex nhờ anh Smartphone mà trở bên phổ biến nhất
  - Loại bỏ gõ tắt nguyên âm, phụ âm vì dù quá hay nhưng chả ai sử dụng ^^
  - Đơn giản hoá thuật toán, đơn giản hoá chương trình hết mức có thể.
  - Thêm chút chú thích cho mấy thánh xin code ^^
  - Sửa lại chức năng gõ trong Autocomplete sẽ có thể chuyển qua lại bằng cả tổ hợp phím và bấm chuột và icon ở systemtray

## 1.0.3.3 - 19/03/2015
  - Thêm một lần kiểm tra cập nhật nữa khi hệ thống resume!
  - Loại bỏ menu bật tắt chế độ sử dụng gõ tiếng việt trong autocomplete thay thế bằng cách nhấn chuột vào biểu tượng ở khay hệ thống.

## 1.0.3.2 - 17/03/2015 
  - Thay đổi biểu tượng ở khay hệ thống thánh A khi bật chế độ sử dụng gõ tiếng việt trong autocomplete.
  - Sửa một lỗi khiến cho việc khai báo chương trình chạy khi khởi động bị sai khi ở hệ thống 32-bit
  - Sửa một lỗi khiến chữ đns không chuyển lại thành ddns (11/02/2015)

## 1.0.3.1 - 08/02/2015
   - Sửa lại cơ chế kiểm tra và phát hiện phím nào được bấm -> các phím gọi lệnh như Ctrl + Shift hoạt động chính xác hơn.
   - Sửa lại một lỗi khiến cho gõ 'ddns' không được (lỗi phục hồi chữ đ thành dd)

## 1.0.3.0 - 19/01/2015
   - Sửa lỗi xoá bộ đệm không chính xác làm cho chế độ phục hồi từ sai hoạt động không chính xác

## 1.0.2.9 - 28/08/2014
  - Loại bỏ chế độ game thủ (gamer mode) vì không thật sự cần thiết và chạy chưa tốt.

## 1.0.2.8
  - Thêm hỗ trợ người dùng phản hồi về chất lượng phần mềm
  - Tăng tốc độ xử lý gõ chữ! (thay List -> Hashset trong code, tốc độ tăng x10 ^^ .net 2.0 -> 3.5)

## 1.0.2.7
  - Tách danh sách gõ tắt ra khỏi file lưu thiết lập, lưu thành file riêng để hạn chế mất danh sách gõ tắt khi nâng cấp chương trình và có lỗi
  - Sửa một lỗi khiến cho chức năng phục hồi từ sai chính tả sang tiếng Anh bị lỗi khi bật tắt tiếng Việt

## 1.0.2.6
   Sữa lỗi bắt chính tả với chữ "cuộ?", nhận chữ "cuộc", "cuốn" ... là sai chính tả
## 1.0.2.5
  - Thêm chức năng tự động báo cho người dùng biết có phiên bản cập nhật mới mối khi khởi động
  - Sửa lỗi không lưu được thiết lập khởi động cùng windows
  - Khởi động cùng windows trên windows 64 bit

## 1.0.2.4
  - Sửa một lỗi khiến cho chương trình không khởi động cùng windows!

## 1.0.2.3
  - Sửa một lỗi khiến cho chế độ game thủ (Gamer Mode) bị sai khi người dùng thay đổi chế độ gõ EN <-> VN khi đang chơi game

## 1.0.2.2
  - Sửa lỗi khi gõ giwax không được

## 1.0.2.1
  - Hỗ trợ cập nhật tự động

## 1.0.2.0
  - Hỗ trợ tuỳ chọn tự động tắt chế độ tiếng Việt khi sử dụng 1 ứng dụng toàn màng hình (gamer mode)

## 1.0.1
  - Tự động sửa lại vị trí dấu khi thay đổi nguyên âm
  - Hỗ trợ gõ tắt các nguyên âm đôi và nguyên âm 3 (với một số quy ước thay thế) 
  - Tự động bỏ dấu sắc cho các từ có vần ngược ( kết thúc bởi p t c ch )
  - Hỗ trợ gõ tắt một số phụ âm đầu, cuối
  - Hỗ trợ trả về từ nguyên gốc nếu sai chính tả => đã được nâng cấp và chạy cực kì chính xác ^^
  - Hỗ trợ kiểm tra chính tả với phụ âm đầu / cuối, nguyên âm, dấu sắc nặng với các từ có vần ngược ( kết thúc bởi p t c ch )
  - Hỗ trợ chuyển mã tiếng Việt
  - Hỗ trợ tốc ký
  - Hỗ trợ bỏ dấu kiểu cũ, mới

## 1.0.0
  - Hỗ trợ nhiều kiểu gõ Telex, VNI, LHCT, LHCV, TelexEx, VIQR
  - Hỗ trợ nhiều bảng mã UNI, TCVN3, VNI, VIQR
  - Giao diện thân thiện dễ sử dụng
  - Mã nguồn mở - C#

