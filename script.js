// Navbar
$(document).ready(function () {

  $('.dropdown-item').on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
  });

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


// let interval = setInterval(run, 2000)

// function run() {
//   idx++

//   changeImage()
// }

function changeImage() {

  if (idx > img.length - 3) {
    dots[idx].classList.remove('active')
    idx = 0
    dots[idx].classList.add('active')
  }
  else if (idx < 0) {
    idx = img.length - 1
  }

  if (document.body.getBoundingClientRect().width <= 768 && document.body.getBoundingClientRect().width > 520) {
    imgContainer.style.transform = `translateX(${-idx * 500}px)`
    console.log("fuck1", document.body.getBoundingClientRect().width)
  }
  else if (document.body.getBoundingClientRect().width <= 520) {
    let temp = imgContainer.getBoundingClientRect().width
    console.log("fuck2")
    imgContainer.style.transform = `translateX(${-idx * temp}px)`
  }
  else {
    console.log("fuck3")
    let temp = imgContainer.getBoundingClientRect().width
    let res = (temp * .3) + 2 * (temp * .017)
    imgContainer.style.transform = `translateX(${-idx * res}px)`
  }
}


// function resetInterval() {
//   // clearInterval(interval)
//   interval = setInterval(run, 2000)
// }

leftBtn.addEventListener('click',
  () => {
    if (idx == 0) {
      dots[idx].classList.remove('active')
      idx = img.length - 3
      dots[idx].classList.add('active')
      changeImage()
    } else {
      dots[idx].classList.remove('active')

      idx--
      dots[idx].classList.add('active')

      changeImage()
    }
    // resetInterval()
  })
rightBtn.addEventListener('click', () => {
  dots[idx].classList.remove('active')
  console.log(dots[idx], 'fuck')
  idx++
  dots[idx].classList.add('active')
  changeImage()

  // resetInterval()
})