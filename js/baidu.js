$(function () {
    //head部分

    $(".sj").mouseover(function () {
        $(".erwm").css("display","block")
    })
    $(".sj").mouseout(function () {
        $(".erwm").css("display","none")
    })
   

    // var num=0;
    // var clientH=$(window).height();
    // var flag=true;
    // touch.on("body","swipeup","#fullpage",function () {
    //     if(!flag){
    //
    //     }
    //     num++;
    //     if(num==$("section").length){
    //         num=$("section").length-1;
    //     }
    //     $("#fullpage").css("marginTop",-num*clientH)
    // })
    // $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
    //     flag=true;
    // })
    // touch.on("body","swipedown","#fullpage",function () {
    //     if(!flag){
    //
    //     }
    //     num++;
    //     if(num==$("section").length){
    //         num=$("section").length-1;
    //     }
    //     $("#fullpage").css("marginTop",-num*clientH)
    // })
    // $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
    //     flag=true;
    // })


})