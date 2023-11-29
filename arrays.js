//moreparac
//ex1 
function firstElement(array) {
     return array[0]
 }
 //ex2
 function lastElement(array) {
    return array[array.length-1]
 } 
 //ex3
 function getNthElement(array, number) {
    for(var i=0;i<array.length;i++){
       if(array[i]===number){
        return array[i]
       }
    
    }
    return "not found"
 }  
 //exe8
 function reassignLast(array, element) {

     array.splice(array.length-1,1,element )
     return array 
 }  
//advanced
function indexOf(array, element) {
    return array.indexOf(element)

}
//exercice 
