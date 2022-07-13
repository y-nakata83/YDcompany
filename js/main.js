function PageTopCheck(){
    var winScrollTop = $(this).scrollTop();
    var secondTop =  $("#service").offset().top - 150; //#area-2の上から150pxの位置まで来たら
    if(winScrollTop >= secondTop){
		$('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
		$('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
	} else {//元に戻ったら
		$('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
		$('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
	}

}