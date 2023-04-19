export default {
	init: (app, gsap, Kira) => {
		


        /*
        |
		| Kira
		|-----------
        */
        const kira = new Kira({
            loadEvent: [body, 'dom:ready'],
            scrollTrigger: {
                markers: false,
                //scroller: scrollContainerSelector,
            },
            tweenParams: {
                start: '-=0.4'
            }
        });

        /*
        | fadeInUp
        |-----------
        */
        kira.add('fadeInUp', (item, timeline, start) => {
            timeline.fromTo(item, { y: 50 }, { y: 0, autoAlpha: 1, ease: 'easeSmooth', duration: 1 }, start)
        });

        /*
        | fadeInUp.parallax.sm
        |-----------------------
        */
        kira.add('zoomOut', (item, timeline, start) => {
            timeline.fromTo(item, { scale: 1.1 }, { scale: 1, ease: 'easeSmooth', duration: 1 }, start)
        });

        /*
        | splitline
        |------------
        */
        kira.add('splitline', (item, timeline, start) => {
            const delay = item.dataset.delay ? item.dataset.delay : 0.012;

            item.querySelectorAll('.item-line').forEach( line => {
                timeline.from($(line).find('> div, > em, > span'), 1.35, { y: '101%', ease: 'easeSmooth' }, start)
            } )
        });

        /*
        | splittext.long
        |-----------------
        */
        kira.add('splittext.long', (item, timeline, start) => {
            const delay = item.dataset.delay ? item.dataset.delay : 0.01;

            timeline.staggerFrom(item.split.chars, 0.8, {y: 5, opacity: 0, ease: 'Sine.ease0ut' }, delay, start)
        });

        /*
        | fadeInLeft.parallax.sm
        |-------------------------
        */
        kira.add('fadeInLeft.stagger.sm', ($item, timeline, start) => {
            timeline.staggerFromTo($item.querySelectorAll('[data-stagger-item]'), 0.6, { x: 20 }, { autoAlpha: 1, x: 0, ease: 'Power1.easeOut' }, '0.1', start)
        });

        /*
        | fadeInUp.parallax.sm
        |-------------------------
        */
        kira.add('list', ($item, timeline, start) => {
            timeline.fromTo($item.querySelectorAll('[data-stagger-item]'), { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, ease: 'Power1.easeOut', duration: 0.5, stagger: 0.1 }, start)
        });

        kira.init();
	}
}