document.addEventListener("DOMContentLoaded",()=>{

    const tabs=document.querySelectorAll(".tabs-title"),
        tabsContent=document.querySelectorAll(".tab-content"),
        tabsParent=document.querySelector(".tabs");

    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.style.display="none";
        });

        tabs.forEach(item=>{
            item.classList.remove("tabs-title.active")
        });
    }

    function showTabContent(i=0){
        tabsContent[i].style.display="block";
        tabs[i].classList.add("tabs-title.active");
    }
    hideTabContent();
    showTabContent();

tabsParent.addEventListener("click",(event)=>{
    const target=event.target;
    if(target && target.classList.contains("tabs-title")){
        tabs.forEach((item,i)=>{
            if (target==item){
                hideTabContent();
                showTabContent(i)
            }
        })
    }
})

})