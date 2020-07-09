const termsAndConditionBtn = document.querySelector(".container button");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const checkBox = document.querySelector(".user-action input");
const submitBtn = document.querySelector(".user-action button");

termsAndConditionBtn.addEventListener("click", (event) => {
  backdrop.classList.toggle("visible");
  modal.classList.toggle("visible");
  checkBox.checked=false;
  modal.scrollTo(0,0);
});

modal.addEventListener("scroll", (event) => {
  if (
    event.target.scrollHeight - event.target.scrollTop ===
    event.target.clientHeight
  ) {
    checkBox.disabled = false;
    submitBtn.disabled = false;
  } else {
    checkBox.disabled = true;
    submitBtn.disabled = true;
  }
});

submitBtn.addEventListener("click",(event)=>{
    if(checkBox.checked){
        backdrop.classList.toggle("visible");
        modal.classList.toggle("visible");
    }else{
        alert("Please ✔ I Agree field!")
    }
})