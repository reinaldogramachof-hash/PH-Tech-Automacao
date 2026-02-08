# 🚀 Guia de Deploy - HostGator cPanel

Este guia detalha o processo para colocar o site **PH Tech Automação** no ar utilizando a hospedagem HostGator (cPanel).

## 1. Preparação (Build)

Antes de enviar os arquivos, precisamos "construir" a versão otimizada do site.

1.  Abra o terminal na pasta do projeto.
2.  Execute o comando:
    ```bash
    npm run build
    ```
3.  Aguarde o processo finalizar. Uma nova pasta chamada `dist` será criada (ou atualizada) na raiz do projeto.

---

## 2. O Que Enviar (Arquivos)

**Atenção:** Você NÃO deve enviar a pasta do projeto inteira (como `src`, `node_modules`, etc).
Você deve enviar **APENAS** o conteúdo de dentro da pasta `dist`.

A estrutura final no servidor (dentro de `public_html`) deve ficar assim:

```text
public_html/
├── assets/             <-- Pasta (contém JS e CSS otimizados)
├── index.html          <-- Arquivo Principal
├── logosite.png        <-- Logo Rodapé
├── logo2.png           <-- Logo Header/Favicon
├── sitemap.xml         <-- Sitemap
├── robots.txt          <-- Arquivo Robots
├── manifest.json       <-- Manifesto
└── *.jpg/*.svg         <-- Outras imagens da raiz
```

---

## 3. Upload "Automático" (O jeito Ninja 🥷)

Para facilitar, criei um script que faz o trabalho chato por você.

1.  No terminal, certifique-se de que já rodou o `npm run build`.
2.  Execute o script de automação:
    ```bash
    python prepare_deploy.py
    ```
3.  Isso criará um arquivo chamado **`deploy.zip`** na raiz do seu projeto.
    *   *Nota: Esse zip já contém os arquivos soltos (index.html, etc) prontos para a raiz do servidor, sem a pasta 'dist'.*

### Passo Único: Enviar para HostGator
1.  Acesse o **cPanel** -> **Gerenciador de Arquivos**.
2.  Vá para `public_html` (ou a pasta do seu domínio).
3.  Clique em **Carregar** e suba o arquivo `deploy.zip`.
4.  Clique com o botão direito no arquivo lá no servidor e escolha **Extrair (Extract)**.
5.  Pronto! Pode apagar o zip depois.

---

## 4. Verificação Final

Acesse o site `phtechautomacao.com.br` (ou o domínio configurado) e verifique:
1.  Se o **Logo** no topo e rodapé carregam.
2.  Se as **fontes** e ícones aparecem.
3.  Se ao clicar em "Orçamento", o **Modal** abre corretamente.
4.  Se não há erro 404 no console (F12).

---

## 💡 Automação Avançada (Opcional)

Se desejar subir os arquivos via linha de comando no futuro (FTP automático), recomenda-se instalar o pacote `ftp-deploy`:

1.  `npm install ftp-deploy --save-dev`
2.  Criar um script `deploy.js` com as credenciais de FTP.
3.  Rodar `node deploy.js`.

*Para este momento, o método do ZIP via cPanel é o mais seguro e eficiente.*
