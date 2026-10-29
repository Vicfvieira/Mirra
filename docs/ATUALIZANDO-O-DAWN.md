# Atualizando o Dawn sem perder a MIRRA

Base: **Dawn v16.0.0**. Todo o código novo tem prefixo `mirra-` e mora em arquivos próprios. Os arquivos core do Dawn receberam apenas os ganchos abaixo — são eles que precisam ser conferidos a cada atualização.

## Ganchos no core

| Arquivo | Alteração | Como reaplicar |
|---|---|---|
| `layout/theme.liquid` | `{%- render 'mirra-theme-tokens' -%}` logo após `base.css` | 1 linha |
| `snippets/card-product.liquid` | `{%- render 'mirra-product-badges', product: card_product, max: 1 -%}` dentro dos **dois** `<div class="card__badge …">` | 2 linhas |
| `snippets/cart-drawer.liquid` | `{%- if cart != empty -%}{% render 'mirra-free-shipping-bar' %}{%- endif -%}` logo após o `drawer__header` | 1 linha |
| `sections/main-cart-footer.liquid` | `{%- render 'mirra-free-shipping-bar' -%}` no início de `.js-contents` | 1 linha |
| `sections/main-product.liquid` | 2 `when` no `case block.type` (`mirra_badges`, `mirra_installments`) + 2 blocos no schema | Copiar os trechos marcados com `mirra` |
| `config/settings_schema.json` | 3 cores no `color_scheme_group` (`mirra_accent`, `mirra_highlight`, `mirra_highlight_label`) + grupo "MIRRA — Loja" | Copiar |
| `config/settings_data.json` | Preset MIRRA | Manter o nosso |
| `locales/pt-BR.json`, `locales/en.default.json` | Chave `mirra` | Copiar a chave |
| `sections/header-group.json`, `footer-group.json`, `templates/*.json` | Conteúdo | Manter o nosso |

Para encontrar todos os ganchos: `grep -rn "mirra" layout snippets/card-product.liquid snippets/cart-drawer.liquid sections/main-*.liquid`

## Procedimento sugerido

Este repositório começou de uma cópia do Dawn v16.0.0 (commit "Base"), não de um fork. Por isso a atualização é feita aplicando o *diff entre versões do Dawn* como patch:

```bash
# fora deste repositório
git clone https://github.com/Shopify/dawn.git dawn && cd dawn
git diff v16.0.0 vX.Y.Z -- . ':!.github' > ../dawn-update.patch

# neste repositório
git checkout -b atualiza-dawn-vX.Y.Z
git apply -3 ../dawn-update.patch   # conflitos só devem aparecer nos ganchos acima
shopify theme check                 # 0 erros
shopify theme dev                   # conferir home, produto, coleção, carrinho e páginas
```
