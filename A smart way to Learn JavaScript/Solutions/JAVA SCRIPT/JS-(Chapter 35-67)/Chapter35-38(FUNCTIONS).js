

function greet(){
    var fname=prompt("Enter your first name")
    var lname=prompt("Enter your Last name")
    alert("welcome "+ fname +" "+ lname)

}

function sum(){
    var s1=parseInt(document.getElementById(num1))
    var s2=parseInt(document.getElementById(num2))
    console.log(s1)
  var r = s1 + s2
    alert("sum = " + r)
}
////////////////////////////
function Calculator(){
  var arg1=+prompt("enter first number")
  var arg2=+prompt("enter second number")
  var op=prompt("Enter Operator")
 if(op=='+')
 {
   alert(arg1+arg2)
 }
 if(op=='-')
 { s=arg1-arg2
   alert(s)
 }if(op=='*')
 {
   alert(arg1*arg2)
 }if(op=='/')
 {
   alert(arg1/arg2)
 }
 else
 alert("invalid Operator")
}
/////////////////////////////
function square()
{
  var num=document.getElementById("numbersquare").value
  alert(num*num)
}
//////////////////////
function factorial()
{
  var fact=parseInt(document.getElementById("numberfact").value)
if(fact==1)
{
  fact=1
}
if(fact==0)
{
  fact=0
}
  var temp=fact-1
  while(temp!=1 && temp>1)
  {
    fact=fact*(temp)
    temp--
  }
  alert("ans= "+fact)
  console.log(fact)
}
/////////////
function NumList()
{
  var n1=document.getElementById("numstart").value
  var n2=document.getElementById("numend").value
var para=document.getElementById("numList")
  var i=n1
  var j=n2
  for (i;i<=j;i++)
  {
    para.innerHTML+=i+ "<br />" ;

    console.log(i)
  }
}

//////////////////////////
function calculateHypotenuse()
{
  var base=document.getElementById("base").value
  var perp=document.getElementById("perpendicular").value
  var a=calculateSquare()
  var result=Math.sqrt(a)

  alert(result)
  function calculateSquare()
  { var ans=Math.pow(base,2)+Math.pow(perp,2)
    return ans
  }

}
////////////////////////////////
function calculateArea()
{
  var width=document.getElementById("width").value
  var height=document.getElementById("height").value
  var result=Area(width,height)
  alert("area= ",result)
  function Area(w,h)
  {
    var Area=w*h
    return Area;
  }
}
//////////////////////////////////
function palindrome()
{
  var string=prompt("Enter String")
  var i;
  var j=string.length
  console.log()
  var c=0
  for(i=0;i<=string.length;i++)
  {
    if(string[i]==string[j] )
    {
      j--
      c++
    }
    if(c=string.length)
    {
      //alert(string, "is a palindrome word")
    }
    else{
      alert("no ")
    }
    // if(string[i]==string[j] )
    // {
    //   alert("no palindrome")
    // }

  }

}