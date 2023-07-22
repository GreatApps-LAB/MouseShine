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
  // Define o ID do elemento que será afetado pelo efeito de brilho.
  let id = "#e_271767_1_168997918381134658";

  // Obtém a referência do elemento pelo seletor de ID.
  let glow = document.querySelector(id);

  // Cria um elemento <style> para adicionar estilos dinamicamente.
  const styleElement = document.createElement("style");

  // Define o código CSS para o efeito de brilho.
  const styleCode = `
    // Aplica o filtro de desfoque e modo de mesclagem às classes com o nome .c dentro do elemento com o ID selecionado.
    ${id} .c {
      backdrop-filter: blur(50px);
      mix-blend-mode: screen;
    }

    // Define estilos iniciais para o elemento com o ID selecionado.
    ${id} {
      position: relative;
      border-radius: 10px;
      cursor: pointer;
      overflow: hidden;
    }

    // Cria um pseudo-elemento ::before para o elemento com o ID selecionado.
    ${id}::before {
      --size: 0;
      content: '';
      appearance: none;
      pointer-events: none;
      position: absolute;
      // Aplica um filtro de desfoque ao pseudo-elemento.
      filter: blur(180px);
      // Define a posição do pseudo-elemento com base nas variáveis --x e --y.
      left: var(--x);
      top: var(--y);
      // Define o tamanho do pseudo-elemento com base na variável --size.
      width: var(--size);
      height: var(--size);
      // Aplica um gradiente radial vermelho como fundo do pseudo-elemento.
      background: radial-gradient(#ff0000, transparent);
      // Centraliza o pseudo-elemento no elemento pai.
      transform: translate(-50%, -50%);
      // Define uma transição suave para o tamanho do pseudo-elemento.
      transition: width 0.5s ease, height 0.5s ease;
    }

    // Quando o elemento com o ID selecionado é hover, define o tamanho do pseudo-elemento para 1000px para criar o efeito de brilho.
    ${id}:hover::before {
      --size: 1000px;
    }
  `;

  // Define o código CSS dentro do elemento <style>.
  styleElement.innerHTML = styleCode;

  // Adiciona o elemento <style> ao <head> do documento para que os estilos sejam aplicados.
  document.head.appendChild(styleElement);

  // Função que atualiza a posição do mouse e aplica a posição no elemento de brilho.
  function updateMousePosition(e) {
    // Obtém o retângulo que representa o elemento em relação à janela.
    let rect = e.target.getBoundingClientRect();
    // Calcula a posição do mouse em relação ao elemento, subtraindo as coordenadas do retângulo.
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    // Define as variáveis CSS --x e --y para a posição do mouse.
    glow.style.setProperty("--x", x + "px");
    glow.style.setProperty("--y", y + "px");
  }

  // Adiciona um evento 'mousemove' ao elemento de brilho para chamar a função de atualização.
  glow.addEventListener("mousemove", updateMousePosition);
</script>
```
