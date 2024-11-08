window.addEventListener("load", function () {
	let topPos = 0;

	let header = document.getElementById("header");
	let menuArea = header.firstElementChild; 
	let body = document.body;
	let mobile = document.querySelector(".nav_mobile");
	let tab = document.querySelector(".tab-icon");
	let dim = menuArea.querySelector(".dim");
	let btnTop = document.querySelector(".btn_top");

	let gnb = document.querySelector(".nav_desktop");
	let gnbList = gnb.querySelectorAll("ul > li");

	let mobileGnb = document.querySelector(".nav_mobile");
	let mobileGnbList = mobileGnb.querySelectorAll("ul > li");

	let section = document.querySelectorAll("section");
	let pageList = [document.querySelector(".slider")];

	section.forEach(function (item) {
		pageList.push(item); // push() 배열 명령어는 하나씩 배열자로 추가하는 기능

		console.log(pageList);
	});

	pageList.forEach(function (item, i) {
		gsap.timeline({
			scrollTrigger: {
				trigger: item, // 화면(여기서는 item) 위치에서 아래 함수를 호출
				start: "top center",
				end: "bottom 20%",
				onEnter: function () {
					controlMenu(i);
				},
				onEnterBack: function () {
					controlMenu(i);
				}
			}
		});
	});

	function controlMenu(i) {
		gnbList.forEach(function (list, j) {
			if (j == i) {
				gnbList[j].firstElementChild.classList.add("on");
				mobileGnbList[j].firstElementChild.classList.add("on");
			}
			else {
				gnbList[j].firstElementChild.classList.remove("on");
				mobileGnbList[j].firstElementChild.classList.remove("on");
			}
		});

		if(i != 0){
			header.classList.add("fixed");
			btnTop.classList.add("active");
		}
		else{
			header.classList.remove("fixed");
			btnTop.classList.remove("active");
		}
	}



	gnbList.forEach(function (item, i) {
		gnbList[i].addEventListener("click", function (e) {
			e.preventDefault();

			topPos = pageList[i].offsetTop;
			gsap.to(window, { scrollTo: topPos, duration: 0.4 });
		});

		mobileGnbList[i].addEventListener("click", function (e) {
			e.preventDefault();

			topPos = pageList[i].offsetTop;
			// console.log(pageList);
			gsap.to(window, {
				scrollTo: topPos, duration: 0.4, onComplete: function () {
					mobile.classList.remove("active");
					tab.classList.remove("close");
					dim.classList.remove("active");
					gsap.to(tab, { x: 0, duration: 0.5 });
					gsap.to(mobile, { right: -280, duration: 0.5 });
				}
			});
		});
	});
	tab.addEventListener("click", function (e) {
		e.preventDefault();

		if(tab.classList.contains("close") == false){
			body.classList.add("fixed");
			tab.classList.add("close");
			dim.classList.toggle("active");
			gsap.to(tab, { x: -280, duration: 0.5 }); // transform: translateX()
			gsap.to(mobile, { right: 0, duration: 0.5 });
		}
		else{
			body.classList.remove("fixed");
			tab.classList.remove("close");
			dim.classList.remove("active");
			gsap.to(tab, { x: 0, duration: 0.5 });
			gsap.to(mobile, { right: -280, duration: 0.5 });
		}
	});
	

	btnTop.addEventListener("click", function (e) {
		e.preventDefault();
		gsap.to(window, { scrollTo: 0, duration: 0.4 });
	});

	const tl1 = gsap.timeline();

	tl1.from(".overlay span", { y: 30, opacity: 0, duration: 0.8 });
	tl1.from(".overlay strong", { y: 30, opacity: 0, duration: 0.8 });
	tl1.from(".overlay .more", { y: 30, opacity: 0, duration: 0.8 });


	// business Section
	const tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: "#business",
			start: "top center",
			end: "bottom 20%"
		}
	});
	let businessList = document.querySelectorAll("#business li");

	businessList.forEach(function (item, i) {
		if (i % 2 == 1) {
			tl2.fromTo(item, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
		else {
			tl2.fromTo(item, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
	});

	// Portfolio Section
	const tl3 = gsap.timeline({
		scrollTrigger: {
			trigger: "#portfolio",
			start: "top center",
			end: "bottom 20%"
		}
	});
	let portfolioList = document.querySelectorAll("#portfolio li");

	portfolioList.forEach(function (item, i) {
		if (i % 2 == 1) {
			tl3.fromTo(item, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
		else {
			tl3.fromTo(item, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
	});

	// Culture Section
	const tl4 = gsap.timeline({
		scrollTrigger: {
			trigger: "#culture",
			start: "top center",
			end: "bottom 20%"
		}
	});
	let cultureList = document.querySelectorAll("#culture li");
	
	cultureList.forEach(function (item, i) {
		if (i % 2 == 1) {
			tl4.fromTo(item, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
		else {
			tl4.fromTo(item, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
	});

	// Awards Section
	const tl5 = gsap.timeline({
		scrollTrigger: {
			trigger: "#awards",
			start: "top center",
			end: "bottom 20%"
		}
	});
	let awardsList = document.querySelectorAll("#awards li");

	awardsList.forEach(function (item, i) {
		if (i % 2 == 1) {
			tl5.fromTo(item, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
		else {
			tl5.fromTo(item, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
	});

	// contact Section
	const tl6 = gsap.timeline({
		scrollTrigger: {
			trigger: "#contact",
			start: "top center",
			end: "bottom 20%"
		}
	});

	tl6.fromTo(".column .row", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
	tl6.fromTo(".column .message", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }); 
	tl6.fromTo(".button", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }); 
});

