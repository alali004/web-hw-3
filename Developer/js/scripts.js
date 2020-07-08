//السؤال الأول
const lang=["HTMl","CSS","javascript","c++","java","python"];
const reqlang= lang[0];
console.log("مرحبا بك في برنامج توظيف المبرمجين");

let name=prompt("ما إسمك؟");
let age=parseInt(prompt ("كم عمرك؟"));
let experience=parseInt(prompt("كم سنة من الخبرة لديك؟"));

console.log(":لغات البرمجة");
console.log("0."+lang[0]);
console.log("1."+lang[1]);
console.log("2."+lang[2]);
console.log("3."+lang[3]);
console.log("4. "+lang[4]);
console.log("5. "+lang[5]);

let pro=prompt("اختر الغة");
let pro2=prompt("اختر لغة اخرى");

if ((age > 25 && age < 40) && 
experience > 3 &&
 (pro==reqlang || pro2==reqlang)){
console.log("مقبول");
}else{
console.log("مرفوض");
}

//السؤال الثاني--------------------
function logger (feh_temp) {
    for (let i = 0; i < feh_temp.length; i++){
        console.log(feh_temp[i]);
    }
}

let input_array=[32 , 70 , 99, 106];
let result_array=[];

let feh_temp = [32 , 70 , 99, 106];

function toCel(feh_temp){
    for (let i = 0; i < feh_temp; i++){
        result_array.push(input_array[i] - 32) * (5 / 9);
    }
    return result_array;
}
console.log(toCel(input_array));

let hot=[]
let min_value= 30;
function HottestDays(result_array,min_value ){
   for(let i = 0; i < result_array; i++){
     if(result_array[i] > min_value){
         hot.push(result_array[i]);
     }
   }
   return hot;
}
console.log(HottestDays(result_array, min_value ));
