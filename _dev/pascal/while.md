---
title: Vòng lặp While - Do
---

2. Vòng lặp while

- Cú pháp:  

while <điều kiện> do <câu lệnh>

- Câu lệnh sẽ được lặp lại nhiều lần cho đến khi nào điều kiện còn đúng (nếu điều kiện sai thì các lệnh này sẽ không thực hiện nữa). Đối với lệnh này điều kiện sẽ được kiểm tra trước khi thực hiện lệnh nên nên điều kiện sai thì không có lệnh nào được thực hiện.

vd: Tính tổng các số liên tiếp từ 1 đến 100

var i: byte;
    S: longint;
begin
    S:= 0;
    i:= 1;
    while i <= 100 do
         begin
              S:= S + i;
              i:= i +1;
         end;
    write('Tong tu 1 den 100 la:',S);
    readln;
end.
