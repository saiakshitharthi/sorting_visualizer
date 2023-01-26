var homepage = document.getElementById("homepagelink") 

homepage.addEventListener("mouseover",function(){
    

    this.style.fontSize = "1cm"
    

})
homepage.addEventListener("mouseleave",function(){
    

    this.style.fontSize = "0.75cm"
})
homepage.addEventListener("click",function(){
    
    window.location.href = "index.html";

})
function addcell(val){
    var table = document.getElementById("tablerows");
    var newnode = document.createElement("td");
    newnode.textContent = val;
    table.append(newnode);
    var tablecount = document.querySelectorAll("td").length
    var table2 = document.getElementById("positions");
    var newnode2 = document.createElement("th");
    newnode2.textContent = tablecount
    table2.append(newnode2)
    
    
}


function add(){
    var val = document.getElementById('addvalue').value;
    
    addcell(val)
    
}

var addbutton = document.getElementById('addbutton');

addbutton.addEventListener("k")


function deleteElem(){

    var val = document.querySelectorAll('td')
    var val2 = document.querySelectorAll('th');
    if(val.length==0){
        return;
    }
    val[val.length-1].parentNode.removeChild(val[val.length-1])
    val2[val2.length-1].parentNode.removeChild(val2[val2.length-1])




}

function clearArr(){
    var val = document.querySelectorAll('td')
    var val2 = document.querySelectorAll('th');
    if(val.length==0){
        return;
    }
    for(var i = 0;i<val.length;i++){
        val[i].parentNode.removeChild(val[i])
        val2[i].parentNode.removeChild(val2[i])
    }
    

}





function bubbleSort(){
                        
    //First shift the elements to an array

    var temparray = [];

    var allcells = document.querySelectorAll("td");

    for(var i = 0;i<allcells.length;i++){
        temparray.push(parseInt(allcells[i].textContent))
    }

    var j = 0;
    var enablecellcolourChange = 0;
    var enablefadeout = 1;
    var inbetween = 0;
    var enablefadein = 0;
    function cellcolourChange(){

       
        if(j==temparray.length-1){
            allcells[j-1].style.backgroundColor = "black";
            allcells[j-1].style.color = "blanchedalmond";
            allcells[j].style.backgroundColor = "black";
            allcells[j].style.color = "blanchedalmond";
            j=0;
            return;

        }
        if(j!=0){
            allcells[j-1].style.backgroundColor = "black";
            allcells[j-1].style.color = "blanchedalmond";
        }

        allcells[j].style.backgroundColor = "#f94d89";
        allcells[j].style.color = "black";
        allcells[j+1].style.backgroundColor = "#f94d89";
        allcells[j+1].style.color = "black";

        enablecellcolourChange = 0;



        
    }

    function fadeout(){
        
        
        
        allcells[j].style.opacity = '0';
        allcells[j+1].style.opacity = '0';

    }

    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function fadein(){
        
        allcells[j].style.opacity = '1';
        allcells[j+1].style.opacity = '1';
        
    }
    var messageprompt = document.getElementById("headingprompt");
    var count = 0;
    var count2 = 0;


    async function fadeinandout(){

        if(count==temparray.length-1){

            messageprompt.textContent = "Array is Sorted!";

            await sleep(2000);

            messageprompt.textContent = "";



            return;


        }
        if(j==temparray.length-1){

            await sleep(10);
            count++;
            cellcolourChange();
            fadeinandout();
            return;
        }
        await sleep(1);
        cellcolourChange();
        await sleep(1000);
        if(temparray[j]<=temparray[j+1]){
            await sleep(1);
            j++;
            if(j==temparray.length){
                j = 0;

                fadeinandout();
            }

            await sleep(1);
            messageprompt.textContent = "Nothing to Change!";
            await sleep(1000);
            messageprompt.textContent = "";
            fadeinandout();
            return;
        }
        
        fadeout();
        await sleep(1000);

        
            var temp = temparray[j];
            temparray[j] = temparray[j+1];
            temparray[j+1] = temp;
            messageprompt.textContent = "Swap position " + (j+1) + " " + (j+2);
            var first = allcells[j].textContent
            var second = allcells[j+1].textContent
            allcells[j].textContent = second;
            allcells[j+1].textContent = first;
            
        

        await sleep(1000);
        messageprompt.textContent = "";
        await sleep(2);
        fadein();
        await sleep(2)
        j++;
        await sleep(1000);

        fadeinandout()

    }
    fadeinandout();
    

    
    
    
}




