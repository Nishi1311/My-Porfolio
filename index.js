const p_btns=document.querySelector(".p-btns");
const p_btn=document.querySelectorAll(".p-btn");
const img_overlay=document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e)=>{
    const p_btn_clicked= e.target;
    console.log(p_btn_clicked);
    
    p_btn.forEach((a)=>a.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");
    

    // to find the no in data atribute;
   const p_btn_num= p_btn_clicked.dataset.btnNum;
   console.log(p_btn_num);
   
   const img_active= document.querySelectorAll(`.p-btn--${p_btn_num}`);
   img_overlay.forEach((a)=>a.classList.add("p-image-not-active"));
   img_active.forEach((a)=>a.classList.remove("p-image-not-active"));


});
/*
const service_card=document.querySelectorAll(".abc");
service_card.addEventListener("click", (e)=>{
    const service_card_clicked= e.target;
    console.log(service_card_clicked);
    service_card.forEach((a)=>a.classList.remove("service-card-active"));
    service_card_clicked.classList.add("service-card-active");
});*/

