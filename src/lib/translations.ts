export const translations = {
    pt: {
        nav: {
            home: "Início",
            about: "Sobre",
            roi: "Calculadora ROI",
            catalog: "Catálogo",
            custom: "Personalizada",
            faq: "FAQ",
            start: "Começar agora",
        },
        hero: {
            badge: "Especialistas em n8n & IA",
            title_prefix: "Sua empresa no",
            title_gradient: "piloto automático",
            subtitle: "Economize 20h/semana automatizando tarefas repetitivas. Integração completa entre seus sistemas favoritos, sem que você precise mover um dedo.",
            cta_primary: "Começar Agora",
            cta_secondary: "Ver Exemplos",
            cta_schedule: "Agendar Reunião Gratuita de 30min",
            cta_catalog: "Ver Automações Prontas",
            disclaimer: "Sem compromisso. Diagnóstico gratuito. Só uma conversa sobre como economizar tempo.",
            features: {
                fast_impl: "Implementação Rápida",
                support: "Suporte Contínuo",
                roi: "ROI Comprovado",
            },
        },
        about: {
            title: "Quem está por trás das automações",
            role: "Especialista em automação de processos",
            p1: "Construí minha base ao longo de 7 anos como <strong class=\"text-white\">Gerente Comercial</strong> e <strong class=\"text-white\">Coordenador de Licitações</strong> no setor hospitalar, onde a precisão não é opcional. Vivi na prática o desafio de integrar departamentos que não se comunicavam e o custo real de decisões travadas por processos manuais e planilhas desatualizadas.",
            p2: "Automação resolve o que mata a produtividade: tarefas manuais repetitivas. Transformar formulário em planilha, planilha em notificação, e notificação em ação. É a infraestrutura invisível que elimina o \"esqueci de fazer\" ou o \"copiei errado\", permitindo que as equipes foquem no que o humano faz melhor: decidir e criar.",
            p3: "Hoje, uno visão de gestão com execução técnica. Automação que funciona no mundo real, não só no papel.",
        },
        roi: {
            title: "Quanto tempo e dinheiro você pode economizar?",
            subtitle: "Simule o impacto da automação no seu negócio.",
            label_hours: "Quantas horas/semana gastas em tarefas repetitivas?",
            label_rate: "Qual o custo/hora da sua operação?",
            label_error_rate: "Taxa de erro em processos manuais (%)",
            desc_error_rate: "Retrabalho por erros de digitação, esquecimentos, etc.",
            label_opportunity: "Quanto você deixa de ganhar por não ter tempo? (R$/mês)",
            desc_opportunity: "Ex: vendas perdidas, projetos atrasados",
            result_title: "Economia estimada mensal",
            result_savings_label: "💰 Economia Estimada:",
            result_month_suffix: "por mês",
            result_note: "Considerando 70% de eficiência em automação",
            disclaimer: "* Cálculo baseado em 70% de eficiência da automação (padrão do mercado) + custo real de retrabalho por erro humano. Valores reais variam por processo.",
            cta: "Quero economizar isso",
        },
        lead: {
            title: "Quer uma análise personalizada?",
            subtitle: "Deixe seu melhor email e nossa equipe entrará em contato para detalhar como alcançar esses resultados na sua empresa.",
            placeholder: "seu@email.com",
            cta: "Analisar meu caso",
            success: "Email cadastrado!",
            success_desc: "Entraremos em contato em breve para uma análise personalizada.",
        },
        catalog: {
            title: "Automações para implementação imediata",
            subtitle: "Confira alguns exemplos reais de como transformamos processos manuais em fluxos eficientes.",
            badge_prefix: "Economiza",
            cta: "Quero esta automação",
            items: [
                {
                    title: "Envio de emails automáticos",
                    description: "Envie emails personalizados automaticamente quando um lead preenche formulário, faz uma compra ou atinge um marco no funil.",
                    tech: ["n8n", "Gmail API", "Google Sheets"],
                    savings: "8h/semana"
                },
                {
                    title: "Atendimento via WhatsApp/Telegram",
                    description: "Chatbot inteligente que responde FAQs, qualifica leads e agenda reuniões 24/7, sem intervenção humana.",
                    tech: ["n8n", "WhatsApp Business", "OpenAI"],
                    savings: "12h/semana"
                },
                {
                    title: "Assistente de agendamento",
                    description: "Cliente agenda horários disponíveis via chat, sistema sincroniza com seu Google Calendar e envia lembretes automáticos.",
                    tech: ["n8n", "Google Calendar", "Telegram"],
                    savings: "8h/semana"
                },
                {
                    title: "Geração de relatórios automáticos",
                    description: "Coleta dados de múltiplas fontes (CRM, planilhas, analytics), gera relatórios e envia por email toda semana/mês.",
                    tech: ["n8n", "Google Sheets", "Gmail"],
                    savings: "10h/semana"
                },
            ]
        },
        forms: {
            title: "Comece sua automação agora",
            subtitle: "Escolha a opção que melhor se adapta ao seu momento.",
            direct: {
                title: "Já sei o que preciso",
                subtitle: "Se você já tem claro qual automação deseja, preencha abaixo para agendar uma reunião de implementação.",
            },
            discovery: {
                title: "Não sei por onde começar",
                subtitle: "Receba um diagnóstico gratuito das suas tarefas repetitivas + reunião de 30min para criar seu plano de automação personalizado",
            }
        },
        faq: {
            title: "Perguntas frequentes",
            subtitle: "Tire suas dúvidas sobre como funcionam nossas automações.",
            items: [
                {
                    q: "Quanto tempo leva para implementar uma automação?",
                    a: "Automações simples: 3-5 dias. Automações complexas: 1-3 semanas. Para automações pré-definidas, a implementação é ainda mais rápida."
                },
                {
                    q: "Preciso saber programar ou mexer no n8n?",
                    a: "Não. Entregamos tudo pronto e funcional. Você só usa."
                },
                {
                    q: "Funciona com meu sistema/ferramenta?",
                    a: "n8n integra com 400+ apps (Google, Slack, Excel, CRMs, ERPs, etc.). Se sua ferramenta tem API ou webhook, conseguimos conectar."
                },
                {
                    q: "Como funciona o investimento?",
                    a_simple: "Simples: 1-2 integrações, fluxo linear (ex: planilha → e-mail)",
                    a_medium: "Média: 3-5 integrações, lógica condicional (ex: CRM → WhatsApp + Planilha com regras)",
                    a_advanced: "Avançada: múltiplas integrações, workflows complexos",
                    a_note: "Trabalhamos com orçamento personalizado baseado em 3 faixas de complexidade. A primeira consultoria é gratuita."
                },
                {
                    q: "Posso testar antes de contratar?",
                    a: "Sim! Para automações pré-definidas (catálogo pronto), oferecemos 1 semana gratuita de teste após você aceitar os valores de implementação e mensalidade. Você testa na prática antes de se comprometer."
                },
                {
                    q: "E se eu precisar de ajustes depois da entrega?",
                    a: "Oferecemos suporte pós-entrega e manutenção contínua. Ajustes pequenos são incluídos. Para modificações maiores, apresentamos novo orçamento."
                },
                {
                    q: "Qual a diferença entre automações customizadas e pré-definidas?",
                    a: "Pré-definidas: soluções prontas do nosso catálogo (implementação rápida, teste gratuito de 1 semana, mensalidade fixa). Customizadas: desenvolvidas do zero para seu caso específico (mais flexibilidade, orçamento personalizado)."
                }
            ]
        },
        footer: {
            rights: "© 2024 PHKP Soluções. Todos os direitos reservados.",
            terms: "Termos",
            privacy: "Privacidade"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            roi: "ROI Calculator",
            catalog: "Catalog",
            custom: "Custom",
            faq: "FAQ",
            start: "Start Now",
        },
        hero: {
            badge: "n8n & AI Experts",
            title_prefix: "Put your business on",
            title_gradient: "autopilot",
            subtitle: "Save 20h/week by automating repetitive tasks. Seamless integration between your favorite systems, without lifting a finger.",
            cta_primary: "Start Now",
            cta_secondary: "See Examples",
            cta_schedule: "Schedule Free 30min Meeting",
            cta_catalog: "View Ready Automations",
            disclaimer: "No commitment. Free diagnosis. Just a chat about saving time.",
            features: {
                fast_impl: "Fast Implementation",
                support: "Continuous Support",
                roi: "Proven ROI",
            },
        },
        about: {
            title: "Who is behind the automations",
            role: "Process Automation Specialist",
            p1: "I built my foundation over 7 years as a <strong class=\"text-white\">Commercial Manager</strong> and <strong class=\"text-white\">Bid Coordinator</strong> in the hospital sector, where precision is not optional. I lived through the challenge of integrating departments that didn't communicate and the real cost of decisions stalled by manual processes and outdated spreadsheets.",
            p2: "Automation solves what kills productivity: repetitive manual tasks. Transforming forms into spreadsheets, spreadsheets into notifications, and notifications into action. It is the invisible infrastructure that eliminates 'I forgot to do it' or 'I copied it wrong', allowing teams to focus on what humans do best: deciding and creating.",
            p3: "Today, I combine management vision with technical execution. Automation that works in the real world, not just on paper.",
        },
        roi: {
            title: "How much time and money can you save?",
            subtitle: "Simulate the impact of automation on your business.",
            label_hours: "Hours/week spent on repetitive tasks?",
            label_rate: "What is your operation's hourly cost?",
            label_error_rate: "Error rate in manual processes (%)",
            desc_error_rate: "Rework due to typing errors, forgetfulness, etc.",
            label_opportunity: "How much do you lose by not having time? (R$/month)",
            desc_opportunity: "Ex: lost sales, delayed projects",
            result_title: "Estimated Monthly Savings",
            result_savings_label: "💰 Estimated Savings:",
            result_month_suffix: "per month",
            result_note: "Considering 70% automation efficiency",
            disclaimer: "* Calculation based on 70% automation efficiency (market standard) + real cost of rework due to human error. Real values vary by process.",
            cta: "I want to save this",
        },
        lead: {
            title: "Want a custom analysis?",
            subtitle: "Leave your best email and our team will contact you to detail how to achieve these results in your company.",
            placeholder: "your@email.com",
            cta: "Analyze my case",
            success: "Email registered!",
            success_desc: "We will contact you shortly for a custom analysis.",
        },
        catalog: {
            title: "Automations for Immediate Implementation",
            subtitle: "Check out some real examples of how we transform manual processes into efficient flows.",
            badge_prefix: "Saves",
            cta: "I want this automation",
            items: [
                {
                    title: "Automatic Email Sending",
                    description: "Send personalized emails automatically when a lead fills a form, makes a purchase, or reaches a funnel milestone.",
                    tech: ["n8n", "Gmail API", "Google Sheets"],
                    savings: "8h/week"
                },
                {
                    title: "WhatsApp/Telegram Service",
                    description: "Smart chatbot that answers FAQs, qualifies leads, and schedules meetings 24/7, without human intervention.",
                    tech: ["n8n", "WhatsApp Business", "OpenAI"],
                    savings: "12h/week"
                },
                {
                    title: "Scheduling Assistant",
                    description: "Client schedules available slots via chat, system syncs with your Google Calendar and sends automatic reminders.",
                    tech: ["n8n", "Google Calendar", "Telegram"],
                    savings: "8h/week"
                },
                {
                    title: "Automatic Report Generation",
                    description: "Collects data from multiple sources (CRM, spreadsheets, analytics), generates reports, and sends via email every week/month.",
                    tech: ["n8n", "Google Sheets", "Gmail"],
                    savings: "10h/week"
                },
            ]
        },
        forms: {
            title: "Start your automation now",
            subtitle: "Choose the option that best fits your moment.",
            direct: {
                title: "I know what I need",
                subtitle: "If you are clear about which automation you want, fill out below to schedule an implementation meeting.",
            },
            discovery: {
                title: "I need help",
                subtitle: "Answer a few questions so we can understand your processes and suggest custom automations.",
            }
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Get your questions answered about how our automations work.",
            items: [
                {
                    q: "How long does it take to implement an automation?",
                    a: "Simple automations: 3-5 days. Complex automations: 1-3 weeks. For pre-defined automations, implementation is even faster."
                },
                {
                    q: "Do I need to know programming or use n8n?",
                    a: "No. We deliver everything ready and functional. You just use it."
                },
                {
                    q: "Does it work with my system/tool?",
                    a: "n8n integrates with 400+ apps (Google, Slack, Excel, CRMs, ERPs, etc.). If your tool has an API or webhook, we can connect it."
                },
                {
                    q: "How does the investment work?",
                    a_simple: "Simple: 1-2 integrations, linear flow (e.g., spreadsheet → email)",
                    a_medium: "Medium: 3-5 integrations, conditional logic (e.g., CRM → WhatsApp + Spreadsheet with rules)",
                    a_advanced: "Advanced: multiple integrations, complex workflows",
                    a_note: "We work with custom quotes based on 3 complexity levels. The first consultancy is free."
                },
                {
                    q: "Can I test before hiring?",
                    a: "Yes! For pre-defined automations (ready catalog), we offer a 1-week free trial after you accept the implementation and monthly fees. You test in practice before committing."
                },
                {
                    q: "What if I need adjustments after delivery?",
                    a: "We offer post-delivery support and continuous maintenance. Small adjustments are included. For larger modifications, we present a new quote."
                },
                {
                    q: "What is the difference between custom and pre-defined automations?",
                    a: "Pre-defined: ready solutions from our catalog (fast implementation, 1-week free trial, fixed monthly fee). Custom: developed from scratch for your specific case (more flexibility, custom quote)."
                }
            ]
        },
        footer: {
            rights: "© 2024 PHKP Solutions. All rights reserved.",
            terms: "Terms",
            privacy: "Privacy"
        }
    }
}

export type Language = 'pt' | 'en';
