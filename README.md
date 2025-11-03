# Projeto Linguagem de Programação para WEB

## Informações Gerais
**Disciplina:** Linguagem de Programação para WEB  
**Alunos:** Vinicius Donini e Bruno Silva  
**Tema:** Loja de roupas focada em atividade física  
**Nome da loja:** VB Hustle Style  
**Linguagens utilizadas:** HTML, CSS e JavaScript  

---

## Descrição do Projeto
O **VB Hustle Style** é um site de loja virtual voltado ao público esportivo, com o objetivo de oferecer uma experiência moderna e intuitiva para o usuário.  
A interface foi desenvolvida com foco em **design limpo**, **usabilidade** e **navegação simples**, transmitindo energia e movimento.

---

## Estrutura do Projeto

### **HTML**
`<!DOCTYPE html> <html lang="pt-BR"> <head> <meta charset="UTF-8"> <link rel="icon" href="img/logo.PNG" type="image/x-icon"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>VB Hustle Style</title> <link rel="stylesheet" href="styles.css"> <link rel="stylesheet" href=""> </head> <body> <!-- Banner Promocional --> <div class="promo-bar"> Frete grátis em pedidos acima de R$199 🚚 </div> <!-- Header --> <header class="header"> <span class="logo">VB Hustle Style</span> <nav class="nav"> <ul> <li><a href="tiposroupas/masculina.html">Masculino</a></li> <li><a href="#">Feminino</a></li> <li><a href="#">Calçados</a></li> <li><a href="#">Novidades</a></li> <li><a href="#" onclick="alert('Página em desenvolvimento!')">Promoções</a></li> </ul> </nav> <div class="icons"> <!-- Lupa --> <a href="#" aria-label="Buscar"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="11" cy="11" r="8"/> <line x1="21" y1="21" x2="16.65" y2="16.65"/> </svg> </a> <!--Barra de pesquisa--> <input type="text" id="pesquisar" name="nome" placeholder="" required> <!-- Usuário --> <a href="#" aria-label="Conta"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="7" r="4"/> <path d="M5.5 21a8.38 8.38 0 0 1 13 0"/> </svg> </a> <!-- Carrinho --> <a href="#" aria-label="Carrinho"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="9" cy="21" r="1"/> <circle cx="20" cy="21" r="1"/> <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/> </svg> </a> </div> </header> <!-- Hero --> <section class="hero"> <div class="hero-content"> <h1>Estilo que Impulsiona</h1> <p>Vista o movimento. Sinta a energia.</p> <a href="#" class="btn">Comprar Agora</a> </div> </section> <!-- Coleções --> <section class="collections"> <h2>Destaques</h2> <div class="grid"> <div class="card"> <img src="/imagensRoupas/Roupasinicio/Tenis.webp" alt="Tênis"> <h3>Tênis Atividade Física</h3> </div> <div class="card"> <img src="/imagensRoupas/Roupasinicio/camiseta_dry_fit_masculina_azul.webp" alt="Roupas"> <h3>Dry Fit</h3> </div> <div class="card"> <img src="/imagensRoupas/Roupasinicio/camisa_de_compressao_termica.webp" alt="Esporte"> <h3>Performance</h3> </div> </div> </section> <!-- Banner --> <section class="banner"> <h2>Ganhe 15% Off na Primeira Compra</h2> <a href="#" class="btn">Aproveitar</a> </section> <!-- Produtos --> <section class="products"> <h2>Mais Vendidos</h2> <div class="grid"> <div class="product"> <img src="/imagensRoupas/Roupasabamasc/shortcompressao.webp" alt="Produto 1"> <p>Short Compressão VB</p> <span>R$ 79,90</span> </div> <div class="product"> <img src="/imagensRoupas/Roupasinicio/moletom VB.webp" alt="Produto 2"> <p>Moletom VB</p> <span>R$ 129,90</span> </div> <div class="product"> <img src="/imagensRoupas/Roupasinicio/camiseta_bold_oversized.webp" alt="Produto 3"> <p>Camiseta Bold</p> <span>R$ 119,90</span> </div> </div> </section> <!-- Formulário de Contato --> <section class="contact-form"> <h2>Fale Conosco</h2> <form id="Meuform" action="" method="post"> <label for="nome">Nome:</label> <input type="text" id="nome" name="nome" placeholder="Seu nome" required> <label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="seu@email.com" required> <label for="mensagem">Mensagem:</label> <textarea id="mensagem" name="mensagem" rows="4" placeholder="Escreva sua mensagem" required></textarea> <button type="submit">Enviar</button> <button onmouseover="this.style.backgroundColor = 'grey'" onmouseout="this.style.backgroundColor= 'rgb(95, 94, 94)' " id="limpar" type="reset">Limpar</button> </form> </section> <!-- Rodapé --> <footer class="footer"> <div class="footer-links"> <a href="#">Ajuda</a> <a href="#">Sobre Nós</a> <a href="#">Política de Privacidade</a> <a href="#">Contato</a> </div> <p>&copy; 2025 VB Hustle Style. Todos os direitos reservados.</p> </footer> <script src="node.js"></script> </body> </html>`

