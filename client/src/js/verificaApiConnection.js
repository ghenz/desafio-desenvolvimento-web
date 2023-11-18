async function checkServer() {
  try {
    const response = await fetch("http://localhost:3000/");
    const apiUp = await response.json();

  } catch (error) {
    alert(`
      ❌ Erro ao acessar a API: ${error}\n 
      ⚠️ Inicie a API localmente para testar a aplicação!
    `);
  }
}

checkServer();
