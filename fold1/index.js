// const music=new Audio("C:\Users\hp\Desktop\aj\fold1\bicycle-bell_19-80368.mp3");
// const turnmusic=new Audio("C:\Users\hp\Desktop\aj\fold1\kl-peach-game-over-iii-142453.mp3");
// const gameover=new Audio("C:\Users\hp\Desktop\aj\fold1\snd_fragment_retrievewav-14728.mp3");
let turn="X";
function changeturn(){
    return turn==="X"?"0": "X"
}
let isgameover=false;
function checkwin(){
    let boxes=document.getElementsByClassName("grid");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxes[e[0]].innerText === boxes[e[1]].innerText)&&(boxes[e[1]].innerText === boxes[e[2]].innerText)&&
        boxes[e[0]].innerText!==''){
            document.querySelector('.info').innerText=boxes[e[0]].innerText+ " WON" +"  CONGRALUTIONS";
            isgameover=true;
        }
    })
}
let boxes=document.getElementsByClassName("grid");
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('click',()=>{
        if(boxes[i].innerText===''){
            boxes[i].innerText=turn;
            turn= changeturn();
            // turnmusic.play();
            checkwin();
            if(turn=='X'){
                let ele=document.getElementsByClassName("info")[0];
                ele.style.color="blue";
                boxes[i].style.color="red";
            }
            else{
                let ele=document.getElementsByClassName("info")[0];
                ele.style.color="voilet";
                boxes[i].style.color="blue";
            }
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn of "+turn;
            }
            else{
                let ele=document.getElementsByClassName("containergrid");
                // ele[0].style.display="none";
                let a=document.getElementById("imga");
                a.style.display="flex";
                a.style.height="80vh";
                a.style.width="80vw";
            }
        }
    })
}

    let reset=document.getElementById("reset");
    reset.addEventListener('click',function(){
        let boxes=document.getElementsByClassName("grid");
        for(let i=0;i<boxes.length;i++){
               boxes[i].innerText=''; 
        }
        let a=document.getElementById("imga");
        a.style.display="none";
    })



