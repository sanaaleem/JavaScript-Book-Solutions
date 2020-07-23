// alert("hello");
// alert("Error, please enter correct passsword");
// alert("welcome to JS land \n happy coding");
// alert("welcome to JS land");
// alert("Happ coding");
// prompt("prevent his page rom additional");

//Write a custom function power ( a, b ), to calculate the value of a raised to b. 

// var result=document.getElementById("fname");
function power(base, exp) {
  var base = +prompt("enter value of base", "enter here")
  var exp = +prompt("enter value of exponent", "enter here")
  var res = Math.pow(base, exp);

  document.getElementById("result").value = res;

}
////     <p> 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …</p>
//var y=+prompt("enter year")
// var y=+document.getElementById("year");

// console.log(y)
// var y=parseInt(document.getElementById("year").value);

function leapyear(y) {
  //var y = +prompt("enter year");
  var y = parseInt(document.getElementById("year").value);

  if (y % 4 == 0) {
    alert(y + "is a leap year")
      / console.log(y + " is a leap year");
  }
  else if (y % 4 == 1) {
    //console.log(y + "is a leap year");
    alert(y + " is not a leap year")
  }
  else {
    alert("incorrect data")
  }

}
///////////////////
function calculateArea() {
  var a = +(document.getElementById("side_a").value);
  var b = +(document.getElementById("side_b").value);
  var c = +(document.getElementById("side_c").value);

  s = calculateS(a, b, c);
  document.getElementById("AreaResult").value = s;

}
function calculateS(a, b, c) {
  s = (a + b + c) / 2
  area = s * ((s - a) * (s - b) * (s - c))
  return area;
}
function avg() {
  var s1 = document.getElementById("s1").value
  var s2 = document.getElementById("s2").value
  var s3 = document.getElementById("s3").value
  var total = document.getElementById("total").value
  var htmlavg = document.getElementById("average")
  var htmlpercent = document.getElementById("percentage")
  console.log(s1, s2, s3, total)
  var average = average();
  var percentage = percentage();
  function average() {
    var localavg = (s1 + s2 + s3) / 3
    console.log(localavg)
    return localavg
  }
  function percentage() {
    var t = (s1 + s2 + s3) / total
    var localpercentage = t * 100
    return localpercentage;

  }
  console.log(average)
  console.log(percentage)
  //changeIt.style.visibility = 'visible'
  document.getElementById("hiddendiv").style.visibility = 'visible';

  document.getElementById("average").setAttribute('type', 'text')
  // document.getElementById("apercentage").setAttribute('type','text')
  /// document.getElementById("h").setAttribute('type','text')
  document.getElementById("percentage").setAttribute('type', 'text')
  htmlavg.value = average
  htmlpercent.value = percentage

}
// function avg(){
//   document.getElementById('hiddendiv').className="show";
// }
function percentage() {
  //document.getElementById("percentage").setAttribute('type','text')
  // document.getElementById("apercentage").setAttribute('type','text')
  /// document.getElementById("h").setAttribute('type','text')
}

function index() {
  var text = document.getElementById("indexOf").value

  var letter = document.getElementById("letter").value

  for (var i = 0; i <= text.length; i++) {
    if (letter == text[i]) {
      alert(text[i] + " has found at " + (i + 1) + " position")

    }
  }
}

function vowelremoval() {
  var vow = document.getElementById("sentence").value
  var arr = [];
  var arrCount = 0;
  for (var i = 0; i <= vow.length; i++) {
    if (vow[i] != 'a' && vow[i] != 'e' && vow[i] != 'o' && vow[i] != 'i' && vow[i] != 'u') {//alert(vow[i] +" has found at " + (i+1) + " position")
      //  arr[arrCount]==vow[i];
      arr.push(vow[i])
      //  console.log(arr[arrCount])
      //    arrCount++
      //      console.log(delete vow[i])

    }

  }
  var toString = arr.join('')
  alert("after removing vowels sentence will be something like this" + "\n" + toString)

}

//////////////////////

function distance() {
  var values = document.getElementById("Unit").value
  console.log(values)
  var km = parseInt(document.getElementById("distance").value)
  console.log(km)
  var ans;

  if (values == 'feet') {
    ans = feet()

  }
  if (values == 'inches') {
    ans = inches()
  }
  if (values == 'centimeter') {
    ans = centimeter()
  }
  if (values == 'meter') {
    ans = meter()
  }

  //document.getElementById("mySelect").selectedIndex = "2";
  function feet() {
    var ft = km * 3280.8
    return ft
  }
  function inches() {
    var inch = km / 39370
    return inch
  }
  function centimeter() {
    var cm = km
    return cm
  }
  function meter() {
    var m = km * (1000)
    return m

  }
  document.getElementById("distanceResult").innerHTML = ans
}
/////////////////////////
function salary() {
  var workingHours = parseInt(document.getElementById("salary").value)
  if (workingHours > 40) {
    r = workingHours - 40

    result = r * 12

    alert("salary of over time will be " + result)
  }
  if (workingHours < 40 || workingHours == 0 || workingHours == 40) {

    alert("condition o over time will not applied to less than 40 hours ")
  }
}
////////////////////////////////
function Domination() {
  var result;
  var hundredCount = 0
  var twentyCount=0;
  var fiftyCount = 0;
  var input = +prompt("Enter Amount to withdraw!!")
  console.log(input)
  if (input > 100) {
    minusHundred()
  }
  console.log("hell", input, hundredCount)
  function minusHundred() {
    input = input - 100
    hundredCount++
    if (input >= 100) {
      minusHundred()
    }
  }
  if (input >= 50) {
    minusfifty()
  }
  console.log("kill", input, fiftyCount)


  function minusfifty() {
    input = input - 50
    fiftyCount++
    if (input > 100) {
      minusfifty()
    }
  }

  if (input >= 10) {
    minustwenty()
  }
  console.log("will", input, twentyCount)


  function minustwenty() {
    input = input - 20
    twentyCount++
    if (input > 20) {
      minustwenty()
    }
  }


}





