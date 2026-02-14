# ARQUIVO 1: gemini.md

# System Prompt - Landing Page Automações n8n

## Stack Técnica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript (strict mode)
- **Estilização:** Tailwind CSS
- **Componentes:** Shadcn/ui
- **Ícones:** Lucide React
- **Formulários:** React Hook Form + Zod
- **Dark Mode:** next-themes
- **Calendário:** Google Calendar API via @googleapis/calendar

## Estrutura de Arquivos

```
/app
  /page.tsx
  /agendamento/page.tsx
  /confirmacao/page.tsx
  /layout.tsx
/components
  /ui (shadcn)
  /Hero.tsx
  /SectionAutomation.tsx
  /SectionExamples.tsx
  /SectionCTA.tsx
  /FormDirect.tsx
  /FormDiscovery.tsx
  /CalendarCustom.tsx
  /ThemeToggle.tsx
/lib
  /google-calendar.ts
  /utils.ts
  /schemas.ts
```

## Integrações

### Webhooks n8n

Três endpoints (variáveis de ambiente):
- `NEXT_PUBLIC_N8N_WEBHOOK_DIRECT` - cliente sabe o que quer
- `NEXT_PUBLIC_N8N_WEBHOOK_DISCOVERY` - cliente precisa consultoria
- `NEXT_PUBLIC_N8N_WEBHOOK_BOOKING` - agendamento confirmado

### Payloads Esperados

**FormDirect:**
```json
{
  "tipo": "direto",
  "nome": "string",
  "email": "string",
  "telefone": "string",
  "empresa": "string",
  "descricao_automacao": "string",
  "integracoes": ["array"],
  "timestamp": "ISO8601"
}
```

**FormDiscovery:**
```json
{
  "tipo": "discovery",
  "nome": "string",
  "email": "string",
  "telefone": "string",
  "empresa": "string",
  "dores_operacionais": "string",
  "tarefas_repetitivas": "string",
  "sistemas": ["array"],
  "horas_semanais": "string",
  "tamanho_equipe": "string",
  "timestamp": "ISO8601"
}
```

**Booking:**
```json
{
  "tipo": "agendamento",
  "nome": "string",
  "email": "string",
  "data": "YYYY-MM-DD",
  "horario": "HH:MM",
  "automacao_id": "string | null",
  "google_event_id": "string"
}
```

### Google Calendar

- **API Routes:** `/api/calendar/slots` (GET) e `/api/calendar/book` (POST)
- **Autenticação:** OAuth 2.0 server-side (não expor credenciais no frontend)
- **Horários comerciais:** 9h-18h, seg-sex

## Regras de Implementação

### ✅ FAZER:

- TypeScript strict mode (sem `any`)
- Componentes funcionais com hooks
- Validação com Zod em todos os formulários
- Loading states e error handling
- Toast notifications (shadcn toast ou sonner)
- Validação em tempo real (onChange)
- Acessibilidade (aria-labels, navegação por teclado)
- SEO metadata (title, description, og:tags)
- Responsive design (mobile-first)

### ❌ NÃO FAZER:

- Bibliotecas pesadas de calendário (criar customizado)
- Expor credenciais do Google no frontend
- Enviar dados sem validação
- Webhooks hardcoded
- Class components
- Inline styles (só Tailwind)

## Ordem de Implementação

1. Setup (shadcn, theme provider, layout)
2. Página principal com 3 seções
3. Formulários (Direct + Discovery)
4. Integração webhooks
5. Página agendamento + Google Calendar
6. Página confirmação
7. Responsividade e a11y
8. Dark mode

## Formato de Saída

- Caminho completo do arquivo
- Código com comentários em pontos críticos
- Imports organizados (externos → internos → relativos)
- Interfaces TypeScript bem definidas

