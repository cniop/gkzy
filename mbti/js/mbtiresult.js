var sView = viewHeight = window.innerHeight || document.documentElement.clientHeight;

function myscroll(ele, eled) {
  let y = document.querySelector(ele).getBoundingClientRect().bottom
  if (y < sView) {
    let num = Number(document.querySelector(eled).innerHTML)
    
    document.querySelector(ele).style.width = num / 22 * 100 + '%'

    if (num == 0) {
      document.querySelector(eled).style.fontSize = '0px'
    }
  }
}



function big(a1, b1, a2, b2, a3, b3) {
  let a1num = Number(document.querySelector(a1).innerHTML)
  let b1num = Number(document.querySelector(b1).innerHTML)
  let y = document.querySelector(a2).getBoundingClientRect().bottom

  if (y < sView) {

    if (a1num > b1num) {
      document.querySelector(a2).style.width = (a1num - b1num) / 22 * 100 + '%'
      
      document.querySelector(a3).innerHTML = a1num - b1num
      if (a1num - b1num == 0) {
        document.querySelector(a3).style.fontSize = '0px'
      }
    } else {
      document.querySelector(b2).style.width = (b1num - a1num) / 22 * 100 + '%'
      document.querySelector(b3).innerHTML = b1num - a1num
      if (b1num - a1num == 0) {
        document.querySelector(b3).style.fontSize = '0px'
      }
    }
  }


}



function scroll() {
  myscroll("#wx", "#wxdata")
  myscroll("#nx", "#nxdata")
  myscroll("#sg", "#sgdata")
  myscroll("#zj", "#zjdata")
  myscroll("#xk", "#xkdata")
  myscroll("#qg", "#qgdata")
  myscroll("#pd", "#pddata")
  myscroll("#zp", "#zpdata")
  big('#wxdata', '#nxdata', '#wx2', '#nx2', '#wxdata2', '#nxdata2')
  big('#sgdata', '#zjdata', '#sg2', '#zj2', '#sgdata2', '#zjdata2')
  big('#xkdata', '#qgdata', '#xk2', '#qg2', '#xkdata2', '#qgdata2')
  big('#pddata', '#zpdata', '#pd2', '#zp2', '#pddata2', '#zpdata2')
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

addEvent('scroll', scroll)


