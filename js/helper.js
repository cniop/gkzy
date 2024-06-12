function stringtoasc(text) {
    var format=10;//16 10 8
    var bytes = [];
    for (var i = 0; i < text.length; i++) {
        var realBytes = unescape(encodeURIComponent(text[i]));
        for (var j = 0; j < realBytes.length; j++) {
            bytes.push(realBytes[j].charCodeAt(0));
        }
    }
    var converted = [];
    for (var i = 0; i < bytes.length; i++) {
        var byte = bytes[i].toString(format);

        converted.push(byte);
    }
    return converted.join("");
}