### **CSS**
`/* Reset básico */ * { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: "Arial", sans-serif; color: #f7f7f7; background: #777677; line-height: 1.6; background-size: 100%; background-image: url("https://img.freepik.com/free-photo/plain-smooth-green-wall-texture_53876-129746.jpg"); } /* Banner promocional */ .promo-bar { background: #ac860a; color: #fff; text-align: center; font-size: 14px; padding: 8px 0; } /* Header */ .header { display: flex; justify-content: space-between; align-items: center; padding: 15px 40px; background: #0c0c0c; position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid #000000; } .logo { font-size: 20px; font-weight: bold; text-transform: uppercase; } .nav ul { list-style: none; display: flex; gap: 20px; margin-left: 100px; } .nav a { text-decoration: none; color: #f8f8f8; font-weight: 500; } .nav a:hover { color: #d36b2f; } .icons a { margin-left: 20px; color: #fff; display: inline-flex; transition: transform 0.2s ease, color 0.2s ease; } .icons a:hover { color: #ac860a; transform: scale(1.2); } #pesquisar{ padding-top: 0.5vh; text-align: left; width: 100%; padding: 10px 40px 10px 15px; border: 2px solid #444; border-radius: 30px; background-color: #111; color: #fff; font-size: 16px; outline: none; } /* Hero */ .hero { background: url('https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000') no-repeat center/cover; color: #fff; height: 90vh; display: flex; align-items: center; padding: 0 60px; } .hero-content h1 { font-size: 3rem; margin-bottom: 20px; } .hero-content p { font-size: 1.2rem; margin-bottom: 20px; } .btn { display: inline-block; padding: 12px 25px; background: #d32f2f; color: #fff; text-decoration: none; font-weight: bold; border-radius: 4px; transition: background 0.3s; } .btn:hover { background: #b71c1c; } /* Coleções */ .collections { padding: 60px 40px; text-align: center; } .collections h2 { font-size: 2rem; margin-bottom: 40px; } .collections .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; } .card, .product { background: #0a0a0a; border-radius: 12px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer; } .card img, .product img { width: 100%; height: auto; display: block; transition: transform 0.3s ease; } .card:hover, .product:hover { transform: translateY(-10px); box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); } .card:hover img, .product:hover img { transform: scale(1.05); } .card h3{ background-color: fff; } /* Banner */ .banner { background: #000; color: #fff; text-align: center; padding: 60px 20px; } .banner h2 { font-size: 2rem; margin-bottom: 20px; } /* Produtos */ .products { padding: 60px 40px; text-align: center; } .products h2 { font-size: 2rem; margin-bottom: 40px; } .products .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; } .product img { width: 100%; border-radius: 8px; margin-bottom: 10px; } .product span { font-weight: bold; color: #fff; } /* Rodapé */ .footer { background: #111; color: #fff; text-align: center; padding: 30px 20px; } .footer-links { margin-bottom: 20px } .footer-links a { margin: 0 10px; text-decoration: none; color: #fff; font-size: 14px; } .footer-links a:hover { text-decoration: underline; } /* Formulário de Contato */ .contact-form { background: #111; padding: 50px 40px; margin: 0 auto; text-align: left; } .contact-form h2 { color: #fff; font-size: 3rem; margin-bottom: 60px; text-align: left; } .contact-form label { display: block; margin-bottom: 8px; color: #f7f7f7; font-weight: 500; font-size: 18px; } .contact-form input, .contact-form textarea { width: 100%; padding: 12px 15px; margin-bottom: 20px; border-radius: 8px; border: none; background: #111; color: #fff; font-size: 1rem; transition: background 0.3s, transform 0.2s; } .contact-form input:focus, .contact-form textarea:focus { background: #222; outline: none; transform: scale(1.02); } /* Botões do formulário */ .form-buttons { display: flex; justify-content: space-between; gap: 20px; } .contact-form button { flex: 1; padding: 12px 25px; background: #d32f2f; color: #fff; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; transition: background 0.3s, transform 0.2s; } .contact-form button:hover { background: #b71c1c; transform: scale(1.05); } .contact-form button[type="button"] { background: #555; } .contact-form button[type="button"]:hover { background: #777; } #pesquisar{ margin-top: 0.5px; font-size: 15px; width: 150px; color: white; background-color: black; margin-left: 15px; } .contact-form a{ color: white; text-decoration: none; } html{ scroll-behavior: smooth; scrollbar-color: rgb(48, 48, 48) black; } input::placeholder{ color: white; } #nome::placeholder{ color: grey; } #email::placeholder{ color: grey; } .popup-msg { position: fixed; bottom: 20px; right: 20px; background: #0c0c0c; color: #f7f7f7; padding: 14px 22px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.4); font-weight: 500; font-size: 15px; opacity: 0; transform: translateY(20px); animation: aparecer 0.4s forwards; z-index: 9999; } @keyframes aparecer { to { opacity: 1; transform: translateY(0); } } .popup-msg.hide { animation: desaparecer 0.4s forwards; } @keyframes desaparecer { to { opacity: 0; transform: translateY(20px); } } #limpar{ background-color: lightgrey; }`

