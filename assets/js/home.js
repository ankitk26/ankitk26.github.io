var homebtn = document.getElementById("toTop");
window.addEventListener('scroll',scrollUp);
homebtn.addEventListener('click',toHome)

function scrollUp(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    homebtn.style.display = 'block';
  }
  else{
    homebtn.style.display = 'none';
  }
}

function toHome(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}