// Navbar
$(document).ready(function () {

  $('.dropdown-item').on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
  });

  $("#column_left").hide()

  $("#close-sidebar").click(function () {
    $('.navbar-toggler').toggleClass('collapsed')
    $("#column_left").toggle()
  })

  $(".navbar-toggler").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).toggleClass('collapsed')
    $("#column_left").toggle()
  })

  $(".nav-link").click(function () {
    $(this).toggleClass('addcolor')
  })
  $(".nav-link").blur(function () {
    $(this).removeClass('addcolor')
  })

  $('.multilevel').each(function () {
    let val = $($(this)).attr('id')

    $(`#${val}`).mouseenter(function () {
      $(this).attr('aria-expanded', true)
      $(`#submenu-${val}`).addClass("show")

    })

    $(`#${val}`).mouseleave(function () {
      $(this).attr('aria-expanded', true)
      $(`#submenu-${val}`).removeClass("show")
    })
  })

  $('.multilevel').hover(function () {
    console.log($(this))
    let val = $($(this)).attr('id')
    console.log(val, 'val')

    $(`#${val}`).mouseenter(function () {
      $(this).attr('aria-expanded', true)
      $(`#submenu-${val}`).addClass("show")

    })

    $(`#${val}`).mouseleave(function () {
      $(this).attr('aria-expanded', true)
      $(`#submenu-${val}`).removeClass("show")
    })
  })

  $(".multi-column-img-dropdown").hover(function () {
    $(this).addClass('translateImage')
  },
    function () {
      $(this).removeClass('translateImage')
    }
  )

});

// Section 1 button appear
window.addEventListener('scroll', () => {

  if (window.scrollY > 100) {
    document.querySelector('.btn-exp').classList.add('appear')
    setTimeout(() => {
      document.querySelector('.btn-free').classList.add('appear')
    }, 200)
  }
  else {
    document.querySelector('.btn-exp').classList.remove('appear')
    setTimeout(() => {
      document.querySelector('.btn-free').classList.remove('appear')
    }, 200)
  }

  if (window.scrollY > 180) {
    document.querySelector('.main-nav').classList.add('fixed')
  } else {
    document.querySelector('.main-nav').classList.remove('fixed')

  }
})


// Image carousel
const imgContainer = document.querySelector('#imgs')

const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')

let img = document.querySelectorAll('#imgs .img-cont-car')
let dots = document.querySelectorAll('.dots-img .dot')


let idx = 0

function changeImage() {


  if (document.body.getBoundingClientRect().width <= 768 && document.body.getBoundingClientRect().width > 520) {
    imgContainer.style.transform = `translateX(${-idx * 500}px)`
  }
  else if (document.body.getBoundingClientRect().width <= 520) {
    let temp = imgContainer.getBoundingClientRect().width
    imgContainer.style.transform = `translateX(${-idx * temp}px)`
  }
  else {
    let temp = imgContainer.getBoundingClientRect().width
    let res = (temp * .3) + 2 * (temp * .017)
    imgContainer.style.transform = `translateX(${-idx * res}px)`
  }
}


leftBtn.addEventListener('click',
  () => {
    if (idx > 0) {
      dots[idx].classList.remove('active')

      idx--
      dots[idx].classList.add('active')

      changeImage()
    }
  })
rightBtn.addEventListener('click', () => {
  if ((idx < img.length - 3)) {

    dots[idx].classList.remove('active')
    idx++
    dots[idx].classList.add('active')
    changeImage()
  }
  else if (document.body.getBoundingClientRect().width <= 768 && idx < img.length - 1) {
    dots[idx].classList.remove('active')
    idx++
    dots[idx].classList.add('active')
    changeImage()
  }

})


// Team section carousel

const cards = document.querySelector('#cards')
const allCards = document.querySelectorAll('.indi-card')

let idx1 = 0

const teamDots = document.querySelectorAll('.dots-team .dot')


function scrollLeftRight(i) {
  if (document.body.getBoundingClientRect().width <= 768 && document.body.getBoundingClientRect().width > 520) {
    cards.style.transform = `translateX(${-i * 500}px)`
  }
  else if (document.body.getBoundingClientRect().width <= 520) {
    let temp = cards.getBoundingClientRect().width
    cards.style.transform = `translateX(${-i * temp}px)`
  }
  else {
    let temp = cards.getBoundingClientRect().width
    let res = (temp * .3) + 2 * (temp * .017)
    cards.style.transform = `translateX(${-i * res}px)`
  }
}

teamDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    if (i >= idx1) {
      teamDots[idx1].classList.remove('active')
      idx1 = i
      teamDots[idx1].classList.add('active')
      scrollLeftRight(i)
    }
    else {
      teamDots[idx1].classList.remove('active')
      idx1 = i
      teamDots[idx1].classList.add('active')
      scrollLeftRight(i)
    }
  })
})
