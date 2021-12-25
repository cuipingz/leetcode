/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    /*
    var num = new Array();
    var i = 0;
    if(x < 0){
        return false;
    }
    if (x === 0){
        return true;
    }
    while(x != 0){
        num[i] = x % 10; 
        x = Math.floor(x / 10);  
        i = i + 1; 
    }
    for(var j = 0; j < Math.floor(num.length /2) ; j++){
        if(num[j] != num[num.length-1-j]){
            return false;
        }
    }
    return true;
    */
    /*
    var s = x.toString();
    for(var j = 0; j < Math.floor(s.length / 2); j++){
        if(s[j] != s[s.length-1-j]){
            return false;
        }
    }
    return true;
    */
    /*
    var s = x.toString();
    var rs = "";
    for(var i = s.length-1;i>=0;i--){
        rs = rs + s[i];
    }
    if(s === rs){
        return true;
    }else{
        return false;
    }
    */
    var s = x.toString();
    var rs = s.split("").reverse().join("");
    if(s === rs){
        return true;
    }else{
        return false;
    }

};