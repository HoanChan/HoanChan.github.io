if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['hc-mix'] = [
  [ // Định nghĩa các thành phần trong ngôn ngữ lập trình như từ khoá hay hàm ...
    [
      /^\s*([ABCD])\s*[\.:\)]\s*/gim,
      'sh_keyword',
      -1 // Mấy cái không tham gia vụ đóng mở ngoặc thì chỗ này là -1 donothing 
    ],
    [
      /\s+([ABCD])\s*[\.:\)]\s*/gi,
      'sh_keyword',
      -1
    ],
    [
      /^\s*(?:([0-9]+)\s*[\.:\)]|((?:Bài|Câu)\s+[0-9]+)\s*(?:[\.:\)]|\s))\s*/gim,
      'sh_function',
      -1
    ],
    [
      /^\s*(Nhóm)\s+[0-9]+\s*(?:[\.:\)]|\s)\s*/gim,
      'sh_predef_func',
      -1
    ],
    [
      /^\s*(Con\s+[0-9]+)\s*(?:[\.:\)]|\s)\s*/gim,
      'sh_symbol',
      -1
    ],
    [
      /{/g,
      'sh_comment',
      1
    ],
  ],
  [ // Định nghĩa các cặp đóng mở như {...} (...) hay "..." '...'
    [
      /}/g,
      'sh_comment',
      -2 // exit
    ],
    [
      /{/g,
      'sh_comment',
      1
    ]
  ]
];
