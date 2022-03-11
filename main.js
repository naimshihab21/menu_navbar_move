const link = document.querySelectorAll('a')
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    if ( !link[i].classList.contains('link') ) {
      link[0].classList.remove('link')
      link[1].classList.remove('link')
      link[2].classList.remove('link')
      link[3].classList.remove('link')
      link[i].classList.add('link')
    }
  })
}