let x=0;
//figure out how to fix adding operations after equals.
function insert(char){
  let p = document.getElementById("textview");
  let q = document.getElementById("storeddisplay");

  if(p.innerHTML=="0"){
    if(isNaN(char)==false){
      p.innerHTML = char;
    }else if(char=="+" || char=="*" || char=="/" || char=="-"){
      p.innerHTML == "0";
    }else if(char=="(" || char==")" || char=="."){
      p.innerHTML = char;
    }
  }else if(p.innerHTML!="0"){
    if(char=="+" && x==0 || char=="-" && x==0 || char=="*" && x==0 || char=="/" && x==0){
      q.innerHTML+=p.innerHTML.replace(",", "") + char;
      x=1;
    }else if(isNaN(char)==false && x==0){
      p.innerHTML+=char;
      x=0;
    }else if(char=="+" && x==1 || char=="-" && x==1 || char=="*" && x==1 || char=="/" && x==1){

    }else if(x==1){
      p.innerHTML=char;
      x=0;
    }else if(char == "."){
      p.innerHTML+=char;
    }
  }
}
function clr(){
  document.getElementById("textview").innerHTML=0;
  document.getElementById("storeddisplay").innerHTML="";
}
function equals(){
  let p = document.getElementById("textview");
  let q = document.getElementById("storeddisplay");
  q.innerHTML += p.innerHTML;
  let answer = eval(q.innerHTML);
  q.innerHTML += "=";
  p.innerHTML = answer.toLocaleString("en");
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
  if(contents.includes("-")){
    p.innerHTML=p.innerHTML.replace("(", "");
    p.innerHTML=p.innerHTML.replace(")", "");
    p.innerHTML=p.innerHTML.replace("-", "");
  }else if(contents.includes("-")==false){
    contents="(-" + contents + ")";
    p.innerHTML=contents;
  }
}
