let flag = false;
function clickPrint(){
    console.log(this.classList);
    let exist = false;
    for (const cls of this.classList){
        if ((cls === "red") || (cls === "green")){
            exist = true;
        }
    }
    if (!exist){
        const cls = flag?"green" : "red";
        flag = !flag;
        this.classList.add(cls);
    }
}
function restartAll(){
    window.location.reload();
}
const buttonList = document.querySelectorAll("button.cell");
for(const button of buttonList){
    button.addEventListener('click', clickPrint);
}
const restartButton = document.querySelector("button.restart");
    restartButton.addEventListener('click', restartAll);