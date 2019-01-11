//flag to see if an operator has been pressed
let x=0;
let y=0;
//figure out how to fix adding operations after equals.
function insert(char){
  //refers to my main display
  let p = document.getElementById("textview");
  //refers to my history display
  let q = document.getElementById("storeddisplay");
  if(p.innerHTML=="0"){
    if(isNaN(char)==false){
      p.innerHTML = char;
      y=0;
    }else if(char=="+" || char=="*" || char=="/" || char=="-"){
      p.innerHTML = "0";
      y=0;
    }else if(char=="(" || char==")" || char=="."){
      p.innerHTML = char;
      y=0;
    }
  }else if(p.innerHTML!="0"){
    if(char=="+" && x==0 || char=="-" && x==0 || char=="*" && x==0 || char=="/" && x==0){
      q.innerHTML+=p.innerHTML + char;
      x=1;
      y=0;
    }else if(isNaN(char)==false && x==0){
      p.innerHTML+=char;
      x=0;
      y=0;
    }else if(char=="+" && x==1 || char=="-" && x==1 || char=="*" && x==1 || char=="/" && x==1){
      y=0;
    }else if(x==1){
      p.innerHTML=char;
      x=0;
      y=0;
    }else if(char == "."){
      p.innerHTML+=char;
      y=0;
    }
  }
}
function clr(){
  document.getElementById("textview").innerHTML=0;
  document.getElementById("storeddisplay").innerHTML="";
  x=0;
}
function equals(){
  let p = document.getElementById("textview");
  let q = document.getElementById("storeddisplay");
  q.innerHTML+=p.innerHTML;
  let answer;
  if(x==0){
    answer = eval(q.innerHTML);
  }else{}

  if(x==1){
    p.innerHTML="Error";
  }else if(answer==Infinity || answer==-Infinity){
    p.innerHTML="Error";
  }else{
    p.innerHTML=answer.toLocaleString("en");
  }
  y=1;
  /*if(x==1){
    q.innerHTML=q.innerHTML;
  }else if(x==0){
    q.innerHTML+=p.innerHTML;
  }
  q.innerHTML += p.innerHTML;
  if(p.innerHTML=="Infinity" || p.innerHTML==="-Infinity") {
    p.innerHTML="Error";
  }else if(x==1){
    p.innerHTML="Error";
  }else if(isNaN(answer)==false){
    p.innerHTML=answer;
  }
  q.innerHTML += "=";
  p.innerHTML = p.innerHTML.toLocaleString("en");*/
}
function posneg(){
  /*let parentheses=[]
  let p = document.getElementById("textview");
  let contents = p.innerHTML;
  if(contents.includes("-")){
    for(let i=0;i<contents.length;i++){
      if(contents[i]=="(" || contents[i]==")"){
        parentheses.push(i);
      }else if(isNaN(contents[i])==false){
        parentheses.push("marker");
      }
    }
    let substring = contents.substr(parentheses[parentheses.indexOf("marker")-1], parentheses[parentheses.lastIndexOf("marker")+1]);
    let substring2=substring.replace("(-", "");
    substring2=substring2.replace(")", "");
    p.innerHTML=contents.replace(substring, substring2);
  }else if(contents.includes("-")==false && contents.includes("(")){
    for(let i=0;i<contents.length;i++){
      if(contents[i]=="("){
        parentheses.push(i);
      }else if(isNaN(contents[i])==false){
        parentheses.push("marker");
      }
    }
    let substring = contents.substr(parentheses[parentheses.indexOf("marker")-1]+1);
    p.innerHTML=contents.replace(substring, "");
    substring = "(-" + substring + ")";
    p.innerHTML+=substring;
  }else if(contents.includes("-")==false && contents.includes("(")==false || contents.includes("-")==false && contents.includes(")")==false){
    p.innerHTML = "(-" + contents + ")";
  }*/
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
let z = 0;
function percent(){
  let p = document.getElementById("textview");
  let value = Number(p.innerHTML);
  if(x==0){
    let percentValue = value/100;
    p.innerHTML = percentValue;
    x=1;
  }else if(x==1){
    let newValue=value*100;
    p.innerHTML=newValue;
    x=0;
  }
}
