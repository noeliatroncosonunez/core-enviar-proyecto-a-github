const buttons = document.querySelectorAll(".boton-megusta");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
      const current = Number(button.dataset.count || 0);
    const next = current + 1;
    button.dataset.count = String(next);
    button.textContent = `${next} Me gusta`;
  });
});

const loginButton = document.getElementById("btnLogin");
if (loginButton) {
  loginButton.addEventListener("click", () => {
    const isLogin = loginButton.textContent.trim() === "Iniciar sesión";
    loginButton.textContent = isLogin ? "Cerrar sesión" : "Iniciar sesión";
  });
}

const perfilButton = document.querySelector(".boton-perfil");
if (perfilButton) {
  perfilButton.addEventListener("click", () => {
    alert("Abriendo perfil del usuario");
  });
}

const searchInput = document.getElementById("txtSearch");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    console.log("Buscando:", searchInput.value);
  });
}
