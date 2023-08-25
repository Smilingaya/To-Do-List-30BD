const listContainer=document.getElementById('listContainer');
listContainer.addEventListener("click",function(e){

    if(e.target.tagName==="LI")
        e.target.classList.toggle("cheked");
       
    })