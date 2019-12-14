const int = document.querySelector(".intro");
const vid = document.querySelector("video");
const text = int.querySelector("h1");

const section = document.querySelector("section");
const end = document.querySelector("h1");

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//scenes
let scene = new ScrollMagic.Scene({
	duration: 6000,
	triggerElement: int,
	triggerHook: 0
})
	// .addIndicators()
	.setPin(int) // now the h1 will stuck with the video until it ends
	.addTo(controller);

//Text Animate

const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
let scene2 = new ScrollMagic.Scene({
	duration: 4000,
	triggerElement: int,
	triggerHook: 0
})
	.setTween(textAnim)
	.addTo(controller);

//Video animate

let accelamount = 0.8; // change current frame
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
	scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
	delay += (scrollpos - delay) * accelamount;
	vid.currentTime = delay;
}, 33.3);
