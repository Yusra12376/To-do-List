let enter = document.querySelector("#enter");
let add = document.querySelector("#btn");
let remove= document.querySelector("#btnn");
let list= document.querySelector("#div");


let todo=()=>{
   let input =enter.value.trim();
   if(input==""){
      return;  // do nothing (enter.value.trim()=="")
   }
  let div=document.createElement("div");
    div.style.height="50spx";
   div.style.width="800px";
   div.style.marginLeft="15px";
    div.style.marginTop="13px";
   //  div.style.overflow="auto";


   let spann= document.createElement("span");
   spann.innerText=input;
    spann.style.fontSize="1.3rem";
     spann.style.marginLeft="2px";
  
   

   let done= document.createElement("button");
  done.innerText="Done";
     done.style.height="2.3rem";
   done.style.width="4.3rem";
   done.style.borderRadius="2rem";
   done.style. border="none";
    done.style.marginLeft="0.7rem";

  done.addEventListener("click",()=>{
   spann.style.textDecoration="line-through";
   spann.style.color="black";
  })


   let delet=document.createElement("button");
   delet.innerText="Delete";
   delet.style.height="2.3rem";
   delet.style.width="4.3rem";
   delet.style.borderRadius="2rem";
    delet.style.border="none";
     done.style.marginRight="0.7rem";

   delet.addEventListener("click",()=>{
     div.remove();
   });
div.append(spann,done,delet);
list.append(div);
}
add.addEventListener("click",todo);

remove.addEventListener("click",()=>{
   enter.setAttribute("Placeholder","Enter your....");
   enter.value="";
})
