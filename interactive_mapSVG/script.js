(function(){
	const countries = document.querySelectorAll('.countries');
	const itemsBar = document.querySelectorAll('.itemBar');
	const btnPeople = document.getElementById('btnPeople');
	const point = document.getElementById('point');
	
	
	function addColorMap (item, color) {
		for(let i = 0; i < item.children.length; i++) {
			item.children[i].style.fill = color;
		}
	}
	
	function stopHighlightCountries() {
		clearInterval(timer)
	}
	
	function getCurrentPointValue() {
		console.log(point.innerHTML)
	}
	
	let len = countries.length;
	let	count = 0;
	let	pointVal = 100;
	let timer;
	let start = false;
	
	function startHighlightCountries() {
		
		timer = setInterval(function(){
			point.innerHTML = pointVal;
			if(count === countries.length) {
				for(let i = 0; i < countries.length; i++) {
					addColorMap(countries[i], "#999999");
					addColorMap(itemsBar[i], "#999999");
				}
				count = 0;
				point.innerHTML = 0;
				pointVal = 100;
				return false;
			}
			switch(countries[count].id) {
				case 'america':
					addColorMap(countries[count], "#a122ea");
					addColorMap(itemsBar[count], "#a122ea");
					break;
				case 'europe':
					addColorMap(countries[count], "#0081f1");
					addColorMap(itemsBar[count], "#0081f1");
					break;
				case 'russia':
					addColorMap(countries[count], "#ff2953");
					addColorMap(itemsBar[count], "#ff2953");
					break;
				case 'chine':
					addColorMap(countries[count], "#ff7346");
					addColorMap(itemsBar[count], "#ff7346");
					break;
				case 'africa':
					addColorMap(countries[count], "#ffba3d");
					addColorMap(itemsBar[count], "#ffba3d");
					break;
				case 'indonesia':
					addColorMap(countries[count], "#68dc00");
					addColorMap(itemsBar[count], "#68dc00");
					break;
				case 'australia':
					addColorMap(countries[count], "#00ca94");
					addColorMap(itemsBar[count], "#00ca94");
					break;
				case 'south_america':
					addColorMap(countries[count], "#03a2d8");
					addColorMap(itemsBar[count], "#03a2d8");
					break;
			}	
			count++;
			pointVal += 100;
		
	
		}, 1000)
	}
	
	startHighlightCountries()
	
	btnPeople.addEventListener('click', function(e) {
		if(!start) {
				stopHighlightCountries();
				console.log(point.innerHTML)
				start = true;
				return;
		}
		startHighlightCountries()
		start = false;
	})
}())

































// function start(count) {
// 	var count = count || 0;
//   var timerId = setInterval(function() {
// 		if (count > countries.length) {
// 			console.log('btn')
// 			clearInterval(timerId);
// 			return false;
// 		}
// 		if (count === countries.length) {
// 			console.log('start')

// 			clearInterval(timerId);
// 			return start()
// 		}
		

// 		count++;	
// 	}, 1000);

// };
// start();
// btn.addEventListener('click', function(e) {
// 	console.log(20)
// 	start(20)
// })

