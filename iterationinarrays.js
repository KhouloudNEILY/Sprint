//more parac
//ex 1
function min(array) {
    var n=array[0]
    for(var i=1;i<array.length;i++){
        if(array[i]<n){
        n=array[i]
        }
    }
    return n
}
 //exercice2 
 function max(array) {

    var m=array[0]
    for(var i=1;i<array.length;i++){
        if(array[i]>n){
        m=array[i]
        }
    }
    return m
        
    
 }
//ex3
function shortestString(array) {
      var s=array[0].length
      for(var i=0;i<array.length;i++){
        if(array[i].length<s){
            s=array[i].length
        }
      }
      return s
 }  //exer8
 function multiplyByIndex(array) {
    var a=[]
    for(var i=0;i<array.length;i++){
        a.push(array[i]*i)

    }
    return a 
 } 
//  Advanced 
// ex1 
function filterEvenLengthWords(array) {
    var a=[]
    for(var i=0;i<array.length;i++){
     if(array[i].length%2===0){
        a.push(array[i])
     }

    }
    return a 
 } 
//ex2 
function popLastElement(array) {
    for (var i=0;i<array.length;i++){
          var a=array[i]
         a.pop()
    }
    return array 
}
//ex3
function pushLastElement(array, element) {
    for (var i=0;i<array.length;i++){
        var a=array[i]
       a.push(element)
  }
  return array 
}
//ex 4

function sumArrays(array) {
    var s=0
    for (var i=0;i<array.length;i++){
     var a=array[i]
        for(var j=0;j<a.length;j++){
            console.log(array[i][j])
            s=s+array[i][j]
        }
 
 }
 return s 
  }
  //ex5
  function multiplyBySmallest(array) {
    var m=array[0]
    var a=[]
     for(var i=0;i<array.length;i++){
         if(array[i]<m){
            m=array[i] 
            a.push(arra[i]*m) 
         }


     }
     return m

 } 