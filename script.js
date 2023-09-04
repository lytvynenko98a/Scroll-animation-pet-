document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.querySelector(".checkbox");
    function handleCheckboxChange() {
        const body = document.querySelector("html");

        
        if (checkbox.checked) {
        
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }
    
    checkbox.addEventListener("change", handleCheckboxChange);
});


// Function to update margin-top based on screen width
const letstalkm = document.querySelector('.lets-talk-m');
const sticky_parent = document.querySelector('.sticky-parent');
const scroll_section = document.querySelector('.scroll-section');
const scroll_section_first_three = document.querySelector('.scroll-section .first .three');
const scroll_section_second = document.querySelector('.scroll-section .second');
const svg2_m = document.querySelector('.svg2-m');
const third_s_one = document.querySelector('.third-s .one');
const scroll_section_fourth = document.querySelector('.scroll-section .fourth');

function updateMarginTop() {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    let letstalkmValue;
    let sticky_parentValue;
    let sticky_parentValueTablet;

    let scroll_sectionValue;
    let scroll_sectionValueTablet;

    let scroll_section_first_threeValue;
    let scroll_section_secondValue;
    let scroll_section_secondValueHeight;

    let scroll_section_fourthValueTablet;
    let sticky_parentValueTabletAir;

    let svg2_mValue;
    let third_s_oneValue;



    if (screenWidth < 390) {
        letstalkmValue = '170px';sticky_parentValue = '415vh';scroll_sectionValue = '204px';scroll_section_first_threeValue = '23px';svg2_mValue = '468px';third_s_oneValue = '255px';scroll_section_secondValue='517px';
    } else if (screenWidth < 700) {
        letstalkmValue = '300px';
    }else if (screenWidth > 900 && screenWidth < 1123) {
            sticky_parentValueTabletAir = '380vh';
            scroll_section_secondValueHeight = '846px';
            scroll_sectionValueTablet = '309vw';
            scroll_section_fourthValueTablet = '817px'
    } else if (screenWidth > 1100 && screenWidth < 1200) {
    scroll_section_secondValueHeight = '846px';
    sticky_parentValueTablet = '300vh';
    scroll_sectionValueTablet = '309vw';
    scroll_section_fourthValueTablet = '817px'
    }
    letstalkm.style.marginTop = letstalkmValue;
    sticky_parent.style.height = sticky_parentValue;
    scroll_section.style.backgroundPositionY = scroll_sectionValue;
    scroll_section_first_three.style.marginTop = scroll_section_first_threeValue;
    scroll_section_second.style.marginTop = scroll_section_secondValue;
    svg2_m.style.top = svg2_mValue;
    third_s_one.style.marginTop = third_s_oneValue;
    
    scroll_section_second.style.height = scroll_section_secondValueHeight;
    scroll_section_fourth.style.height = scroll_section_fourthValueTablet;
    sticky_parent.style.height = sticky_parentValueTablet;
    scroll_section.style.width = scroll_sectionValueTablet;
    sticky_parent.style.height = sticky_parentValueTabletAir;




}
updateMarginTop();
window.addEventListener('resize', updateMarginTop);
console.log(window)

// function togglemenu(){
//     console.log("togglemenu function called");
//     if(html.style.overflow == "auto"){
//         html.style.overflow = "hidden";
//     }
//     else{
//         html.style.overflow == "auto"
//     }
// }

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