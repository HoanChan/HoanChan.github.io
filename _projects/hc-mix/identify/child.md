---
title: Nhận diện câu con
description: Hướng dẫn biên soạn đề khác nội dung
---

Hiện tại một số đề trắc nghiệm ngoài hoán vị các câu hỏi và câu trả lời ra còn yêu cầu tạo nên những bộ đề mà các câu hỏi trong đề không giống nhau về nội dung nữa (Ví dụ như đề thi đại học có tới 80% câu hỏi là khác nhau). 

Chương trình hỗ trợ soạn thảo các câu hỏi thay thế nhau ở mỗi đề bằng cách xác định các câu con cho câu đó. Câu con thì soạn thảo giống y như câu hỏi, tuy nhiên thay chữ **Bài** hay **Câu** thành chữ **Con** thôi.

Khi một câu hỏi có câu con thì chương trình sẽ lấy câu con 1 cho đề 1, câu con thứ hai cho đề 2, câu con thứ 3 cho đề 3 …

Có 4 đề nhưng chỉ có 1 câu con chẳng hạn thì chương trình sẽ lấy câu con thứ nhất cho đề 1 và 3, câu con thứ 2 cho đề 2 và 4. Nói chung là chương trình tự tính toán, cứ yên tâm 😊

Ví dụ đề trắc nghiệm có sử dụng câu con

{% include image.html url="exam.png" class="img-m" %}

Sẽ được nhận diện như sau:

{% include image.html url="result.png" class="img-m" %}