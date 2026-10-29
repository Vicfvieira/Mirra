# Checklist do admin — o que preencher manualmente

Ordem sugerida. Itens marcados com ⚠️ precisam vir **antes** do passo seguinte.

**Estratégia:** monte e teste tudo na *development store* (grátis, protegida por senha) — passos 1 a 12. Só no fim (passo 13) transfira a loja para você, assine um plano e abra o link ao público. Assim você só começa a pagar quando a loja estiver pronta.

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

## 10. Pagamentos (loja demonstrativa: nenhum meio de pagamento real)
- [ ] **Enquanto ainda for development store**: ative o **Bogus Gateway** (*Configurações › Pagamentos*) só para testar o fluxo completo — adicionar ao carrinho, gaveta, checkout e pedido de teste.
- [ ] **Antes de abrir ao público (passo 13)**: **desative o Bogus Gateway e não ative nenhum provedor** (nem Shopify Payments, Mercado Pago, Pix etc.). Sem meio de pagamento, o checkout não consegue concluir pedidos — ninguém compra de verdade.
- [ ] Com nenhum método ativo, o rodapé esconde os ícones de pagamento automaticamente e mantém só a *Nota de pagamento* (texto ilustrativo "Pix • Boleto • 6x"). Se preferir esconder também a nota, apague o texto em *Rodapé › Nota de pagamento*.

## 11. Descontos
**Descontos › Criar desconto › Valor do produto/pedido**
- [ ] Código **`BEMVINDA10`**, 10%, *limitar a um uso por cliente*. O código é o mesmo da seção Newsletter e do letreiro.
- [ ] O cupom é aplicado no checkout; como a loja não tem pagamento, ele serve só para demonstrar o fluxo.

## 12. Preferências e acesso
**Loja virtual › Preferências**
- [ ] Título e meta descrição da home; imagem de compartilhamento social (1200 × 628).
- [ ] Enquanto for development store, a senha da vitrine fica em *Proteção por senha* — use-a para testar em outros aparelhos. Ela é removida no passo 13.

## 13. Abrir a loja ao público (plano pago)
Development stores são **sempre** protegidas por senha — não dá para remover. Para o cliente abrir o link direto, a loja precisa virar uma loja normal, com plano.

- [ ] **1.** **Revisão final** na development store: passos 1 a 12 completos, tema MIRRA publicado, testes feitos em 375 / 768 / 1440 px.
- [ ] **2.** **Transferir a propriedade para você**: *Painel de Parceiros › Lojas* → abra o menu da loja → **Transferir propriedade**. Informe o e-mail de destino (pode ser o seu) e confirme. Você continua com acesso de colaboradora pelo Painel de Parceiros.
- [ ] **3.** **Assinar um plano**: entre no admin com a conta que recebeu a loja → *Configurações › Plano* → escolha **Basic** (ou superior). ⚠️ O plano *Starter* **não** serve: não tem loja virtual com tema. Confira o preço atual na página de planos — costuma haver promoção nos primeiros meses.
- [ ] **4.** **Pagamentos**: confirme que **nenhum** provedor está ativo (ver passo 10). Se o admin sugerir ativar Shopify Payments, ignore.
- [ ] **5.** **Remover a senha**: *Loja virtual › Preferências* (em algumas contas: *Configurações › Loja virtual › Acesso à loja*) → **desmarque "Proteção por senha"** → Salvar.
- [ ] **6.** **Testar como visitante**: abra o link `https://SUA-LOJA.myshopify.com` numa janela anônima (sem login) e no celular. Deve abrir direto na home, sem senha. Adicione um produto, abra a gaveta e vá ao checkout: ele deve mostrar que não há forma de pagamento disponível.
- [ ] **7.** **(Opcional) Domínio próprio**: *Configurações › Domínios › Conectar domínio existente* (ex.: `mirra.seudominio.com`, com registro CNAME para `shops.myshopify.com`). Depois, defina-o como domínio principal.
- [ ] **8.** **Avisos de demonstração** continuam visíveis: letreiro ("Loja demonstrativa — marca fictícia"), selo no rodapé, aviso nos depoimentos e a pergunta "A MIRRA existe de verdade?" no FAQ. Mantenha os quatro.
- [ ] **9.** **Newsletter**: com a loja pública, pessoas reais podem cadastrar o e-mail. A política de privacidade (passo 8) precisa dizer que é uma loja demonstrativa e que os dados não são usados para marketing — ou desative a seção *MIRRA — Newsletter* no editor (ícone de olho).
- [ ] **10.** **Compartilhar**: use o link (ou domínio) no seu portfólio e nas propostas. Em *Preferências*, confira título, descrição e imagem de compartilhamento (1200 × 628) para o link ficar bonito no WhatsApp e no LinkedIn.
