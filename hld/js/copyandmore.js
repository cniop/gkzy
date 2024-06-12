
let copymorefn = () => {
  const tsbox = document.createElement('div')

  tsbox.innerHTML = `
  <div class="copyok">
  免费测评链接已复制，快发给朋友们吧!
  </div>

  <div class="copyok2">
  您的测评报告链接已复制，可以分享或保存。
  </div>

  <div class="mphonebox ">
    <div class="mphone copybtnbottom" "><img src="/img/cpam-img1.png">保存报告</div>
    <div class= 'bot-line'></div>
    <a class="mphone" href="http://gkabc.top/chrfree.html"><img src="/img/cpam-img2.png">了解企业版</a>
    <div class= 'bot-line'></div>
    <a class="mphone" href="/more.html"><img src="/img/cpam-img3.png">更多测评</a>
    <div class= 'bot-line'></div>
    <a class="mphone" href="https://xxx.com.cn/"><img src="/img/cpam-img4.png">姓名测评</a>
  </div> 

  <div class='copyzz'></div>

  <div class='copymorebox'>

    <img src="/img/copymorecloesimg.png" alt="" class="copymoreclose">

    <div class='copymoretitle'>
    专属福利
    </div>

    <div class='copymorep snon'>
    复制本测评链接发给亲朋好友，可免费测评直出报告，限一周内两次免费测评。您的分享可以让朋友受益。
    </div>

    <div class='copymorep snoff'>
    复制本测评链接发给亲朋好友，测评后可获取专业测评报告，您的分享可以让朋友受益。
    </div>

    <div class='copymorebtn1 snon hrefftomore1'>
    复制免费测评链接
    </div>

    <div class='copymorebtn1 snoff hrefftomore2'>
    复制本测评链接
    </div>

    <div class='copyhengxian'></div>

    <div class='copymorep'>
    复制您的报告链接，从该链接可以访问您的报告，保存以作备用。
    </div>

    <div class='copymorebtn2'>
    复制测评报告链接
    </div>

  </div>


  <div class="hidden sm:block sm:fixed fxbox sm:bottom-10 cursor-pointer ">
                <a href="/more.html">
                    <img src="/img/m-sub-icon7.png" alt="" class=" sm:w-11 sm:h-11 w-6 h-6">
                    <div class=" sm:text-lg mt-1.5 text-sm w-10">更多测评</div>
                    <div class="border-b border-dashed w-full h-0 border-DDD my-2.5"></div>
                </a>

                <div  class='copybtnbottom2'>
                    <img src="/img/m-sub-icon8.png" alt="" class=" sm:w-11 sm:h-11 w-6 h-6">
                    <div class=" sm:text-lg mt-1.5 text-sm w-10">保存报告</div>
                </div>
  </div>

  <div class='tjyj'>
    <img src="/img/tjyjicon2.png" class='tjyj-icon2'>
   
    <div class='tjyj-href2'>
      <img src="/img/pctogochrclose.png" class='tjyjboxclose2'>
      <img src="/img/pctogochr360.png" class='tjyjimg'>
    </div> 
  </div>

  <div class='mtjyjbox' >
    <img src="/img/pctogochrclose.png" class='mtjyjboxclose2'>
    <img src="/img/pctogochr360.png" alt="" class='mtjyjimg'>
    <div class="mtjyj-in">
      <img src="/img/tjyjicon.png" class="mtjyjicon2">
      <div class="mtjyj-title">推荐有奖</div> 
    </div>
  </div>

  `

  document.querySelector('body').appendChild(tsbox)
  document.querySelector('.copybtnbottom').addEventListener('click', copyboxshow)
  document.querySelector('.copybtnbottom2').addEventListener('click', copyboxshow)
  document.querySelector('.copymoreclose').addEventListener('click', close)
  document.querySelector('.hrefftomore1').addEventListener('click', copyfree)
  document.querySelector('.hrefftomore2').addEventListener('click', hreftomore)
  document.querySelector('.copymorebtn2').addEventListener('click', copyreport)
  document.querySelector('.tjyjboxclose2').addEventListener('click', tjyjclose)
  document.querySelector('.mtjyjboxclose2').addEventListener('click', mtjyjclose)
  document.querySelector('.mtjyj-in').addEventListener('click', mtjyjclose)
  document.querySelector('.mtjyjimg').addEventListener('click',gohref)
  document.querySelector('.tjyjimg').addEventListener('click',gohref)
  // document.querySelector('.tjyj-in').addEventListener('click',gohref)

  // 获取url参数
  function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return '';
  }



  //如何当前页面url参数中sn参数不为空，snon显示，snoff隐藏	
  function setCookie(key,value){
            var cookie=key+'='+encodeURIComponent(value);
            document.cookie=cookie+ "; path=/";
            }
  if(getQueryString('sn') != ''){
    document.querySelectorAll('.snon').forEach(function(item){item.style.display = 'block'})
    document.querySelectorAll('.snoff').forEach(function(item){item.style.display = 'none'})
    setCookie('freece','yes')	  
  }else{
    document.querySelectorAll('.snon').forEach(function(item){item.style.display = 'none'})
    document.querySelectorAll('.snoff').forEach(function(item){item.style.display = 'block'})
  }

  function toerr(errtext) {
    const errdiv = document.createElement('div');
    errdiv.style = 'position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,.5);color:#fff;padding:10px 20px;border-radius:5px;z-index:9999;'
    errdiv.innerHTML = errtext
    document.body.appendChild(errdiv)
    setTimeout(() => {
       document.body.removeChild(errdiv)
    }, 2000);
  }

  function tocopy(i, j) {
    //获取当前页的url
    // var Url2 = document.location.href;
    var Url2 = i;
    //创建元素用于复制
    let text = Url2
    const dummy = document.createElement('textarea');
    dummy.style.position = 'absolute';
    dummy.style.left = '-9999px'
    dummy.style.top = '-9999px'
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    document.querySelector(j).style.display = 'block'
    setTimeout(() => {
      document.querySelector(j).style.display = 'none'
    }, 3000);

  }

  function tocopytext(i, j) {
    //获取当前页的url
    // var Url2 = document.location.href;
    var Url2 = i;
    //创建元素用于复制
    let text = Url2
    const dummy = document.createElement('textarea');
    dummy.style.position = 'absolute';
    dummy.style.left = '-9999px'
    dummy.style.top = '-9999px'
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    toerr(j)
  }

  function close() {
    document.querySelector('.copymorebox').style.display = 'none'
    document.querySelector('.copyzz').style.display = 'none'
  }

  function getCookie(key){
    if(document.cookie.indexOf(key)<0){ return; }
    var cookies=document.cookie.split(";");
    for(var i=0; i<cookies.length; i++){
      var temp=cookies[i].split("=");
      if(temp[0].replace(/\s/g,'')==key){
        return decodeURIComponent(temp[1]);
      }
    }
  }

  function copyfree() {

    let freeww = document.querySelector('#freeww').innerText || ''
    let freexm = document.querySelector('#freexm').innerText || ''

    let url = `http://gkabc.top/freece.aspx?ww=${freeww}&xm=${freexm}`
    tocopy(url, '.copyok')
  }

  function copyreport() {
    let url = document.location.href
    tocopy(url, '.copyok2')
  }

  function copyboxshow() {
    document.querySelector('.copymorebox').style.display = 'block'
    document.querySelector('.copyzz').style.display = 'block'
  }



  function hreftomore() { 

    let url = `http://gkabc.top/more.html`
    tocopytext(url, '复制成功')

    // window.location.href = 'http://gkabc.top/more.html'
  }

  let iftjyjclose = false
  let ifmtjyjclose = false

  function tjyjclose() {
    iftjyjclose = !iftjyjclose
    if (iftjyjclose) {
    document.querySelector('.tjyj-href2').classList.add('tjyjclose')
    document.querySelector('.tjyj-icon2').classList.add('tjyjclose2')
    } else {
    document.querySelector('.tjyj-href2').classList.remove('tjyjclose')
    document.querySelector('.tjyj-icon2').classList.remove('tjyjclose2')
    }
  }

  function mtjyjclose() {

    document.querySelector('.mtjyjimg').classList.add('tjyjclose')
    document.querySelector('.mtjyjboxclose2').style.display = 'none'
    // setTimeout(() => {document.querySelector('.mtjyj-in').style.display = 'block'}, 1000);
  }

  function gohref(){
    window.location.href = 'http://gkabc.top/'
  }

  function myscorll(){
    let vwidth = document.documentElement.clientWidth || document.body.clientWidth
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if(vwidth < 500 && scrollTop>1500){
      document.querySelector('.mtjyjbox').style.display = 'block'
    }
    // else{
    //   document.querySelector('.mtjyjbox').style.display = 'none'
    // }
  }

  function addEvent(type, toDo) {
    if (window.attachEvent) {
        window.attachEvent('on' + type, function() {
            toDo.call(window)
        })
    } else {
        window.addEventListener(type, toDo, false)
    }
  }

  addEvent('scroll', myscorll)

  // window.addEventListener('scroll', myscorll);

}

window.addEventListener('load', copymorefn);