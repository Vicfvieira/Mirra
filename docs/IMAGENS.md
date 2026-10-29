# Imagens — tamanhos e proporções

Todas as imagens passam por `image_url` + `srcset` (o Shopify gera as larguras menores) e carregam com `loading="lazy"`, exceto a do hero no topo da página. Envie **JPG ou WebP** (PNG só quando precisar de transparência), com até ~500 KB.

| Onde | Campo | Tamanho ideal | Proporção | Observações |
|---|---|---|---|---|
| Hero | Imagem principal | **1600 × 2000 px** | 4:5 (retrato) | Também aceita 2:3 (1600 × 2400) ou 1:1. Assunto centralizado — a moldura corta as bordas. |
| Hero | Imagem pequena sobreposta | 800 × 800 px | 1:1 | Detalhe/textura. |
| Coleções (cards) | Imagem opcional / imagem da coleção | 1200 × 900 px | 4:3 | Se vazia, usa a imagem da coleção do admin. |
| Fundadora | Foto | **1200 × 1500 px** | 4:5 | Retrato com fundo limpo. |
| Fundadora | Assinatura manuscrita | **600 × 200 px** | 3:1 | **PNG com fundo transparente**, traço escuro (grafite ou vinho). |
| Newsletter | Imagem opcional | 1000 × 1000 px | 1:1 | |
| Depoimentos | Foto | 160 × 160 px | 1:1 | Recortada em círculo. Sem foto, mostra a inicial. |
| Topo de página | Imagem opcional | 1600 × 1067 px | 3:2 | |
| **Produtos** | Mídia do produto | **1600 × 2000 px** | **4:5** | Mínimo 2 por produto: principal (embalagem) + detalhe/textura/uso. A 2ª aparece no hover dos cards. Mantenha todas na mesma proporção. |
| Variantes | Imagem da variante | 1600 × 2000 px | 4:5 | Ex.: vela 200 g × 400 g. |
| Coleções (admin) | Imagem da coleção | 1600 × 1200 px | 4:3 | |
| Logo | Configurações › Logo | 600 × 200 px | ~3:1 | PNG/SVG transparente. Exibido com 140 px de largura. |
| Favicon | Configurações › Logo | 64 × 64 px | 1:1 | PNG. |
| Compartilhamento social | Preferências | 1200 × 628 px | ~1,91:1 | |

## Placeholders atuais
- No tema, campos de imagem vazios mostram o placeholder ilustrado da Shopify dentro da moldura MIRRA.
- No CSV, cada produto aponta para 2 imagens geradas em `placehold.co` nas cores da marca (1600 × 2000, texto com o nome do produto). Substitua pelas fotos finais em *Produtos › (produto) › Mídia*, ou troque as URLs na coluna **Image Src** e reimporte.

## Direção de arte sugerida
- Luz natural, sombras duras, fundos lisos nas cores da marca (creme, lilás, mel) — combina com a moldura de sombra sólida.
- Composições com objetos de cozinha/banheiro (vidro âmbar, cerâmica, ramos de alecrim e lavanda), toques retrô anos 70.
- Evite fundos brancos puros: o creme `#FFF6EC` do tema faz o branco parecer frio.
