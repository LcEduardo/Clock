function relogio() { //Declaro a função
    var mostraHora = document.getElementById('date'); //Conecto com o id da div que eu quero mostrar as horas
    var dataAtual = new Date(); //Chamo a função Date

    var horas = dataAtual.getHours(); //Declaro especificamente uma váriavel para horas
    var minutos = dataAtual.getMinutes(); //Declaro especificamente uma váriavel para minutos
    var segundos = dataAtual.getSeconds(); //Declaro especificamente uma váriavel para segundos

    var horaFormatada = (horas < 10 ? '0' : '') + horas + ':' + (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos; //Declaro uma váriavel própria para formatar como irá mostrar as horas, minutos e segundos

    mostraHora.style.paddingTop = '30px'; //Atribuo um padding no conteudo que será mostrado

    mostraHora.innerHTML = `${horaFormatada}` //Mostro as horas na minha div
}

relogio(); //Chama a função

setInterval(relogio, 1000); //Atualiza o relógio sem atualizar a página