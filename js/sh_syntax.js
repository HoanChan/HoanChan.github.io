if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['syntax'] = [
  [ // Định nghĩa các thành phần trong ngôn ngữ lập trình như từ khoá hay hàm ...
    [
      /[^<]+?[^>](?:(?=>))/g,
      'sh_keyword',
      -1 // Mấy cái không tham gia vụ đóng mở ngoặc thì chỗ này là -1 donothing 
    ],
    [
      /[<>]/g,
      'sh_symbol sh_big',
      -1
    ],
    [
      /[\[\]]/g,
      'sh_number sh_big',
      -1
    ]
  ]
];
