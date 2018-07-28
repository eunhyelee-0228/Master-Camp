$(document).keyup(function(e){
  if(e.keyCode === 27){
    $('.grid').toggleClass('grid-show');
  }
});


$(window).resize(function () {
  location.reload();
});

var viewport = window.matchMedia('(max-width:999px)');

if(viewport.matches){
var nav = $('.navigation');
var menu = $('.menu');
var btn = $('<button class="btn-menu" aria-label="메인 메뉴 열기"></button>');
var bar_top = $('<span class="menubar menubar-top"></span>');
var bar_middle = $('<span class="menubar menubar-middle"></span>');
var bar_bottom = $('<span class="menubar menubar-bottom"></span>');

var item = $('.menu > li');
var text = $('.menu-item-text');


btn.append(bar_top, bar_middle, bar_bottom);
nav.prepend(btn);
// item.attr('class', 'menu-item');
item.addClass('menu-item');
item.attr('tabindex', '0');
text.addClass('icon-plus');

btn.click(function(){
  $(this).toggleClass('btn-menu-act');
  menu.toggleClass('menu-act');
  if($(this).hasClass('btn-menu-act')){
     $(this).attr('aria-label','메인 메뉴 닫기');
  } else {
    $(this).attr('aria-label', '메인 메뉴 열기');
  }
});

item.on('click keyup',function(e){
  if(e.type === 'click' || e.keyCode === 13 || e.keyCode === 32){
    item.removeClass('menu-item-act');
    $(this).addClass('menu-item-act');
    if($(this).hasClass('menu-item-act')){
      text.removeClass('icon-minus').addClass('icon-plus'); //모든 요소에 있는 minus를 지우고 plus로 바꾸고
      $(this).find(text).removeClass('icon-plus').addClass('icon-minus'); //모든 요소의 plus를 지우고 minus로 바꾼다.
    }
  }

});
  // item.on('keyup', function (e) {
  //   if(e.keyCode === 13 || e.keyCode === 32){
  //     item.removeClass('menu-item-act');
  //     $(this).addClass('menu-item-act');
  //   }
  // });
  menu.focusin(function(){
    btn.addClass('btn-menu-act');
    menu.addClass('menu-act');
  });
  menu.focusout(function(){
    btn.removeClass('btn-menu-act');
    menu.removeClass('menu-act');
  });
}
