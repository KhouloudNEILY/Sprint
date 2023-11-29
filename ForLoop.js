//**More practise */
//exercice 1
function reverseString(string){
      var arr=string.split("")
      var s=''
    for(var i=array.length-1;i>0;i--){
       s=s+ arr.pop()

    }
    return s 
}
// exercice 2
function getIndexOf(string,char){
    for(var i=0;i<string.length;i++){
        if(string[i]===char){
        return string.indexOf(char)      
        }
        else {
            return  char+" not found in "+string
        }
    }
}
//advanced 
function sumEvent(num1,num2){
    var s=0
     for(var i=num1;i<num2;i++){
         if(i%2===0){
     s=s+i
         }
     }
     return s 
}
