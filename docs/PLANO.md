# MIRRA — Plano de implementação

Loja demonstrativa (marca fictícia) construída sobre o **Dawn v16.0.0** (versão mais recente, obtida com `shopify theme init --clone-url https://github.com/Shopify/dawn.git`).

## Princípios

1. **Nada de "Dawn com logo trocado"**: identidade própria (molduras neo-brutalistas, selos em pílula, divisores ondulados, ícones próprios, títulos gigantes com palavra em itálico mel).
2. **Tudo editável no Editor de Temas**: textos, imagens, cores (esquemas), fontes, links, valores de frete grátis, cupom.
3. **Atualizável**: tudo que é novo leva o prefixo `mirra-`. Arquivos core do Dawn só recebem *ganchos* de uma linha, listados em [`ATUALIZANDO-O-DAWN.md`](ATUALIZANDO-O-DAWN.md).
4. **Sem cores fixas no CSS**: o CSS só usa variáveis que vêm dos esquemas de cor e das configurações do tema.
5. **Leve e acessível**: JS vanilla (Web Components), `image_url` + `srcset` + `loading="lazy"`, contraste AA, foco visível, ARIA, `prefers-reduced-motion`.

## Tokens de design aplicados

### Cores → Esquemas de cor do tema (Configurações do tema › Cores)

| Esquema | Fundo | Texto | Botão / rótulo | Destaque (itálico) | Sombra da moldura |
|---|---|---|---|---|---|
| scheme-1 **Creme** (base) | `#FFF6EC` | `#2A2226` | `#5B1A3A` / `#FFF6EC` | `#9A4E0C` *mel tostado* | `#5B1A3A` |
| scheme-2 **Lilás pó** | `#EBDDF0` | `#2A2226` | `#5B1A3A` / `#FFF6EC` | `#9A4E0C` | `#5B1A3A` |
| scheme-3 **Vinho-ameixa** | `#5B1A3A` | `#FFF6EC` | `#E8913A` / `#2A2226` | `#E8913A` *mel* | `#E8913A` |
| scheme-4 **Mel** | `#E8913A` | `#2A2226` | `#5B1A3A` / `#FFF6EC` | `#5B1A3A` | `#2A2226` |
| scheme-5 **Grafite** | `#2A2226` | `#FFF6EC` | `#E8913A` / `#2A2226` | `#E8913A` | `#E8913A` |

> **Por que "mel tostado" nos fundos claros?** O mel `#E8913A` sobre creme tem contraste 2,3:1 — reprova no AA mesmo para títulos grandes. Para a palavra em itálico nos fundos claros usamos `#9A4E0C` (5,7:1 no creme, 4,7:1 no lilás). Nos fundos vinho e grafite o mel puro passa (5,2:1 e 6,3:1). O mel puro continua nos botões secundários (texto grafite, 6,3:1), selos e sombras.

Contrastes verificados (WCAG 2.1): grafite/creme 14,5 · grafite/lilás 11,9 · vinho/creme 11,9 · creme/vinho (botão) 11,9 · grafite/mel 6,3.

A cor de **destaque** é um campo novo dentro de cada esquema (`mirra_accent`), então o cliente troca pelo Editor.

### Tipografia (Configurações do tema › Tipografia)

- Títulos: **Playfair Display 800** (`playfair_display_n8`) + itálico 800 carregado automaticamente para a palavra em destaque. Tracking negativo e entrelinha curta para o efeito "condensado/editorial".
- Corpo: **DM Sans 400** (`dm_sans_n4`), negrito 700.
- Escala: títulos gigantes com `clamp()` (≈ 44 px no mobile → 128 px no desktop), controlados por um seletor de tamanho em cada seção.

### Forma

- Botões em pílula (raio 40), borda 2 px.
- Moldura MIRRA: borda espessa + sombra sólida deslocada (sem desfoque). Usa as configurações **Mídia** do Dawn (espessura, deslocamento, raio) como fonte única, portanto vale também para a galeria de produto.
- Cards de produto: estilo "cartão" com borda e sombra sólida (configurações **Cartões de produto** do Dawn).

## Arquivos

### Novos — seções (17)

| Seção | Nome no editor | Onde |
|---|---|---|
| `mirra-announcement-marquee` | MIRRA — Letreiro | Cabeçalho |
| `mirra-hero` | MIRRA — Hero editorial | Home |
| `mirra-benefits` | MIRRA — Benefícios | Home, coleção, Sobre |
| `mirra-collection-cards` | MIRRA — Coleções | Home |
| `mirra-featured-products` | MIRRA — Mais vendidos | Home, 404 |
| `mirra-wave-divider` | MIRRA — Divisor ondulado | Entre seções |
| `mirra-founder` | MIRRA — Fundadora | Home, Sobre |
| `mirra-ritual-steps` | MIRRA — Monte seu ritual | Home |
| `mirra-testimonials` | MIRRA — Depoimentos | Home |
| `mirra-newsletter` | MIRRA — Newsletter | Home, Sobre |
| `mirra-footer` | MIRRA — Rodapé | Rodapé |
| `mirra-product-sticky-bar` | MIRRA — Compra fixa | Produto |
| `mirra-page-hero` | MIRRA — Topo de página | Sobre, FAQ, Contato |
| `mirra-rich-text` | MIRRA — Texto editorial | Sobre |
| `mirra-faq` | MIRRA — Perguntas (FAQ) | FAQ |
| `mirra-contact-info` | MIRRA — Canais de contato | Contato |
| `mirra-404` | MIRRA — Página 404 | 404 |

### Novos — snippets

`mirra-theme-tokens` (variáveis por esquema + itálico do título + CSS global) · `mirra-icon` (ícones próprios) · `mirra-pill` (selo em pílula) · `mirra-framed-image` (imagem emoldurada com srcset/lazy) · `mirra-wave` (SVG ondulado) · `mirra-product-badges` (Novo / Mais vendido / Últimas unidades) · `mirra-product-pills` (selos na página de produto) · `mirra-installments` (parcelamento) · `mirra-free-shipping-bar` (frete grátis) · `mirra-coupon` (cupom com copiar)

### Novos — assets

`mirra-base.css` (utilitários da marca) · `mirra-skin.css` (pele sobre o Dawn: tipografia, header, cards, filtros, produto, acordeões, gaveta) · CSS por seção (`mirra-hero.css`, `mirra-benefits.css`, …, `mirra-pages.css`, `mirra-product.css`) · JS: `mirra-marquee.js`, `mirra-carousel.js`, `mirra-product.js`, `mirra-copy.js`

### Templates

`index.json`, `product.json`, `collection.json`, `page.sobre.json`, `page.faq.json`, `page.contact.json`, `404.json`, `sections/header-group.json`, `sections/footer-group.json`

### Alterados no core do Dawn (ganchos mínimos)

Ver [ATUALIZANDO-O-DAWN.md](ATUALIZANDO-O-DAWN.md): `layout/theme.liquid` (1 linha), `snippets/card-product.liquid` (2), `snippets/cart-drawer.liquid` (1), `sections/main-cart-footer.liquid` (1), `sections/main-product.liquid` (2 blocos), `config/settings_schema.json`, `config/settings_data.json`, `locales/pt-BR.json` e `locales/en.default.json`.

## Etapas e commits

1. Tokens e tipografia
2. Barra de anúncio + header
3. Hero
4. Demais seções da home + rodapé
5. Produto, coleção e carrinho
6. Páginas (Sobre, FAQ, Contato, 404)
7. CSV de produtos + documentação + verificação (theme check, 375/768/1440)
