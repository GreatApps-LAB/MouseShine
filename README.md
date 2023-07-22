<a href="https://www.buymeacoffee.com/claitonllemes" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/99222756/210368404-216273fb-c930-453e-b32b-e3614872eba3.png" width="100%"/></a><br>

# InterativeShine

Este repositório contém um pequeno script JavaScript que implementa um elegante efeito de brilho circular em um elemento HTML específico. O efeito de brilho é ativado quando o mouse é movido sobre o elemento, criando uma interação visualmente atraente para os usuários.

O código utiliza recursos modernos de CSS, como filtro de desfoque e modo de mesclagem, para alcançar um efeito suave.

O repositório inclui também uma breve documentação sobre como usar e personalizar o efeito para se adequar a diferentes projetos. É um ótimo recurso para desenvolvedores interessados em melhorar a experiência do usuário em suas páginas da web de maneira simples e elegante.

### Notas Adicionais:

Este projeto foi criado com base nas melhores práticas de desenvolvimento web e está pronto para ser integrado em diferentes projetos.

Sinta-se à vontade para abrir issues, enviar pull requests ou contribuir com melhorias para tornar o efeito ainda mais versátil e atrativo. Se você encontrar algum problema ou tiver dúvidas, por favor, relate-os na seção de issues do repositório.

```html
<script>
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
</script>
```
