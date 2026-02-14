# ARQUIVO 2: brand-guidelines.md

# Brand Guidelines - Automações n8n

## Visão do Projeto

Landing page de conversão para serviço de automações com n8n. O objetivo é educar visitantes sobre o valor de automações e capturar leads qualificados através de dois fluxos distintos:

1. Clientes que já sabem qual automação precisam
2. Clientes que precisam de consultoria para identificar oportunidades

## Público-Alvo

- Pequenas e médias empresas
- Empreendedores e gestores operacionais
- Pessoas com dores de tarefas repetitivas
- Tech-savvy mas não necessariamente desenvolvedores

## Tom de Voz

- **Consultivo, não vendedor:** Educar antes de vender
- **Claro e direto:** Evitar jargões técnicos desnecessários
- **Orientado a resultados:** Foco em ROI (tempo/dinheiro economizados)
- **Profissional mas acessível:** Não corporativo frio, não informal demais

## Identidade Visual

### Referência de Design

Google Antigravity Product Page: https://antigravity.google/product

Características:
- Layout clean, espaçamento generoso
- Gradientes sutis
- Animações suaves e funcionais
- Hierarquia visual clara

### Paleta de Cores

**Light Mode:**
- Background: `#FFFFFF`
- Foreground: `#1A1A1A`
- Primary: `#4285F4` (azul confiança/tech)
- Secondary: `#34A853` (verde crescimento)
- Accent: `#FBBC04` (amarelo destaque)
- Muted: `#F8F9FA`

**Dark Mode:**
- Background: `#0F0F0F`
- Foreground: `#E8EAED`
- Primary: `#8AB4F8`
- Secondary: `#81C995`
- Accent: `#FDD663`
- Muted: `#202124`

### Tipografia

- **Font:** Inter (Google Fonts)
- **Headings:** font-weight 700, letter-spacing tight, tamanhos hierárquicos (H1 > H2 > H3)
- **Body:** font-weight 400, line-height relaxed (1.6-1.8)
- **CTA Buttons:** font-weight 600, uppercase tracking wide

### Componentes

**Cards:**
- Border sutil (não heavy shadows)
- Border radius moderado (12px)
- Padding generoso (24px)
- Hover state: scale 1.02, transition 200ms

**Botões:**
- Primário: filled com primary color
- Secundário: outline com hover fill
- Tamanhos: lg para CTAs principais, md para secundários
- Hover: scale 1.02, brightness 110%

**Inputs:**
- Border sutil em estado normal
- Focus ring com primary color
- Placeholder com muted color
- Error state com vermelho suave

**Animações:**
- Scroll reveal (fade-in + translate-y)
- Hover states suaves (200-300ms)
- Evitar animações pesadas/distrativas

## Estrutura de Conteúdo

### SEÇÃO 1: Hero + Educação sobre Automação

#### Headline (H1)

Orientado a resultado, não feature. Exemplos:
- "Economize 20h/semana automatizando tarefas repetitivas"
- "Reduza custos operacionais em até 60% com automações inteligentes"
- "Pare de perder tempo com tarefas manuais"

#### Subheadline

1-2 frases explicando o que são automações de forma simples.

**Exemplo:** "Conectamos seus sistemas e criamos fluxos automáticos que trabalham por você 24/7, eliminando trabalho manual e reduzindo erros."

#### 3 Benefícios (Cards)

**1. Economia de Tempo**
- Ícone: relógio/timer
- Copy: "Reduza até 80% do tempo gasto em tarefas manuais"

**2. Redução de Erros**
- Ícone: escudo/check
- Copy: "Elimine falhas humanas em processos críticos"

**3. Escalabilidade**
- Ícone: gráfico crescente/foguete
- Copy: "Cresça sem aumentar proporcionalmente sua equipe"

#### CTA Primário

"Ver Exemplos de Automações" (scroll suave para Seção 2)

---

### SEÇÃO 2: Portfólio de Automações

#### Título da Seção
"Automações que Já Desenvolvemos"

#### Estrutura

Grid responsivo (2x2 desktop, 1 coluna mobile) com cards de automações.

#### Cada Card Contém:

- Título claro (ex: "Atendimento via WhatsApp")
- Descrição curta (2-3 linhas, foco no resultado)
- Badges de tecnologias (n8n + integrações)
- Vídeo demonstrativo (placeholder `<video>` com controles)
- Botão "Quero Esta Automação"

#### Exemplos de Automações (conteúdo sugerido)

**1. Envio de Emails Automáticos**
- Descrição: "Envie emails personalizados automaticamente quando um lead preenche formulário, faz uma compra ou atinge um marco no funil."
- Tech: n8n, Gmail API, Sheets

**2. Atendimento via WhatsApp/Telegram**
- Descrição: "Chatbot inteligente que responde FAQs, qualifica leads e agenda reuniões 24/7, sem intervenção humana."
- Tech: n8n, WhatsApp Business API, OpenAI

