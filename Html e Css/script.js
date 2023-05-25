function mudarCorDeFundo(corFundo, corTexto, corBorda) {
  var container = document.getElementById('container');
  var quadradoUm = document.getElementById('quadradoUm');
  var quadradoDois = document.getElementById('quadradoDois');
  container.style.backgroundColor = corFundo;
  container.style.color = corTexto;
  quadradoUm.style.borderColor = corBorda;
  quadradoDois.style.borderColor = corBorda;
  }

  function enviado(){
    alert("Formulario enviado!")
  }