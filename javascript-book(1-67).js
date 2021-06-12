                         //  CHAPTER NO 1  
               --------------------------------------

  alert("Error! Please Enter a Valid Password");


 alert("Welcome to JS Land .... \n Happy Coding !");


 alert("Welcome to JS Land ...");
 alert("Happy Coding !");


 console.log(alert("Hello.... I can run JS through web browser's console"));

                            //  CHAPTER NO 2 
                 -----------------------------------------

 var userName;


 var myName = "umer";


 var message;
 message = "Hello World";
 alert (message);


 var name = "Johne Doe";
 var age = '15 years old'; 
 var faculty = "Certified Mobile Application Development";
 alert (name);
 alert (age);
 alert (faculty);


 var pizza =" PIZZA \n PIZZ \n PIZ \n PI \n P";
 alert (pizza);


 var email = "arham426@gmail.com";
 var beforeText = "My email address is ";
 alert (beforeText + email);


 var book = "A smarter Way to Learn JavaScript";
 var beforeText = "I am trying to learn from the Book ";
 alert (beforeText + book);


 var message = "Yeh ! I can write HTML Content through JavaScript";
 document.write(message);


 var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
 alert (design);

                          //  CHAPTER NO 3
                 ------------------------------------

 var age = 19;
 alert (age);


 var counter = 15;
 var tracker = `You have visited this site ${counter} times` ;
 alert (tracker);


 var birthYear = 2001;
 document.write (`My Birth year is ${birthYear} <br> Data Type of my declared variable is Number`);


 var visitor = "Johne Doe";
 var Quantity = 5;
 var title = "T-Shirt(s)";
 document.write(`${visitor} ordered ${Quantity} ${title} on XYZ Clothing Store`);

                         //  CHAPTER NO 4

 var number,alphets,type;


 var userName,myName,person,age,birthYear;
 var 1stPresident,2ndPrime_minister;


 document.write("<h1> Rules for naming JS variables </h1> <br> <br>")
 document.write("Variable names can only contain, numbers, $ and _ . For example $my_1stVariable <br>");
 document.write("Variables must begin with a letter, $ or _ . For example $name, _name or name <br>")
 document.write("Variable names are case Sensitive <br>")
 document.write("Variable names should not be JS Keywords")

                         //  CHAPTER NO  5

 var num1 = 3;
 var num2 = 5;
 document.write (`Sum of ${num1} and ${num2} is ${num1 + num2}<br>`);
 document.write (`Sum of ${num1} and ${num2} is ${num1 - num2}<br>`);
 document.write (`Sum of ${num1} and ${num2} is ${num1 * num2}<br>`);
 document.write (`Sum of ${num1} and ${num2} is ${num1 / num2}<br>`);
 document.write (`Sum of ${num1} and ${num2} is ${num1 % num2}<br>`);


 var value;
 document.write(`value after declartion is ${value} <br>`);
 value = 5;
 document.write(`intial value : ${value} <br>`);
 document.write(`value after increment is: ${++value} <br>`);
 value = value + 7;
 document.write(`value after addition is: ${value} <br>`);
 document.write(`value after decrement is: ${--value} <br>`);
 document.write(`The remainder is: ${value % 3} <br>`);


 var ticketPrice = 600;
 var numOfTickets = +prompt("How many tickets you want??",);
 documen(t.write(`Total Cost of Buy ${numOfTickets} Tickets to a movie is ${ticketPrice * numOfTickets} PKR`);


 var table = +prompt("Write your table Number");
 var add = 0;
 document.write(` <h3>Table of ${table} </h3> <br>`)
 document.write(`${table} x ${add + 1} = ${table} <br>`);
 document.write(`${table} x ${add + 2} = ${table * 2} <br>`);
 document.write(`${table} x ${add + 3} = ${table * 3} <br>`);
 document.write(`${table} x ${add + 4} = ${table * 4} <br>`);
 document.write(`${table} x ${add + 5} = ${table * 5} <br>`);
 document.write(`${table} x ${add + 6} = ${table * 6} <br>`);
 document.write(`${table} x ${add + 7} = ${table * 7} <br>`);
 document.write(`${table} x ${add + 8} = ${table * 8} <br>`);
 document.write(`${table} x ${add + 9} = ${table * 9} <br>`);
 document.write(`${table} x ${add + 10} = ${table * 10} <br>`);


 var celsiusTemp = 25;
 document.write(`${celsiusTemp}<sup>0</sup>C is ${(celsiusTemp * 9/5) + 32}<sup>0</sup>F <br>`);
 var FarenheitTemp = 70;
 document.write(`${FarenheitTemp}<sup>0</sup>F is ${(FarenheitTemp - 32) * 5/9}<sup>0</sup>C `);


 var item1 = 650;
 var item2 = 100;
 var QtyItem1 = 3;
 var QtyItem2 = 7;
 var shpingCharges = 100;
 document.write("<h1>Shopping Cart</h1> <br>")
 document.write(`Price of Item 1 is ${item1} <br>`);
 document.write(`Quantity of Item 1 is ${QtyItem1} <br>`);
 document.write(`Price of Item 2 is ${item2} <br>`);
 document.write(`Quantity of Item 1 is ${QtyItem1} <br>`);
 document.write(`Shipping charges ${shpingCharges} <br> <br>`);
 document.write (`Total cost of your order is ${ (item1 * QtyItem1) +  (item2 * QtyItem2) + (shpingCharges)}`);


 var TotalMarks = 980;
 var ObtMarks = 804;
 document.write(`Total Marks: ${TotalMarks} <br>`);
 document.write(`Obtained Marks: ${ObtMarks} <br>`);
 document.write(`Percentage: ${((ObtMarks * 100) /TotalMarks )}`);


 document.write("<h1> Currency in PKR. </h1> <br>")
 document.write(`Total Currency in PKR: ${(10 * 104.80) + (25 * 28)} `);


 var number = 5;
 document.write(`${((number + 5) * 10 ) / 2}`);


 document.write("<h1> Age Calculator </h1> <br>")
 var currentYear = 2020;
 var birthYear = 1992;
 document.write(`Current Year: ${currentYear} <br>`);
 document.write(`Birth Year: ${birthYear} <br> `);
 document.write(`Your age is: ${(currentYear - birthYear)} `);


 document.write("<h1> The Geomatrizer </h1> <br>")
 var radius = 20;
 document.write(`Radius of a Circle: ${radius} <br>`);
 document.write(`The circumference: ${((2 * 3.142) * radius )} <br> `);
 document.write(`The area is : ${3.142 * radius * radius} `);

        (In Questions mentioned in assginment (per day) not per year) so I calculated for per day
 document.write("<h1>The Life Time Supply Calculator</h1> <br>")
 var fvtSnack = "lays";
 var age = 20;
 var mxmAge = 70;
 var estPerDay = 3;
 var finalAge = (mxmAge - age) * 365 ;
 document.write(`Favourite snacks: ${fvtSnack} <br>`);
 document.write(`Current Age: ${age} <br>`);
 document.write(`Amount of snacks per day: ${estPerDay} <br>`);
 document.write(`you will need ${finalAge * estPerDay} ${fvtSnack} to last you untill the ripe old age of ${mxmAge}`);

                                    //  CHAPTER NO 6 TO  9

                         -------------------------------------------

 var number = 10;
 document.write(`Result <br>`);
 document.write(`The value of a is =  ${number} <br> <br>`);
 document.write("------------------------------------------ <br>  <br> <br>")
 document.write(`The value of ++a is =  ${++number} <br> `);
 document.write(`Now the value of a is =  ${number} <br> <br> <br>`);
 document.write(`The value of a++ is =  ${number++} <br> `);
 document.write(`Now the value of a is =  ${number} <br> <br> <br>`);
 document.write(`The value of --a is =  ${--number} <br> `);
 document.write(`Now the value of a is =  ${number} <br> <br> <br>`);
 document.write(`The value of a-- is =  ${number--} <br> `);
 document.write(`Now the value of a is =  ${number} <br> <br> <br>`);


 var a = 2;
 var b = 1;
 var result = --a - --b + ++b + b--;
 --a; (answer is 1) (first decrement then print)
 --a - --b;    (ans 1 - 0 = 1) (first decrement then minus)
 --a - --b + ++b;  (ans 1 - 0 + 1 = 2)  (first add then increment) 
 --a - --b + ++b + b--; (ans 1 - 0 + 1 + 1 = 3 ) (first add and next step in not defined that's why it only add 1, if value further gone than -1 will be shown) 
 document.write(`a is ${a} <br>`);
 document.write(`b is ${b} <br>`);
 document.write(`result is ${result}`);


 var userName = prompt("Write your Name ??");
 alert (` Welcome ${userName} \n Nice to meet you ... ;) `);


 var table = +prompt("Write your table number");
 console.log(table);
 for( i = 1; i <= 10 ; i++) {
      if (table !== 0){
      document.write(`${table} x ${i} = ${table * i} <br>`)
      }
      else if(table === 0) 
      document.write(`5 x ${i} = ${5 * i} <br>`)
 }


 var sub1 = prompt("What's your First Subject Name??,");
 var sub2 = prompt("What's your Second Subject Name??,");
 var sub3 = prompt("What's your Third Subject Name??,");
 var TotalMarks = 100;
 var ObtMarks1 = +prompt(`your ${sub1}'s Obtained Marks??`);
 var ObtMarks2 = +prompt(`your ${sub2}'s Obtained Marks??`);
 var ObtMarks3 = +prompt(`your ${sub3}'s Obtained Marks??`);
 var TotalObtained = ObtMarks1 + ObtMarks2 + ObtMarks3;
 document.write(
 `<table>
 <tr>
   <th>Subject</th>
   <th>Total Marks</th> 
   <th>Obtained Marks</th>
   <th>Percentage</th>
 </tr>
 <tr>
   <td> ${sub1}</td>
   <td> ${TotalMarks}</td>
   <td> ${ObtMarks1}</td>
   <td> ${(ObtMarks1 * 100)/TotalMarks}%</td>
 </tr>
 <tr>
   <td> ${sub2}</td>
   <td> ${TotalMarks}</td>
   <td> ${ObtMarks2}</td>
   <td> ${(ObtMarks2 * 100) / TotalMarks}%</td>
 </tr>
 <tr>
   <td> ${sub3}</td>
   <td> ${TotalMarks}</td>
   <td> ${ObtMarks3}</td>
   <td> ${(ObtMarks3 * 100) / TotalMarks}%</td>
 </tr>
 <tr>
   <td> </td>
   <td> ${TotalMarks * 3}</td>
   <td> ${ObtMarks1 + ObtMarks2 + ObtMarks3}</td>
   <td> ${(TotalObtained * 100) / TotalMarks}%</td>
 </tr>
 </table>`)


                     //  CHAPTER 9 TO 11

  var city = prompt("Write your city name");
  var citiesName = ["Islamabad","Karachi","Lahore","Faislabad","Quetta"];
  for (i = 0; i < citiesName.length ; i++ ){
      if (citiesName[i] === "Karachi" ){
          alert("Welcome to city of light");
      }
  }


  var gender = prompt("Write you gender please??");
  if(gender === "Male"){
      alert("Good Morning Sir!");
  }
  else if(gender === "Female"){
      alert("Good Morning Ma'am")
  }


  var traffiColor = prompt("Write your traffic color??");
  if (traffiColor === "Red"){
      alert("Must Stop");
  }
  else if(traffiColor === "Yellow"){
      alert("Ready to Move")
  }
  else if(traffiColor === "Green"){
      alert("Move Now")
  }


  var fuelCheck = +prompt("how many litres fuel present in your car??");
  if (fuelCheck < 0.25){
      alert("Please Refill the fuel in your car ");
  }


  var a = 4;
  if (++a === 5){
  alert("given condition for variable a is true");
  }
  var b = 82;
  if (b++ === 83){
  alert("given condition for variable b is true");
  }
  var c = 12;
  if (c++ === 13){
  alert("condition 1 is true");
  }
  if (c === 13){
  alert("condition 2 is true");
  }
  if (++c < 14){
  alert("condition 3 is true");
  }
  if(c === 14){
  alert("condition 4 is true");
  }
  var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){
  alert("The cost equals");
  }
  if (true){
      alert("True");
      }
      if (false){
      alert("False");
      }
  if("car" < "cat"){
      alert("car is smaller than cat");
      }


  var sub1 = +prompt("What is your English's Marks??");
  var sub2 = +prompt("What is your Maths's Marks??");
  var sub3 = +prompt("What is your Urdu's Marks??");
  var obtTotal = sub1 + sub2 + sub3;
  var totalMarks = 300;
  var percentage = (obtTotal * 100) / totalMarks;
  var grade;
  var remarks;
  if(percentage >= 80){
      grade = "A-One";
      remarks = "Excellent"
  }
  else if(percentage >= 70){
      grade = "A";
      remarks = "Good"
  }
  else if(percentage >= 60){
      grade = "B";
      remarks = " You Need to Improve"
  }
  else if(percentage < 60){
      grade = "Fail";
      remarks = "Sorry"
  }
  document.write ("<h1> Marks Sheet </h1> <br> <br>");
  document.write (`Total Marks : ${totalMarks} <br>`);
  document.write (`Obtained Marks: ${obtTotal} <br>`);
  document.write (`Percentage: ${percentage }% <br>`);
  document.write (`Grade: ${grade}  <br>`);
  document.write (`Remarks : ${remarks}  <br>`);


  var secret = 5;
  var userGuess = +prompt("Guess any number from 1 to 10 ??");
  if (userGuess === secret){
      alert("Bingoo! Correct Answer ");
  }
  else if (userGuess === --secret){
      alert ("close enough to the correct answer");
  }


  var number = prompt("check if your number is divisble by 3 ??");
  if (number % 3 === 0){
      alert("your number is divisible by 3 ;)");
  }
  else {
      alert("your number is not divisible by 3");
  }


  var check = +prompt("Check your number ?? even or add");
  if (check % 2 === 0){
      alert("This is even number");
  }
  else {
      alert("This is odd number");
  }


  var temp = +prompt("What is today's Temperature??");
  if(temp > 40){
      alert("It's too hot Outside");
  }
  else if(temp > 30){
      alert("The Weather Today is Normal");
  }
  else if(temp > 20){
      alert("Today's Weather is Cool");
  }
  else if(temp > 10){
      alert("OMG! Today's Weather is so Cool");
  }


  var firstNumber = +prompt("Write your first Number ??");
  var Operator = prompt("Write your Operator ??");
  var secondNumber = +prompt("Write your second Number ??");
  if(Operator === "+"){
      alert(firstNumber + secondNumber);
  }
  else if(Operator === "-"){
      alert(firstNumber - secondNumber);
  }
  else if(Operator === "*"){
      alert(firstNumber * secondNumber);
  }
  else if(Operator === "/"){
      alert(firstNumber / secondNumber);
  }
  else if(Operator === "%"){
      alert(firstNumber % secondNumber);
  }


  var strings = prompt("Enter char");
  var char = strings.charAt(0);
  if (!isNaN(char * 1)) alert("numeric");
  else if (char == char.toUpperCase()) alert("uppercase letter");
  else if (char == char.toLowerCase()) alert("lowercase letter");


 var num1 = +(prompt("Enter num 1: "));
 var num2 = +(prompt("Enter num 2: "));
 if (num1 === num2) alert("equal");
 else if (num1 > num2) alert(`${num1} is greater`);
 else if (num1 < num2) alert(`${num2} is greater`);


 let num = +(prompt("Enter num"));
 if (num > 0) alert("positive");
 else if (num < 0) alert("negative");
 else alert("number is 0");


 var strings = prompt("Enter char");
 var char = strings.charAt(0);
 if (
   char.toLowerCase() == "a" ||
   char.toLowerCase() == "e" ||
   char.toLowerCase() == "i" ||
   char.toLowerCase() == "o" ||
   char.toLowerCase() == "u"
 )
   alert(true);
 else alert(false);


 let pass = "arham ali";
 var userpass = prompt("enter pass");
 while (userpass == "") var userpass = prompt("Please enter your password");
 if (userpass == pass)
   alert("Correct! The password you entered matches the original password");
 else alert("Incorrect password");


 var greeting;
 var hour = 13;
 if (hour < 18) {
   greeting = "Good day";
 } else greeting = "Good evening";


 var time = +(prompt("Enter time: "));
 if (time >= 0000 && time <= 1200) alert("good morning");
 else if (time >= 1200 && time <= 1700) alert("good afternoon");
 else if (time >= 1700 && time <= 2100) alert("good evening");
 else if (time >= 2100 && time <= 2359) alert("good night");

                 //  CHAPTER NO 14 TO 16 

  var arr = new emptyarray();


 var names=[];

 var student=[];
 student[0]="arham";
 student[1]="saad";
 student[2]="hamza";

 console.table(student);


 var friends=[];
  friends=[54,67,43,34,546,456];
 console.log(friends);


 var boolarr =[true,false];
 console.log(boolarr);


 var mixedarr =["umar",746,true, "arham",9832,false];
 console.log(mixedarr);


   var education;
  education=[ "SSC", "HSC", "BCS","BS", "BCOM", "MS"," M. Phil ", "PhD" ];
  for (var i=0 ;i<education.length ; i++){
 document.write( i+")" +  education[i] +"<br>" );
  }


  var std = ["arham","umar","hunain"];
  var score = [300,200,400];
  for (i=0 ; i<3 ;i++){
      var percentage = score[i]/500 *100;
      document.write( "score of " + std[i] + " is " + score[i] + " . percentage: " + percentage + "% <br>"  );
 }

      
 var colornames=["red","green","blue"];
 alert(colornames );

 var ask_user_color_beginning = prompt("enter your color to add in first","your color is");
 colornames.unshift(ask_user_color_beginning);
 alert(colornames );

 var ask_user_color_end = prompt("enter your color to add in end","your color is");
 colornames.push(ask_user_color_end);
 alert(colornames );


 colornames.unshift("indigo","purple");
 alert(colornames );


 colornames.shift();
 alert(colornames );


 colornames.pop();
 alert(colornames );



 var ask_user_color_at_center_index = +prompt("enter your color index to add color in center ","your color index is");
 var ask_user_color_at_center = prompt("enter your color to add in center","your color is");

 colornames.splice(ask_user_color_at_center_index,0,ask_user_color_at_center);
 alert(colornames );


 var ask_user_delete_color_at_center_index = +prompt("enter your color index to delete color in center ","your color index is");
 var ask_user_delete_color_at_center = +prompt("how many colors you want to delete","your no is");
 colornames.splice(ask_user_delete_color_at_center_index,ask_user_delete_color_at_center);
 alert(colornames );


 var scores=[ 320 , 230 , 480 , 120];
 document.write("score of students : " + scores +"<br>" );
 scores.sort();
 document.write("ordered score of students : " + scores +"<br>" );


 var cities =["karachi "," lahore "," islamabad "," quetta "," peshawer "];
 document.write(cities + "<br>");
 var selected_cities = cities.slice(2,4);
 document.write(selected_cities);


 var arr = ["This", "is", "my", "cat"];
 var lol = arr.join(" ");
 console.log(lol);


 var stack = new Array();

 stack.push("first");
 stack.push("second");
 stack.push("third");
 alert(stack.shift());
 alert(stack.shift());
 alert(stack);


 var queue = new Array();
 queue.push("first");
 queue.push("second");
 queue.push("third");
 alert(queue.pop());
 alert(queue.pop());
 alert(queue);


 document.write(`<select name="mob" id="select"> </select> `);
 let select = document.getElementById("select");

 let options = ["Motorola", "Nokia", "Sony", "Samsung", "Haier", "Apple"];
 for (var i = 0; i < options.length; i++) {
   var opt = options[i];
   var el = document.createElement("option");
   el.textContent = opt;
   el.value = opt;
   select.appendChild(el);
 }
                       //  CHAPTER NO 17 TO 20
                     
 let emptyMultiDimentionalArray = [ [], [], []]
 console.log(emptyMultiDimentionalArray)


 let arrayOfMatrix = [
     [0,1,2,3],
     [1,0,1,2],
     [2,1,0,1]
 ]
 alert(arrayOfMatrix)


 function numericCounting(){
     for (let i = 1; i <= 10; i++ ){
         console.log(i)
     }
 }
 numericCounting();


 function Table(){
     let number = prompt('Enter the number..')
     let limit = prompt('Enter the limit..')

     for (let i = 1; i <= limit; i++){
         console.log(`${number} * ${i} = ${number * i}`)
     }
 }
 Table()


 let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberyy']
 console.log(fruits)

 for (let i = 0; i < fruits.length; i++){
     console.log(`Element at index ${i} is ${fruits[i]}`)
 }


 function Counting(limit){
     for (let i = 1; i <= limit; i++){
         console.log(i)
     }
  }
 Counting(15);

 function ReverseCounting(limit){
     for (let i = limit; i >= 1; i--){
         console.log(i)
     }
 }
 ReverseCounting(10);

 function even(limit){
     for (let i = 0; i <= limit; i++){
         if (i % 2 === 0){
             console.log(i)
         }
     }
 }

 even(10)


 function odd(limit){
     for (let i = 0; i <= limit; i++){
         if (i % 2 === 1){
             console.log(i)
         }
     }
 }

 odd(10)

 function evenWithK(limit){
     for (let i = 0; i <= limit; i++){
         if (i % 2 === 0){
             console.log(`${i}k`)
         }
     }
 }

 evenWithK(20)


 let bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

 let input = prompt('Enter item to Search..')

 if (bakery.includes(input)){
     console.log(`${input} is available in our bakery`)
 }
 else {
     console.log(`We are sorry ${input} is not available in our bakery`)
 }


 let numbers = [1,2,3,4,5,6]

 function Max(array){
     let firstNumber = array[0]
     for (let i = 1; i < array.length; i++ ){
         if (array[i] > firstNumber){
             firstNumber = array[i]
         }
     }
     return firstNumber
 }
 console.log(Max(numbers));


 function Min(array){
     let firstNumber = array[0]
     for (let i = 1; i < array.length; i++ ){
         if (array[i] < firstNumber){
             firstNumber = array[i]
         }
     }
     return firstNumber
 }
 console.log(Min(numbers));


 function MultiplesOf5(limit){
     for (let i = 1; i <= limit; i++){
         if (i % 5 === 0){
             console.log(i)
         }
     }
 }

 MultiplesOf5(100);
 }

             //  CHAPTER NO 21 TO 25


 var firstName = prompt("Write your first Name??");
 var lastName = prompt("Write your last Name??");
 var fullName = firstName + lastName;
 alert (` Welcome ${fullName}... \n Happy Coding ;)`);


 var mobileName = prompt("Hey! What is your favourite mobile phone model??");
 document.write(`My Favourite phone: ${mobileName} <br>`);
 document.write(`Length of String: ${mobileName.length}`)


 var string = "Pakistani";
 document.write(`String: ${string} <br>`);
 document.write(`Index of "n" : ${string.indexOf("n")}`);


 var string = "Hello World";
 document.write(`String: ${string} <br>`);
 document.write(`Last Index of "l" is : ${string.lastIndexOf("l")}`);


 var a = "Pakistani";
 document.write( `String: ${a} <br>`);
 document.write(`Character at index 3 : ${a[3]}`);


 var firstname = prompt("Enter your first name");
 var lastName = prompt("Enter your last name");
 var fullName = firstname.concat(lastName);
 alert(fullName);


 var a = "Hyderabad";
 document.write(`City: ${a} <br>`);
 document.write(`After Replacement: ${a.replace("Hyder" , "Islam")}`);


  var message = "Ali and Sami are best friends. \n They play cricket and football together."; 
  var a = message.replace("and" , "&");    
  document.write(a);


 var stringValue = "472";
 document.write(`Value: ${stringValue} <br>`);
 document.write(`Type: ${typeof(stringValue)} <br>`);
 var numericValue =  parseInt(stringValue);
 document.write(`Value: ${numericValue} <br>`);
 document.write(`Type: ${typeof(numericValue)} <br>`);


 var string = prompt("Enter a string");
 document.write(`User Input: ${string} <br>`);
 document.write(`Upper Case: ${string.toUpperCase(string)}`) ;


 var stringValue = prompt("Enter a string");
 document.write(`User Input: ${stringValue} <br>`);
 var titleCase = stringValue.slice(0,1).toUpperCase() + stringValue.slice(1,);
 document.write(`Title case: ${titleCase}`);


 var num = 35.36;
 document.write(`Number: ${num} <br>`);
 var string = num.toString();
 document.write(`Result: ${(num + '').replace('.' , '')}`);


 var name = prompt();
 var a = String.fromCharCode(64);
 var b = String.fromCharCode(46);
 var c = String.fromCharCode(44);
 var d = String.fromCharCode(33);
 if(user.match(a) || user.match(b) || user.match(c) || user.match(d)){
     alert("Plase Enter a valid Username");
 }
 else{
     alert("Hello" + user);
 }


 var user = prompt();
 var arr = ["apple pie" , "cake" , "cookie" , "chips" , "patties"];
 if(user === arr[0] || user === arr[1] || user === arr[2] || user === arr[3] || user === arr[4]){
     alert(user + " " + "is available at index of" + " " + arr.indexOf(user));
 }
 else{
     alert("not found");
 }


 var user = prompt("enter password");
 if (user.length < 6){
     alert("6 characters only");
 }
 else if(parseInt(user)){
     alert("wrong");
 }
 else{
     alert(user);
 }


     var university = "University  of  karachi";
     var a = university.split("");
     console.log(a[0]); 
     console.log(a[1]);
     console.log(a[2]);
     console.log(a[3]);
     console.log(a[4]);
     console.log(a[5]);
     console.log(a[6]);
     console.log(a[7]);
     console.log(a[8]);
     console.log(a[9]);
     console.log(a[10]);
     console.log(a[11]);
     console.log(a[12]);
     console.log(a[13]);
     console.log(a[14]);
     console.log(a[15]);
     console.log(a[16]);
     console.log(a[17]);
     console.log(a[18]);
     console.log(a[19]);
     console.log(a[20]);
     console.log(a[21]);
     console.log(a[22]);


     var a = "pakistan";
     var b = a[7];
     document.write(b);    
   

     var a = "the quick brown fox jumps over the lazy dog";
     alert(a.match(/the/g)).length;


                   //  CHAPTER NO 26 TO 30


 var a = +(prompt("Enter positive number"));
 document.write(a + "<br");
 var roundof = Math.round(a);
 document.write(roundof + "<br>");
 var floor = Math.floor(a);
 document.write(floor + "<br>");
 var ceil = Math.ceil(a);


     var a = parseInt(prompt("Enter negative number"));
     document.write(a + "<br");
     var roundof = Math.round(a);
     document.write(roundof + "<br>");
     var floor = Math.floor(a);
     document.write(floor + "<br>");
     var ceil = Math.ceil(a);


     var a = -4;
     var b = Math.abs(a);
     document.write(b);


     var diceRoll = Math.floor( Math.random() * 6 ) +1;
     document.write('You rolled a ' + diceRoll);


     var coin = Math.floor(Math.random()*2) +1;
     if(coin === 2){
         document.write("head");
     }
     else {
         document.write("tail");
     }


     var rendom = Math.floor(Math.random()*100);
     document.write("Rendom number between 1 to 100 is" + " " + rendom);


     var user = prompt("Enter your weight");
     document.write("Your weight is" + " " + user + "kilograms");


     var user = parseInt(prompt("Guess the secret number in 1 to 10"));
     var secNo = 6;
     if(user === secNo){
         alert("Congrulations");
     }
     else {
         alert("Sorry");
     }



                         //  CHAPTER NO 31 TO 34


     var a = new Date();
     document.write(a);    


     var a = new Date();
     a.setMonth(6);
     document.write(a);    


     var a = new Date();
     a.setDate(2);
     alert(a);


     var day = new Date().getDay();
     if(day === 0 || day === 7){
         alert("Its fun day");
     }
     else {
         alert("working day")
     }


    var a = new Date();
    var b = a.getDate();
    if (b <= 15){
        document.write("first fifteen days of the month");
    }
    else {
        document.write("last fifteen days of the month");
    }


     var current = new Date();
     document.write("current time" +" "+ current + "<br>");
     var minute = Math.round(current.getTime() / 1000);
     document.write("minute since 1, junuary, 1970" + " " + minute);


     var a = new Date().getHours();
     if(a === 0 || a < 12){
         alert("its AM");
     }   
     else if (a >= 12){
         alert("its PM");
     }


     var a = new Date();
     document.write(a + "<br>");
     var b = new Date();
     b.setMonth(11);
     b.setDate(31);
     document.write(b);


     var a = new Date();
     var aa = a.getTime();
     document.write(a + "<br>");
     var b = new Date("jun 18 , 2015");
     var bb = b.getTime();
     document.write(b + "<br>");
     var c = aa - bb;
     document.write(Math.floor(c / (1000*60*60*24)) + " " + "day have passed since 1st ramdan , 2015");


     var date = new Date();
     document.write(date + "</br>");
     var date1 = date.getTime();
     var last = new Date("jan 1 ,2015");
     document.write(last  + "</br>");
     var last1 = last.getTime();
     var a = date1 - last1;
     document.write(Math.floor(a / (1000)));


     var a = new Date();
     document.write(a + "</br>");
     var b = new Date();
     b.setHours(a.getHours()- 1);
     document.write(b);


     var a = new Date();
     document.write(a + "</br>");
     var c = new Date();
     c.setFullYear( a.getUTCFullYear() - 100);
     document.write(c);


     var user = parseInt(prompt("Enter your age"));
     document.write("Your age is" + " "+ user + "</br>");
     var a = new Date().getUTCFullYear();
     var b = a - user;
     alert("Your birthyear is" + " " + b);


     var a = prompt("Enter Your Name");
     var b = prompt("Name of Month");
     var c = parseInt(prompt("Numbers of Units?"));
     var d = parseInt(prompt("Charges per Units?"));
     document.write("K-Electric Bill" + "</br>");
     document.write("Customer Name :" + " " + a + "</br>");
     document.write("Name Of Month :" + " " + b + "</br>");
     document.write("Numbers of Units :" + " " + c + "</br>");
     document.write("Charges per Units :" + " " + d + "</br>");

    
     var f = 6560;
     var g = 6910;
     var e = g - f;
     document.write("Net Amount Payble (With Due Date) :" + " " + f + "</br>");
     document.write("Late Payment Surcharge :" + " " + e + "</br>");
     document.write("Gross Amount Payble (With Due Date) :" + " " + g);


                          //  CHAPTER NO 35 TO 38


     function a(){
         var b = new Date();
         document.write(b);
     }
     a();


     function c(){
         var a = prompt();
         var b = prompt();
         document.write("Hello" +" "+ a + b)
     }
     c();


     function a(){
         var b = parseInt(prompt("enter first number"));
         var c = parseInt(prompt("enter second number"));
         document.write(b + c);
     }   
     a();


     function a(num1 , ope , num2){
         var num1 = parseInt(prompt("enter first number"));
         ope = prompt("enter operator");
         var num2 = parseInt(prompt("enter second number"));
         if(ope === "-") {
             document.write(num1 - num2);
         }
         else if (ope === "+"){
             document.write(num1 + num2);
         }
         else if (ope === "*"){
             document.write(num1 * num2);
         }
         else if (ope === "/"){
             document.write(num1 / num2);
         }
     } 
     a();   


     function a(b){
         return 10;
     }
     alert(a());


     function factorial(n){
         if(n == 0 || n == 1){
             return 1;
         }else{
             return n * factorial(n-1);
         }
     }
     let n = 4;
     answer = factorial(n)
     console.log("The factorial of " + n + " is " + answer);


     function sum()
     {
         var FirstNumber = parseInt(prompt("Enter first number"));
         var SecondNumber = parseInt(prompt("Enter second number"));
         document.write(FirstNumber + SecondNumber);
          alert(parseInt(FirstNumber) + parseInt(SecondNumber));
     }
     sum();


     var base = parseInt(prompt("Enter Base"));    
     var perpendicular = parseInt(prompt("Enter Perpendicular")); 

     function hypotinous(){
         document.write("You enter Base is :" + " " + base + "</br>");
         document.write("You enter Perpendicular is :" + " " +perpendicular + "</br>");
         var a = base + perpendicular;
         document.write("Hypotinous =" +" "+  a + "</br>"); 
         document.write("</br>")
         function hypotinousSquare(){
             var b = base * base.valueOf();
             document.write("Base Square is :" + " " + b + "</br>");
             var c = perpendicular * perpendicular.valueOf();
             document.write("Perpendicular Square is :" + " " + c + "</br>");
             var d = a + b
             document.write("Hypotinous Square =" +" "+  d + "</br>"); 

  if you need only hypotinious square         

             document.write("Hypotinious square is :" + " " + a * a.valueOf());
         }
         hypotinousSquare();
     }  
     hypotinous();


     var length = prompt("Enter a whole number for the length of your rectangle.");
     var width = prompt ("Enter a whole number for the width of your rectangle.");

     function area (length, width) {
     return length * width;
     }

     console.log("The area of your rectangle is " + area);


     function palindrome(str) {
         var re = /[\W_]/g;
         var lowRegStr = str.toLowerCase().replace(re, '');
         var reverseStr = lowRegStr.split('').reverse().join(''); 
         return reverseStr === lowRegStr;
     }
     palindrome("A man, a plan, a canal. Panama");


     function uppercase(str)
     {
     var array1 = str.split(' ');
     var newarray1 = [];
        
     for(var x = 0; x < array1.length; x++){
         newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
     }
     return newarray1.join(' ');
     }
     console.log(uppercase("the quick brown fox"));


     function findLongestWord() {
         var str = document.getElementById('inputText').value;
         calculateLength(str);
     }
    
     function calculateLength(str) {
         var substring = str.split(" ");
         var minChar = '';
         for (var i = 0; i <= substring.length - 1; i++) {
         if (substring[i].length >= minChar.length) {
             minChar = substring[i];
         }
         }
         document.getElementById('longChar').innerHTML = 'Longest Word: ' + minChar;
         document.getElementById('longCharLength').innerHTML = 'Longest Word length: ' + minChar.length;
     }


     function char_count(str, letter) 
     {
      var letter_Count = 0;
      for (var position = 0; position < str.length; position++) 
      {
         if (str.charAt(position) == letter) 
           {
           letter_Count += 1;
           }
       }
       return letter_Count;
     }

     console.log(char_count('w3resource.com', 'o'));    


     function print() {
         var p = 
         document.createElement("p"),
         text = Array.prototype.join.call(arguments,",");
         p.textContent = text;
         document.getElementById("console").appendChild(p);
         return text;    
     }

     function CalculateCircumference() {
         var radius =
         parseInt(document.getElementById('txtRadius').value);String to Integer

         if (0 < radius)
             print("The circumference of the circle is " + (radius * 2 * Math.PI);
         else
             print("Error - radius must be a whole number greater than 0.");
         return false;
     }

     function CalculateArea() {
         var radius = 
         parseInt(document.getElementById('txtRadius').value); String to Integer

         if (0 < radius)
             print("The area of the circle is " + (radius * radius * Math.PI);
         else
             print("Error - radius must be a whole number greater than 0.");
         return false;
     }    


     function circle(radius)
     {
         this.radius = radius;
        area method
         this.area = function () 
         {
             return Math.PI * this.radius * this.radius;
         };
        perimeter method
         this.perimeter = function ()
         {
             return 2*Math.PI*this.radius;
         };
     }
     var c = new circle(3);
     console.log('Area =', c.area().toFixed(2));
     console.log('perimeter =', c.perimeter().toFixed(2));    


                          //  CHAPTER NO 38 TO 42


     function power(a,b) {
         alert("The value of a raised to b is "+Math.pow(a,b));
     }

     power(4,3);


     function leapyear(year)
     {
     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
     }
     console.log(leapyear(2016));
     console.log(leapyear(2000));
     console.log(leapyear(1700));
     console.log(leapyear(1800));
     console.log(leapyear(100));   


     var side1 = 5; 
     var side2 = 6; 
     var side3 = 7; 
     var perimeter = (side1 + side2 + side3)/2;
     var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
     console.log(area);    

    
     function main(){
         var subject1 = parseInt(prompt("English"));
         var subject2 = parseInt(prompt("Urdu"));
         var subject3 = parseInt(prompt("Maths"));
         document.write("English :" + " " + subject1 + "</br>");
         document.write("Urdu :" + " " + subject2 + "</br>");
         document.write("Maths :" + " " + subject3 + "</br>");

         function per(){
             var totalSubjects = subject1 + subject2 + subject3;
             document.write("Total :" + " " + totalSubjects + "</br>");
             var persentage = totalSubjects * 100 / 300;
             document.write("Persentage is : " + " " + Math.floor(persentage) + "</br>");
         }
         per();

         function ave(){
             var totalSubjects = subject1 + subject2 + subject3;
             var average = totalSubjects / 3;
             document.write("Average is : " + " " + Math.floor(average) + "</br>");
         }
         ave();

     } 
     main();

    
     var strings = ["bongo drums", "guitar", 
       "flute", "double bass", "xylophone","piano"];                          

        string = strings.map(x=>x.replace( /[aeiou]/g, '' ));              

       console.log(string);


     function findOccurrences() {
         var str = "Pleases read this application and give me gratuity";
         var count = 0;
         let haveSeenVowel = false;
    
         for (const letter of str.toLowerCase()) {
           switch (letter) {
             case 'a':
             case 'e':
             case 'i':
             case 'o':
             case 'u':
               {
                 if (haveSeenVowel) {
                   count++;
                   haveSeenVowel = false;
                 } else {
                   haveSeenVowel = true;
                 }
                 break;
               }
             default:
               haveSeenVowel = false
           }
         }
    
         return count
       }
    
       console.log(findOccurrences());


     var distance = parseInt(prompt("Enter Distance between two cities"));
     document.write("Distance between two cities is : " + " " + distance + "km" + "</br>");

     function meter(){
         var m = distance * 1000;
         document.write("Meter is :" + " " + m + "m" + "</br>");
     }
     meter();

     function feet(){
         var m = distance * 1000;
         var f = m.valueOf() * 3.2808399;
         document.write("Feet is :" + " " + f + "feet" + "</br>");
     }
     feet();

     function inch(){
         var m = distance * 1000;
         var f = m.valueOf() * 3.2808399;
         var inches = f.valueOf() * 12;
         document.write("Inches is :" + " " + inches + "Inches" + "</br>");
     }
     inch();
    
     function cen(){
         var m = distance * 1000;
         var f = m.valueOf() * 3.2808399;
         var inches = f.valueOf() * 12;
         var centi = inches.valueOf() * 2.54;
         document.write("Centimeter is :" + " " + centi + "Cm" + "</br>");
     }
     cen();


     function over(n){
         n-=40;
         let pay=12*n;
         console.log(pay);

     }


     function x(m){
     	let y=0;
     	while(m!=0){
     	   	if(m>=100){
                y+=100;
                console.log(y);
                m-=100;        
     	    }
     	    if(m>=50){
                y+=50;
                console.log(y);
                m-=50;
     	    }
     	    if(m>=10 && m<50){
     	    	y+=10;
     	    	console.log(y);
     	    	m-=10;
     	    }
     	}
     }

     x(470);


                        //  chapter 43-48


     function box(){
         alert();
     }
     box();


     function clickme(){
         alert("Thanks for purchasing a phone");
     }
     clickme();


     function delRow(o){
        var p =o.parentNode.parentNode;
        p.parentNode.removeChild(p);
     }
     delRow(o);
    

     var add = (function () {
         var counter = 0;
         return function () {counter += 1; return counter;}
       })();
    
       function myFunction(){
         document.getElementById("demo").innerHTML = add();
       }

  
                                 //  chapter 49-52


     function myfunction(){
         var name1 = document.getElementById("name1");
         document.write(name1.value + "</br>");
         var name2 = document.getElementById("name2");
         document.write(name2.value + "</br>");
         var email = document.getElementById("email");
         document.write(email.value + "</br>");
         var pass = document.getElementById("pass");
         document.write(pass.value + "</br>");
         var conPass = document.getElementById("conPass");
         document.write(conPass.value + "</br>");
     }
     myfunction();


     function myFunction() {
         var dots = document.getElementById("dots");
         var moreText = document.getElementById("more");
         var btnText = document.getElementById("myBtn");
    
         if (dots.style.display === "none") {
           dots.style.display = "inline";
           btnText.innerHTML = "Read more"; 
           moreText.style.display = "none";
         } else {
           dots.style.display = "none";
           btnText.innerHTML = "Read less"; 
           moreText.style.display = "inline";
         }
       }
       myFunction();


     function edit_row(no)
     {
      document.getElementById("edit_button"+no).style.display="none";
      document.getElementById("save_button"+no).style.display="block";
        
      var name=document.getElementById("name_row"+no);
      var country=document.getElementById("country_row"+no);
      var age=document.getElementById("age_row"+no);
        
      var name_data=name.innerHTML;
      var country_data=country.innerHTML;
      var age_data=age.innerHTML;
        
      name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
      country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
      age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
     }

     function save_row(no)
     {
      var name_val=document.getElementById("name_text"+no).value;
      var country_val=document.getElementById("country_text"+no).value;
      var age_val=document.getElementById("age_text"+no).value;

      document.getElementById("name_row"+no).innerHTML=name_val;
      document.getElementById("country_row"+no).innerHTML=country_val;
      document.getElementById("age_row"+no).innerHTML=age_val;

      document.getElementById("edit_button"+no).style.display="block";
      document.getElementById("save_button"+no).style.display="none";
     }

     function delete_row(no)
     {
      document.getElementById("row"+no+"").outerHTML="";
     }

     function add_row()
     {
      var new_name=document.getElementById("new_name").value;
      var new_country=document.getElementById("new_country").value;
      var new_age=document.getElementById("new_age").value;
        
      var table=document.getElementById("data_table");
      var table_len=(table.rows.length)-1;
      var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

      document.getElementById("new_name").value="";
      document.getElementById("new_country").value="";
      document.getElementById("new_age").value="";
     }

                      //  CHAPTER NO 53-57
    
 function showImg(e){
     var modalImg = document.getElementById("modalImg");
     modalImg.src = e.src;
 }

                       //  CHAPTER NO 58-67

 var a = document.getElementById("main-content");
        
 var b = document.getElementById("main-content").childNodes;
 console.log(b);
        
 var c = document.getElementById("render");
 console.log();
        
  
 var d = document.getElementById("first-name");
 var e = d.value = "myValue";
 console.log(e);


 var F = document.getElementById("last-name");
 var G = F.value = "myvalue";
 console.log(e);
        

 var a = document.getElementById("form-content").nodeType;

 console.log(a);
        


 var a = document.getElementById("last-name").nodeType;

 console.log(a);

 var b = document.getElementById("last-name").childNodes;

 console.log(b);
        

 2 p3

 var a = document.getElementById("last-name");

 var c = document.createTextNode("water")

 a.appendChild(c);

 console.log(a)



 var a = document.getElementById("main-content").firstElementChild;

 console.log(a);

 var a = document.getElementById("main-content").lastElementChild;

 console.log(a);    



 var a = document.getElementById("last-name");


 var b = a.nextElementSibling;

 console.log(b); 

 var c = a.previousElementSibling;

 console.log(c);    



 var a = document.getElementById("email");

 var  b = a.parentNode;

 console.log(b);

 var c = a.nodeType;

 console.log(c);     

 showImg();