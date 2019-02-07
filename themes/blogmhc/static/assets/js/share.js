const share = (event, link) => {
    event.preventDefault();
    window.open(link.href, "_blank", "location=yes, height=520, width=520");
}