### **JavaScript**
`const form = document.getElementById("Meuform"); form.addEventListener("submit", function(event) { event.preventDefault(); const nome = document.getElementById("nome").value; const email = document.getElementById("email").value; const mensagem = document.getElementById("mensagem").value; localStorage.setItem("nome", nome); localStorage.setItem("email", email); localStorage.setItem("mensagem", mensagem); window.location.href = "Formulário/formulariosimulado.html"; window.location.href = "/Formulário/formulariosimulado.html"; }); const input = document.getElementById("pesquisar"); const texto = "Pesquisar..."; let i = 0; function digitar () { if (i<texto.length) { input.placeholder += texto.charAt (i); i++; setTimeout(digitar, 100); } else{ setTimeout(()=> { input.placeholder = ""; i = 0; digitar(); }, 1000) } } digitar(); window.addEventListener("load", function() { const msg = document.createElement("div"); msg.classList.add("popup-msg"); msg.textContent = "Página carregada com sucesso!"; document.body.appendChild(msg); setTimeout(() => { msg.classList.add("hide"); setTimeout(() => msg.remove(), 500); },3000); }); document.getElementById("")` 

---

## Layout e Funcionalidades

### **HTML**
- Estrutura semântica com `header`, `section`, `footer` e `form`.
- Navegação principal com links para diferentes seções (Masculino, Feminino, Calçados etc.).
- Seções de **destaques**, **produtos**, **banner promocional** e **formulário de contato**.
- Design responsivo e limpo com foco em clareza visual.

### **CSS**
- Paleta de cores com predominância de preto, cinza e vermelho (#d32f2f).
- Efeitos de **hover**, **transições suaves** e **sombreamento** nos cards.
- Backgrounds com **imagens esportivas** e tipografia moderna.
- Estilo do formulário aprimorado com foco em acessibilidade e contraste.

### **JavaScript**
Arquivo: `node.js`

Funcionalidades implementadas:
1. **Armazenamento de formulário:**  
   - Captura os dados (nome, e-mail e mensagem) e salva no `localStorage`.
   - Redireciona o usuário para outra página após o envio.

2. **Placeholder animado:**  
   - Efeito de digitação automática no campo de pesquisa (`Pesquisar...`).

3. **Mensagem de carregamento:**  
   - Mostra uma notificação “Página carregada com sucesso!” quando o site é aberto.

4. **Eventos DOM:**  
   - Utilização de `addEventListener`, `window.load` e `preventDefault()`.

---

## Navegação
O site possui as seguintes seções principais:

- **Banner Promocional** – destaque de frete grátis.  
- **Header / Navbar** – com logo, categorias e ícones de busca, conta e carrinho.  
- **Hero Section** – mensagem principal e botão de chamada para ação (“Comprar Agora”).  
- **Coleções e Produtos** – exibição de itens com animações e destaque visual.  
- **Formulário de Contato** – campo para envio de mensagem (com JavaScript funcional).  
- **Rodapé (Footer)** – links institucionais e direitos autorais.

---
