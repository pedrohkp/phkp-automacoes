import Link from 'next/link';

export default function TermosPage() {
    return (
        <div className="min-h-screen bg-[#0A1628] text-[#E5E7EB]">
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Breadcrumb */}
                <div className="mb-8 text-sm">
                    <Link href="/" className="text-[#3B82F6] hover:text-[#F97316]">Home</Link>
                    <span className="mx-2 text-[#9CA3AF]">/</span>
                    <span className="text-[#E5E7EB]">Termos de Uso</span>
                </div>

                {/* Conteúdo */}
                <h1 className="text-4xl font-bold text-white mb-4">Termos de Uso</h1>
                <p className="text-[#9CA3AF] mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
                        <p className="text-[#E5E7EB] leading-relaxed">
                            Ao acessar e utilizar os serviços da PHKP Automações, você concorda com estes Termos de Uso.
                            Se não concordar com algum termo, recomendamos que não utilize nossos serviços.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">2. Descrição dos Serviços</h2>
                        <p className="text-[#E5E7EB] leading-relaxed mb-3">
                            A PHKP Automações oferece serviços de implementação de automações de processos utilizando a plataforma n8n, incluindo:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-[#E5E7EB] ml-4">
                            <li>Análise e mapeamento de processos</li>
                            <li>Desenvolvimento de workflows customizados</li>
                            <li>Integração entre sistemas e plataformas</li>
                            <li>Treinamento e documentação</li>
                            <li>Suporte técnico pós-implementação</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">3. Responsabilidades do Cliente</h2>
                        <ul className="list-disc list-inside space-y-2 text-[#E5E7EB] ml-4">
                            <li>Fornecer acessos necessários aos sistemas a serem integrados</li>
                            <li>Validar e testar os fluxos de automação desenvolvidos</li>
                            <li>Comunicar alterações em processos que possam afetar as automações</li>
                            <li>Manter credenciais e acessos seguros</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">4. Responsabilidades da PHKP</h2>
                        <ul className="list-disc list-inside space-y-2 text-[#E5E7EB] ml-4">
                            <li>Implementar automações conforme especificado e acordado</li>
                            <li>Fornecer documentação clara dos workflows criados</li>
                            <li>Oferecer suporte técnico por 30 dias após a entrega</li>
                            <li>Manter confidencialidade sobre dados e processos do cliente</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">5. Propriedade Intelectual</h2>
                        <p className="text-[#E5E7EB] leading-relaxed">
                            Os workflows e automações customizados desenvolvidos para o cliente são de propriedade do cliente.
                            A PHKP retém direitos sobre metodologias, templates genéricos e conhecimento técnico empregado.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">6. Limitação de Responsabilidade</h2>
                        <p className="text-[#E5E7EB] leading-relaxed">
                            A PHKP não se responsabiliza por: (a) problemas em APIs ou serviços de terceiros integrados;
                            (b) perda de dados causada por ações do cliente; (c) interrupções em serviços de infraestrutura (hosting, cloud).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">7. Lei Aplicável</h2>
                        <p className="text-[#E5E7EB] leading-relaxed">
                            Estes termos são regidos pelas leis da República Federativa do Brasil.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">8. Contato</h2>
                        <p className="text-[#E5E7EB] leading-relaxed">
                            Para dúvidas sobre estes Termos de Uso, entre em contato: <a href="mailto:contato@phkp.com" className="text-[#F97316] hover:underline">contato@phkp.com</a>
                        </p>
                    </section>
                </div>

                {/* Botão Voltar */}
                <div className="mt-12">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white rounded-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all"
                    >
                        ← Voltar para Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
