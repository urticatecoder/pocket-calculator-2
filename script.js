//flag to see if an operator has been pressed
let x=0;
//flag to see if equals has been pressed
let y=0;
//flag to see if it is in scientific notation
let w=0;
//figure out how to fix adding operations after equals.
function insert(char){
  let p = document.getElementById("textview");
  let q = document.getElementById("storeddisplay");
  if(String(p.innerHTML).includes("+21")){
    p.innerHTML = "Error: Overflow";
    console.log("thing");
  }
  //if 0 is in the textview
  if(p.innerHTML=="0"){
    //if you press a number and you have not just hit equals
    if(isNaN(char)==false && y==0){
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      p.innerHTML = char;
      p.innerHTML = Number(p.innerHTML).toLocaleString("en");
      y=0;
      console.log("1")
    //if you press an operator and 0 is in textview and you have not just hit equals
    }else if(char=="+" && y==0 || char=="*" && y==0 || char=="/" && y==0 || char=="-" && y==0){
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      p.innerHTML = "0";
      p.innerHTML = Number(p.innerHTML).toLocaleString("en");
      y=0;
      console.log("2")
    //if you press the decimal point and have not just hit equals
    }else if(char=="." && y==0){
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      p.innerHTML = char;
      y=0;
      console.log("3")
    //if you have just hit equals and you press an operator
    }else if(y==1 && char=="+" || char == "-" && y==1 || char=="*" && y==1 ||char=="/" && y==1){
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      q.innerHTML=p.innerHTML + char;
      p.innerHTML = Number(p.innerHTML).toLocaleString("en");
      y=0
      x=1
      console.log("4")
    //if you have just hit equals and you press a number
    }else if(y==1 && isNaN(char)==false){
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      q.innerHTML = "";
      p.innerHTML = char
      p.innerHTML = Number(p.innerHTML).toLocaleString("en");
      y=0;
      x=0;
      console.log("5")
    }
  //if what's in textview is not 0
  }else if(p.innerHTML!="0"){
    //if you press an operator and have not just pressed an operator and have not just pressed equals
    if(char=="+" && x==0 && y==0 || char=="-" && x==0 && y==0 || char=="*" && x==0 && y==0 || char=="/" && x==0 && y==0){
      q.innerHTML+=p.innerHTML.replace(/,/g, "") + char;
      x=1;
      y=0;
      console.log("6")
    //if you press a number and have not just pressed an operator and have not just pressed equals
  }else if(isNaN(char)==false && x==0 && y==0 && p.innerHTML.includes(".")==false && p.innerHTML!="Error: Overflow" && p.innerHTML!="3.1415926"){
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      p.innerHTML+=char;
      p.innerHTML = Number(p.innerHTML).toLocaleString("en");
      x=0;
      y=0;
      console.log("7")
    //if you press an operator and have just pressed an operator and have not just pressed equals
    }else if(char=="+" && x==1 && y==0 && p.innerHTML.includes(".")==false|| char=="-" && x==1 && y==0 && p.innerHTML.includes(".")==false|| char=="*" && x==1 && y==0 && p.innerHTML.includes(".")==false|| char=="/" && x==1 && y==0 && p.innerHTML.includes(".")==false){
      console.log(q.innerHTML[q.innerHTML.length-1]);
      q.innerHTML=q.innerHTML.replace(q.innerHTML[q.innerHTML.length-1], char);
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      p.innerHTML = Number(p.innerHTML).toLocaleString("en");
      y=0;
      console.log("8")
    //if you press anything and have just pressed an operator and have not just pressed equals
    }else if(x==1 && y==0 && char!="." && char!= "+" && char!="-" && char!="*" && char!="/"){
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      p.innerHTML=char;
      p.innerHTML = Number(p.innerHTML).toLocaleString("en");
      x=0;
      y=0;
      console.log("9")
    //if you press the decimal point and have not just pressed equals
    }else if(x==1 && y==0 && char=="."){
      p.innerHTML=char;
      y=0;
      x=0;
      console.log("10")
    }else if(char == "." && y==0 && p.innerHTML.includes(".")==false){
      p.innerHTML+=char;
      y=0;
      x=0;
      console.log("11")
    //if you have just pressed equals and you press an operator
    }else if(y==1 && char=="+" || char == "-" && y==1 || char=="*" && y==1 ||char=="/" && y==1){
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      q.innerHTML=p.innerHTML + char;
      p.innerHTML = Number(p.innerHTML).toLocaleString("en");
      y=0
      x=1
      console.log("12")
    //if you have just pressed equals and you press a number
    }else if(y==1 && isNaN(char)==false){
      p.innerHTML = p.innerHTML.replace(/,/g, "");
      q.innerHTML = "";
      p.innerHTML = char
      p.innerHTML = Number(p.innerHTML).toLocaleString("en");
      y=0;
      x=0;
      console.log("13")
    }else if(p.innerHTML.includes(".") && char!="+" && char!="-" && char!="/" && char!="*" && p.innerHTML.includes("e")==false && char!="." && p.innerHTML!=3.1415926){
      p.innerHTML+=char;
      x=0;
      y=0;
      console.log("14")
    }else if(p.innerHTML.includes("e+") && isNaN(char)==false && p.innerHTML!="Error: Overflow" && p.innerHTML!="1.00000e+0"){
      let substring = p.innerHTML.substr(p.innerHTML.indexOf("+"));
      if(Number(substring)>=9){
        p.innerHTML=p.innerHTML.replace(substring, "");
        substring=Number(substring);
        substring++;
        p.innerHTML+=substring;
      }
      //p.innerHTML= Number(String(Number(p.innerHTML)) + char).toExponential();
      x=0;
      y=0;
      console.log(Number(p.innerHTML));
    }else if(p.innerHTML == "Error: Overflow"){
      p.innerHTML = p.innerHTML;
    }else if(p.innerHTML.includes("e-") && char==9){
      p.innerHTML = p.innerHTML;
    }
  }
  let contents=String(p.innerHTML);
  if((contents.replace(/,/g, "")).length>9 && contents!="Error: Overflow"){
    p.innerHTML = Number(contents.replace(/,/g, "")).toExponential(5);
  }
}
function clr(){
  document.getElementById("textview").innerHTML=0;
  document.getElementById("storeddisplay").innerHTML="";
  x=0;
  y=0;
}
function equals(){
  let p = document.getElementById("textview");
  let q = document.getElementById("storeddisplay");
  if (y==0){
    if(p.innerHTML!="0" && q.innerHTML.includes("/")==false){
      q.innerHTML+=p.innerHTML.replace(/,/g, "");
    }else if(p.innerHTML == "0" && q.innerHTML.includes("/")){
      q.innerHTML+=p.innerHTML.replace(/,/g, "");
    }else if(p.innerHTML != "0" && q.innerHTML.includes("/")){
      q.innerHTML+=p.innerHTML.replace(/,/g, "");
    }
    let answer;
    if(x==0 && p.innerHTML!="0"){
      answer = eval(q.innerHTML);
    }else if(p.innerHTML == "0" && q.innerHTML.includes("/")==false){
      answer = 0;
    }else if(p.innerHTML == "0" && q.innerHTML.includes("/")){
      answer = eval(q.innerHTML);
    }else{}
    console.log(answer);
    if(x==1){
      p.innerHTML="Error";
    }else if(answer==Infinity || answer==-Infinity){
      p.innerHTML="Error";
    }else if(isNaN(answer)){
      p.innerHTML="Error";
    }else if(String(answer).includes(".")){
      console.log(answer);
      let substring = String(answer).substr(String(answer).indexOf("."));
      p.innerHTML = Number(String(answer).replace(substring, "")).toLocaleString("en");
      p.innerHTML += substring;
    }else{
      p.innerHTML = answer.toLocaleString("en");
    }
    let contents=String(p.innerHTML);
    if((contents.replace(/,/g, "")).length>9){
      p.innerHTML = Number(contents.replace(/,/g, "")).toExponential(5);
    }
    y=1;
  }else if(y==1){

  }
}
function posneg(){
  let p = document.getElementById("textview")
  let contents=p.innerHTML;
  if (p.innerHTML == "0"){

  }else if(p.innerHTML!="0"){
    if(contents.includes("-")){
      p.innerHTML=p.innerHTML.replace("(", "");
      p.innerHTML=p.innerHTML.replace(")", "");
      p.innerHTML=p.innerHTML.replace("-", "");
    }else if(contents.includes("-")==false){
      contents="(-" + contents + ")";
      p.innerHTML=contents;
    }
  }
}
function percent(){
  let p = document.getElementById("textview");
  let value = Number(p.innerHTML);
  let contentsWithoutParentheses;
  if(p.innerHTML.includes("-")){
    contentsWithoutParentheses = p.innerHTML.replace(/[{()}]/g, '');
    contentsWithoutParentheses = contentsWithoutParentheses.replace("-", "");
  }
  if(p.innerHTML.includes("-")){
    let percentValue = Number(contentsWithoutParentheses) / 100;
    p.innerHTML = "(-" + percentValue + ")";
  }else{
    p.innerHTML = Number(p.innerHTML)/100
  }
}