**3. Assistente de Agendamento**
- Descrição: "Cliente agenda horários disponíveis via chat, sistema sincroniza com seu Google Calendar e envia lembretes automáticos."
- Tech: n8n, Google Calendar, Telegram/WhatsApp

**4. Geração de Relatórios Automáticos**
- Descrição: "Coleta dados de múltiplas fontes (CRM, planilhas, analytics), gera relatórios e envia por email toda semana/mês."
- Tech: n8n, Google Sheets, Gmail, APIs diversas

---

### SEÇÃO 3: Formulários de Captura

#### Título da Seção
"Comece Sua Automação Agora"

#### Divisão em 2 Colunas

##### Coluna A: "Já Sei o Que Preciso"

**Intro:** "Se você já tem claro qual automação deseja, preencha abaixo para agendar uma reunião de implementação."

**Campos:**
- Nome Completo (obrigatório)
- Email (obrigatório)
- Telefone (obrigatório, máscara brasileira)
- Empresa
- Descrição da Automação (obrigatório, textarea, placeholder: "Ex: Preciso enviar emails automáticos quando um cliente faz pedido no site")
- Integrações Necessárias (obrigatório, multi-select: Gmail, Slack, Trello, Google Calendar, WhatsApp, Telegram, SAP, Salesforce, HubSpot, Outros - campo aberto)

**CTA:** "Enviar e Agendar Reunião"

##### Coluna B: "Preciso de Ajuda para Identificar Oportunidades"

**Intro:** "Responda algumas perguntas para entendermos seus processos e sugerirmos automações personalizadas."

**Campos:**
- Nome Completo (obrigatório)
- Email (obrigatório)
- Telefone (obrigatório)
- Empresa

**Perguntas de Discovery:**

1. "Quais as principais dores operacionais da sua empresa?" (obrigatório, textarea)
2. "Que tarefas repetitivas sua equipe realiza diariamente?" (obrigatório, textarea, placeholder: "Ex: Atualizar planilhas manualmente, responder emails padrão, gerar relatórios...")
3. "Quais sistemas/ferramentas você usa?" (obrigatório, multi-select)
4. "Quantas horas por semana são gastas nessas tarefas manuais?" (obrigatório, select: 0-5h, 5-10h, 10-20h, 20+h)
5. "Qual o tamanho da sua equipe?" (obrigatório, select: 1-5, 6-20, 21-50, 50+)

**CTA:** "Enviar para Análise"

---

### PÁGINA DE AGENDAMENTO

#### Título
"Escolha Data e Horário para Sua Reunião"

#### Componente

- Calendário customizado (visual clean, destaque em dias disponíveis)
- Ao clicar em data: aparecem slots de horário (cards clicáveis)
- Modal de confirmação com resumo (nome, email, data, hora)

#### Mensagem após seleção

"Ótimo! Confirme os dados abaixo:"
- Data: [DD/MM/YYYY]
- Horário: [HH:MM]
- Tipo: [Automação Pré-existente / Consultoria]

**CTA:** "Confirmar Agendamento"

---

### PÁGINA DE CONFIRMAÇÃO

#### Se tipo = agendamento:

- Ícone: checkmark
- Título: "Reunião Agendada com Sucesso!"
- Subtítulo: "Você receberá um email de confirmação em breve."
- Box de destaque: Data e hora da reunião
- Botão: "Adicionar ao Meu Calendário" (download .ics)
- Link secundário: "Voltar ao Site"

#### Se tipo = discovery:

- Ícone: checkmark
- Título: "Informações Recebidas!"
- Subtítulo: "Analisaremos suas necessidades e entraremos em contato em até 24h para agendar uma reunião de consultoria."
- CTA secundário: "Voltar ao Site"

---

## Elementos Visuais

### Ícones

- Estilo: outline/stroke (não filled)
- Biblioteca: Lucide React
- Tamanho padrão: 24px (escalável)

### Ilustrações/Imagens

- Placeholder SVG abstrato para Hero (fluxos/conexões)
- Vídeos de demonstração (você adiciona depois)
- Evitar stock photos genéricas

### Animações

- Scroll reveal: elementos aparecem ao entrar no viewport
- Hover: scale + brightness
- Loading states: spinners minimalistas
- Transições: 200-300ms ease-in-out

## Mensagens e Microcopy

### Estados de Formulário

- **Loading:** "Enviando..."
- **Sucesso:** "Enviado com sucesso!"
- **Erro Genérico:** "Algo deu errado. Tente novamente."
- **Erro de Validação:** Mensagens específicas (ex: "Email inválido", "Campo obrigatório")

### Call-to-Actions

**Primários:**
- "Ver Exemplos de Automações"
- "Quero Esta Automação"
- "Enviar e Agendar Reunião"
- "Confirmar Agendamento"

**Secundários:**
- "Voltar ao Site"
- "Adicionar ao Calendário"
- "Enviar para Análise"

## Acessibilidade

- Alto contraste em ambos os temas (WCAG AA mínimo)
- Alt text descritivo em imagens
- Labels visíveis em formulários
- Navegação por teclado (focus states visíveis)
- Aria-labels em ícones interativos
