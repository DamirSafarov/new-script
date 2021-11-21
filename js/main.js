

$(function(){

    $("a[href^='#header']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.mobile-burger').on('click',function(){
      $('.header-list').slideToggle(500,'linear');
    })
    
    // var tab; // заголовок вкладки
    // var tabContent; // блок содержащий контент вкладки
    
    
    // window.onload=function() {
    //     tabContent=document.getElementsByClassName('tabContent');
    //     tab=document.getElementsByClassName('tab');
    //     hideTabsContent(1);
    // }
    
    // document.getElementById('tabs').onclick= function (event) {
    //     var target=event.target;
    //     if (target.className=='tab') {
    //        for (var i=0; i<tab.length; i++) {
    //            if (target == tab[i]) {
    //                showTabsContent(i);
    //                break;
    //            }
    //        }
    //     }
    // }
    
    // function hideTabsContent(a) {
    //     for (var i=a; i<tabContent.length; i++) {
    //         tabContent[i].classList.remove('show');
    //         tabContent[i].classList.add("hide");
    //         tab[i].classList.remove('whiteborder');
    //     }
    // }
    
    // function showTabsContent(b){
    //     if (tabContent[b].classList.contains('hide')) {
    //         hideTabsContent(0);
    //         tab[b].classList.add('whiteborder');
    //         tabContent[b].classList.remove('hide');
    //         tabContent[b].classList.add('show');
    //     }
    // }
  

  // if ($('.questions').length > 0) { 
    // if($(window).width() > 700) {
      //tabs
      $('.posts-tabs').each(function() {
        let ths = $(this);
        ths.find('.tab-link').not(':first').hide();
        ths.find('.tab-button').click(function() {
          ths.find('.tab-button').removeClass('active').eq($(this).index()).addClass('active');
          ths.find('.tab-link').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
   
      });
       //  } else {
          
       //  }
     
       // селект мобильной версии
       // $(".questions__btn").on("click", function () {
       //   $(".questions__buttons").toggleClass("active");
       // });
   // }


  });
  
  
  
  
  