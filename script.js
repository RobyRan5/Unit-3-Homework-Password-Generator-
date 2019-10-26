//openeing prompts

    var opening = confirm('Password Must be 8 to 128 characters, please use slide bar to choose length');
    var character= confirm('Password must contain atleast one numeric, special, UPPERcase or lowercase character');

//generate password

function generate() {
    //password length 
    let complexity = document.getElementById("slider").value;

    //values input 
    let values = "Á á Ć ć É é Í í Ĺ ĺ Ń ń Ó ó Ŕ ŕ Ś ś Ú ú Ý ý Ź ź À à È è Ì ì Ò ò Ù ù Â â Ĉ ĉ Ê ê Ĝ ĝ Ĥ ĥ Î î Ĵ ĵ Ô ô Ŝ ŝ Û û Ŵ ŵ Ŷ ŷ Ä ä Ë ë Ï ï Ö ö Ü ü Ÿ ÿ ß Ã ã Ẽ ẽ Ĩ ĩ Ñ ñ Õ õ Ũ ũ Ỹ ỹ Ç ç Ģ ģ Ķ ķ Ļ ļ Ņ ņ Ŗ ŗ Ş ş Ţ ţ Đ đ Ů ů Ǎ ǎ Č č Ď ď Ě ě Ǐ ǐ Ľ ľ Ň ň Ǒ ǒ Ř ř Š š Ť ť Ǔ ǔ Ž ž Ā ā Ē ē Ī ī Ō ō Ū ū ǖ ǘ ǚ ǜ Ă ă Ĕ ĕ Ğ ğ Ĭ ĭ Ŏ ŏ Ŭ ŭ Ċ ċ Ė ė Ġ ġ İ ı Ż ż Ą ą Ę ę Į į Ų ų Ł ł Ő ő Ű ű Ŀ ŀ Ħ ħ Ð ð Þ þ Œ œ Æ æ Ø ø Å å Ə ə!#$%&()*+,-./:;<=>?@[\]^_{|}~";

    let password = "";
    console.log(complexity);
    //password character creation
    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add to display area
    document.getElementById("display").value = password;

    //password last lsit
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

    //default length display of 25
    document.getElementById("length").innerHTML;

    //function to set slider position
    document.getElementById("slider").oninput = function () {
    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;

    }

    else {
        document.getElementById("length").innerHTML = "length: 1";

    }
}

    //copy password to clipboard
    
    function copyPassword() {

    document.getElementById("display");

    document.execCommand("copy");

    alert("Password Copy Available");
}


