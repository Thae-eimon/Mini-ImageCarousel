//UI
const imgcarousel=document.getElementById('imgcarousel');
const imgcarousel1=document.getElementById('imgcarousel1');
const imgcarousel2=document.getElementById('imgcarousel2');

// console.log(img1s);
const imgs=document.querySelectorAll('#imgcarousel img');
const img1s=document.querySelectorAll('#imgcarousel1 img');
const img2s=document.querySelectorAll('#imgcarousel2 img');
// console.log(img2s);

let idx=0;

function changeimage(){

    if(idx > imgs.length - 1){
        idx=0;
    }
    else if(idx < 0){
        idx=imgs.length - 1;
    }
    // console.log(idx);
    imgcarousel.style.transform=`translate(${-idx * 400}px)`;
}
setInterval(runimage,1500);
function runimage(){
    idx++;
    changeimage();
}

let idx1=0

function changeimage1(){
    if(idx1 > img1s.length - 1){
        idx1=0;
    }
    else if(idx1 < 0){
        idx1=img1s.length - 1;
    }
    imgcarousel1.style.transform=`translate(${-idx1 * 300}px)`;
}
setInterval(runimage1,1500);
function runimage1(){
    idx1++;
    changeimage1();
}

function changeimage2(){
    if(idx > img2s.length - 1){
        idx=0;
    }
    else if(idx < 0){
        idx = img2s.length - 1;
    }
    imgcarousel2.style.transform=`translate(${-idx * 200}px)`;
}
setInterval(runimage2,1500);
function runimage2(){
    idx++;
    changeimage2();
}


// const cards=document.querySelectorAll('.card');



const cards=document.querySelectorAll('.card');
// console.log(cards);

function  checkcard(){
  const innerwidth = window.innerWidth /5 * 4;
//   console.log(innerwidth);

    cards.forEach(card=>{
        // console.log(box);

        const cardleft = card.getBoundingClientRect().top;
        console.log(cardleft);

        if(cardleft < innerwidth){
            card.classList.add('show');
        }
        else{
            card.classList.remove('show');
        }

    });

}
checkcard();

window.addEventListener('scroll',()=>checkcard);
   


const leftbtn=document.getElementById('left');
const rightbtn=document.getElementById('right');
const cardbox=document.querySelector('.cardbox');

let cardidx=0;

leftbtn.addEventListener('click',()=>{
    cardidx--;
    // if(cardidx < 0){
    //     cardidx = cards.length - 1;
    // }
    cardbox.style.transform=`translate(${-cardidx * 315}px)`;
});

rightbtn.addEventListener('click',()=>{
    cardidx++;
    // if(cardidx > cards.length - 1){
    //     cardidx=0;
    // }
    cardbox.style.transform=`translate(${-cardidx * 315}px)`;
})