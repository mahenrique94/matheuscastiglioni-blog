const closeMenu = closeButton => closeButton.parentNode.classList.remove('is-show')

const openMenu = () => {
    const menuResponsive = document.querySelector('.js-menuResponsive')
    if (menuResponsive) {
        menuResponsive.classList.add('is-show')
    }
}
