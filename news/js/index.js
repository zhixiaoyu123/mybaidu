window.onload=function () {
    var cw=document.documentElement.clientWidth;
    var scale=cw/7.5;
    document.querySelector("html").style.fontSize=scale+"px";
    var mySwiper = new Swiper ('.swiper-container', {
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            // swiperAnimateCache(swiper); //隐藏动画元素
            // swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            // swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
}