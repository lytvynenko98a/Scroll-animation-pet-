var menuList = document.getElementById("menuList");

function togglemenu(){
    console.log("togglemenu function called");
    if(menuList.style.display == "none"){
        menuList.style.display = "block";
    }
    else{
        menuList.style.display="none";
    }
}

const stickySections = [...document.querySelectorAll('.sticky')]

window.addEventListener('scroll', (e) =>{
    for(let i = 0; i < stickySections.length; i++){
        transform(stickySections[i])
    }
})
function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    console.log(offsetTop)
    const scrollSection = section.querySelector('.scroll-section')
    
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;

}

let path = document.querySelector('#path1');
    let pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    
    let thirdSection = document.querySelector('.third');
    let thirdSectionOffsetTop = thirdSection.offsetTop;
    let thirdSectionHeight = thirdSection.clientHeight;
    
    window.addEventListener('scroll', () => {
        var scrollPercentage = ((window.scrollY - thirdSectionOffsetTop) / thirdSectionHeight) / 1.5;
        scrollPercentage = Math.max(0, Math.min(1, scrollPercentage)); // Ensure scrollPercentage is between 0 and 1
        var drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;
});

let path2 = document.querySelector('#path2');
    let path2Length = path2.getTotalLength();
    path2.style.strokeDasharray = path2Length;
    
    let third2Section = document.querySelector('.third');
    let third2SectionOffsetTop = third2Section.offsetTop;
    let third2SectionHeight = third2Section.clientHeight;
    
    window.addEventListener('scroll', () => {
        var scroll2Percentage = ((window.scrollY - third2SectionOffsetTop) / third2SectionHeight) / 3;
        scroll2Percentage = Math.max(0, Math.min(1, scroll2Percentage)); // Ensure scrollPercentage is between 0 and 1
        var draw2Length = path2Length * scroll2Percentage;
        path2.style.strokeDashoffset = path2Length - draw2Length;
});
