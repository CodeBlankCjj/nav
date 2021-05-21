const $siteList = $('.sileList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const hashMap = JSON.parse(x) || [
  { logo: 'A', logoType: 'text', url: '//acfun.cn'},
  { logo: 'B', logoType: 'text', url: '//bilibili.com'},
]
const removeX = (url) => {
  return url.replace('https://','')
        .replace('http://', '')
        .replace('www.','')
        .replace('//','')
        .replace(/\/.*/, '')
}
const render = () => {
  $siteList.find('li:not(.last)').remove()
  hashMap.forEach((node, index) => {
    const $li = $(`
    <li>
      <div class="sile">
        <div class="logo">${node.logo[0]}</div>
        <div class="link">${removeX(node.url)}</div>
        <div class="close">
          <svg class="icon">
            <use xlink:href="#icon-del"></use>
          </svg>
        </div>
      </div>    
    </li>
  `).insertBefore($lastLi)
    $li.on('click', () => {
      window.location.href = node.url
    })
    $li.on('click', '.close', (e) => {
      e.stopPropagation()
      hashMap.splice(index, 1)
      render()
    })
  })
}
render()
$('.addButton').on('click', () => {
  let url = window.prompt('请输入添加网址')
  hashMap.push({
    logo: removeX(url),
    logoType: 'text',
    url: url
  })
  render()
})
window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap)
  localStorage.setItem('x', string)
}

$(document).on('keypress', (e) => {
  const { key } = e
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLocaleLowerCase() === key) {
      window.location.href = hashMap[i].url
    }
  }
  console.log(key)
})
