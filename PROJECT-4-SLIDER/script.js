const Images=[
    "https://images.pexels.com/photos/28587130/pexels-photo-28587130.jpeg?_gl=1*4v2a1b*_ga*NDY5MDA4MTExLjE3NTk2NzIxMzg.*_ga_8JE65Q40S6*czE3NzYzMjkzNTgkbzckZzEkdDE3NzYzMjk0MDUkajEzJGwwJGgw",
    "https://images.pexels.com/photos/13348136/pexels-photo-13348136.jpeg?_gl=1*16jlxux*_ga*NDY5MDA4MTExLjE3NTk2NzIxMzg.*_ga_8JE65Q40S6*czE3NzYzMjkzNTgkbzckZzEkdDE3NzYzMjk0NjMkajUzJGwwJGgw",
    "https://images.pexels.com/photos/30299891/pexels-photo-30299891.jpeg?_gl=1*4ub9gk*_ga*NDY5MDA4MTExLjE3NTk2NzIxMzg.*_ga_8JE65Q40S6*czE3NzYzMjkzNTgkbzckZzEkdDE3NzYzMjk1MTckajU5JGwwJGgw",
   "https://images.pexels.com/photos/12735797/pexels-photo-12735797.jpeg?_gl=1*mgcrwc*_ga*NDY5MDA4MTExLjE3NTk2NzIxMzg.*_ga_8JE65Q40S6*czE3NzYzMjkzNTgkbzckZzEkdDE3NzYzMjk1NTIkajI0JGwwJGgw",
   "https://images.pexels.com/photos/6034712/pexels-photo-6034712.jpeg?_gl=1*14pnsr5*_ga*NDY5MDA4MTExLjE3NTk2NzIxMzg.*_ga_8JE65Q40S6*czE3NzYzMjkzNTgkbzckZzEkdDE3NzYzMjk2MzUkajM2JGwwJGgw",
   "https://images.pexels.com/photos/1684885/pexels-photo-1684885.jpeg?_gl=1*1svn21m*_ga*NDY5MDA4MTExLjE3NTk2NzIxMzg.*_ga_8JE65Q40S6*czE3NzYzMjkzNTgkbzckZzEkdDE3NzYzMjk2OTAkajU5JGwwJGgw",
   "https://images.pexels.com/photos/19635665/pexels-photo-19635665.jpeg?_gl=1*te4vo0*_ga*NDY5MDA4MTExLjE3NTk2NzIxMzg.*_ga_8JE65Q40S6*czE3NzYzMjkzNTgkbzckZzEkdDE3NzYzMjk3NTkkajU5JGwwJGgw",
   
];


let ImgE1=document.getElementById("img");
let BehindButtonE1=document.getElementById("BehindImage");
let NextButtonE1=document.getElementById("NextImage");

let index=0;

function main(){
ImgE1.src=Images[index];

}
function BehindImage(){
    
    index--;
    if(index < 0){
        index= Images.length-1;
    }

main()

}

function NextImage (){
    index++;

    if(index >= Images.length){
        index=0;
    }
   
    main()
}

setInterval(()=>{
NextImage()
},3000)
