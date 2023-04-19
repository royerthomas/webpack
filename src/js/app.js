/*
|
| Importing Libs
|------------------
*/
import gsap from "gsap";
import ScrollTo from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTo);

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

import lottie from "lottie-web";

/*
|
| Importing Components
|-----------------------
*/
import Kira from '@elements/kira.js';

/*
|
| Importing Utils
|-------------------
*/
import Router from '@utils/router.js';

/*
|
| Importing App files
|----------------------
*/
import * as app from '@elements/global.js';
import main from '@pages/main.js';
import animations from '@pages/animations.js';

/*
|
| Importing Components files
|----------------------
*/

/*
|
| Routing
|----------
*/
const routes = new Router([
    {
      'file': animations,
      'dependencies': [app, gsap, Kira]
    },
	  {
      'file': main,
      'dependencies': [app, gsap]
    },
]);

/*
|
| Run
|------
*/
(($) => { routes.load() })(jQuery);
