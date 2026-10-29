# MIRRA — autocuidado & rituais naturais

**Loja demonstrativa de uma marca fictícia** — tema Shopify personalizado a partir do **Dawn v16.0.0**, em português do Brasil e com moeda BRL.

Desenvolvido por [Victoria Fernandes](https://portifolio-vicszf.vercel.app).

> *Rituais pequenos, efeitos grandes.*

## O que tem aqui

- Identidade própria sobre o Dawn: títulos gigantes em Playfair Display com palavra em itálico mel, molduras neo-brutalistas (borda espessa + sombra sólida), selos em pílula, divisores ondulados e ícones SVG próprios (gota, folha, chama…).
- 17 seções `mirra-*` com schema completo, todas editáveis no Editor de Temas.
- Cores e fontes 100% pelos esquemas de cor e configurações do tema.
- JS vanilla (Web Components) só onde precisa: letreiro, carrossel, barra de compra fixa, copiar cupom.
- Acessibilidade: contraste AA verificado, foco visível, ARIA nos componentes, `prefers-reduced-motion`.
- `shopify theme check`: **0 erros** (os avisos restantes são do próprio Dawn).

## Comandos

```bash
npm i -g @shopify/cli
shopify theme dev --store SUA-LOJA.myshopify.com   # desenvolvimento
shopify theme check                                  # lint
shopify theme push --unpublished                     # enviar como tema novo
```

## Documentação

| Documento | Conteúdo |
|---|---|
| [docs/PLANO.md](docs/PLANO.md) | Plano, tokens de design e lista de arquivos |
| [docs/GUIA-DO-EDITOR.md](docs/GUIA-DO-EDITOR.md) | Como configurar cada seção no Editor de Temas |
| [docs/CHECKLIST-ADMIN.md](docs/CHECKLIST-ADMIN.md) | O que preencher no admin (menus, páginas, políticas, frete, pagamentos, coleções, metafields) |
| [docs/IMAGENS.md](docs/IMAGENS.md) | Tamanho e proporção de cada imagem |
| [docs/ATUALIZANDO-O-DAWN.md](docs/ATUALIZANDO-O-DAWN.md) | Ganchos no core do Dawn e como atualizar |
| [data/mirra-produtos.csv](data/mirra-produtos.csv) | 12 produtos fictícios para importação |

## Licença

Baseado no [Dawn](https://github.com/Shopify/dawn) © Shopify, sob a licença MIT (ver [LICENSE.md](LICENSE.md)). README original do Dawn em [docs/DAWN-README.md](docs/DAWN-README.md).
