export default(text,s1,s2) => {
   const ele = document.createElement("div");
   ele.innerHTML = text;
   ele.className = s1;

   const p = document.createElement("p");
   p.innerHTML = "8888888888";
   p.className = s2;

   ele.appendChild(p);
   //let a = 0;
   return ele;
}