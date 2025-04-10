let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let imgs = document.querySelectorAll(".slider-con img")
let imgId = document.querySelector(".image-id")
let gallaryContainer = document.querySelector(".gall-con")
gallaryContainer.style.gridTemplateColumns =`repeat(${imgs.length},1fr)`

let currentSlide = 0


 imgId.innerHTML = `${currentSlide + 1} / ${imgs.length}`

function goToSlide(n) {
    imgs[currentSlide].classList.remove("active")
    currentSlide = (n + imgs.length) % imgs.length
    imgs[currentSlide].classList.add("active")
    activeStatus(currentSlide)
}

prevBtn.addEventListener("click" , () => {
    goToSlide(currentSlide - 1)
    imgId.innerHTML = `${currentSlide+1} / ${imgs.length}`
})

nextBtn.addEventListener("click" , () => {
    goToSlide(currentSlide + 1) // 1
    imgId.innerHTML = `${currentSlide+1} / ${imgs.length}`
})

imgs.forEach((img,index) => {
    let gallary = img.cloneNode()
    gallaryContainer.append(gallary)
    gallary.onclick = ()=> {
        goToSlide(index)
    }
})

function activeStatus(index) {
    gallaryContainer.querySelectorAll("img").forEach((img,ind)=> {
        img.classList.toggle("active", ind == index)
    })
}


