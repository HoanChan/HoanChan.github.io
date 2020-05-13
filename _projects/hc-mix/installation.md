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

Các bạn đơn giản thực hiện các bước cài đặt như sau:
- Tải và cài đặt các thư viện (phải cài đủ thư viện mới cài **HC-MIX**{: .cl-hl} được):
    1. Tải và cài đặt **Microsoft .NET Framework 4** [tại đây](https://www.microsoft.com/en-us/download/details.aspx?id=17718) hoặc [đây](https://www.microsoft.com/en-us/download/details.aspx?id=17851)
    2. Tải và cài đặt [Visual Studio 2010 Tools for Office Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=48217)
- Tải về phiên bản mới nhất của **HC-MIX**{: .cl-hl}: [Bản cài Offline](/download/hc-mix.7z) hoặc [Bản cài Online](/download/hc-mix-OL.7z) hoặc [Bản cài trực tiếp - để cập nhật](/download/hc-mix/setup.exe)
    1. Giải nén (Hãy ghi nhớ thư mục bạn đã giải nén HC-MIX vì cần cho việc nâng cấp)
    2. Chạy file **trust.reg**{: .cl-hl} và **trust64.reg**{: .cl-hl}.
    3. Chạy file `Setup.exe` và nhấn `Install`!

# Nâng cấp
{: #update}

Hiện nay phần mềm đã hỗ trợ tự động nâng cấp chỉ với 1 nút bấm, tuy nhiên vì một nguyên nhân nào đó mà trình nâng cấp không thể chạy được thì bạn có thể thực hiện như sau để nâng cấp thủ công:

1. Tải về phiên bản mới nhất của **HC-MIX**{: .cl-hl}: [tại đây](/download/hc-mix.7z)
2. Giải nén vào đúng thư mục đã giải nén khi cài đặt **HC-MIX**{: .cl-hl} lần đầu tiên.
3. Chạy file `Setup.exe` và nhấn `Install`!

## Một số lỗi thường gặp
{: #error}

<div class="note info">
##### Không giản nén được

File nén của phần mềm có phần mở rộng là `7z`. Nếu bạn không giải nén được thì tải và cài đặt [7zip](http://www.7-zip.org/download.html) để xử lý nó nhé!
</div>

<div class="note danger">
##### Lỗi không nâng cấp được (Đã cài phiên bản cũ)

{% include image.html url="error-update.png" class="img-m" %}

Nguyên nhân là lần trước bạn chạy bộ cài ở 1 thư mục. Giờ bạn chạy bộ cài ở 1 thư mục khác nên nó báo lỗi. Chỉ cần chép bộ cài vào đúng thư mục lần trước. Còn lỡ mà quên chỗ nào thì đơn giản là vào `Control Panel` ➔ `Programs and Features` và gỡ **HC–MIX**{: .cl-hl} ra sau đó cài đặt bản nâng cấp bình thường.
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

➔ Chạy 2 file **trust.reg**{: .cl-hl} và **trust64.reg**{: .cl-hl} trong thư mục cài đặt rồi chạy lại file cài đặt để khắc phục.
 </div>

<div class="note danger">
##### Lỗi VSTOInstaller.exe.Config

{% include image.html url="error-vs.png" class="img-m" %}

Trình cài đặt **HC-MIX**{: .cl-hl} tiến hành kiểm tra thông tin đăng ký trong tập tin **VSTOInstaller.exe.Config**{: .cl-hl}. Nếu có vấn đề với tập tin này nó sẽ báo lỗi như trường hợp của bạn.

➔ Trong một vài trường hợp, lỗi này xuất hiện khi không chạy trình cài đặt **HC-MIX**{: .cl-hl} ở quyền Administrator. Click chuột phải vào file cài đặt và chọn **"Run as Administrator"**{: .cl-hl} thay vì chạy trực tiếp nó.

Nếu vẫn lỗi thì thực hiện như sau:

➔ Vào thư mục **C:\Program Files\Common Files\Microsoft Shared\VSTO\10.0**{: .cl-hl}, nếu không có thư mục này thì vào **C:\Program Files (x86)\Common Files\Microsoft Shared\VSTO\10.0**{: .cl-hl} tìm đến file **VSTOInstaller.exe.Config**{: .cl-hl} thì đổi tên nó thành **VSTOInstaller.exe.Config.old**{: .cl-hl} (thêm đuôi **.old**{: .cl-hl} vào cuối). Sau đó chạy lại trình cài đặt **HC-MIX**{: .cl-hl}.
 </div>