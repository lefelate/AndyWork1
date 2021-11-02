const countEl=document.getElementById('count_el');

setInterval(increment,2000);

let count=0;

// Refactor the increment function to meet the proposal in the description below
function increment(){
    count+=1;
    countEl.innerText=count;
    if( count==10){
        count=0;
    }
    return count;
}
