(function () {
  const $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$$siteList = $('.sileList');
  const $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$$lastLi = $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$$siteList.find('li.last');
  const $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$x = localStorage.getItem('x');
  const $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$hashMap = JSON.parse($88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$x) || [{
    logo: 'A',
    logoType: 'text',
    url: '//acfun.cn'
  }, {
    logo: 'A',
    logoType: 'text',
    url: '//bilibili.com'
  }];
  const $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$removeX = url => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace('//', '').replace(/\/.*/, '');
  };
  const $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$render = () => {
    $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$$siteList.find('li:not(.last)').remove();
    $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$hashMap.forEach((node, index) => {
      const $li = $(`
    <li>
      <div class="sile">
        <div class="logo">${node.logo[0]}</div>
        <div class="link">${$88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$removeX(node.url)}</div>
        <div class="close">
          <svg class="icon">
            <use xlink:href="#icon-del"></use>
          </svg>
        </div>
      </div>    
    </li>
  `).insertBefore($88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$$lastLi);
      $li.on('click', () => {
        window.location.href = node.url;
      });
      $li.on('click', '.close', e => {
        e.stopPropagation();
        $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$hashMap.splice(index, 1);
        $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$render();
      });
    });
  };
  $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$render();
  $('.addButton').on('click', () => {
    let url = window.prompt('请输入添加网址');
    $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$hashMap.push({
      logo: $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$removeX(url),
      logoType: 'text',
      url: url
    });
    $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$render();
  });
  window.onbeforeunload = () => {
    const string = JSON.stringify($88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$hashMap);
    localStorage.setItem('x', string);
  };
  $(document).on('keypress', e => {
    const {key} = e;
    for (let i = 0; i < $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$hashMap.length; i++) {
      if ($88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$hashMap[i].logo.toLocaleLowerCase() === key) {
        window.location.href = $88ad7e3f1c0a9a7459bddcf0e7fa9bcc$var$hashMap[i].url;
      }
    }
    console.log(key);
  });
})();

//# sourceMappingURL=index.37c8f1c0.js.map
