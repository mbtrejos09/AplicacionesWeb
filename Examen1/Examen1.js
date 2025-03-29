const contenedorBotones = document.querySelector(".teclas");

contenedorBotones.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const valor = event.target.textContent;
    printValor(valor);
  }
});

function printValor(valor) {
    const display = document.getElementById("resultado");
  
    if (valor === "C") {
      display.value = "0";
    } else if (valor === "Del") {
      display.value = display.value.slice(0, -1) || "0";
    } else if (valor === "=") {
      try {
        display.value = eval(display.value.replace(/x/g, "*").replace(/÷/g, "/"));
      } catch {
        display.value = "Error";
      }
    } else if (valor === "+/-") {
      display.value = display.value.startsWith("-") 
        ? display.value.slice(1) 
        : "-" + display.value;
    } else {
      if (display.value === "0") {
        display.value = valor;
      } else {
        display.value += valor;
      }
    }
  }