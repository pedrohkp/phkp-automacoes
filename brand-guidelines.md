# Brand Guidelines & Design System v2.0

> **Status**: Atualizado em 15/02/2026
> **Versão do Código**: Next.js 16.1.6 | Tailwind v4

---

## 1. Identidade Visual

### Paleta de Cores (Extraída do Código)

A paleta é baseada no tema "Dark Mode Tech" definido em `globals.css` e `tailwind.config.ts`.

#### Fundos (Backgrounds)
- **Primary BG**: `#0A1628` (Pagina principal, Seções)
- **Secondary BG**: `#0F1F3D` (Camadas internas, Inputs)
- **Card BG**: `#1A2B4F` (Cards, Modais, Paineis)

#### Cores de Ação (Accents)
- **Blue Primary**: `#2563EB` (Botões secundários, Links, Bordas de foco)
- **Blue Light**: `#3B82F6` (Textos de destaque, Ícones)
- **Orange Primary**: `#F97316` (Botões de CTA Principal, Gradientes)
- **Orange Medium**: `#FB923C` (Hover states)

#### Laranjas (Gradientes & Detalhes)
- **Orange Light**: `#FDBA74`
- **Gradient Orange**: `linear-gradient(135deg, #F97316 0%, #EA580C 100%)`

#### Neutros e Texto
- **White**: `#FFFFFF` (Títulos, Texto Principal)
- **Gray Light**: `#E5E7EB` (Subtítulos, Texto Secundário)
- **Gray Medium**: `#9CA3AF` (Textos de apoio, Placeholders)

#### Efeitos e Bordas
- **Border Blue**: `rgba(37, 99, 235, 0.15)` (Padrão para cards e seções)
- **Glow Blue**: `0 0 20px rgba(37, 99, 235, 0.5)`
- **Glow Orange**: `0 4px 24px rgba(249, 115, 22, 0.6)`

---

## 2. Tipografia

**Font Family**:
- **Sans**: `Geist Sans` (Var: `--font-geist-sans`)
- **Mono**: `Geist Mono` (Var: `--font-geist-mono`)

**Pesos**:
- Regular (400)
- Medium (500)
- Bold (700)
- Extra Bold (800) - Usado em Títulos Herói

---

## 3. Estrutura do Site (Sitemap Real)

A estrutura reflete a ordem de importação em `src/app/page.tsx`.

1. **Header** (`Header.tsx`): Navegação fixa com blur.
2. **Hero Section** (`Hero.tsx`):
   - Título com gradiente.
   - Badge "Vagas Abertas para Consultoria".
   - Dois CTAs: Agendar (Laranja) e Catálogo (Outline Azul).
3. **Sobre** (`SectionAbout.tsx`): Apresentação da empresa/especialista.
4. **Calculadora ROI** (`SectionROI.tsx`):
   - Sliders para Horas e Valor Hora.
   - inputs para Taxa de Erro e Custo de Oportunidade.
   - Card de resultado com destaque laranja.
5. **Catálogo de Automações** (`SectionAutomation.tsx`):
   - Grid de cards com exemplos (Onboarding, Financeiro, etc.).
   - Badges de tecnologias e economia de tempo.
6. **Formulários** (`SectionForms.tsx`):
   - Abas alternáveis: "Já sei o que preciso" vs "Descobrir oportunidades".
7. **FAQ** (`SectionFAQ.tsx`): Perguntas frequentes em Accordion.
8. **Footer** (`Footer.tsx`): Links e copyright.

**Componentes Globais**:
- **Exit Intent Popup** (`ExitIntentPopup.tsx`): Modal de captura de lead ao tentar sair da página.
- **Toaster** (`sonner`): Notificações de sucesso/erro.

---

## 4. Componentes Visuais (UI Kit)

### Botões
- **Primary (CTA)**: Gradiente Laranja (`from-[#F97316] to-[#EA580C]`), Sombra colorida (`shadow-[0_4px_24px_rgba(249,115,22,0.6)]`). Hover com scale e brilho.
- **Secondary**: Borda Azul (`border-[#2563EB]`), Texto Azul. Hover preenche com azul sólido.
- **Ghost/Link**: Texto cinza/branco com hover de cor.

### Cards (Glassmorphism Tech)
- **Base**: `bg-[#1A2B4F]` (Azul escuro sólido/translúcido)
- **Borda**: `border-[rgba(37,99,235,0.15)]`
- **Sombra**: `shadow-[0_8px_32px_rgba(0,0,0,0.5)]`
- **Hover**: Levitação (`-translate-y-1`) e sombra intensificada.

### Inputs
- **Base**: `bg-[#0F1F3D]`
- **Borda**: `border-[rgba(37,99,235,0.2)]`
- **Foco**: Ring Laranja (`#F97316`)

---

## 5. Fluxos de Conversão

### Formulário: "Já Sei o que Preciso" (`FormDirect.tsx`)
- **Objetivo**: Lead qualificado com demanda específica.
- **Campos**: Nome, Email, WhatsApp, Empresa, Descrição, Checkbox de Integrações.
- **Botão**: "Enviar e agendar reunião".
- **Ação**: Envia webhook -> Redireciona para Google Calendar.

### Formulário: "Diagnóstico" (`FormDiscovery.tsx`)
- **Objetivo**: Lead em fase de descoberta/consciência.
- **Campos**: Nome, Email, WhatsApp, Empresa, Mensagem (Dores).
- **Botão**: "Receber diagnóstico e agendar".
- **Ação**: Envia webhook -> Redireciona para Google Calendar.

### Exit Intent Popup
- **Gatilho**: Mouse sai da janela (desktop) ou timer.
- **Oferta**: "Guia: 5 Processos para Automatizar".
- **Campos**: Apenas Email.
- **Persistência**: Salva `exitIntentShown=true` no localStorage para não repetir.

---

## 6. Tom de Voz

- **Profissional & Técnico**: "Automação Inteligente", "ROI", "Integrações".
- **Direto**: "Reduza 15 horas semanais", "Pare de perder tempo".
- **Focado em Resultados**: Ênfase em economia financeira e de tempo.
