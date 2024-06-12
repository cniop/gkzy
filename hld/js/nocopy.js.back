//屏蔽按键
document.addEventListener('keydown', function (e) {
  e = window.event || e;
  var keycode = e.keyCode || e.which;
  if (e.ctrlKey && keycode == 83) { //屏蔽Ctrl+s 保存页面
      e.preventDefault();
      window.event.returnValue = false;
  }
  if (e.ctrlKey && keycode == 85) { //屏蔽Ctrl+u 查看页面的源代码
      e.preventDefault();
      window.event.returnValue = false;
  }
  if (keycode == 123) { //屏蔽F12
      e.preventDefault();
      window.event.returnValue = false;
  }
  if (e.ctrlKey && e.shiftKey && keycode == 73) { //屏蔽Ctrl+shift+i 屏蔽调出控制台 和F12一样
      e.preventDefault();
      window.event.returnValue = false;
  }
});


//屏蔽右键菜单 
document.oncontextmenu = function (event) {
  if (window.event) {
      event = window.event;
  }

  try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
          return false;
      }
      return true;
  } catch (e) {
      return false;
  }
}

//屏蔽粘贴 
document.onpaste = function (event) {
  if (window.event) {
      event = window.event;
  }
  try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
          return false;
      }
      return true;
  } catch (e) {
      return false;
  }
}

//屏蔽复制
document.oncopy = function (event) {
  if (window.event) {
      event = window.event;
  }
  try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
          return false;
      }
      return true;
  } catch (e) {
      return false;
  }
}

//屏蔽剪切
document.oncut = function (event) {
  if (window.event) {
      event = window.event;
  }
  try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
          return false;
      }
      return true;
  } catch (e) {
      return false;
  }
}

//屏蔽选中
document.onselectstart = function (event) {
  if (window.event) {
      event = window.event;
  }
  try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
          return false;
      }
      return true;
  } catch (e) {
      return false;
  }
}
