//需要转的速度，圈数，计时器，

$('.start').click(function(){
    var number = random(1,9);
    strat(number);
})
function strat(num){
    var n = 0,
        round = 4,
        speed = 100,
        roundNum = round*8;
        var arr = [0,1,2,4,7,6,5,3];
    var timer = setTimeout(turn, speed);
    function turn(){
        var index = arr[n++%8];
        $('li').removeClass('active').eq(index).addClass('active');
        if(n < roundNum){
            setTimeout(turn,speed)
        }else if(n >= roundNum && n < roundNum + num){
            speed += 50;
            setTimeout(turn,speed)
        }else if(n >= roundNum +num){
            result(index);   
        }       
    }
}
function result(){
    var str = '';
    switch(index){
        case 0 :
            str = "金币+20"
            break;
        case 1 :
            str = "五元现金券"
            break;
        case 2 :
            str = "10元现金券"
            break;
        case 3 :
            str = "金币+50"
            break;
        case 4 :
            str = "30元现金券"
            break;
        case 5 :
            str = "金币+100"
            break;
        case 6 :
            str = "谢谢参与"
            break;
        case 7 :
            str = "15元现金券"
            break;
    }
        
}
//生成随机数
function random(min,max){
   return parseInt(Math.random()*(max-min) + min);  
}
    
