let count=0;
function teste(){
    document.querySelector(".caixa").style.display="block";
    count+=1;
    if(count==2)
    {
        document.querySelector(".caixa").style.display="none";
        count=0
    }
}