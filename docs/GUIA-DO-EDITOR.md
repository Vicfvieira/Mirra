# Guia do Editor de Temas — MIRRA

Tudo abaixo é editável em **Loja virtual › Temas › Personalizar**. Nenhuma alteração exige código.

> **Palavra em destaque (itálico mel):** em qualquer título MIRRA, selecione a palavra e clique em *Itálico* (I) na barra do campo. Ela aparece em itálico, na cor de destaque do esquema.

---

## 1. Configurações globais (ícone de engrenagem › Configurações do tema)

| Grupo | O que mexer |
|---|---|
| **Cores** | 5 esquemas prontos: *Creme* (scheme-1), *Lilás pó* (2), *Vinho-ameixa* (3), *Mel* (4), *Grafite* (5). Cada um tem, além dos campos do Dawn: **MIRRA — destaque** (palavra em itálico), **MIRRA — mel** (botão secundário, selos, ícones) e **MIRRA — texto sobre o mel**. O campo **Sombra** do esquema é a cor da sombra sólida das molduras. |
| **Tipografia** | Títulos: Playfair Display 800. Corpo: DM Sans. Trocar aqui muda o site inteiro. |
| **Mídia** | Controla a **moldura MIRRA** em todo o tema (hero, fundadora, galeria de produto): espessura da borda, raio e deslocamento da sombra. Mantenha o desfoque em 0 para o efeito neo-brutalista. |
| **Cartões de produto / coleção** | Estilo "cartão" com borda e sombra sólida. Mesmo princípio. |
| **Botões / Entradas / Variantes** | Raio 40 = pílula. |
| **Selos** | Posição dos selos nos cards (canto superior esquerdo) e cores de "Promoção" e "Esgotado". |
| **Carrinho** | Tipo "Gaveta" (necessário para a barra de frete grátis aparecer ao adicionar). |
| **Redes sociais** | Links usados no rodapé. |
| **MIRRA — Loja** | Valor do **frete grátis** (barra do carrinho e o atalho `[frete]`), **parcelas sem juros** e parcela mínima, **tags** que ativam os selos *Novo* e *Mais vendido*, limite de estoque de *Últimas unidades*, e a leve inclinação das molduras. |

---

## 2. Seções da home

### MIRRA — Letreiro (grupo do cabeçalho)
- **Blocos "Aviso"**: texto, link opcional e ícone. Adicione até 12.
- **Duração de uma volta**: maior = mais lento. **Direção**, **tamanho do texto** (o "Grande" usa a fonte de título) e **separador**.
- Pausa sozinho no hover/foco; o botão ⏸ fica visível por acessibilidade. Quem usa "reduzir movimento" vê os avisos parados.

### Cabeçalho (seção do Dawn, já configurada)
- Posição do logo: **Meio, centralizado** → menu à esquerda, busca e carrinho à direita.
- **Menu**: escolha o menu `main-menu`. O logo vem de *Configurações do tema › Logo*; sem logo, aparece "MIRRA" em letreiro.

### MIRRA — Hero editorial
- **Chamada**, **título** (itálico = mel), **tamanho** (Grande/Gigante), **texto de apoio**.
- **Botão principal** (vinho) e **botão mel**, cada um com texto e link.
- **Imagem principal** + proporção (4:5, 2:3, 1:1) + posição (direita/esquerda) + inclinação.
- **Imagem pequena sobreposta** (opcional).
- **Selo em pílula** sobre a imagem: texto, ícone, estilo (contorno/mel/sólido).
- **Carimbo circular** (texto girando): deixe vazio para ocultar.
- **Blocos "Selo"**: pílulas abaixo dos botões.

### MIRRA — Benefícios
- Blocos com ícone, título e texto. Escreva **`[frete]`** para mostrar o valor de frete grátis configurado (ex.: "Frete grátis acima de [frete]").

### MIRRA — Coleções
- Até 4 **cards**. Em cada um: **coleção** (preenche título, link e imagem se você deixar os campos vazios), ícone, selo, imagem opcional, texto do link e **esquema de cores do card**.

### MIRRA — Mais vendidos
- Escolha a **coleção** (sugestão: coleção automática "Mais vendidos", tag `mais-vendido`), quantidade, colunas, proporção, segunda imagem no hover e **compra rápida**.
- Os selos *Novo / Mais vendido / Últimas unidades* aparecem automaticamente pelas tags e pelo estoque.

