new Vue({
    el: '#submitpage',
    data() {
        return {
            sexlist: ['男', '女'],
            checklist: ['男', '女'],
            mycheckid: 0,
            mphone: '18888888888',
            ifbox: false,
            myname: '',
            sex: '',
            age: '',
            education: '',
            specialty: '',
            job: '',
            sncode: '0311',
            local: {
                get: function (key) {
                    var val = window.localStorage.getItem(key);
                    if (val == null) {
                        return false;
                    }
                    return JSON.parse(val);
                },
                set: function (key, val) {
                    window.localStorage.setItem(key, JSON.stringify(val));
                    return true;
                },
                del: function (key) {
                    window.localStorage.removeItem(key);
                    return true;
                }
            },
            ifleft: false,
            ifright: false,

        }
    },
    methods: {
        myclose2(data) {
            switch (data) {
                case 1:
                    this.$refs.iffenxiang.style.display = 'none'
                    break;
                case 2:
                    this.$refs.ifjianyi.style.display = 'none'
                    break;
                default:
                    break;
            }
        },

        iftanchang(data) {
            if (data == 1) {
                this.ifleft = !this.ifleft
                if (this.ifleft) {
                    this.$refs.pcnav.style.display = 'block';
                    this.$refs.zhezhao.style.display = 'block';
                } else {
                    this.$refs.pcnav.style.display = 'none';
                    this.$refs.zhezhao.style.display = 'none';
                }
            } else {
                this.ifright = !this.ifright
                if (this.ifright) {
                    this.$refs.pcsm.style.display = 'block';
                    this.$refs.zhezhao.style.display = 'block';
                } else {
                    this.$refs.pcsm.style.display = 'none';
                    this.$refs.zhezhao.style.display = 'none';
                }
            }
        },
        myclose() {
            this.$refs.zhezhao.style.display = 'none'
            this.$refs.pcnav.style.display = 'none'
            this.$refs.pcsm.style.display = 'none'

        },

        getsncode() {

            var sjcode = "";
            for (var i = 0; i < 6; i++) {
                if (i < 4) {
                    sjcode += Math.floor(Math.random() * 10); //生成0-9的数字
                } else if (i === 4) {
                    sjcode += String.fromCharCode(Math.floor(Math.random() * 26 + 97)); //生成A-Z的字母
                } else {
                    sjcode += Math.floor(Math.random() * 10); //生成0-9的数字
                }
            }
            this.sncode = sjcode
            this.$refs.clicksncode.style.display = 'none'

            let devicewidth1 = document.documentElement.clientWidth;
            if (devicewidth1 > 500) {
                this.$refs.pcsncode.style.display = 'block'
            } else {
                this.$refs.msncode.style.display = 'block'
                this.$refs.msncode2.style.display = 'block'
            }

            this.$refs.sjk.style.borderColor = '#666666'
            this.$refs.sjh.style.color = '#666666'
            this.$refs.sjk.style.color = '#666666'
            this.$refs.sjk.readOnly = true
        },
        tskclose() {
            window.location.href = '/'
        }
    },
    mounted() {
        let yidaStr = this.local.get('gkabc-mbti-data').yida ? this.local.get('gkabc-mbti-data').yida : ''
        let idx = this.local.get('gkabc-mbti-data').idx

        if (yidaStr.length!=86 || idx != 86) {
            //如果没有答完直接跳转到首页
            window.location.href = '/'
        }

        function getCookie(key) {
            if (document.cookie.indexOf(key) < 0) { return; }
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var temp = cookies[i].split("=");
                if (temp[0].replace(/\s/g, '') == key) {
                    return decodeURIComponent(temp[1]);
                }
            }
        }

        if (getCookie('ck-mbti-username')) {
            document.querySelector('#mytextbox').style.display = 'none'
            document.querySelector('#tishi').style.display = 'block'
            this.myname = getCookie('ck-mbti-username')

        }



        this.getsncode()


    },
})


function checkUser() {
    let d = true;

    let hanzizi1 = document.querySelector('#myname').value
    let sex = document.querySelector("#sex").value


    let sncode = document.querySelector("#sncode").value
    let mphone = document.querySelector("#mphone").value

    // let g = (/^([\u4e00-\u9fa5]{2,4})$/gi).test(hanzizi1);

    function iferr(ele) {
        document.querySelector(ele).style.display = 'block'
        setTimeout(() => {
            document.querySelector(ele).style.display = 'none'
        }, 2000);
        d = false
    }

    let g = (/^[a-zA-Z\u4e00-\u9fa5]+$/g).test(hanzizi1);

    //不雅词库
    let keywords = ['猪', '狗', '草', '傻', '玛', '操', '艹', '妈', '爸', '爷', '奶', '骗', '逼', 'shit', 'fuck', 'fk',]

    let len = 0
    for (let i = 0; i < hanzizi1.length; i++) {
        let c = hanzizi1.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
        } else {
            len += 1;
        }
    }

    if (len > 4) {
        iferr('#iferror')
        return false
    }

    if (hanzizi1.length < 3 && len < 2) {
        iferr('#iferror')
        return false
    }

    for (let i = 0; i < keywords.length; i++) {
        if (hanzizi1.indexOf(keywords[i]) != -1) {
            iferr('#iferror0')
            return false
        }
    }

    if (!g) {
        iferr('#iferror')
        return false
    }

    if (sex == '') {
        iferr('#iferror2')
        return false
    }

    // document.querySelector('#mytextbox').style.display = 'none'    
    // document.querySelector('#tishi').style.display = 'block'    
    function setCookie(key, value) {
        var cookie = key + '=' + encodeURIComponent(value);
        document.cookie = cookie;
    }

    setCookie('ck-mbti-username', hanzizi1)

    function set(key, val) {
        window.localStorage.setItem(key, JSON.stringify(val));
        return true;
    }
    function get(key) {
        var val = window.localStorage.getItem(key);
        if (val == null) {
            return false;
        }
        return JSON.parse(val);
    }


    set('gkabc-mbti-userinfo', { "username": hanzizi1, "sex": sex })

    // myResult:{"E":0,"I":0, "S":0, "N":0, "T":0, "F":0, "J":0, "P":0}
    let myReArr = get('gkabc-mbti-data').myResult;
    let resultType = "";
    resultType = myReArr["E"] >= myReArr["I"] ? "E" : "I";
    resultType += myReArr["N"] >= myReArr["S"] ? "N" : "S";
    resultType += myReArr["T"] >= myReArr["F"] ? "T" : "F";
    resultType += myReArr["J"] >= myReArr["P"] ? "J" : "P";
    //  document.form1.action = "./" + resultType + ".html?sn=" + this.sncode.value
    //document.iframe1.src = "./" + resultType + ".html?sn=" + this.sncode.value
     document.querySelector('#iframe1').src = "./" + stringtoasc("OEM"+resultType) + ".html?sn=" + this.sncode.value
    document.querySelector('#iframe1').style.display = "block"
    document.querySelector('#submitpage').style.display = 'none'

    return false;
    return d
}

let ifsubmit

