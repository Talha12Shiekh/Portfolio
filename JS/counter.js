let counters_content = document.querySelectorAll(".counter h1");
let counterscontainer = document.querySelector('.counters');

let intersection = new IntersectionObserver((entry, observer) => {
    let [entries] = entry;
    if (!entries.isIntersecting) return;
    increaseCounters()
    observer.unobserve(counterscontainer)
}, { root: null, rootMargin: "0px", threshold: 0.2 });

intersection.observe(counterscontainer)


function increaseCounters() {
    counters_content.forEach(heading => {

        heading.innerHTML = 0;
        const updateCounter = () => {
            let targetCount = +heading.getAttribute("data-counter");

            let startingCOunt = Number(heading.innerHTML)

            let increaseCount = targetCount / 100;

            if (startingCOunt < targetCount) {
                heading.innerHTML = `${startingCOunt + increaseCount}`;
                setTimeout(() => {
                    updateCounter();
                }, 10);
            } else {
                heading.innerHTML = targetCount
            }
        }

        updateCounter()

    })
}


