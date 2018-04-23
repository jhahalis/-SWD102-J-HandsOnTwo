function bingBong(){ 
    for (i=0; i <= 100; i++){
        if(i % 3 !== 0 && i % 5 !== 0){
            document.getElementById("bingbong").innerHTML += `${i} `;
        }else if(i % 3 === 0 && i % 5 === 0){
            document.getElementById("bingbong").innerHTML += "Bing-Bong ";
        }else if (i % 3 === 0){
            document.getElementById("bingbong").innerHTML += "Bing ";
        }else if (i % 5 ===0){
            document.getElementById("bingbong").innerHTML += "Bong ";
        }
    }
}
bingBong ();
