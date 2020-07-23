
// i. Get element of id “main-content” and assign them in a variable. 

// var a=document.getElementById("main-content")
// console.log(a.childNodes[0])
var a = document.childNodes[1].childNodes[2].childNodes[1].childNodes[4]
//var c=document.getElementsById("ooo");
function part1() {
    console.log(a)
}


// console.log(document.childNodes[0])
function part2() {
    console.log(a.childNodes[1])
    console.log(a.childNodes[2])
    console.log(a.childNodes[3])
    console.log(a.childNodes[4])
    console.log(a.childNodes[5])
}

    //   var c=a.childNodes[1].nodeValue
    //     //var b=document.childNodes[1].childNodes[2].childNodes[1].childNodes[4]
    //     document.getElementById("ooo").innerHTML = c;
      //  var c=document.getElementsByClassName("render")
    //  console.log
    // var ab = document.getElementById('main-content');
    // if (typeof ab !== null && ab !== 'undefined') {
    //     document.getElementById("main-content").innerHTML = c;
    //     console.log(c)
    // }
  
  
   
  
//b.innerhtml=c
       
     function result(){
         var c=document.getElementsByTagName("p")
console.log(c)

            // var ab = document.getElementById("maincontent")
            // console.log(ab.childNodes[1])
            // var c=document.getElementById("ooo");
           var b=document.childNodes[1].childNodes[2].childNodes[1].childNodes[4]
           console.log(b.childNodes[1].nodeValue)
           var d=b.childNodes[0].nodeValue
          c.innerHTML=d
            // c.innerHTML=b
        }
  


