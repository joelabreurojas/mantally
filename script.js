const linevar = document.querySelector("#linevar");

const typewriter = new Typewriter(linevar, {loop:true});

const year = document.querySelector("#year");

window.addEventListener('load', () =>{
    document.querySelector("#preloader").classList.add('hide');
});

typewriter.typeString('acttitude')
            .pauseFor(2000)
            .deleteAll()
            .typeString('goals')
            .pauseFor(2000)
            .deleteAll()
            .typeString('health')
            .pauseFor(2000)
            .deleteAll()
            .typeString('mentally')
            .pauseFor(2000)
            .start();

year.innerHTML = new Date().getFullYear();