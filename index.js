

//For Mobile need to create a hamburger menu in the navbar with only contact me button

//For tablet normal navbar but the photo will be in the middle and the content around it.

document.querySelector("#betterCloudProjectDeployment").addEventListener("click",()=>{redirect(3)});
document.querySelector("#pharmEasyProjectDeployment").addEventListener("click",()=>{redirect(2)});
document.querySelector("#pharmEasyProjectGithub").addEventListener("click",()=>{redirect(23)});
document.querySelector("#betterCloudProjectGithub").addEventListener("click",()=>{redirect(33)});
document.querySelector("#betterCloudProjectGithubB").addEventListener("click",()=>{redirect(33)});
document.querySelector("#betterCloudProjectDeploymentB").addEventListener("click",()=>{redirect(3)});
document.querySelector("#pharmEasyProjectDeploymentB").addEventListener("click",()=>{redirect(2)});
document.querySelector("#pharmEasyProjectGithubB").addEventListener("click",()=>{redirect(23)});


function redirect(no){
    if(no == 3){
        window.open("https://legendary-dango-0ff999.netlify.app");
    }else if(no == 2){
        window.open("https://delicate-clafoutis-55a663.netlify.app");
    }else if(no == 23){
        window.open("https://github.com/Rohit-M-Roy/PharmEasy-Clone");
    }else if(no == 33){
        window.open("https://github.com/Rohit-M-Roy/peaceful-bomb-7093");
    }
    
}

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

let hamburgerButton = document.getElementById('nav-icon1');
let responsiveMenu = document.getElementById('dropdownMenu');

hamburgerButton.addEventListener('click', () => {
  responsiveMenu.classList.toggle('expand');
});

GitHubCalendar(".calendar", "Rohit-M-Roy", { responsive: true });