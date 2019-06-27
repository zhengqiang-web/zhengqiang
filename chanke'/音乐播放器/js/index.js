 var oAudio =document.getElementById("audio"),
     oCurrentTime = document.getElementsByClassName("current-time")[0],
     oDurationTime = document.getElementsByClassName("duration-time")[0],
     
     oIcon = document.getElementsByClassName("iconfont")[0];
var timer,
    duration,
    allWidth = 192;
     oAudio.oncanplay= function(){
         oCurrentTime.innerHTML = conversion(oAudio.currentTime);
         duration = this.duration;
         oDurationTime.innerHTML = conversion(duration);
        
     }
    function  conversion(time){
        var sec = parseInt(time%60) <10 ? "0" + parseInt(time%60) : parseInt(time%60);
        var min = parseInt(time/60) <10 ? "0" + parseInt(time/60) : parseInt(time/60);
        return min +":" + sec ;
     }
var oControls = document.getElementsByClassName("controls")[0],
    oPic = document.getElementsByTagName("img")[0];

var oPro = document.getElementsByClassName("ss")[0];
     oControls.onmouseup = function(){
    
         if(oAudio.paused){
            musicplay();

         }else{
             musicpause();
         }
     }
     function move() {
         var currentTime = oAudio.currentTime;
         oCurrentTime.innerHTML = conversion(currentTime)
        oPro.style.width = currentTime/duration * allWidth + 8 + "px" ;
         
     }
     function musicplay(){
        oAudio.play();
        oIcon.className = "iconfont icon-zanting";
        oPic.classList.add("start");
        timer = setInterval(move,200);
     }
     function musicpause(){
        oAudio.pause();
        oIcon.className = "iconfont icon-bofang";
        oPic.className = "";
        clearInterval(timer);
     }
     oAudio.onended = function(){
        oDown.onclick();
         oAudio.oCurrentTime = 0;
         oCurrentTime.innerHTML = conversion(0);
         oPro.style.width = 8 + "px";
         musicplay();
     }
     
    oPro.onmousedown = function(){
        clearInterval(timer);
        var c = oAudio.oCurrentTime;
        document.body.onmousemove = function(e){
            var newWidth = e.clientX - oPro.getBoundingClientRect().left;
            if(newWidth <8 ){
                newWidth = 8
            }if(newWidth >200){
                newWidth = 200

            }
            oPro.style.width = newWidth + 'px';
           c = (newWidth-8)/allWidth * duration;
           oCurrentTime.innerHTML = conversion(c);
        } 
        document.body.onmouseup = function(){
            document.body.onmousemove = null ;
            document.body.onmouseup = null;
            musicplay();
            oAudio.currentTime = c;
        }
    } 
    var len = 0;
    var oUp = document.getElementsByClassName("icon-shangyishou")[0],
        oDown = document.getElementsByClassName("icon-xiayishou")[0],
        source = ["./source/姜创钢琴-planet铃声（姜创钢琴版）.mp3","./source/蔡方萌-行星 (Planet 中文铃声版).mp3","./source/赵铁夫-嘿，蓝衣少女 电子琴铃声.mp3"],
        img = ["./img/1.jpg","./img/3.jpg","./img/2.jpg"];
        var imgLen = img.length,
            srcLen = source.length;
       oUp.onclick = function(){
        musicpause();
           len = len + 1; 
           console.log(len)              ;
            if(len>srcLen - 1){
                len = 0         
              
            }
           
            oAudio.src = source[len];
            oPic.src = img[len];
            clearInterval(timer);
            oAudio.load();
            musicplay();
       }
      
       oDown.onclick = function(){
        musicpause();
             len--;
            console.log(len)           
        if(len < 0){
            len = srcLen - 1 ;         
           
        } 
        
        oAudio.src = source[len];
        oPic.src = img[len];
        clearInterval(timer);
        oAudio.load();
           musicplay();
       }

 