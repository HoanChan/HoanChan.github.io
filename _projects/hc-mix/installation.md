---
title: Cài đặt
---

[HC–MIX](/projects/hc-mix/) là một trình bổ trợ (Add-In) của [MS-Word](/word/) vì thế nên việc cài đặt và nâng cấp hơi khác so với một phần mềm chạy độc lập.
- TOC
{:toc}

## Yêu cầu hệ thống
{: #required}

[HC–MIX](/projects/hc-mix/) cần những thứ sau đây để chạy được:
- [MS Office 2007 trở lên](https://products.office.com/vi-vn/compare-microsoft-office-products)
- [Windows XP (x86) Service Pack 3 trở lên](https://www.microsoft.com/en-us/software-download)
- [Microsoft .NET Framework 4 Client Profile](https://www.microsoft.com/en-us/download/details.aspx?id=24872)
- [Visual Studio 2010 Tools for Office Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=48217)

## Cài đặt hoặc nâng cấp

Đảm bảo hệ thống phải được cài đầy đủ theo như các [yêu cầu ở trên](#required). 

Tải về phiên bản mới nhất của chương trình: [tại đây](/download/hc-mix/app.zip)

Sau đó chạy file `Setup.exe` và nhấn `Install` là xong!

## Một số lỗi thường gặp

{::options parse_block_html="true" /}
<div class="note warning">
  <h5>Lỗi không nâng cấp được (Đã cài phiên bản cũ)</h5>
  Đơn giản là vào `Control Panel` &#8594; `Programs and Features`.

  Gỡ [HC–MIX](/projects/hc-mix/) ra rồi cài đặt bản nâng cấp.
</div>

<div class="note warning">
  <h5>Lỗi msvcr100.dll</h5>

  Đây là của bộ thư viện hỗ trợ của **Microsoft Visual C++ Redistributable**{: .cl-hl}. Có 2 cách khắc phục lỗi này:

  + **Cách 1:**{: .cl-hl} Download một phiên bản khác từ đường link dưới đây lưu ý lựa chọn phiên bản phù hợp với hệ điều hành của bạn:
    - [Microsoft Visual C++ 2010 Redistributable Package (x86)](https://www.microsoft.com/en-us/download/details.aspx?id=5555)
    - [Microsoft Visual C++ 2010 Redistributable Package (x64)](http://www.microsoft.com/download/en/details.aspx?id=14632)
  + **Cách 2:**{: .cl-hl} Gỡ bỏ bản NET Framework 4.0 hiện tại và cài [bản mới](https://www.microsoft.com/en-us/download/details.aspx?id=24872)
</div>

<div class="note warning">
  <h5>Lỗi Clickone Trusted</h5>

  Khi phát triển, phần mềm sử dụng **ClickOnce**{: .cl-hl} để cài đặt. Khi cài đặt, **Troubleshooting Office Solution**{: .cl-hl} **Security**{: .cl-hl} tiến hành kiểm tra thông tin đăng ký trong tập tin **manifest**{: .cl-hl}. Nếu không mở được tập tin này nó sẽ báo lỗi như trường hợp của bạn. 

  &#8594; chạy file **trust.reg**{: .cl-hl} hoặc **trust64.reg**{: .cl-hl} (chạy 2 cái luôn cũng được) trong thư mục cài đặt rồi chạy lại file cài đặt để khắc phục
 </div>
