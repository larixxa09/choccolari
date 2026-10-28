// ===============================
// ELEMENTOS DO FORMULÁRIO
// ===============================

const formulario = document.getElementById("formCadastro");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const dataNascimento = document.getElementById("dataNascimento");

const mensagem = document.getElementById("mensagem");
const botaoGoogle = document.getElementById("botaoGoogle");

// ===============================
// FORMATAÇÃO DA DATA
// ===============================

dataNascimento.addEventListener("input", function () {
  let valor = dataNascimento.value.replace(/\D/g, "");

  if (valor.length > 8) {
    valor = valor.substring(0, 8);
  }

  if (valor.length > 4) {
    valor =
      valor.substring(0, 2) +
      "/" +
      valor.substring(2, 4) +
      "/" +
      valor.substring(4);
  } else if (valor.length > 2) {
    valor = valor.substring(0, 2) + "/" + valor.substring(2);
  }

  dataNascimento.value = valor;
});

// ===============================
// VALIDAR DATA DE NASCIMENTO
// ===============================

function validarData(data) {
  const formato = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!formato.test(data)) {
    return false;
  }

  const partes = data.match(formato);

  const dia = Number(partes[1]);
  const mes = Number(partes[2]);
  const ano = Number(partes[3]);

  const nascimento = new Date(ano, mes - 1, dia);
  const hoje = new Date();

  // Confere se a data existe
  if (
    nascimento.getFullYear() !== ano ||
    nascimento.getMonth() !== mes - 1 ||
    nascimento.getDate() !== dia
  ) {
    return false;
  }

  // Não aceita datas futuras
  if (nascimento > hoje) {
    return false;
  }

  return true;
}

// ===============================
// MOSTRAR MENSAGEM
// ===============================

function mostrarErro(texto) {
  mensagem.style.color = "#A32323";
  mensagem.textContent = texto;
}

// ===============================
// VALIDAR CADASTRO
// ===============================

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  mensagem.textContent = "";

  // Validar nome
  if (nome.value.trim().length < 3) {
    mostrarErro("Digite seu nome completo corretamente.");

    nome.focus();
    return;
  }

  // Validar e-mail
  if (!email.checkValidity()) {
    mostrarErro("Digite um endereço de e-mail válido.");

    email.focus();
    return;
  }

  // Validar senha
  if (senha.value.length < 8) {
    mostrarErro("A senha deve ter pelo menos 8 caracteres.");

    senha.focus();
    return;
  }

  // Confirmar senha
  if (senha.value !== confirmarSenha.value) {
    mostrarErro("As senhas não são iguais.");

    confirmarSenha.focus();
    return;
  }

  // Validar data
  if (!validarData(dataNascimento.value)) {
    mostrarErro("Digite uma data de nascimento válida.");

    dataNascimento.focus();
    return;
  }

  // Todos os campos foram validados
  mensagem.style.color = "#287A35";

  mensagem.textContent =
    "Dados validados com sucesso! Integre o formulário ao sistema para criar sua conta.";

  console.log("Formulário validado:", {
    nome: nome.value.trim(),
    email: email.value.trim(),
    dataNascimento: dataNascimento.value,
    receberNovidades: document.getElementById("novidades").checked,
  });
});

// ===============================
// CADASTRAR COM GOOGLE
// ===============================


const botaogoogle = document.getElementById("botaogoogle");

botaoGoogle.addEventListener("click", function () {
    window.location.href = "https://accounts.google.com/";
});

