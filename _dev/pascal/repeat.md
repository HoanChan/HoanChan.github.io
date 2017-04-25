---
title: Vòng lặp Repeat - Until
---

3. Vòng lặp repeat 

- Cú pháp:

repeat 
<câu lệnh>;
until <điều kiện>;

- Câu lệnh giữa repeat và until sẽ được lặp lại nhiều lần khi nào điều kiện sai, nếu điều kiện đúng thì ngưng (ngược với vòng lặp while). Đối với lệnh này điều kiện sẽ được kiểm tra sau khi thực hiện các lệnh giữa repeat và until nên ít nhất các lệnh sẽ được thực hiện trước 1 lần rồi mới kiểm tra điều kiện đúng hay sai (nếu sai thì thực hiện tiếp vòng lặp, đúng thì ngưng).

vd: Tính tổng các số liên tiếp từ 1 đến 100

var i,n: integer;
    S: real;
begin    
    S:=0; i:=1;
    repeat 
    S:=S+i; i:=i+1;
    until i>100;
    writeln('Tong = ',S);
    readln;
end.
