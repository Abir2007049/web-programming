
var imgtag=document.querySelector(".imgcls");
let ph=["./img1.jpg","./img2.jpg","./img3.jpg"];
var cnt=0;
 
function next()
{   cnt++;
    if(cnt>=ph.length)
    {
        cnt=0;
        imgtag.src=ph[cnt];
    }
    else{
    imgtag.src=ph[cnt];
    }

}
function prev()
{
    cnt--;
    if(cnt<0)
    {
        cnt=ph.length - 1;
        imgtag.src=ph[cnt];
    
    }
    else{
    imgtag.src=ph[cnt];
    }

}
function submitMsg()
{
    alert("Informations are submitted");
}
