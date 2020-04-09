// // let name="john";
// // let admin;
// // name=admin;
// // alert("admin");
// let age = prompt("how old are you?")
// if (age > 33) {
//     alert("accept")}
// else {alert("dont accept")}

// let ul = document.getElementsByClassName(".throt").classList.add('active');
// // function funct() {
// //     let ul = document.getElementsByClassName(".throt");
// //     ul.classList.toggle("active")
// // }
// let li = document.getElementsByClassName(".click")
// document.getElementById('id').classList.add('class'

// document.querySelector(".menu").addEventListener("click", function(){
//         var a= this.childNodes[1].childNodes[1];
//         console.log(a);
//         // this.childNodes[1].classList.toggle("throt");
// })
// var a = document.querySelectorAll(".menu");
// for (var i = 0; i < a.length; i++) {
//     a[i].addEventListener("click", function () {
//         this.childNodes.classList.toggle(".active");
//     })
// }

// document.querySelector(".menu").addEventListener("click", function () {
//     document.querySelector(".box").classList.toggle("active");

// })

// .addEventListener("click", function () {
//     document.querySelectorAll("box").classList.toggle("active")
// })

// function plus() {
//     var n1 = document.getElementById("n1").value;

//     var n2 = document.getElementById("n2").value;

//     n1 = parseInt(n1);
//     n2 = parseInt(n2);
//     var result = n1 + n2;
//     document.getElementById("result").innerHTML = result;


// }
// function minus() {
//     var n1 = document.getElementById("n1").value;

//     var n2 = document.getElementById("n2").value;

//     n1 = parseInt(n1);
//     n2 = parseInt(n2);
//     var result = n1 - n2;
//     var res = "Result: "
//     document.getElementById("result").innerHTML = res + result;


// }


// ===============random========

// var math, randomP;
// math = Math.floor((Math.random() * 10) + 1);
// randomP = document.getElementById("randomP");
// randomP.innerHTML = math

// function f1() {
//     var out = document.getElementById("out")
//     var random = document.getElementById("random").value;
//     if (random > math) {
//         out.innerHTML = "higher value"
//     }
//     else if (random < math) {
//         out.innerHTML = "lower value"
//     }
//     else { out.innerHTML = "equal value" }
// };

// =======================dovr cikl============

// var p,button;
// p = document.getElementById("show");
// button = document.getElementById("button").addEventListener("click" , function(){

//     for( var i =0; i < 100; i++){
//         p.innerHTML +=i + " ";
//     }
// }
// ) 
// var numberVar,stringVar ,booleanVar;
// numberVar = 69;
// stringVar = "hello";
// booleanVar = true;
// console.log(booleanVar);
// alert(stringVar)

// var currentYear,question,year;
// currentYear = 2020;
// question = prompt("What is your name");
// year = prompt("when you were born");
// alert(question + " you are " + ( currentYear - year) + " old");
// function myFunction() {
//     var money = "azn",
//         question = prompt("Nece manat isderdiniz");
//     questionTwo = prompt(question + money + " nece faizini isdeyirsiniz?");
//     result = question * questionTwo / 100;

//     question += money;
//     questionTwo += "%";
//     result = question + " nin" + questionTwo + " i" + result + money;
//     alert(result)
// }
// var countries = ["russia", "austria", "poland", "latuia", "czech"],
//     population = [142, 9, 38, 2, 11],
//     mln = "mln",
//     p = document.getElementById("population"),
//     list = [countries[0] + " - " + population[0] + mln,
//     countries[1] + " - " + population[1] + mln,
//     countries[2] + " - " + population[2] + mln,
//     countries[3] + " - " + population[3] + mln,
//     countries[4] + " - " + population[4] + mln];


// p.innerHTML = (countries[0] + " - " + population[0] + mln + "<br>" +
// countries[1] + " - " + population[1] + mln + "<br>" +
// countries[2] + " - " + population[2] + mln + "<br>" +
// countries[3] + " - " + population[3] + mln + "<br>" +
// countries[4] + " - " + population[4] + mln + "<br>" 

// )



// var days = '';
// var text = '';
// var note = [];
// var i = 1;
// var form = document.getElementById("form");

