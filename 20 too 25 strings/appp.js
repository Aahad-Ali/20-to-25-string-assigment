// var firstName =prompt("Enter your first name");
// var lastName =prompt("Enter your last name");

// document.write(firstName+"  "+lastName);


// var mobile =prompt("Enter your Favourit mobile name");

// document.write("My favourit Phone is: "+mobile);

// ============================ 1 ==============================
document.write("<br> ");
document.write("<br>");
var fName=prompt("Enter First name: -");
var lName=prompt("Enter Last name: -");
document.write("Your Fullname is " +fName+" "+lName);

// ============================ 2 ==============================
document.write("<br> ");
document.write("<br>");
var mobile=prompt("Enter Your Favorite Mobile Name: -");
document.write("Your Favorite Mobile : -  " +mobile);
document.write("<br> "+"Length of String "+mobile.length);

// ============================ 3 ==============================
document.write("<br> ");
document.write("<br>");
var mobile="Pakistani";
document.write("Index of n"+mobile.indexOf("n"));

// ============================4  ==============================
document.write("<br> ");
document.write("<br>");
var mobile="Hello World";
document.write(" last Index of l : -  "+mobile.lastIndexOf("l"));

// ============================ 5 ==============================
document.write("<br> ");
document.write("<br>");
var mobile="kia hal h";
document.write(" At Index  3 : -  "+mobile.charAt(3));

// ============================ 6 ==============================
document.write("<br> ");
document.write("<br>");
var fName=prompt("Enter First name: -");
var lName=prompt("Enter Last name: -");
var fullName = fName.concat(lName);
document.write("Your Fullname is " +fullName);

// ============================ 7 ==============================
document.write("<br> ");
document.write("<br>");
var cityName="Hyderabad";
var newName=cityName.replace("Hyder","Islam");
document.write("Old City name: - " +cityName);
document.write("<br>New City name: - " +newName);

// ============================ 8 ==============================
document.write("<br> ");
document.write("<br>");
var cityName="Aahad and ali are best friends. They play hokey and tanis together.";
var newName=cityName.replace(/and/g, "&")
document.write("Old City name: - " +cityName);
document.write("<br>New City name: - " +newName);

// ============================ 9 ==============================
document.write("<br> ");
document.write("<br>");
var s= "472";
var num=Number(s);
document.write("String : - " +s);
document.write("<br>Number: - " +num);

// ============================ 10 ==============================
document.write("<br> ");
document.write("<br>");
var inputUrl = prompt("Please enter url in following format (www.facebook.com/www.yahoo.com )");
var indNum = inputUrl.indexOf(".");
var domain = inputUrl.slice(indNum + 1);
document.write("URL: - " +inputUrl);
document.write("<br>Domain: - " +domain);

// ============================ 11 ==============================
document.write("<br> ");
document.write("<br>");
var n ="peanuts";
var m= n.toUpperCase();
document.write("lowercase: - " +n);
document.write("<br>Uppercase: - " +m);

// ============================ 12 ==============================
document.write("<br> ");
document.write("<br>");
var n ="ZONG 4G";
var m= n.toLowerCase();
document.write("Uppercase: - " +n);
document.write("<br>lowercase: - " +m);

// ============================ 13 ==============================
document.write("<br> ");
document.write("<br>");
var input= prompt("Enter word in Lowercase: - ");
var upper=input.toUpperCase();
document.write("Input String : - " +input);
document.write("<br>Uppercase string: - " +upper);

// ============================ 14 ==============================
document.write("<br> ");
document.write("<br>");
var num2 = 35.36;
var numToStr = String(num2);
var indexDot = numToStr.indexOf(".");
numToStr = numToStr.slice(0, indexDot) + numToStr.slice(indexDot + 1);
document.write("number : - " +num2);
document.write("<br>string: - " +numToStr);

// ============================ 15 ==============================
document.write("<br> ");
document.write("<br>");
var a ="3";
var b ="3";
document.write(" x= a + b ");
document.write("<br>x = "+ a + b);

// ============================ 16 ==============================
document.write("<br> ");
document.write("<br>");
var a ="3";
var b ="3";
document.write(" x= a - b ");
document.write("<br>x = "+ (a - b));

// ============================ 17 ==============================
document.write("<br> ");
document.write("<br>");

// ============================ 18 ==============================
document.write("<br> ");
document.write("<br>");
A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
for (var i = 0; i < A.length; i++) {
    document.write(A[i] + "   ");
}
var find = prompt("enter item to be found");
var look = find.toLowerCase();
var notfound = false;
document.write("<br>");
for (var i = 0; i < A.length; i++) {
    if (look === A[i]) {
        document.write(A[i] + "  availabe at index  " + i);
        notfound = true;
    }
}
document.write("<br>");
if (notfound === false) {
    document.write("not found ");
}
document.write("<br>");

// ============================ 19 ==============================
document.write("<b> ");
document.write("<br>");
var strComp1 = prompt("Enter first string to compare");
var strComp2 = prompt("Enter second string to compare");
var compResult = strComp1.localeCompare(strComp2);

if (compResult === 1) {
    document.write(strComp1 + " is greater than " + strComp2 );

}
else if (compResult === -1) {
    document.write(strComp1 + " is less than " + strComp2 );
}
else {
    document.write(strComp1 + " is equal to " + strComp2 );;
}

// ============================ 20 ==============================
document.write("<br> ");
document.write("<br>");
var name1 ="University Of Karachi"
var split = name1.split('');
for(var i=0;i<name1.length;i++)
{
    document.write(name1[i] +"<br>")
}

// ============================ 21 ==============================
document.write("<br> ");
document.write("<br>");
var p= "Pakistan";

var last= p.charAt(p.length-1);
document.write(last)



