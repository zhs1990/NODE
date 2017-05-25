let add = (test) => console.log(test);
let oH3 = document.getElementsByTagName("h3")[0];
oH3.onclick = function(){
    oH3.innerHTML = "变了吗？";
};
add(oH3.innerHTML);
console.log("main.js");
