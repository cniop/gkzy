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
      location.href = '#'
    }

  }
  
  window.addEventListener('load', hometopfn);