### MIRRA — Divisor ondulado
- Coloque **entre** duas seções e escolha o esquema **de cima** e o **de baixo**. Formatos: suave, ondas curtas, assimétrica. Altura e espelhar.

### MIRRA — Fundadora
- Foto (emoldurada e levemente inclinada), selo sobre a foto, chamada, título, **citação**, texto, **assinatura manuscrita** (PNG transparente; sem imagem, o nome aparece em itálico), nome, cargo e botão.

### MIRRA — Monte seu ritual
- Até 4 **passos** (o número 01, 02, 03 é automático): ícone, título, texto e link opcional. Botão mel no final.

### MIRRA — Depoimentos
- Blocos com depoimento, nome, detalhe, estrelas (0–5), foto opcional e cor do card.
- O campo **Aviso** vem com "Depoimentos fictícios — conteúdo de exemplo". **Mantenha enquanto os depoimentos não forem reais.**
- Carrossel com setas, bolinhas, arraste e teclado (← →).

### MIRRA — Newsletter
- Título, texto, botão, **código do cupom**, mostrar o cupom antes ou só depois do cadastro, letras miúdas, imagem opcional e as cores da seção e da caixa.
- Os e-mails caem em **Clientes** com a tag `newsletter`. Crie o desconto com o **mesmo código** em *Descontos*.

### MIRRA — Rodapé (grupo do rodapé)
- **Frase de destaque**, onda no topo.
- Blocos: **Marca** (logo ou letreiro, texto, redes sociais), **Menu** (até 4) e **Texto** (atendimento).
- Ícones de pagamento (seguem os métodos ativos), nota de pagamento, links de políticas.
- **Selo "Loja demonstrativa — marca fictícia"** e **crédito** (texto, nome e link) — já preenchidos com *Desenvolvido por Victoria Fernandes* → portfólio.

---

## 3. Página de produto (modelo "Produto padrão")

Blocos da seção **Informações do produto** (Dawn) + blocos MIRRA:

| Bloco | Função |
|---|---|
| **MIRRA — Selos** | Selos de status (Novo/Mais vendido/Últimas unidades) + até 4 pílulas de benefício com ícone. Opção de mostrar só em produtos com uma tag. |
| **MIRRA — Parcelamento** | "ou 6x de R$ X sem juros" (respeita a parcela mínima) + texto extra ("5% off no Pix"). Atualiza ao trocar a variante. |
| **MIRRA — Acordeão** ×3 | Lê um metafield do produto (campo *namespace.chave*): *Modo de uso* → `custom.modo_de_uso`, *Ingredientes* → `custom.ingredientes`. Sem o metafield, usa o *texto de reserva*; sem nenhum dos dois, o acordeão some. *Envio e trocas* usa só o texto de reserva. Ícones próprios da marca. |

Outras seções do modelo: **Produtos relacionados** ("Combina com seu ritual") e **MIRRA — Compra fixa** (barra que aparece no celular quando o botão de compra sai da tela; opção para mostrar também no desktop).

Galeria: o Dawn está em "Miniaturas em carrossel" com a moldura vindo de *Configurações › Mídia*.

## 4. Coleção
Banner (lilás) → divisor ondulado → grade com **filtros horizontais** em pílula, ordenação e compra rápida → faixa de benefícios. Os filtros aparecem quando o app **Search & Discovery** está configurado (ver checklist).

## 5. Páginas
| Modelo | Seções |
|---|---|
| `page.sobre` | Topo de página, divisor, Fundadora, Benefícios (valores), Texto editorial (pode mostrar o conteúdo escrito no admin), Newsletter |
| `page.faq` | Topo de página, divisor, **Perguntas (FAQ)** com blocos *Grupo* e *Pergunta*, dados estruturados para o Google |
| `page.contact` | Topo de página, divisor, formulário de contato do Dawn, **Canais de contato** |
| `404` | **Página 404** (gota animada, busca, 2 botões) + divisor + Mais vendidos |

Seções genéricas que podem ser usadas em qualquer página: **Topo de página**, **Texto editorial**, **Canais de contato**, **Divisor ondulado** e todas as da home.

## 6. Carrinho
Gaveta lateral com a **barra de frete grátis** (valor em *MIRRA — Loja*). Ela também aparece na página `/cart`.
