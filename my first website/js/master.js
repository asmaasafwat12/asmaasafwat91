// strat navigation header
let links = document.querySelectorAll('.links a');

linkNav(links);


// start navigation bar icon
let myToggleMenu = document.querySelector('.toggle-links')
let myLinks = document.querySelector('.links');
myToggleMenu.onclick = function (e) {
    e.stopPropagation();
    myToggleMenu.classList.toggle('active');
    myLinks.classList.toggle('open');
}
document.addEventListener('click', function (e) {
    if (e.target !== myToggleMenu && e.target !== myLinks) {
        if (myLinks.classList.contains('open')) {
            myToggleMenu.classList.toggle('active');
            myLinks.classList.toggle('open');

        }
    }

})
myLinks.onclick = function (e) { e.stopPropagation(); }



// end navigation bars icon

// end navigation header

// start top btn
myTopBtn = document.querySelector(".top-btn");
function scrollFunction() {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        myTopBtn.style.display = 'block';

    } else {
        myTopBtn.style.display = "none";
    }
}
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
}
// end top btn
// fixed header
let myHeader = document.querySelector('.header-area');
let myLandingPage = document.querySelector('.landing-page');
console.log(myLandingPage.offsetHeight);
// start skills transition
let myskills = document.querySelector('.skills');
window.onscroll = function () {
    scrollFunction();
    let offsetskills = myskills.offsetTop;
    let offsetheight = myskills.offsetHeight;
    let windowheight = this.innerHeight;
    let windowscrolltop = this.pageYOffset;

    if (windowscrolltop > myLandingPage.offsetHeight - 100) {
        myHeader.classList.add('on-scroll');
    }
    else
        myHeader.classList.remove('on-scroll');


    if (windowscrolltop >= (offsetskills)) {

        let allskills = document.querySelectorAll('.skills .technical-skills .skill-progress span')
        allskills.forEach(skill => {
            skill.style.width = skill.dataset.progress;

        });

    }


    //////////////

    ////
};
// end skill treansition

// start gallery popup
let indexImg = 0;
let popupBoxClicked;
let popupOverlay = document.querySelector('.popup-overlay');
let popupBox = document.querySelector('.popup-box');
let mygallery = document.querySelectorAll('.singel-img');
let counter = document.querySelector('.counter');
let myimages = document.querySelectorAll('.singel-img img');
let nxtBtn = document.querySelector('.next');
let preBtn = document.querySelector('.previous');
let closeBtn = document.querySelector('.close-btn');
mygallery.forEach(img => {
    img.addEventListener("click", (e) => {
        popupOverlay.style.display = 'block';
        document.body.classList.add('noscroll');
        popupBoxClicked = popupBox.style.backgroundImage = 'url(' + img.childNodes[1].src + ')';
        indexImg = parseInt(img.childNodes[1].dataset.index);
        counter.innerHTML = indexImg + '  of  ' + myimages.length;
        closeBtn.onclick = function () {
            closeBtn.parentElement.parentElement.parentElement.style.display = 'none';
            document.body.classList.remove('noscroll');
        }

        nxtBtn.onclick = nxt;
        preBtn.onclick = pre;
    });
    function nxt() {
        if (indexImg > myimages.length - 1) {
            indexImg = 1;

        }
        else {
            indexImg++;
        }
        counter.innerHTML = indexImg + '  of  ' + myimages.length;
        popupBoxClicked = popupBox.style.backgroundImage =
            'url(' + document.querySelector('[data-index="' + indexImg + '"]').src + ')';


    }
    function pre() {
        if (indexImg == 1) {
            indexImg = 6;

        }
        else {
            indexImg--;

        }
        counter.innerHTML = indexImg + '  of  ' + myimages.length;
        popupBoxClicked = popupBox.style.backgroundImage =
            'url(' + document.querySelector('[data-index="' + indexImg + '"]').src + ')';
    }


})



// end gallery pop up

//start function section scroll

function linkNav(links) {
    links.forEach(link => {
        link.addEventListener('click', (e) => {

            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView()

            // add and remove activelink class



        })
    });
}
// endfunction section scroll


