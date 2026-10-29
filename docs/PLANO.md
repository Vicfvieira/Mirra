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

### Novos

| Tipo | Arquivo | Função |
|---|---|---|
| Snippet | `mirra-theme-tokens.liquid` | Variáveis CSS extras por esquema (destaque), itálico do título, carrega CSS/JS globais |
| Snippet | `mirra-icon.liquid` | Ícones SVG próprios (gota, folha, chama, presente, vela, casa, caminhão, mapa, cartão, troca, estrela, aspas, setas…) |
| Snippet | `mirra-pill.liquid` | Selo em pílula com contorno fino |
| Snippet | `mirra-framed-image.liquid` | Imagem emoldurada com `srcset`/lazy + placeholder |
| Snippet | `mirra-wave.liquid` | SVG do divisor ondulado |
| Snippet | `mirra-product-badges.liquid` | Novo / Mais vendido / Últimas unidades |
| Snippet | `mirra-free-shipping-bar.liquid` | Barra de progresso de frete grátis |
| Seção | `mirra-announcement-marquee` | Letreiro rolante |
| Seção | `mirra-hero` | Hero editorial |
| Seção | `mirra-benefits` | Faixa de benefícios |
| Seção | `mirra-collection-cards` | 3 cards de coleção |
| Seção | `mirra-featured-products` | Mais vendidos com compra rápida |
| Seção | `mirra-founder` | Sobre a fundadora |
| Seção | `mirra-ritual-steps` | Monte seu ritual |
| Seção | `mirra-testimonials` | Depoimentos em carrossel |
| Seção | `mirra-newsletter` | Newsletter com cupom |
| Seção | `mirra-wave-divider` | Divisor ondulado entre seções |
| Seção | `mirra-footer` | Rodapé completo |
| Seção | `mirra-product-sticky-bar` | Barra de compra fixa (mobile) |
| Seção | `mirra-page-hero` | Cabeçalho editorial de páginas (Sobre, FAQ, Contato) |
| Seção | `mirra-rich-text` | Texto editorial com selos |
| Seção | `mirra-faq` | FAQ em acordeão (+ dados estruturados FAQPage) |
| Seção | `mirra-contact-info` | Canais de contato |
| Seção | `mirra-404` | Página 404 personalizada |
| Asset | `mirra-base.css` | Utilitários da marca (título, pílula, moldura, onda, botões mel) |
| Asset | `mirra-skin.css` | Pele da marca sobre componentes do Dawn (header, cards, filtros, produto, gaveta) |
| Asset | `mirra-*.css` / `mirra-*.js` | CSS/JS por seção, carregados só quando a seção existe |
| Templates | `page.sobre.json`, `page.faq.json`, `page.contact.json`, `404.json`, `index.json`, `product.json`, `collection.json` | Conteúdo de exemplo |
| Dados | `data/mirra-produtos.csv` | 12 produtos para importação |

### Alterados (ganchos mínimos no core do Dawn)

| Arquivo | Alteração |
|---|---|
| `layout/theme.liquid` | 1 linha: `{% render 'mirra-theme-tokens' %}` |
| `config/settings_schema.json` | Campo `mirra_accent` no esquema de cor + grupo "MIRRA — Loja" (frete grátis, parcelas, estoque baixo) |
| `config/settings_data.json` | Preset MIRRA (cores, fontes, botões, cartões, mídia, gaveta) |
| `snippets/card-product.liquid` | 2 linhas: render de `mirra-product-badges` |
| `snippets/cart-drawer.liquid` | 1 linha: render de `mirra-free-shipping-bar` |
| `sections/main-cart-footer.liquid` | 1 linha: render de `mirra-free-shipping-bar` |
| `sections/main-product.liquid` | Bloco novo `mirra_badges` (selos de benefícios) |
| `sections/header-group.json`, `footer-group.json` | Usam as seções MIRRA |
| `locales/pt-BR.json`, `locales/en.default.json` | Textos fixos da MIRRA (chave `mirra`) |

## Etapas e commits

1. Tokens e tipografia
2. Barra de anúncio + header
3. Hero
4. Demais seções da home + rodapé
5. Produto, coleção e carrinho
6. Páginas (Sobre, FAQ, Contato, 404)
7. CSV de produtos + documentação + verificação (theme check, 375/768/1440)
