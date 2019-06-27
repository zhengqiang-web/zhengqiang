var tabAry = document.getElementsByClassName('tab')[0].getElementsByTagName('img');
var tabListAry = document.getElementsByClassName('tabList')[0].getElementsByTagName('img');
var pointerList = [3,93,181];
var Top = 181;
var nowTop = 3;
var pointer = document.getElementsByClassName('pointer')[0];
console.log(tabAry)
console.log(tabListAry)
//直接找index是找不到的，需要自己赋值才行，类数组;
for(var i = 0; i<tabAry.length;i++){
    tabAry[i].onmouseover = mouseover;
    tabAry[i].index = i ;

}
function mouseover(){
    for(var i = 0 ; i<tabListAry.length;i++){
        if(i == this.index){
            //控制显示
            tabListAry[i].className = 'show';
          
            //控制移动
            Top = pointerList[i];
            nowTop = pointer.offsetTop;
            if(timer == null){
                timer = setInterval(runFunc,10);
                
            }
            
        }else{
            tabListAry[i].className = '';
        }
    }
}

var timer = null ;//setInterval(runFunc,100);
function runFunc(){
   if(nowTop < Top){
       nowTop += 4;
       if(nowTop>=Top){
           nowTop = Top  
           clearInterval(timer)
           timer = null
       } 
       }
       if(nowTop > Top){
         nowTop -= 4;
        if(nowTop<=Top){
            nowTop = Top  
            clearInterval(timer)
            timer = null
            
        }
   }
   if(nowTop == Top){
       nowTop == Top;
       clearInterval(timer);
       timer = null
   }
   pointer.style.top = nowTop + 'px';
}    