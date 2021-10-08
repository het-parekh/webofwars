$(document).ready(function(){

    $('.dropdown-item').on("click", function(e){
      e.stopPropagation();
      e.preventDefault();
    });

    $("#column_left").hide()

    $("#close-sidebar").click(function(){
        $('.navbar-toggler').toggleClass('collapsed')
        $("#column_left").toggle()
    })

    $(".navbar-toggler").click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $(this).toggleClass('collapsed')
        $("#column_left").toggle()
    })

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

    $(".multi-column-img-dropdown").hover(function(){
        $(this).addClass('translateImage')
        },
        function()
        {
            $(this).removeClass('translateImage')
        }
    )



  });