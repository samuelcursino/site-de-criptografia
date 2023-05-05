function criptografar() {
  var mensagem = document.getElementById("mensagem").value;
  var chave = 3; // valor fixo de deslocamento

  var mensagemCriptografada = "";
  for (var i = 0; i < mensagem.length; i++) {
    var codigoAscii = mensagem.charCodeAt(i);
    var novoCodigoAscii = codigoAscii + chave;
    var novaLetra = String.fromCharCode(novoCodigoAscii);
    mensagemCriptografada += novaLetra;
  }

  document.getElementById("mensagem-criptografada").textContent = mensagemCriptografada;
}
