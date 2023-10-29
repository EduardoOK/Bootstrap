function validardesc() {
  if (desc.value.trim() === '') {
    desc.style.background = 'yellow';
    mensagem.innerHTML = 'preencha a descrição do produto';
    $('#alerta').modal('show');
    return false;
  } else {
    desc.style.background = 'white';
    return true;
  }
}
function validarQtd() {
  var erro = false;
  if (qtd.value.trim() === '') {
    erro = true;
  } else {
    if (isNaN(qtd.value) === true) {
      erro = true;
    } else {
      var nQtd = parseInt(qtd.value);
      if (nQtd < 1 || nQtd > 999) {
        erro = true;
      }
    }
  }

  if (erro === true) {
    qtd.style.background = 'yellow';
    mensagem.innerHTML =
      'A quantidade deve ser maior que 1 e menor que 999';
    $('#alerta').modal('show');
  } else {
    qtd.style.background = 'white';
  }
  return !erro;
}
function validarPreco() {
  var erro = false;
  if (unit.value.trim() === '') {
    erro = true;
  } else {
    if (isNaN(unit.value) === true) {
      erro = true;
    } else {
      var nUnit = parseFloat(unit.value);
      if (nUnit <= 0.0) {
        erro = true;
      } else {
        unit.value = nUnit.toFixed(2);
      }
    }
  }

  if (erro === true) {
    unit.style.background = 'yellow';
    mensagem.innerHTML =
      'O Preço unitário deve ser um número maior que zero!';
    $('#alerta').modal('show');
  } else {
    unit.style.background = 'white';
  }
  return !erro;
}
function calcular() {
  if (validardesc() && validarQtd && validarPreco) {
    var ntotal = parseFloat(unit.value) * parseInt(qtd.value);
    total.value = ntotal.toFixed(2);
  }
}
