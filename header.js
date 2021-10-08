$(document).ready(function(){

    $('.dropdown-item').on("click", function(e){
      e.stopPropagation();
      e.preventDefault();
    });

    $(".nav-link").click(function(){
        $(this).toggleClass('addcolor')
    })    
    $(".nav-link").blur(function(){
        $(this).removeClass('addcolor')
    })

    $('.multilevel').each(function() {
        let val = $($(this)).attr('id')

        $(`#${val}`).mouseenter(function(){
            $(this).attr('aria-expanded',true)
            $(`#submenu-${val}`).addClass("show")
            
        })
    
        $(`#${val}`).mouseleave(function(){
            $(this).attr('aria-expanded',true)
            $(`#submenu-${val}`).removeClass("show")
        })    
    })

    $('.multilevel').hover(function() {
        console.log($(this))
        let val = $($(this)).attr('id')
        console.log(val,'val')

        $(`#${val}`).mouseenter(function(){
            $(this).attr('aria-expanded',true)
            $(`#submenu-${val}`).addClass("show")
            
        })
    
        $(`#${val}`).mouseleave(function(){
            $(this).attr('aria-expanded',true)
            $(`#submenu-${val}`).removeClass("show")
        })    
    })
  });