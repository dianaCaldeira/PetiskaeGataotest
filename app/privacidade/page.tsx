import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Users, Mail, Phone, Calendar, ArrowLeft } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function Privacy() {
  const lastUpdated = "15 de Janeiro de 2024";

  const sections = [
    {
      id: "coleta",
      title: "1. Informações que Coletamos",
      icon: Eye,
      content: [
        "Informações pessoais fornecidas voluntariamente (nome, e-mail, telefone)",
        "Dados de navegação e cookies para melhorar a experiência",
        "Informações sobre seu pet quando relevante para nossos serviços",
        "Dados de comunicação quando você entra em contato conosco"
      ]
    },
    {
      id: "uso",
      title: "2. Como Usamos suas Informações",
      icon: Users,
      content: [
        "Processar pedidos e fornecer nossos produtos e serviços",
        "Comunicar sobre produtos, promoções e novidades",
        "Melhorar nosso site e experiência do usuário",
        "Responder a dúvidas e solicitações de suporte",
        "Cumprir obrigações legais e regulamentares"
      ]
    },
    {
      id: "protecao",
      title: "3. Proteção de Dados",
      icon: Lock,
      content: [
        "Utilizamos criptografia SSL para proteger dados em trânsito",
        "Armazenamento seguro com acesso restrito a funcionários autorizados",
        "Monitoramento regular de segurança e atualizações",
        "Não vendemos ou compartilhamos dados pessoais com terceiros",
        "Backup regular e seguro de todas as informações"
      ]
    },
    {
      id: "direitos",
      title: "4. Seus Direitos (LGPD)",
      icon: Shield,
      content: [
        "Acesso: Solicitar informações sobre dados pessoais que possuímos",
        "Correção: Corrigir dados incompletos, inexatos ou desatualizados",
        "Exclusão: Solicitar a exclusão de dados pessoais",
        "Portabilidade: Receber seus dados em formato estruturado",
        "Revogação: Revogar consentimento a qualquer momento"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Breadcrumb items={[{ label: 'Privacidade' }]} />
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Site
              </Button>
            </Link>
          </div>

          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Política de Privacidade
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Sua <span className="text-accent">Privacidade</span> é<br />
              Nossa <span className="text-accent">Prioridade</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Na Petiska & Gatão, respeitamos sua privacidade e estamos comprometidos 
              em proteger seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Última atualização: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="mb-12 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">Compromisso com a Privacidade</h2>
                  <p className="text-muted-foreground">Transparência total sobre o uso dos seus dados</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade descreve como a <strong>Petiska & Gatão</strong> coleta, 
                usa, armazena e protege suas informações pessoais quando você utiliza nosso site, 
                produtos ou serviços. Ao usar nossos serviços, você concorda com as práticas 
                descritas nesta política.
              </p>
            </CardContent>
          </Card>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.id} className="shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Cookies */}
          <Card className="mt-12 shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">5. Cookies e Tecnologias Similares</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Cookies essenciais:</strong> Necessários para o funcionamento básico do site</li>
                  <li>• <strong>Cookies de desempenho:</strong> Nos ajudam a entender como você usa o site</li>
                  <li>• <strong>Cookies de funcionalidade:</strong> Lembram suas preferências</li>
                  <li>• <strong>Cookies de marketing:</strong> Personalizam anúncios (apenas com seu consentimento)</li>
                </ul>
                <p>
                  Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mt-12 shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">6. Entre em Contato</h2>
              <p className="text-muted-foreground mb-6">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos 
                sob a LGPD, entre em contato conosco:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">E-mail</div>
                    <div className="text-muted-foreground">privacidade@petiskagatao.com.br</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">WhatsApp</div>
                    <div className="text-muted-foreground">(61) 99999-9999</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-2xl">
                <h3 className="text-lg font-bold text-primary mb-2">
                  Encarregado de Dados (DPO)
                </h3>
                <p className="text-muted-foreground">
                  Para questões específicas sobre proteção de dados, entre em contato com 
                  nosso Encarregado de Dados através do e-mail: <strong>dpo@petiskagatao.com.br</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer Actions */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/termos">
                <Button variant="outline" size="lg">
                  Ver Termos de Uso
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="hero" size="lg">
                  Falar Conosco
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Esta política pode ser atualizada periodicamente. Recomendamos revisar regularmente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
