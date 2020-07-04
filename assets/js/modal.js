var modal = document.getElementById("my-modal");
var modalLink = document.getElementById("gradesModal");
var closeBtn = document.querySelector(".close");

modalLink.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',outClick);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}
 
function outClick(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
}