document.addEventListener("DOMContentLoaded",()=>{

    const tabs=document.querySelectorAll(".tabs-title"),
        tabsContent=document.querySelectorAll(".tab-content"),
        tabsParent=document.querySelector(".tabs");


tabsParent.addEventListener("click",(event)=>{
    const target=event.target;
    tabs.forEach((item,index)=>{
        item.classList.remove("active")

        tabsContent[index].classList[target.dataset.title === tabsContent[index].dataset.content ? 'add' : 'remove']('active');
    })
    target.classList.add("active");

   /* tabsContent.forEach(item=>{
        if(target.dataset.title===item.dataset.content){
            item.classList.add("active")
        }else {
            item.classList.remove("active")
        }
    })*/


})

})