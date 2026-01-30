function buyNow() {
    window.location.href = "checkout.html";
}


const thumbs = document.querySelectorAll(".thumb");
const mainImg = document.querySelector(".main-img img");

thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        mainImg.src = thumb.src;
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
    });
});
