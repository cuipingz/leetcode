/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    /*
    var result = 0;
    for(var i = 0; i < s.length; i++) {
        if(s[i] == 'I') {
            if(i == s.length - 1){
                result = result + 1;
            }else if(s[i+1] == 'V') {
                result = result + 4;
                i++;
            }else if(s[i+1] == 'X') {
                result = result + 9;
                i++;
            }else { //II
                result = result + 1;
            }
        }else if(s[i] == 'V') {
            result = result + 5;
        }else if(s[i] == 'X'){
            if(i == s.length - 1){
                result = result + 10;
            }else if(s[i+1] == 'L'){
                result = result + 40;
                i++;
            }else if(s[i+1] == 'C'){
                result = result + 90;
                i++;
            }else{
                result = result + 10;
            }
        }else if(s[i] == 'L'){
            result = result + 50;
        }else if(s[i] == 'C'){
            if(i == s.length -1){
                result = result + 100;
            }else if(s[i+1] == 'D'){
                result = result +400;
                i++;
            }else if(s[i+1] == 'M'){
                result = result + 900;
                i++;
            }else{
                result = result + 100;
            }
        }else if(s[i] == 'D'){
            result = result + 500;
        }else{
            result = result + 1000;
        }
    
    }
    return result;
*/
    /*
    var result = 0;
    for(var i=0; i< s.length; i++){
        if(s[i] == 'I'){
            //if(i == s.length-1){
            //    result = result +1;
            //}else if(s[i+1] == 'V' || s[i+1] == 'X'){ //IV IX
            //    result = result -1; 
            //}else {
            //    result = result + 1;
            //}
            if(i != s.length - 1 && (s[i+1] == 'V' || s[i+1] == 'X')) {
                result = result - 1;
            }else {
                result = result + 1;
            }
        }else if(s[i] == 'V'){
            result = result + 5;
        }else if(s[i] == 'X'){
            if(i != s.length-1 && (s[i+1] == 'L' || s[i+1] == 'C')){
                result = result - 10;
            }else{
                result = result + 10;
            }
        }else if(s[i] == 'L'){
            result = result + 50;
        }else if(s[i] == 'C'){
            if(i != s.length-1 && (s[i+1]=='D' || s[i+1] == 'M')){
                result = result - 100;
            }else{
                result = result + 100;
            }
        }else if(s[i] == 'D'){
            result = result + 500;
        }else{
            result = result + 1000;
        }
    }
    return result; 
    */
    /*
    var m = new Map();
    m.set('I', [1, 'V', 'X']);
    m.set('V', [5, '', '']);
    m.set('X', [10, 'L', 'C']);
    m.set('L', [50, '', ''] );
    m.set('C', [100, 'D', 'M']);
    m.set('D', [500, '', '']);
    m.set('M', [1000, '', '']);
    

    var result = 0;
    for(var i = 0; i < s.length; i++) {
        if(i != s.length - 1 && (s[i+1] == m.get(s[i])[1] || s[i+1] == m.get(s[i])[2])) {
            result = result - m.get(s[i])[0];
        }else {
            result = result + m.get(s[i])[0];
        }
    }
    */
    var m = new Map();
    m.set('I', 1);
    m.set('V', 5);
    m.set('X', 10);
    m.set('L', 50);
    m.set('C', 100);
    m.set('D', 500);
    m.set('M', 1000);
    var result = 0;
    for(var i = 0; i < s.length; i++){
        if(i != s.length -1 && m.get(s[i]) < m.get(s[i+1])){
            result = result - m.get(s[i]);
        }else {
            result = result + m.get(s[i]);
        }
    }
    


};