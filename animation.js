 
 //   animation for page games  
 
    const card1 = document.querySelector(".cart--number--1")
    const card2 = document.querySelector(".cart--number--2")
    const card3 = document.querySelector(".center--card")
    const card4 = document.querySelector(".cart--number--4")
    const card5 = document.querySelector(".cart--number--5")
    const butt = document.querySelector(".button")
    card1.addEventListener("click" , () => {
        card1.style.transform = 'rotate(0deg) translateX(0px) translateY(0px)'
        card3.style.transform = 'rotate(-20deg) translateX(-150px) translateY(-50px)'
        card1.style.zIndex = '4'
        card3.style.zIndex = '3'
    })

    card2.addEventListener("click" , () => {
        card2.style.transform = 'rotate(0deg) translateX(0px) translateY(0px)'
        card3.style.transform = 'rotate(20deg) translateX(150px) translateY(-50px)'
        card2.style.zIndex = '4'
        card3.style.zIndex = '2'
    })

    card4.addEventListener("click" , () => {
        card4.style.transform = 'rotate(0deg) translateX(0px) translateY(0px)'
        card3.style.transform = 'rotate(-30deg) translateX(-270px) translateY(-100px)'
        card4.style.zIndex = '4'
        card3.style.zIndex = '1'
    })

    card5.addEventListener("click" , () => {
        card5.style.transform = 'rotate(0deg) translateX(0px) translateY(0px)'
        card3.style.transform = 'rotate(30deg) translateX(270px) translateY(-100px)'
        card5.style.zIndex = '4'
        card3.style.zIndex = '0'
    })

    card3.addEventListener("click" , () => {
        card3.style.transform = 'rotate(0deg) translateX(0px) translateY(0px)'
        card1.style.transform = 'rotate(-20deg) translateX(-150px) translateY(-50px)'
        card2.style.transform = 'rotate(20deg) translateX(150px) translateY(-50px)'
        card4.style.transform = 'rotate(-30deg) translateX(-270px) translateY(-100px)'
        card5.style.transform = 'rotate(30deg) translateX(270px) translateY(-100px)'
        card3.style.zIndex = '6'
        card1.style.zIndex = '3'
        card2.style.zIndex = '2'
        card4.style.zIndex = '1'
        card5.style.zIndex = '0'
    })


// animation for page teams
