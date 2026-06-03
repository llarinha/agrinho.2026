const numeros = document.querySelectorAll('.numero');

function animarNumeros() {

    numeros.forEach(numero => {

        const alvo = +numero.dataset.target;
        let atual = 0;

        const incremento = alvo / 100;

        const contador = setInterval(() => {

            atual += incremento;

            if(atual >= alvo){

                numero.innerText =
                    alvo >= 1000 ? alvo + "+" : alvo + "%";

                clearInterval(contador);

            } else {

                numero.innerText =
                    Math.floor(atual);

            }

        },20);

    });

}

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animarNumeros();
            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".stats"));