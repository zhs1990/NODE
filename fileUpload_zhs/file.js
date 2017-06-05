let oFile = document.getElementById("file-area");

oFile.addEventListener("dragover",function(e){
    e.preventDefault();
});
oFile.addEventListener("drop",function(e){
    console.log(e);
    e.preventDefault();
    console.log(e.dataTransfer.file[0]);
});