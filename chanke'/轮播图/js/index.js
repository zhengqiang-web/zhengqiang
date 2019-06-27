
var index = 0 ,
 num = 5 ,
 leftWidth = 400 ;
 var timer = undefined;
 timeFun();
 function cont(dirtion) { 
     clearTimeout(timer)
     $('.img-box').stop(false,true)
     if(dirtion == 'prev'){
         index--;
         if(index < 0){
             $('.img-box').css({
                 left:-2000
             })
             index = 4
         }

     }else if(dirtion == 'next'){
         index++;
         if(index > num){
             $('.img-box').css({
                 left:0
             })
             index = 1
         }
     }
    $('.img-box').animate({
        left : -leftWidth*index
    },function(){
        timeFun()
    });
    active($('.item').eq(index == 5 ? 0 : index ))
 }
 function timeFun(){
     timer = setTimeout( function(){
        cont('next');
     },3000)
 }
 
 $('.prev').click( function () {
     cont('prev');
     clearTimeout(timer)
} )
 $('.next').click( function () {
     cont('next');
     clearTimeout(timer)
 })
 //圆点
function active(dom){
    $('.active').removeClass('active');
   dom.addClass('active');
}
$('.item').click(function(){
   
   index = $(this).index()
   cont('')

})