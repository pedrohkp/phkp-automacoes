import { z } from "zod"

export const formDirectSchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    whatsapp: z.string().min(10, "WhatsApp inválido"),
    empresa: z.string().optional(),
    descricao_automacao: z.string().min(10, "Descreva com mais detalhes"),
    integracoes: z.array(z.string()).min(1, "Selecione pelo menos uma integração"),
})

export const formDiscoverySchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    whatsapp: z.string().min(10, "WhatsApp inválido"),
    empresa: z.string().optional(),
    dores_operacionais: z.string().min(10, "Descreva suas dores operacionais"),
    tarefas_repetitivas: z.string().min(10, "Cite tarefas repetitivas"),
    sistemas: z.array(z.string()).min(1, "Selecione pelo menos um sistema"),
    horas_semanais: z.string().min(1, "Selecione uma opção"),
    tamanho_equipe: z.string().min(1, "Selecione uma opção"),
})

export type FormDirectValues = z.infer<typeof formDirectSchema>
export type FormDiscoveryValues = z.infer<typeof formDiscoverySchema>
