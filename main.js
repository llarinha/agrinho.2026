// CONTADORES ANIMADOS

const counters = document.querySelectorAll(".contador");

const startCounters = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);
        const increment = target / 100;

        const updateCounter = () => {

            const current = Number(counter.innerText);

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                if (target === 1000) {
                    counter.innerText = "1000+";
                } else {
                    counter.innerText = target + "%";
                }

            }

        };

        updateCounter();

    });

};

// OBSERVER PARA INICIAR CONTADORES APENAS QUANDO APARECEREM

const statsSection = document.querySelector(".estatisticas");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounters();

            observer.unobserve(statsSection);

        }

    });

}, {
    threshold: 0.4
});

observer.observe(statsSection);

// ANIMAÇÃO DE ENTRADA DOS CARDS

const cards = document.querySelectorAll(".card, .noticia");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => {

    card.classList.add("hidden");

    revealObserver.observe(card);

});