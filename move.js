// gsap.to("header",{
//     backgroundColor:"#000",
//     height:"50px",
//     top:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:"header",
//         scroll:"body",
//         start:"top -10%",
//         end:"top -11%",
//         markers:true,
//         scrub: true
//     }
// })

gsap.from("#image",{
    scale:1.3,
    duration: .5,
    delay:.5,
    opacity:0
});

gsap.from("#gola",{
    scale:.8,
    duration: .5,
    delay:.5,
    opacity:0
});

gsap.from("#textleft",{
    x:-50,
    duration: .5,
    delay:.5,
    opacity:.0
});

gsap.from("#textright",{
    x:50,
    duration: .5,
    delay:.5,
    opacity:0
});

gsap.from("#bar",{
    y:100,
    duration: 2,
    opacity:.1,
    scrollTrigger:{
        trigger:"#bar",
        scroll:"body",
        start:"top 110%",
        end:"top 70%",
        markers:false,
        scrub:1
    }
})

gsap.from("#sec1 #up .left",{
    x:-50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec1 #up .left",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        markers:false,
        scrub:1
    }
});

gsap.from("#sec1 #up .right",{
    x:50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec1 #up .right",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        markers:false,
        scrub:1
    }
});

gsap.from("#sec1 #down",{
    y:100,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#sec1 #down",
        scroll:"body",
        start:"top 90%",
        end:"top 60%",
        markers:false,
        scrub:1
    }
});

gsap.from(".sec2 #text",{
    x:-50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec2 #text",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        markers:false,
        scrub:1
    }
});

gsap.from(".sec2 #container #l",{
    x:-50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec2 #container #l",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        markers:false,
        scrub:1
    }
});

gsap.from(".sec2 #container #l1",{
    x:-50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec2 #container #l1",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        markers:false,
        scrub:1
    }
});

gsap.from(".sec2 #container #l2",{
    x:-50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec2 #container #l2",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        markers:false,
        scrub:1
    }
});

gsap.from(".sec2 #container #r",{
    x:50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec2 #container #r",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        markers:false,
        scrub:1
    }
});

gsap.from(".sec2 #container #r1",{
    x:50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec2 #container #r1",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        markers:false,
        scrub:1
    }
});

gsap.from(".sec2 #container #r2",{
    x:50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec2 #container #r2",
        scroll:"body",
        start:"top 80%",
        end:"top 50%",
        markers:false,
        scrub:1
    }
});

gsap.from(".sec2 #btn",{
    y:50,
    duration: 0.5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec2 #btn",
        scroll:"body",
        start:"top 90%",
        end:"top 80%",
        markers:false,
        scrub:true
    }
});

gsap.from(".sec3 .left",{
    x:-50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec3 .left",
        scroll:"body",
        start:"top 80%",
        end:"top 60%",
        markers:false,
        scrub:1
    }
});

gsap.from(".sec3 .right",{
    x:50,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".sec3 .right",
        scroll:"body",
        start:"top 80%",
        end:"top 60%",
        markers:false,
        scrub:1
    }
});

gsap.from("footer #line",{
    y:20,
    duration: .5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"footer #line",
        scroll:"body",
        start:"top 90%",
        end:"top 81%",
        markers:false,
        scrub:1
    }
});