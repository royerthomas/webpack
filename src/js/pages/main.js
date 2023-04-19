export default {
	init: (app, gsap) => {

		// Update CSS variables
		/////////////////////////////////////////////////////
		/////////////////////////////////////////////////////
		function updateCSSVariables(){

			let root = document.documentElement;
			let headerHeight = document.querySelector('.header').offsetHeight

			root.style.setProperty('--header-height', headerHeight + "px");
			root.style.setProperty('--viewport-height', window.innerHeight + "px");

		}

		updateCSSVariables()

		window.addEventListener('resize', function(){
			updateCSSVariables()
		})

		
	}
}