
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var startbutton = document.getElementById("startbutton")
startbutton.addEventListener("mouseover",function(){
    

    this.style.fontSize = "3cm"
    

})
startbutton.addEventListener("mouseleave",function(){
    

    this.style.fontSize = "1cm"
})
startbutton.addEventListener("click",function(){
    window.location.href = "sorting.html";

})
var helpbutton = document.getElementById("helpbutton")
helpbutton.addEventListener("mouseover",function(){
    

    this.style.fontSize = "3cm"
    

})
helpbutton.addEventListener("mouseleave",function(){
    

    this.style.fontSize = "1cm"
})
helpbutton.addEventListener("click",function(){
    window.location.href = "helppage.html";

})
var sorting = document.getElementById("mainheading")



async function Headingtrasitions(){

    var visualizer = document.getElementsByClassName("individual")

    for(var i = 0;i<visualizer.length;i++){
        visualizer[i].addEventListener("mouseover",function(){
            this.style.fontSize = "5cm";
        })
        visualizer[i].addEventListener("mouseleave",function(){
            this.style.fontSize = "2cm";
        })
    }
    
    
    var heading2 = document.getElementById("heading2");
    heading2.style.color = "white"
    var heading1 = document.getElementById("heading1");
    heading1.style.color = "white"
    heading2.style.fontSize = "5cm"
    var wholebody = document.getElementById("wholebody")
    wholebody.style.backgroundColor = "black"
    await sleep(500);
    heading2.style.fontSize = "2cm";
    await sleep(500)
    for(var i = 0;i<visualizer.length;i++){
       await sleep(500)
        
        if(i!=0){

            visualizer[i-1].style.fontSize = "2cm";

        }
        visualizer[i].style.fontSize = "5cm";
        visualizer[i].style.color = "black"

    }
    await sleep(500);
    visualizer[visualizer.length-1].style.fontSize = "2cm";
    heading1.style.color = "black"
    wholebody.style.backgroundColor = "white"

    startbutton.style.fontSize = "5cm";
    helpbutton.style.fontSize = "5cm";


    await sleep(500);
    startbutton.textContent = "Start"
    startbutton.style.fontSize = "3cm";
    startbutton.style.color = "black";
    await sleep(500)
    helpbutton.textContent = "Help!";
    helpbutton.style.fontSize = "3cm";
    helpbutton.style.color = "black";
    


}



Headingtrasitions();    