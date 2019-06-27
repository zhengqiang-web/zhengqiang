var wrapper = document.getElementsByClassName('wrapper')[0];
var close = document.getElementsByClassName('close')[0];
var adHeight = -400;
var maxHeight = 0;
var minHeight = 400;

close.onclick = function(){
    closess =  setInterval(function(){
        closed()
    },10)
    
}
var timer = setInterval(function(){
   show()
},10)

    function show(){
        if(adHeight<=maxHeight){
            
            adHeight+=4;
            wrapper.style.bottom = adHeight + "px";
        }else{
            adHeight = maxHeight;
            console.log(adHeight)
            clearInterval(timer)
        }
}  
function closed(){
    if(adHeight<=minHeight){
        adHeight+=4;
        wrapper.style.bottom = -adHeight + "px";
    }else{
        adHeight = maxHeight;
        clearInterval(closess);
    }
}
