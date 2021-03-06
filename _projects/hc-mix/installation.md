---
title: Cài đặt
description: Hướng dẫn cài đặt từng bước HC-MIX
---

[HC–MIX](/projects/hc-mix/) là một trình bổ trợ (Add-In) của [MS-Word](/word/) vì thế nên việc cài đặt và nâng cấp hơi khác so với một phần mềm chạy độc lập.
- TOC
{:toc}

## Yêu cầu hệ thống
{: #required}

**HC–MIX**{: .cl-hl} cần những thứ sau đây để chạy được:
- [MS Office 2007 trở lên](https://products.office.com/vi-vn/compare-microsoft-office-products)
- [Windows XP (x86) Service Pack 3 trở lên](https://www.microsoft.com/en-us/software-download)
- [Microsoft .NET Framework 4](https://www.microsoft.com/en-us/download/details.aspx?id=17851)
- [Visual Studio 2010 Tools for Office Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=48217)

## Cài đặt
{: #install}

### **Bước 1:** Tải về và cài đặt bộ thư viện **Microsoft .NET Framework 4**

[Bản cài Offline](https://www.microsoft.com/en-us/download/details.aspx?id=17718){: .btn .btn-info .btn-sm} 
hoặc 
[Bản cài Online](https://www.microsoft.com/en-us/download/details.aspx?id=17851){: .btn .btn-primary .btn-sm}
{: .text-center .lead .m-1}

Nếu bạn đã chắc chắn máy mình có cài đặt bộ thư viện **Microsoft .NET Framework 4** rồi thì bỏ qua bước này nhé.
### **Bước 2:** Tải về file **Trust.reg** và chạy nó

[Tải về file Trust.Reg](https://raw.githubusercontent.com/HoanChan/HC-MIX/master/trust.reg){: .btn .btn-success .btn-sm}
{: .text-center .lead .m-1}

Click phải và nút trên, chọn **Lưu liên kết thành...** (Save link as ...) để tải về.

### **Bước 3:** Tải về file **Setup.exe** và chạy nó:

[Tải về file Setup.exe](https://raw.githubusercontent.com/HoanChan/HC-MIX/master/setup.exe){: .btn .btn-danger .btn-sm}
{: .text-center .lead .m-1}

### **Bước 4:** Mở Microsoft Word lên 

Bạn sẽ thấy thêm 1 Tab là **HC–MIX** như vậy là quá trình cài đặt đã thành công rồi đấy. Bạn có thể tham khảo đề mẫu để biết cách soạn đề nhé.

[Xem đề mẫu](https://github.com/HoanChan/HC-MIX/tree/master/DeMau){: .btn .btn-info .btn-sm} hoặc [Tải về đề mẫu](https://github.com/HoanChan/HC-MIX/raw/master/DeMau.zip){: .btn .btn-primary .btn-sm}
{: .text-center .lead .m-1}


# Nâng cấp
{: #update}

Hiện nay phần mềm đã hỗ trợ tự động nâng cấp, tuy nhiên vì một nguyên nhân nào đó mà trình nâng cấp không thể chạy được thì bạn có thể thực hiện như sau để nâng cấp thủ công:

1. Xóa HC-MIX đang có
2. Tải về và cài đặt phiên bản mới nhất của **HC-MIX**{: .cl-hl}: [tại đây](https://raw.githubusercontent.com/HoanChan/HC-MIX/master/setup.exe)

## Một số lỗi thường gặp
{: #error}

<div class="note danger">
##### Lỗi không nâng cấp được (Đã cài phiên bản cũ)

{% include image.html url="error-update.png" class="img-m" %}

Đơn giản là vào `Control Panel` ➔ `Programs and Features` và gỡ **HC–MIX**{: .cl-hl} ra sau đó cài đặt bản nâng cấp bình thường.
</div>

<div class="note danger">
##### Lỗi msvcr100.dll

{% include image.html url="error-c++.png" class="img-m" %}

Đây là do thiếu file của bộ thư viện hỗ trợ của **Microsoft Visual C++ Redistributable**{: .cl-hl}. Có 2 cách khắc phục lỗi này:

+ **Cách 1:**{: .cl-hl} Download một phiên bản khác từ đường link dưới đây lưu ý lựa chọn phiên bản phù hợp với hệ điều hành của bạn:
    - [Microsoft Visual C++ 2010 Redistributable Package (x86)](https://www.microsoft.com/en-us/download/details.aspx?id=5555)
    - [Microsoft Visual C++ 2010 Redistributable Package (x64)](http://www.microsoft.com/download/en/details.aspx?id=14632)
+ **Cách 2:**{: .cl-hl} Gỡ bỏ bản NET Framework 4.0 hiện tại và cài [bản mới](https://www.microsoft.com/en-us/download/details.aspx?id=24872)
</div>

<div class="note danger">
##### Lỗi Clickone Trusted

{% include image.html url="error-trusted.png" class="img-m" %}

Khi phát triển, phần mềm sử dụng **ClickOnce**{: .cl-hl} để cài đặt. Khi cài đặt, **Troubleshooting Office Solution**{: .cl-hl} **Security**{: .cl-hl} tiến hành kiểm tra thông tin đăng ký trong tập tin **manifest**{: .cl-hl}. Nếu không mở được tập tin này nó sẽ báo lỗi như trường hợp của bạn. 

➔ Chạy tải và chạy file **trust.reg**{: .cl-hl} ở bước 2 hướng dẫn cài đặt rồi chạy lại file cài đặt để khắc phục.
 </div>

<div class="note danger">
##### Lỗi VSTOInstaller.exe.Config

{% include image.html url="error-vs.png" class="img-m" %}

Trình cài đặt **HC-MIX**{: .cl-hl} tiến hành kiểm tra thông tin đăng ký trong tập tin **VSTOInstaller.exe.Config**{: .cl-hl}. Nếu có vấn đề với tập tin này nó sẽ báo lỗi như trường hợp của bạn.

➔ Trong một vài trường hợp, lỗi này xuất hiện khi không chạy trình cài đặt **HC-MIX**{: .cl-hl} ở quyền Administrator. Click chuột phải vào file cài đặt và chọn **"Run as Administrator"**{: .cl-hl} thay vì chạy trực tiếp nó.

Nếu vẫn lỗi thì thực hiện như sau:

➔ Vào thư mục **C:\Program Files\Common Files\Microsoft Shared\VSTO\10.0**{: .cl-hl}, nếu không có thư mục này thì vào **C:\Program Files (x86)\Common Files\Microsoft Shared\VSTO\10.0**{: .cl-hl} tìm đến file **VSTOInstaller.exe.Config**{: .cl-hl} thì đổi tên nó thành **VSTOInstaller.exe.Config.old**{: .cl-hl} (thêm đuôi **.old**{: .cl-hl} vào cuối). Sau đó chạy lại trình cài đặt **HC-MIX**{: .cl-hl}.
 </div>

 <div class="note danger">
##### Lỗi không tải được file cài đặt

{% include image.html url="error-SSL-TLS.png" class="img-m" %}

Trình cài đặt **HC-MIX**{: .cl-hl} sẽ tải các file cần thiết từ máy chủ của Microsoft về để cài đặt, nếu nó không tải được thi nó sẽ báo lỗi như trường hợp của bạn.

➔ Lỗi này xuất hiện là do Windows của bạn không được cập nhật (Các bản Windows được bung Ghost bởi các tiệm sửa máy tính và không có bản quyền) vì thế chứng chỉ bảo mật SSL/TLS không đúng nên không tải file được. Cách khắc phục đơn giản là tải toàn bộ **HC-MIX**{: .cl-hl} về để cài offline.

Thực hiện như sau:

➔ Đảm bảo rằng 2 thứ sau đã được cài đặt:

- [Microsoft .NET Framework 4](https://www.microsoft.com/en-us/download/details.aspx?id=17851)
- [Visual Studio 2010 Tools for Office Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=48217)

➔ Tải về file **Trust.reg** và chạy nó

[Tải về file Trust.Reg](https://raw.githubusercontent.com/HoanChan/HC-MIX/master/trust.reg){: .btn .btn-success .btn-sm}
{: .text-center .lead .m-1}

Click phải và nút trên, chọn **Lưu liên kết thành...** (Save link as ...) để tải về.

➔ Vào trang web chứa bộ cài trực tuyến của **HC-MIX**{: .cl-hl} [Tại đây](https://github.com/HoanChan/HC-MIX) sau đó tải về toàn bộ bằng cách nhấn vào **Code**{: .cl-hl} rồi chọn **Download Zip**{: .cl-hl}, sau đó giải nén và chạy lại trình cài đặt **HC-MIX**{: .cl-hl} ở trong thư mục vừa giải nén được bằng cách chạy file **HC-MIX.vsto**{: .cl-hl}.

{% include image.html url="download.png" class="img-m" %}

**Lưu ý:** Việc cài đặt Office chỉ là giải pháp tình thế. Khi chương trình có phiên bản mới thì bạn lại phải làm lại bước tải file về và giải nén đúng thư mục lần trước đã giải nén để tiến hành cập nhật bằng cách chạy lại trình cài đặt **HC-MIX**{: .cl-hl} (hoặc gỡ bản cũ ra để cài bản mới). Lời khuyên là hãy cập nhật Windows để tận hưởng bộ cài Online và tính năng cập nhật tự động.

 </div>