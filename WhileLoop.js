//exercice 1 
function sumOfN(n){
   var s=0
   while(n>=0){
    s=s+n
    n=n-1
    
   }
 return s 

}


//exercice 2 

function factorielOfN(n){
    var p=1
    while(n>=1){
       p=p*n
       n--

    }
    return p
}
// excercice 3 
function repeatString(string,num){
     var s=""
     while(num>=0){
       s=string
       num--


     }

   return s
}

//exercice4
function sumMinToMax(min, max) {
    var s=0 
     var i=1
     if(min<=max){
     while (i<=max){
        s=s+i
         i++
         
     }
         return s
     }
 }
//*** More practise */
 //exercice 1
 function reverseString(string){
  var a=string.split("")
  var s=""
   var i=a.length-1
  while(0<=i){
     s=s+a.pop()
       i--
  }
   return s
}

//exercice 2 

// indexOf :
function getIndexOf(string,char){
  var i=0
   while(i<=string.length-1){
       if(string[i]===char){
           return string.indexOf(char)
       }
       i++
   }
}
//**Advanced */
 //exercice1 
 function sumEvent(n,m){
  var s=0// to store resultat
   var i=n
     while(i<m){ 
      if(i%2===0){
         s=s+i
                
        
      } 
       i++
        
   }
   return s
}
