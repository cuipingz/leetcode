/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    /*
    var min = strs[0].length;
    for(var j = 1;j<strs.length;j++) {
        if(min > strs[j].length){
            min = strs[j].length;
        }
    }
    //有了字符串的最小长度
    var s = '';
    for(var i = 0; i < min; i++){
        var c = strs[0][i];
        var flag = true;
        for(var j = 1; j < strs.length; j++){
            if(c != strs[j][i]){
                flag = false;
                break;
            }
        }
        if(flag){
            //第i个字母，所有的单词都相同
            s = s + c;
        }else{
            break;
        }
    }
    return s;
    */

    var s = '';
    for(var i = 0; i < strs[0].length; i++){
        var c = strs[0][i];
        var flag = true;
        for(var j = 1; j < strs.length; j++){
            if(i >= strs[j].length || c != strs[j][i]){
                flag = false;
                break;
            }
        }
        if(flag){
            //第i个字母，所有的单词都相同
            s = s + c;
        }else{
            break;
        }
    }
    return s;

}