if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['hc-mix'] = [
  [ // Định nghĩa các thành phần trong ngôn ngữ lập trình như từ khoá hay hàm ...
    [
      /^\s*([ABCD])\s*[\.:\)]\s*/gim,
      'sh_hc-mix_answer',
      -1 // Mấy cái không tham gia vụ đóng mở ngoặc thì chỗ này là -1 donothing 
    ],
    [
      /\s+([ABCD])\s*[\.:\)]\s*/gi,
      'sh_hc-mix_answer',
      -1
    ],
    [
      /^\s*(?:([0-9]+)\s*[\.:\)]|((?:Bài|Câu)\s+[0-9]+)\s*(?:[\.:\)]|\s))\s*/gim,
      'sh_hc-mix_question',
      -1
    ],
    [
      /^\s*(Nhóm)\s+[0-9]+\s*(?:[\.:\)]|\s)\s*/gim,
      'sh_hc-mix_group',
      -1
    ],
    [
      /^\s*(Con\s+[0-9]+)\s*(?:[\.:\)]|\s)\s*/gim,
      'sh_hc-mix_child',
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

sh_languages['hc-mix'].identify = function(){
  function replace(element, regex, result)
  {
      var hcmix = $(element);
      hcmix.html(hcmix.html().replace(regex, result));
  }
  $('.sh_hc-mix').each(function(index, el) {
    replace(el, /\*_([a-d])_\*(\s*(?:[\.:\)]|\s))/gi, "<span class='sh_hc-mix_correct sh_hc-mix_static'>$1</span><span class='sh_hc-mix_correct_sign sh_hc-mix_static'>$2</span>");
    replace(el, /_([a-d])_(\s*(?:[\.:\)]|\s))/gi, "<span class='sh_hc-mix_correct'>$1</span><span class='sh_hc-mix_correct_sign'>$2</span>");
    replace(el, /\*([a-d])\*(\s*(?:[\.:\)]|\s))/gi, "<span class='sh_hc-mix_static'>$1$2</span>");
    replace(el, /_(Nhóm\s+[0-9]+)(\s*[\.:\)]|\s)_/gi, "<span class='.sh_hc-mix_content_group'>$1</span><span class='sh_hc-mix_group'>$2</span>");
  });
};
