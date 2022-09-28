const textarea=document.querySelector("textarea"),
filenameinput=document.querySelector(".file-name input"),
selectmenu=document.querySelector(".save-as select"),
savebtn=document.querySelector(".save-btn");
selectmenu.addEventListener("change",()=>{
   let selectedoption= selectmenu.options[selectmenu.selectedIndex].text;
   savebtn.innerText=`Save As ${selectedoption.split(" ")[0]} File`;
   
});
savebtn.addEventListener("click",()=>{
    const blob=new Blob([textarea.value], {type: selectmenu.value});
    const fileurl=URL.createObjectURL(blob);
    const link=document.createElement("a");
    link.download=filenameinput.value;
    link.href=fileurl;
    link.click();
    // console.log(blob);
});