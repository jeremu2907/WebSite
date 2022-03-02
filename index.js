function wait(){
    //adding a terminal line
    setTimeout(() => {
    document.getElementById("disp").innerHTML = "<br><m style='color: #96FF74'>me@MyWebSite</m>:<m style='color: #52B7E1 '>/JEREMY_NGUYEN</m>$ More about me and my projects on my <a href='https://www.linkedin.com/in/jeremu2907/' class='link'>LinkedIn</a> and <a href='https://github.com/jeremu2907' class='link2'>GitHub</a><br>";
    }, 10000);
    
    //Creating new terminal line
    setTimeout(() => {
        document.getElementById("animate").innerHTML = "<div class='typing intro'><m style='color: #96FF74'>me@MyWebSite</m>:<m style='color: #52B7E1 '>/JEREMY_NGUYEN</m>$ More about me and my projects on my<a href='https://www.linkedin.com/in/jeremu2907/' class='link'> LinkedIn</a> and <a href='https://github.com/jeremu2907' class='link2'>GitHub</a></div>"
    },4000);

    setTimeout(() => {
        document.getElementById("animate").innerHTML = "<div class='typing2 intro'><m style='color: #96FF74'>me@MyWebSite</m>:<m style='color: #52B7E1 ''>/JEREMY_NGUYEN</m>$ Email me at jeremu2907@gmail.com<div>"
    },10000)
}
wait();