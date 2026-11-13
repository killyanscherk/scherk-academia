# Scherk Academia

Site estático para GitHub Pages. A página inicial fica em `index.html`. Para rodar localmente, abra esse arquivo no navegador.

## Publicar novidades

- **Vídeo de apresentação**. Adicione o MP4 à pasta `assets/` ou hospede-o em uma URL pública compatível com a tag de vídeo HTML. Preencha `videoUrl` em `site.js`, por exemplo `'./assets/apresentacao.mp4'`. O player substitui a foto e a indicação de vídeo em breve. Para legendas, inclua uma faixa WebVTT no elemento de vídeo dentro de `#video-template`.
- **Máquinas novas**. Edite a seção `#novidades` no HTML. Substitua a imagem e o texto provisório por fotos, nomes e descrições dos equipamentos divulgados.
- **Fotos**. As imagens e o logo vêm do acervo já publicado pela Scherk. Para atualizar uma foto, substitua seu endereço no HTML. A imagem da abertura também aparece no pôster do vídeo e nas metatags de compartilhamento.

## Migração do domínio

Configure o domínio personalizado no GitHub Pages antes de alterar o DNS. Use as instruções de DNS exibidas pelo GitHub e confirme o HTTPS. Preserve o caminho `/historia` e `/passelivre` na migração. Este repositório inclui páginas que encaminham esses caminhos para as seções equivalentes.
