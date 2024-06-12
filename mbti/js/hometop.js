let hometopfn = () => {
    const hometop = document.createElement('div')
  
    hometop.innerHTML = `
    <div class="togochrbox">
        <img src="./img/hometopimg.png" class="togochr">    
        <img src="./img/hometopclose.png" class='togochrclose'>
    </div>
    `

    const currentElement = document.querySelector('.navboxp2');
    const parentElement = currentElement.parentNode;
    parentElement.insertBefore(hometop, currentElement);
    document.querySelector('.togochr').addEventListener('click', togochr)
    document.querySelector('.togochrclose').addEventListener('click', close)

    function close() {
      document.querySelector('.togochrbox').style.display = 'none'
    }
  
    function togochr() {
      location.href = 'https://www.xxx.com/'
    }

  }
  
  window.addEventListener('load', hometopfn);


 function complexFont() {
  // 获取当前页面路径
  let path = window.location.pathname;
  // 获取页面路径中域名后的内容
  let pathName = path.substring(1);
  //将当前页面路径中域名改为http://tw.xx.com.cn 
  let pathName1 = 'http://tw.xx.com.cn/' + pathName;
  location.href = pathName1;
 }


 function simpleFont() {
  // 获取当前页面路径
  let path = window.location.pathname;
  // 获取页面路径中域名后的内容
  let pathName = path.substring(1);
  let pathName1 = 'https://xxx.com.cn/' + pathName;
  location.href = pathName1;
 }
  
 function tohowfont(){
  // 获取当前页面域名
  let path = window.location.hostname;
  if(path == 'tw.xxx.com.cn'){
    simpleFont();
  }else{
    complexFont();
  }

 }