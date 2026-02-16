# Documentação Técnica do Projeto (gemini.md)

> **Status**: Atualizado em 15/02/2026
> **Versão**: 2.0.0

---

## 1. Contexto do Projeto

### Objetivo
Landing page de alta conversão para serviços de automação com n8n (PHKP Soluções), focada em agendamento de reuniões e captura de leads.

### Stack Técnica
- **Framework**: Next.js 16.1.6 (App Router)
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS v4 + Tailwind Animate
- **UI Components**: Shadcn UI (Radix Primitives)
- **Forms**: React Hook Form + Zod
- **Ícones**: Lucide React

---

## 2. Arquitetura Técnica

### Estrutura de Pastas (`src/`)
```
src/
├── app/
│   ├── globals.css      # Variáveis de tema e Tailwind v4 config
│   ├── layout.tsx       # Root layout com Providers (Theme, Language, Toast)
│   └── page.tsx         # Composição das seções da Landing Page
├── components/
│   ├── ui/              # Componentes Shadcn (Button, Input, Card, etc.)
│   ├── FormDirect.tsx   # Formulário principal
│   ├── FormDiscovery.tsx # Formulário de diagnóstico
│   ├── SectionROI.tsx   # Calculadora de ROI
│   └── ...              # Outras seções (Hero, About, FAQ)
└── lib/
    ├── schemas.ts       # Schemas de validação Zod
    └── utils.ts         # Utilitários (cn)
```

---

## 3. Configurações de Integração (n8n)

**Webhook URL Central**:
`https://formacao-n8n.euualf.easypanel.host/webhook/phkp-formulario`

Todas as requisições são `POST` com `Content-Type: application/json`.

### Payloads por Tipo de Formulário

#### A) Formulário Direto (`FormDirect.tsx`)
- **Tipo**: `ja_sei_o_que_preciso`
- **Gatilho**: Aba "Já sei o que preciso" na seção de Contato.
```json
{
  "tipo": "ja_sei_o_que_preciso",
  "nome": "string",
  "email": "email",
  "empresa": "string",
  "mensagem": "string", // Campo 'descricao_automacao'
  "integracoes": ["Gmail", "Slack"], // Array de strings
  "timestamp": "ISO Date"
}
```

#### B) Formulário Descoberta (`FormDiscovery.tsx`)
- **Tipo**: `diagnostico_descoberta`
- **Gatilho**: Aba "Quero descobrir oportunidades".
```json
{
  "tipo": "diagnostico_descoberta",
  "nome": "string",
  "email": "email",
  "whatsapp": "string",
  "empresa": "string",
  "mensagem": "string",
  "timestamp": "ISO Date"
}
```

#### C) Exit Intent Popup (`ExitIntentPopup.tsx`)
- **Tipo**: `lead_frio_guia`
- **Gatilho**: Intenção de saída (mouse leave).
```json
{
  "tipo": "lead_frio_guia",
  "email": "email",
  "origem": "exit_intent_popup",
  "timestamp": "ISO Date"
}
```

---

## 4. Validação de Dados (Zod Schemas)

Arquivo: `src/lib/schemas.ts`

### `formDirectSchema`
- **nome**: min(2)
- **email**: email válido
- **whatsapp**: min(10)
- **empresa**: opcional
- **descricao_automacao**: min(10)
- **integracoes**: min(1) (Obrigatório selecionar ao menos uma)

### `formDiscoverySchema`
- **nome**: min(2)
- **email**: email válido
- **whatsapp**: min(10)
- **empresa**: opcional
- **mensagem**: min(10)

### `exitIntentSchema`
- **email**: email válido

---

## 5. Integrações Externas

### Google Calendar
- **Link**: `https://calendar.app.google/HMcfcEcCeci7Zu4k6`
- **Ação**: Redirecionamento automático após sucesso no envio dos formulários (`window.location.href`).
- **Parâmetros**:
  - No catálogo (`SectionAutomation.tsx`), o link recebe `?automacao=nome-da-automacao` para contexto.

### LocalStorage
- **Chave**: `exitIntentShown`
- **Valor**: `"true"`
- **Uso**: Impede que o popup de saída apareça mais de uma vez para o usuário.

---

## 6. Funcionalidades Específicas

### Calculadora ROI (`SectionROI.tsx`)
**Fórmula de Economia**:
```javascript
EconomyTime = (Horas * 4semanas * ValorHora * 0.7)
ReworkCost = (Horas * 4semanas * ValorHora * (TaxaErro / 100))
Savings = EconomyTime + ReworkCost + CustoOportunidade
```
*Nota: O fator `0.7` representa uma estimativa conservadora de 70% de tempo economizado.*

### Tema & Estilização
- **Tailwind v4**: Configuração via CSS variables em `globals.css` (ex: `--color-primary: var(--primary)`).
- **Dark Mode**: Forçado como padrão (`defaultTheme="dark"` em `layout.tsx`).
