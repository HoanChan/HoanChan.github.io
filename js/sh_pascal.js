if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['pascal'] = [
  [ // Định nghĩa các thành phần trong ngôn ngữ lập trình như từ khoá hay hàm ...
    [
      /\b(?:And|Array|Asm|Case|Const|Constructor|Destructor|Div|Do|Downto|Else|Exports|File|For|Function|Goto|If|Implementation|In|Inherited|Inline|Interface|Label|Library|Mod|Nil|Not|Object|Of|Or|Packed|Procedure|Program|Record|Repeat|Set|Shl|Shr|String|Then|To|Type|Unit|Until|Uses|Var|While|With|Xor)\b/gi,
      'sh_keyword',
      -1 // Mấy cái không tham gia vụ đóng mở ngoặc thì chỗ này là -1 donothing 
    ],
    [
      /\b(?:Begin|End)\b/gi,
      'sh_cbracket',
      -1
    ],
    [
      /\b(?:True|False|Pi)\b/gi,
      'sh_predef_var',
      -1
    ],
    [
      /\b(?:Write|Writeln|Read|Readln|ReadKey|KeyPressed|Clrscr|Textcolor|Textbackground|Sound|Delay|Nosound|Windows|Highvideo|Lowvideo|Normvideo|Gotoxy|Deline|Clreol|Insline|Exit|Textmode|Randomize|Move|Halt|Abs|Arctan|Cos|Exp|Frac|Int|Ln|Sin|Sqr|Sqrt|Pred|Suuc|Odd|Chr|Ord|Round|Random|Upcase|Assign|Reset|Rewrite|Append|Close|EOF|EOLN|Erase|Rename|Length|Copy|Insert|Delete|Initgraph|Closegraph|Setcolor|Outtext|Outtextxy|Rectangle|Line|Moveto|Lineto|Circle|Ellipse|Floodfill|Getfillpattern|Setfillpattern|Cleardevice|Settextstyle|Bar|Bar3d|Arc|Setbkcolor|Putpixel|Setfillstyle|Setlinestyle|Getmem|Getimage|Putimage|Getdate|Gettime|Findnext|Findfirst|Break|Continue)\b/gi,
      'sh_predef_func',
      -1
    ],
    [
      /\(\*/g,
      'sh_comment',
      1
    ],
    [
      /\{/g,
      'sh_comment',
      2 //stack = 2
    ],
    [
      /\b[-+#]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'sh_number',
      -1
    ],
    [
      /"/g,
      'sh_string',
      3 // stack = 3
    ],
    [
      /'/g,
      'sh_string',
      4 // stack = 4
    ],
    [
      /\b(?:boolean|byte|char|integer|longint|word|string|array|maxint|real|text|file|array|record)\b/gi,
      'sh_type',
      -1
    ],
    [
      /(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,
      'sh_function',
      -1
    ],
    [
      /(?:(?:then|else|do|begin|;)\s+)[A-Za-z0-9_]+(?=\s*(?:\selse|;))/gi,
      'sh_procedure',
      -1
    ],
    [
      /~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,
      'sh_symbol',
      -1
    ]
  ],
  [ // Định nghĩa các cặp đóng mở như {...} (...) hay "..." '...'
    [
      /\*\)/g,
      'sh_comment',
      -2 // exit
    ],
    [
      /\(\*/g,
      'sh_comment',
      1
    ]
  ],
  [
    [
      /\}/g,
      'sh_comment',
      -2 // exit
    ],
    [
      /\{/g,
      'sh_comment',
      2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2 // exit
    ],
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'sh_string',
      -2 // exit
    ]
  ],
  [
    [
      /$/g,
      null,
      -2 // exit
    ],
    [
      /\\(?:\\|')/g,
      null,
      -1
    ],
    [
      /'/g,
      'sh_string',
      -2 // exit
    ]
  ]
];
