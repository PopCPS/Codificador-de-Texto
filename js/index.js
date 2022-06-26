var criptografar = document.querySelector('#buttonEncode');
    var copiar = document.querySelector('#buttonCopy');
    var decriptografar = document.querySelector('#buttonDecode');
    var input = document.querySelector('#textInput');
    var output = document.querySelector('#textOutput');

    function textEncode() {

        var textCode0 = input.value;
        var textCode1 = textCode0.replace(/e/gi, 'enter');
        var textCode2 = textCode1.replace(/i/gi, 'imes');
        var textCode3 = textCode2.replace(/a/gi, 'ai');
        var textCode4 = textCode3.replace(/o/gi, 'ober');
        var textCode5 = textCode4.replace(/u/gi, 'ufat');
        output.value = textCode5;
    }

    function textDecode() {

        var textDecode0 = input.value;
        var textDecode1 = textDecode0.replace(/enter/gi, 'e');
        var textDecode2 = textDecode1.replace(/imes/gi, 'i');
        var textDecode3 = textDecode2.replace(/ai/gi, 'a');
        var textDecode4 = textDecode3.replace(/ober/gi, 'o');
        var textDecode5 = textDecode4.replace(/ufat/gi, 'u');
        output.value = textDecode5;
    }   

    function copyText() {

        var content = document.getElementById('textOutput');

        content.select();
        document.execCommand('copy');
    }