// Função para aplicar o efeito de brilho em vários elementos com base no ID
function addGlowEffect(id) {
  let glow = document.querySelector(id);
  const styleElement = document.createElement("style");
  const styleCode = `
      ${id} .c {
        backdrop-filter: blur(10px);
        mix-blend-mode: screen;
      }

      ${id} {
        position: relative;
        border-radius: 40px;
        cursor: pointer;
        overflow: hidden;
      }

      ${id}::before {
        --size: 0;
        content: '';
        appearance: none;
        pointer-events: none;
        position: absolute;
        filter: blur(20px);
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(#ffdd90, transparent);
        transform: translate(-50%, -50%);
        transition: width 0.5s ease, height 0.5s ease;
        z-index: 2000;
      }

      ${id}:hover::before {
        --size: 150px;
      }
    `;

  styleElement.innerHTML = styleCode;
  document.head.appendChild(styleElement);

  function updateMousePosition(e) {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    glow.style.setProperty("--x", x + "px");
    glow.style.setProperty("--y", y + "px");
  }

  glow.addEventListener("mousemove", updateMousePosition);
}

// Chamando a função para cada ID desejado
addGlowEffect("#e_001");
addGlowEffect("#e_002");
addGlowEffect("#e_003");
