var ph=["./img1.jpg","./img2.jpg","./img3.jpg","./img4.jpg"];
var imgtag=document.querySelector(".imgcls");
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
var press=document.querySelector(".btn");
press[0].addEventListener("click",funution PLAY); 

functoin PLAY()
{
    var aud=document.querySelector("#audio");
    aud.play();
}
