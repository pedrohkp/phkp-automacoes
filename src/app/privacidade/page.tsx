import Link from 'next/link';

export default function PrivacidadePage() {
    return (
        <div className="min-h-screen bg-[#0A1628] text-[#E5E7EB]">
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Breadcrumb */}
                <div className="mb-8 text-sm">
                    <Link href="/" className="text-[#3B82F6] hover:text-[#F97316]">Home</Link>
                    <span className="mx-2 text-[#9CA3AF]">/</span>
                    <span className="text-[#E5E7EB]">Política de Privacidade</span>
                </div>

                {/* Conteúdo */}
                <h1 className="text-4xl font-bold text-white mb-4">Política de Privacidade</h1>
                <p className="text-[#9CA3AF] mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">1. Quais Dados Coletamos</h2>
                        <p className="text-[#E5E7EB] leading-relaxed mb-3">
                            Coletamos os seguintes dados pessoais através dos formulários de contato:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-[#E5E7EB] ml-4">
                            <li>Nome completo</li>
                            <li>Endereço de e-mail</li>
                            <li>Número de WhatsApp</li>
                            <li>Nome da empresa (opcional)</li>
                            <li>Descrição de necessidades/processos (quando fornecida)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">2. Como Usamos Seus Dados</h2>
                        <p className="text-[#E5E7EB] leading-relaxed mb-3">
                            Utilizamos seus dados exclusivamente para:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-[#E5E7EB] ml-4">
                            <li>Entrar em contato para agendamento de reuniões</li>
                            <li>Enviar materiais educativos solicitados (guias, checklists)</li>
                            <li>Responder dúvidas e solicitações de orçamento</li>
                            <li>Comunicações relacionadas aos serviços contratados</li>
                        </ul>
                        <p className="text-[#E5E7EB] leading-relaxed mt-3">
                            <strong>Não enviamos spam. Não vendemos seus dados. Não compartilhamos com terceiros para fins de marketing.</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">3. Compartilhamento de Dados</h2>
                        <p className="text-[#E5E7EB] leading-relaxed">
                            Seus dados NÃO são compartilhados com terceiros, exceto quando estritamente necessário para prestação de serviços
                            (ex: plataformas de agendamento, sistemas de e-mail) e sempre sob cláusulas de confidencialidade.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">4. Armazenamento e Segurança</h2>
                        <p className="text-[#E5E7EB] leading-relaxed mb-3">
                            Seus dados são armazenados em:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-[#E5E7EB] ml-4">
                            <li>Servidores próprios n8n (hospedagem segura)</li>
                            <li>Google Sheets (para gestão interna de leads)</li>
                            <li>Plataformas de e-mail (Gmail/SMTP)</li>
                        </ul>
                        <p className="text-[#E5E7EB] leading-relaxed mt-3">
                            Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado,
                            perda ou alteração.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">5. Seus Direitos (LGPD - Art. 18)</h2>
                        <p className="text-[#E5E7EB] leading-relaxed mb-3">
                            Você tem direito a:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-[#E5E7EB] ml-4">
                            <li>Confirmar a existência de tratamento de seus dados</li>
                            <li>Acessar seus dados</li>
                            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                            <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
                            <li>Revogar consentimento</li>
                        </ul>
                        <p className="text-[#E5E7EB] leading-relaxed mt-3">
                            Para exercer seus direitos, entre em contato: <a href="mailto:contato@phkp.com" className="text-[#F97316] hover:underline">contato@phkp.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">6. Cookies</h2>
                        <p className="text-[#E5E7EB] leading-relaxed">
                            Utilizamos apenas cookies essenciais para o funcionamento do site (sessão, preferências).
                            Não utilizamos cookies de rastreamento ou publicidade de terceiros.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">7. Contato do Responsável</h2>
                        <p className="text-[#E5E7EB] leading-relaxed">
                            <strong>Responsável pelo Tratamento de Dados:</strong><br />
                            Pedro Pavão - PHKP Automações<br />
                            E-mail: <a href="mailto:contato@phkp.com" className="text-[#F97316] hover:underline">contato@phkp.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-3">8. Alterações nesta Política</h2>
                        <p className="text-[#E5E7EB] leading-relaxed">
                            Esta Política de Privacidade pode ser atualizada periodicamente. A data de última atualização será sempre
                            indicada no topo desta página.
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
