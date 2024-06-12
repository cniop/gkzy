var sView = document.documentElement.clientHeight

function myscroll(ele, option) {
  let y = document.getElementById(ele).getBoundingClientRect().bottom
  if (y < sView + 200) {
    var myChart1 = echarts.init(document.getElementById(ele));
    myChart1.setOption(option);
    window.addEventListener('resize', myChart1.resize);
  }
}


function scroll() {
  let viewWidth = document.documentElement.clientWidth
  if (viewWidth < 1380) {
    myscroll('mychart', option12)

  } else {
    myscroll('mychart', option1)

  }
}

//取本地数据库取数据
function get (key) {
  var val = window.localStorage.getItem(key);
  if (val == null) {
    return false;
  }
  return JSON.parse(val);
}

if(get('gkabc-hld-data').idx!=get('gkabc-hld-data').yida.length ||get('gkabc-hld-data').yida.length!=60){
  alert("题目没有答完");
  window.location.href = './hldcs.html'
}


window.addEventListener('scroll', scroll)


//直接从本地存储里取数据

let chart1vul1 = get('gkabc-hld-data').nS ? get('gkabc-hld-data').nS*10 : 0
let chart1vul2 = get('gkabc-hld-data').nR ? get('gkabc-hld-data').nR *10: 0
let chart1vul3 = get('gkabc-hld-data').nI ? get('gkabc-hld-data').nI *10  : 0
let chart1vul4 = get('gkabc-hld-data').nA ? get('gkabc-hld-data').nA *10 : 0
let chart1vul5 = get('gkabc-hld-data').nE ? get('gkabc-hld-data').nE*10 : 0
let chart1vul6 = get('gkabc-hld-data').nC ? get('gkabc-hld-data').nC *10: 0




// 指定图表的配置项和数据


var option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}:{d}%',
  },
  legend: {
    bottom: '2%',
    left: 'center'
  },
  series: [{
    name: '正确率',
    type: 'pie',
    center: ["50%", "40%"],
    radius: ['0%', '65%'],
    avoidLabelOverlap: false,
    itemStyle: {
      borderRadius: 0,
      borderColor: '#fff',
      borderWidth: 2
    },
    label: {
      position: 'inner',
      fontSize: 12,
      formatter: '{d}%',
      color: '#fff'
    },
    emphasis: {
      label: {
        show: true,
        fontSize: '14',
        fontWeight: 'bold'
      }
    },
    labelLine: {
      show: false
    },
    data: [{
        value: chart1vul6,
        name: 'C 传统型',
        itemStyle: {
          color: '#C60EC0'
        }
      },
      {
        value: chart1vul5,
        name: 'E 企业型',
        itemStyle: {
          color: '#4882FF'
        }
      },
      {
        value: chart1vul1,
        name: 'S 社会型',
        itemStyle: {
          color: '#31B547'
        }
      },
      {
        value: chart1vul2,
        name: 'R 现实型',
        itemStyle: {
          color: '#631AF0'
        }
      },
      {
        value: chart1vul3,
        name: 'I  研究型',
        itemStyle: {
          color: '#EE5044'
        }
      },
      {
        value: chart1vul4,
        name: 'A 艺术型',
        itemStyle: {
          color: '#FF9900'
        }
      },

    ]
  }]
};


// 指定图表的配置项和数据
var option1 = {
  title: {
    // text: '基础雷达图'
  },
  tooltip: {
    show: true
  },
  radar: {
    name: {
      textStyle: {
        color: 'rgb(90,178,33)',
        fontSize: '16px'
      }
    },
    indicator: [
      {
        name: 'A 艺术型',
        max: 100,
        axisLabel: {
          show: true,
          color: '#000',
        },
      },
      {
        name: 'I 研究型',
        max: 100,
      },
      {
        name: 'R 现实型',
        max: 100,
      },
      {
        name: 'C 传统型',
        max: 100
      },
      {
        name: 'E 企业型',
        max: 100
      },
      {
        name: 'S 社会型',
        max: 100
      }, 
    ],
    // shape: 'circle',
    axisLine: {
      lineStyle: {
        color: "rgb(64,151,244)",
        width: 1
      }
    },
    radius: 80,
    center: ['50%', '50%'],
    splitArea: {
      areaStyle: {
        // color: ['#E78110', '#D9B602', '#5AB221', '#00B7BC', '#3384DA'],
        color:'#fff'
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
		 width: 2, 
        type: 'solid',
        color: ['rgb(192,195,211)','rgb(192,195,211)','rgb(192,195,211)','rgb(192,195,211)','rgb(192,195,211)','rgb(64,151,244)']
      }
    }
  },
  series: [{
    type: 'radar',
    symbol: "none",
    itemStyle: {
      normal: {
        borderWidth: 0,
        color: '#D6E7FE',
      }
    },
    data: [{
      value: [chart1vul4, chart1vul3, chart1vul2, chart1vul6, chart1vul5, chart1vul1],
      name: '霍兰德维度分布图',
      areaStyle: {
        color: '#D6E7FE'
      }
    }, ],

  }]
};

// 指定图表的配置项和数据
var option12 = {
  title: {
    // text: '基础雷达图'
  },
  tooltip: {
    show: true
  },
  radar: {
    name: {
      textStyle: {
        color: 'rgb(90,178,33)',
        fontSize: '16px'
      }
    },
    indicator: [
      {
        name: 'A 艺术型',
        max: 100,
        axisLabel: {
          show: true,
          color: '#000',
        },
      },
      {
        name: 'I 研究型',
        max: 100,
      },
      {
        name: 'R 现实型',
        max: 100,
      },
      {
        name: 'C 传统型',
        max: 100
      },
      {
        name: 'E 企业型',
        max: 100
      },
      {
        name: 'S 社会型',
        max: 100
      }, 
    ],
    // shape: 'circle',
    axisLine: {
      lineStyle: {
        color: "rgb(64,151,244)",
        width: 1
      }
    },
    radius: 60,
    center: ['50%', '50%'],
    splitArea: {
      areaStyle: {
        // color: ['#E78110', '#D9B602', '#5AB221', '#00B7BC', '#3384DA'],
        color:'#fff'
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
		 width: 2, 
        type: 'solid',
        color: ['rgb(192,195,211)','rgb(192,195,211)','rgb(192,195,211)','rgb(192,195,211)','rgb(192,195,211)','rgb(64,151,244)']
      }
    }
  },
  series: [{
    type: 'radar',
    symbol: "none",
    itemStyle: {
      normal: {
        borderWidth: 0,
        color: '#D6E7FE',
      }
    },
    data: [{
      value: [chart1vul4, chart1vul3, chart1vul2, chart1vul6, chart1vul5, chart1vul1],
      name: '霍兰德维度分布图',
      areaStyle: {
        color: '#D6E7FE'
      }
    }, ],

  }]
};