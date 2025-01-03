    AOS.init();

    const dataDoEvento = new Date("Jun 23, 2024 19:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaAsHoras = setInterval(() => { 
        const agora = new Date();
        const timeStampAtual = agora.getTime();
    
        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
        
        const dias = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);
    
        // Atualizando os valores no DOM
        document.getElementById('dias').innerText = dias > 0 ? dias : 0;
        document.getElementById('horas').innerText = horas > 0 ? horas : 0;
        document.getElementById('minutos').innerText = minutos > 0 ? minutos : 0;
        document.getElementById('segundos').innerText = segundos > 0 ? segundos : 0;
    
        if (distanciaAteOEvento < 0) { 
            clearInterval(contaAsHoras);
            document.querySelectorAll('.hero__countdown__item__number').forEach(el => el.innerText = '0');
    
            // Adicionando mensagem ao término do evento
            const mensagemHero = document.querySelector('.hero__message');
            mensagemHero.innerHTML = `
                <h2>O evento já aconteceu!</h2>
                <p>Obrigado por acompanhar! Fique ligado para mais novidades e eventos futuros.</p>
            `;
    
            // Escondendo o contador
            const countdown = document.querySelector('.hero__countdown');
            countdown.style.display = 'none';
        }
    }, 1000);

document.addEventListener('DOMContentLoaded', function () { 
    contaAsHoras();
})