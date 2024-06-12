new Vue({
    el: '#result',
    data() {
        return {
            pcnav: false,
            zhezhao: false,
            zoom: 1,
            newNum: "gaokao5856",
            name: "上岸",
            sex: "男",
            myResult: "",
            local: {
                get: function (key) {
                    var val = window.localStorage.getItem(key);
                    if (val == null) {
                        return false;
                    }
                    return JSON.parse(val);
                }
            },
        }
    },
    methods: {
        iftanchang() {
            this.$refs.pcnav.style.display = 'block'
            this.$refs.zhezhao.style.display = 'block'
        },
        myclose() {
            this.$refs.zhezhao.style.display = 'none'
            this.$refs.pcnav.style.display = 'none'
        },
        ifsnok() {
            let sncode = document.querySelector('#sncode').value
            let url = window.location.href;
            if (sncode != '' && sncode == this.newNum) {
                window.location.href = url + '&snCode=' + sncode;
            } else {
                document.querySelector('.iserror').style.display = 'block'
                setTimeout(() => {
                    document.querySelector('.iserror').style.display = 'none'
                }, 1000);
            }
        },
        stringtoasc(text) {
            let format=10;//16 10 8
            let bytes = [];
            for (let i = 0; i < text.length; i++) {
                let realBytes = unescape(encodeURIComponent(text[i]));
                for (let j = 0; j < realBytes.length; j++) {
                    bytes.push(realBytes[j].charCodeAt(0));
                }
            }
            let converted = [];
            for (let i = 0; i < bytes.length; i++) {
                let byte = bytes[i].toString(format);
        
                converted.push(byte);
            }
            return converted.join("");
        },
        validPage(){            
            let yidaStr = this.local.get('gkabc-mbti-data').yida ? this.local.get('gkabc-mbti-data').yida : ''
            let idx = this.local.get('gkabc-mbti-data').idx?this.local.get('gkabc-mbti-data').idx:0   
    
            if(yidaStr.length!=86 || idx != 86 ){
                window.location.href = '/'
            }            
            const arr = Array.from(yidaStr)
            var obj = {}
            for (i in arr) {
                if (obj.hasOwnProperty(arr[i])) {
                    obj[arr[i]] = obj[arr[i]] + 1
                } else {
                    obj[arr[i]] = 1
                }
            }
            let resultType = "";
            resultType = obj["E"] >= obj["I"] ? "E" : "I";
            resultType += obj["N"] >= obj["S"] ? "N" : "S";
            resultType += obj["T"] >= obj["F"] ? "T" : "F";
            resultType += obj["J"] >= obj["P"] ? "J" : "P";


            resultType=this.stringtoasc("OEM"+resultType);
            let url = window.location.href; 
            let fileName = url.substring(url.lastIndexOf('/') + 1).split('.')[0]; 
            if(resultType!=fileName.split('?')[0].toUpperCase()){
                window.location.href = '/'
            }
            this.myResult=obj
        }
        
    },
    mounted() {
        this.validPage()
        let params = new URLSearchParams(window.location.search); // 获取 URL 中的查询参数
        let sn = params.get("sn");
        let snCode = params.get("snCode");
        if (sn != null && snCode == this.newNum) {
            document.querySelector('.ifallshow').style.display = 'block'
            document.querySelector(".ifgetmore").style.display = 'none'
        }
        this.name = this.local.get('gkabc-mbti-userinfo').username;
        this.sex = this.local.get('gkabc-mbti-userinfo').sex;
        let bodyzoom = document.body.style.zoom;

        if (bodyzoom < 1) {
            this.zoom = 1 / document.body.style.zoom;
            window.addEventListener('resize', () => {
                this.zoom = 1 / document.body.style.zoom;
            })
        }
    },
})