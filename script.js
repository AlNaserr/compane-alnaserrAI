const allLinks =document.querySelectorAll(".tabs a")
const allTabs =document.querySelectorAll(".tab-content")

allLinks.forEach((elem) =>{
    elem.addEventListener("click", function(){
        const linkID=elem.id;
        const hrefLinkClick=elem.href;

        allLinks.forEach((link) =>{
            if( link.href==hrefLinkClick){
                link.classList.add("active");
            }else{
                link.classList.remove("active")
            }
        });
allTabs.forEach((tap)=>{
    const id=tap.id;
    if(id.includes(linkID)){
        tap.classList.add("tab-content--active");
    }else{
        tap.classList.remove("tab-content--active")
    }
})


    })
})
function followMe(){
    window.open('https://www.facebook.com/profile.php?id=100085125943145&mibextid=ZbWKwL')
}



navigator.geolocation.getCurrentPosition(function(position){
    const lat =position.coords.latitude;
        const lon =position.coords.longitude;
document.querySelector('.location span').textContent =`latitude: ${lat.toFixed(2)},Longitude:${lon.toFixed(2)}`;
});
