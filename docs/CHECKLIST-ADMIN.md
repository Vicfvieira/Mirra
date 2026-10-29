# Checklist do admin — o que preencher manualmente

Ordem sugerida. Itens marcados com ⚠️ precisam vir **antes** do passo seguinte.

## 1. Loja e idioma
- [ ] **Configurações › Geral › Moeda da loja: Real (BRL)** ⚠️ antes de importar produtos.
- [ ] **Configurações › Geral › Formatos de moeda**: `R$ {{amount_with_comma_separator}}` (HTML e e-mail).
- [ ] **Configurações › Idiomas**: Português (Brasil) como idioma padrão.
- [ ] **Configurações › Mercados**: Brasil como mercado principal.
- [ ] **Configurações › Contas de clientes**: usar **novas contas de clientes** (exigido pelo Dawn 16).
- [ ] **Configurações › Notificações**: revisar os e-mails em português.

## 2. Tema
- [ ] Enviar o tema: `shopify theme push --unpublished` (ou conectar este repositório em *Temas › Adicionar tema › Conectar do GitHub*).
- [ ] Rodar localmente para conferir: `shopify theme dev --store SUA-LOJA.myshopify.com`.
- [ ] Publicar o tema MIRRA.
- [ ] **Personalizar › Configurações do tema › Logo**: logo (opcional — sem logo aparece o letreiro "MIRRA") e favicon.
- [ ] **Redes sociais**: trocar os links genéricos pelos reais (ou apagar).

## 3. Metafields ⚠️ antes de importar o CSV
**Configurações › Metacampos e metaobjetos › Produtos › Adicionar definição**
- [ ] Nome *Modo de uso* — namespace e chave `custom.modo_de_uso` — tipo **Texto com várias linhas**.
- [ ] Nome *Ingredientes* — `custom.ingredientes` — **Texto com várias linhas**.

## 4. Produtos
- [ ] **Produtos › Importar** → `data/mirra-produtos.csv` (marque "Substituir produtos com o mesmo identificador" se reimportar).
- [ ] Conferir estoque na localização padrão (o CSV traz quantidades; *Kit Ritual Noturno* e *Kit Mini Velas* ficam com estoque baixo de propósito para exibir "Últimas unidades").
- [ ] Trocar as imagens placeholder pelas fotos finais (ver [IMAGENS.md](IMAGENS.md)).

## 5. Coleções (automáticas, por tag)
**Produtos › Coleções › Criar coleção › Automática**

| Coleção | Identificador (handle) | Condição |
|---|---|---|
| Corpo | `corpo` | Tag do produto é igual a `corpo` |
| Casa | `casa` | Tag é igual a `casa` |
| Presentes | `presentes` | Tag é igual a `presentes` |
| Mais vendidos | `mais-vendidos` | Tag é igual a `mais-vendido` |
| Novidades (opcional) | `novidades` | Tag é igual a `novo` |

- [ ] Adicionar descrição e imagem 4:3 em Corpo, Casa e Presentes.
- [ ] Os handles acima já estão ligados no tema (cards de coleção, Mais vendidos, links). Se usar outros, ajuste no editor.

## 6. Páginas
**Loja virtual › Páginas › Adicionar página**

| Título | Handle | Modelo |
|---|---|---|
| Sobre | `sobre` | `page.sobre` |
| Perguntas frequentes | `faq` | `page.faq` |
| Contato | `contato` | `page.contact` |

- [ ] O texto digitado na página "Sobre" aparece na seção *Texto editorial* (opção "Mostrar o conteúdo da página").

## 7. Menus
**Loja virtual › Navegação**
- [ ] **Menu principal** (`main-menu`): Corpo, Casa, Presentes, Sobre, FAQ.
- [ ] **Menu do rodapé** (`footer`): Sobre, Perguntas frequentes, Contato, Política de reembolso, Política de frete.
- [ ] (Opcional) **Search & Discovery**: instalar o app e ativar filtros (Disponibilidade, Preço, Tipo de produto, Tamanho, Aroma) — aparecem estilizados na coleção.

## 8. Políticas
**Configurações › Políticas** (há modelos prontos; revise para o Brasil/CDC)
- [ ] Reembolso (7 dias — direito de arrependimento)
- [ ] Privacidade (LGPD)
- [ ] Termos de serviço
- [ ] Frete
- [ ] Informações de contato (obrigatória)
- [ ] Deixe claro em todas: **loja demonstrativa, marca fictícia, pedidos não são processados**.

## 9. Frete e entrega
**Configurações › Frete e entrega › Frete geral**
- [ ] Zona **Brasil** com uma tarifa padrão (ex.: R$ 19,90).
- [ ] Tarifa **Frete grátis** com condição *preço do pedido ≥ R$ 199* — **o mesmo valor** de *Configurações do tema › MIRRA — Loja*.
- [ ] Pesos já vêm no CSV (gramas) caso use cálculo por peso ou app de frete (Melhor Envio, Frenet etc.).

## 10. Pagamentos
- [ ] Em loja de desenvolvimento, use o **Bogus Gateway** (Shopify Payments em modo teste) para simular pedidos.
- [ ] Para uma loja real no Brasil: provedor com **Pix, boleto e cartão parcelado** (ex.: Mercado Pago, Pagar.me, Appmax) — o parcelamento real é configurado no provedor; o tema só exibe "até 6x" (ajuste o número em *MIRRA — Loja* para bater).
- [ ] O rodapé mostra automaticamente os ícones dos métodos ativos.

## 11. Descontos
**Descontos › Criar desconto › Valor do produto/pedido**
- [ ] Código **`BEMVINDA10`**, 10%, *limitar a um uso por cliente*. O código é o mesmo da seção Newsletter e do letreiro.
- [ ] (Opcional) Desconto automático de 5% para Pix depende do provedor de pagamento.

## 12. Preferências e acesso
**Loja virtual › Preferências**
- [ ] Título e meta descrição da home; imagem de compartilhamento social (1200 × 628).
- [ ] **Senha da loja**: lojas de desenvolvimento ficam protegidas — envie a senha para quem for ver o portfólio, ou use o link de pré-visualização do tema.
- [ ] Mensagem da página de senha em português.
