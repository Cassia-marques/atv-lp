// 💫 Interatividade UniSonic

// Pega o formulário
const form = document.querySelector("form");

// Adiciona evento de envio
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o envio automático

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Verificação simples dos campos
  if (nome === "" || email === "" || mensagem === "") {
    alert("⚠️ Por favor, preencha todos os campos antes de enviar!");
    return;
  }

  // Validação do e-mail (somente domínios populares)
  const dominiosValidos = ["@gmail.com", "@hotmail.com", "@outlook.com", "@estudante.ifro.edu.br"];
  const emailValido = dominiosValidos.some(dominio => email.endsWith(dominio));

  if (!emailValido) {
    alert("❌ Use um e-mail válido (ex: @gmail.com, @hotmail.com ou institucional).");
    return;
  }

  // Caso esteja tudo certo
  alert(`✅ Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);
  form.reset(); // Limpa os campos
});
