const block = document.getElementById('block'); 

function isColliding(a, b){
    const r1 = a.getBoundingClientRect(); // igrac
    const r2 = b.getBoundingClientRect(); // block

    return(
    r1.left < r2.left + r2.width &&
    r1.left + r1.width > r2.left &&
    r1.top < r2.top + r2.height &&
    r1.top + r1.height > r2.top
    );

}

function checkLoop(){
    if(isColliding(igrac, block)){
            console.log('its a hit');
    }  
    requestAnimationFrame(checkLoop);

};

// IGRAC i Counter //

let count = 0;

const igrac = document.getElementById('igrac');
const countdisplay = document.getElementById('countdisplay');

igrac.addEventListener("click", function (){

    igrac.style.animation = "none";
    void igrac.offsetWidth; 
    igrac.style.animation = "igrac 0.5s";

    count++;
    countdisplay.textContent = count;
    
    console.log("count");

});
checkLoop();

    // SOUND //
document.getElementById('igrac').addEventListener('click', function () {
    document.getElementById('zvuk').play();
});


// SOUND 2 //
document.getElementById('muzika').addEventListener('click', function () {
    const audio = document.getElementById('medivalia');

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});


 // TEMA // 

const hard = document.getElementById('hard_1');
const znak = document.getElementById ('znam');


hard.addEventListener("click", function(){
    if(document.body.classList.contains("dark-mode")){
       document.body.classList.remove("dark-mode");
       document.body.classList.add("light-mode");

       countdisplay.style.color ="black"; //this//
       hard.textContent = "Light Mode";
       hard.style.background = "white";
       hard.style.color = "black";

       // dugmetina //
       brze.style.background = "white"   //test//
       sporo.style.background = "white" //test//
       redo.style.background = "white"
       muzika.style.background = "white"
       muzika.style.color = "black"
       brze.style.color = "black"
       sporo.style.color = "black"
       redo.style.color = "black"
        
       // logo znam //
       znam.style.color = " rgb(0, 0, 0)";
    

       counter.style.color = "black";

    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        countdisplay.style.color ="white"; //this//
        hard.textContent = "Dark Mode";
        hard.style.backgroundColor = "black"
        hard.style.color = "white"


        //dugmeta//
        
        brze.style.background = "black"   //test//
        sporo.style.background = "black" //test//
        redo.style.background = "black"
        muzika.style.background = "black"
        muzika.style.color = "white"
        brze.style.color = "white"
        sporo.style.color = "white"
        redo.style.color = "white"

        // logo znam //
        znam.style.color = " rgb(200, 200, 200)";

        counter.style.color = "white";

    };

});

let brze = document.getElementById('hard_2');

brze.addEventListener("click", function(){
    block.style.animation = "none";
    void block.offsetWidth; 
    block.style.animation = "block 0.5s infinite linear";
    console.log("meme");
});

let sporo = document.getElementById('hard_3');

sporo.addEventListener("click", function(){
    block.style.animation= "none";
    void block.offsetWidth;
    block.style.animation = "block 2s infinite linear";

});
let wardo = document.getElementById('hard_4');

let redo = document.getElementById('hard_5');

redo.addEventListener("click", function(){
                  
    if (block.style.animationPlayState === "paused") {
        block.style.animationPlayState = "running";
        redo.textContent = 'pause';
    } else {
        block.style.animationPlayState = "paused";
        redo.textContent = 'reset';
        count = 0;
    }

    

});
    