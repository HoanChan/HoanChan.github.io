---
title: Repeat - Until
---

Ngoài vòng lặp **While**{: .cl-hl } lặp lại công việc trong khi điều kiện còn đúng, Pascal còn cung cấp vòng lặp cho phép lặp lại công việc cho đến khi điều kiện bị sai.


## Vòng lặp repeat

Cú pháp:

```
Repeat 
    <Công việc>;
Until <Điều kiện>;
```
{: .sh_pascal .sh_syntax }

`<Công việc>`{: .sh_syntax} sẽ được thực hiện cho đến khi `<Điều kiện>`{: .sh_syntax} đúng thì ngưng (ngược với vòng lặp **While**{: .cl-hl }). `<Điều kiện>`{: .sh_syntax} sẽ được kiểm tra sau khi thực hiện `<Công việc>`{: .sh_syntax} cho nên ít nhất `<Công việc>`{: .sh_syntax} sẽ được thực hiện 1 lần rồi mới kiểm tra `<Điều kiện>`{: .sh_syntax} đúng hay sai (nếu sai thì thực hiện tiếp vòng lặp, đúng thì ngưng).

Ví dụ tính tổng các số chẵn từ 0 đến 100:

```
Program evenSum;
Var number : Byte;
    sum : Integer;
Begin
    sum := 0;
    number := 100;
    Repeat
       sum := sum + number;
       number := number - 2;
    Until number = 0;
    Writeln('Sum = ', sum);
End.
```
{: .sh_pascal }