function niceToHave(value){
  let p = document.getElementById("textview");
  let q = document.getElementById("storeddisplay");
    if(value=="Math.PI" && x==1 || value=="Math.PI" && p.innerHTML=="0"){
      p.innerHTML = 3.1415926
      x=0;
      y=0;
    }else if(value=="!" && x==0){
      let contents = Number(p.innerHTML);
      for (let i=contents-1; i>0; i--){
        contents=contents*i;
      }
      console.log(contents);
      p.innerHTML=contents;
      if(String(p.innerHTML).length > 9){
        p.innerHTML=Number(p.innerHTML).toExponential(5);
      }
      x=0;
      y=0;
    }else if(value=="tan" && x==0){
      let contents=Number(p.innerHTML);
      contents=Math.tan(contents);
      p.innerHTML=contents.toFixed(5);
    }else if(value=="cos" && x==0){
      let contents=Number(p.innerHTML);
      contents=Math.cos(contents);
      p.innerHTML=contents.toFixed(5);
    }else if(value=="sin" && x==0){
      let contents=Number(p.innerHTML);
      contents=Math.sin(contents);
      p.innerHTML=contents.toFixed(5);
    }else if(value=="squared" && x==0){
      let contents=Number(p.innerHTML);
      contents=contents**2;
      p.innerHTML=contents;
    }else if(value=="cubed" && x==0){
      let contents=Number(p.innerHTML);
      contents=contents**3;
      p.innerHTML=contents;
    }else if(value=="sqrt" && x==0){
      let contents=Number(p.innerHTML);
      contents=Math.sqrt(contents);
      p.innerHTML=contents;
    }else if(value=="cbrt" && x==0){
      let contents=Number(p.innerHTML);
      contents=Math.cbrt(contents);
      p.innerHTML=contents;
    }
}