// function btnClick() {
//     days = form.days.value;
//     text = form.text.value;
//     note.push("<tr><td>" + i + "gundelik :" + days + "<br>" + text);
//     i++;
//     form.reset();


// };
// function btnShowClick() {
//     var last = document.getElementById("showResult");
//     last.innerHTML = note.join();
// }

// var myObject = {
//     "name": "pozdravlenie",
//     "month": [
//         "yanvar",
//         "fevral",
//         "mart"
//     ],
//     "random array": [
//         5,
//         true,
//         {
//             year: 2018,
//             number: 8
//         },
//         12,

//     ],
//     "year array": [
//         2017,
//         2018
//     ]
// };
// myObject.phrase = "s prazdnikom";
// myObject.month[2] = 'mart !';
// console.log(myObject.month[2]);
// var cong = myObject.phrase + ' ' + myObject["random array"][2].number + ' ' + myObject.month[2];
// console.log(cong);

// var number = document.getElementById("number");
// document.getElementById("bt-1").addEventListener("click", function () {
//     var in1 = +document.getElementById("in-1").value;

//     var show = document.getElementById("showw");
//     if (isNaN(in1)) {
//         show.innerHTML = "yalniz reqem"
//     }
//     else if (in1 < 0) { show.innerHTML = "menfi olmaz" }




//     for (var i = 1; i * i <= in1; i++) {
//         var last = i * i
//         if (last === in1) {
//             show.innerHTML = i;
//         }
//         //     else if (in1 != isNaN()) {
//         //         show.innerHTML = "yalniz reqem";
//         // }
//         else {
//             show.innerHTML = "bu ede hec bir ededin kvadradi deyil";
//         }

//     }




// });

// var cars = ['bmw', 'mercedes', 'opel', 'mazda', 1];
// console.log(cars.push('renault'));
// console.log(cars);
// cars.unshift("kamaz");
// cars.shift("kamaz");
// cars.pop("renault");
// cars.sort();
// console.log(cars);




// function Rectangle(character = '#', height = 7) {
//     var result = '';
//     for (var i = 0; i < height; i++) {
//         var str = '';
//         for (var j = 0; j <= i; j++)
//             str += character;

//         result += str;
//         result += '\n';
//     }

//     return result;
//     console.log(result);
// }
// var aracBilgisi = {
//     id: "bmw347253_mlg",
//     model: "bmw",
//     yil: 2015,
//     reng: "beyaz",
//     servis: [{
//         id: "bmw347253_mlg_1",
//         tarih: "20.02.2019",
//         km: "12300",
//         ucret: "230",
//         detay: {

//         }

//     },
//     {
//         id: "bmw347253_mlg_2",
//         tarih: "20.02.2019",
//         km: "12300",
//         ucret: "230",
//     }]
// };

// document.getElementById("taskB3").addEventListener("click" ,function(){
//     var input3 = document.getElementById("task3").value;
//     var show3=document.getElementById("showTask3");
//     for( var i=2; i<input3;i++ ){
//       var mat=input3/i;
//       if(Number.isInteger (mat)){
//          show3.innerHTML = "bu eded murekkebdri";
//           break;
//       }
//       else{ show3.innerHTML = "bu eded sadedir";}
//     }
// })
document.getElementById("taskB3").addEventListener("click", function () {
    show3 = document.getElementById('showTask3');
    var number = Number(document.getElementById("task3").value);
    var number1 = number; //5985=5985
    var array = [];//0+5
    // for(var i =0; i<number1.toString().length; i++){//i<4
    // //     var mod = number%10;// 5=5985%10 598%10=8
    // //     array.push(mod);//5,8
    // //     number=(number-mod)/10;//(5985-5)/10=598 / (598-8)/10=59
    // //     console.log(mod);
    // // }


    for (var i = 0; i < number1.toString().length; i++) {
        var mod = number % 10;
        array.push(mod);
        number = (number - mod) / 10;

    };
    console.log(array);
    console.log("----------------------");

    var order = [];
    var arrayL = array;
    for(var j=0; j<arrayL.length;){


        var min = array[0];
        for (var i = 0; i < arrayL.length; i++) {

            if (min > array[i]) {
                min = array[i];
            };
        }
        order.push(min);
        array.splice(array.indexOf(min));
        console.log(order);

    }
    



})






