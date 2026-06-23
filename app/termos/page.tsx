import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Scale, Shield, AlertTriangle, Calendar, ArrowLeft, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function Terms() {
  const lastUpdated = "15 de Janeiro de 2024";

  const sections = [
    {
      id: "aceitacao",
      title: "1. Aceitação dos Termos",
      icon: CheckCircle,
      content: [
        "Ao acessar e usar o site da Petiska & Gatão, você aceita estes Termos de Uso",
        "Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços",
        "Reservamo-nos o direito de modificar estes termos a qualquer momento",
        "É sua responsabilidade revisar periodicamente estes termos"
      ]
    },
    {
      id: "servicos",
      title: "2. Descrição dos Serviços",
      icon: FileText,
      content: [
        "Oferecemos petiscos naturais para cães e gatos produzidos artesanalmente",
        "Fornecemos informações sobre nossos produtos através do site",
        "Facilitamos o contato entre clientes e nossos parceiros pet shops",
        "Oferecemos conteúdo educativo sobre cuidados com pets",
        "Mantemos um programa de parcerias para pet shops"
      ]
    },
    {
      id: "uso",
      title: "3. Uso Permitido",
      icon: Shield,
      content: [
        "Você pode navegar pelo site para fins informativos e comerciais legítimos",
        "É permitido entrar em contato conosco através dos canais disponibilizados",
        "Pode compartilhar nosso conteúdo desde que cite a fonte",
        "É permitido se cadastrar como parceiro seguindo nossos procedimentos",
        "Deve usar as informações de contato apenas para fins relacionados aos nossos serviços"
      ]
    },
    {
      id: "proibicoes",
      title: "4. Uso Proibido",
      icon: AlertTriangle,
      content: [
        "Não use o site para atividades ilegais ou não autorizadas",
        "Não tente acessar áreas restritas ou sistemas não públicos",
        "Não envie spam ou mensagens não solicitadas",
        "Não copie ou reproduza nosso conteúdo sem autorização",
        "Não use nossos serviços para prejudicar terceiros"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Breadcrumb items={[{ label: 'Termos de Uso' }]} />
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
              Termos de Uso
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Termos e <span className="text-accent">Condições</span><br />
              de <span className="text-accent">Uso</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estes termos estabelecem as regras e condições para o uso do site e serviços 
              da Petiska & Gatão. Leia atentamente antes de usar nossos serviços.
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
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">Informações Gerais</h2>
                  <p className="text-muted-foreground">Sobre a Petiska & Gatão e estes termos</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A <strong>Petiska & Gatão</strong> é uma empresa brasileira especializada na produção 
                  artesanal de petiscos naturais para cães e gatos, localizada em Brasília, DF.
                </p>
                <p>
                  Estes Termos de Uso regulam o acesso e uso do nosso site, produtos e serviços. 
                  Ao utilizar qualquer um de nossos serviços, você declara ter lido, compreendido 
                  e concordado com todos os termos aqui estabelecidos.
                </p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="font-semibold text-primary mb-2">Dados da Empresa:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Razão Social:</strong> Petiska & Gatão Ltda.</li>
                    <li>• <strong>CNPJ:</strong> XX.XXX.XXX/0001-XX</li>
                    <li>• <strong>Endereço:</strong> Brasília, DF</li>
                    <li>• <strong>E-mail:</strong> contato@petiskagatao.com.br</li>
                  </ul>
                </div>
              </div>
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

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">5. Propriedade Intelectual</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Todo conteúdo do site é propriedade da Petiska & Gatão</li>
                  <li>• Marcas, logos e designs são protegidos por direitos autorais</li>
                  <li>• Uso não autorizado pode resultar em ações legais</li>
                  <li>• Respeitamos a propriedade intelectual de terceiros</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">6. Limitação de Responsabilidade</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Não nos responsabilizamos por danos indiretos</li>
                  <li>• Informações fornecidas são para fins educativos</li>
                  <li>• Sempre consulte um veterinário para questões de saúde</li>
                  <li>• Não garantimos disponibilidade contínua do site</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">7. Produtos e Qualidade</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Compromisso com a Qualidade:</strong> Todos os nossos petiscos são produzidos 
                  artesanalmente com ingredientes naturais selecionados. Seguimos rigorosos padrões 
                  de qualidade e higiene.
                </p>
                <p>
                  <strong>Disponibilidade:</strong> Nossos produtos estão disponíveis através de nossa 
                  rede de pet shops parceiros. A disponibilidade pode variar conforme a região.
                </p>
                <p>
                  <strong>Informações Nutricionais:</strong> Fornecemos informações sobre ingredientes 
                  e composição nutricional. Para pets com necessidades especiais, consulte um veterinário.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-12 shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">8. Modificações e Contato</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Alterações nos Termos:</strong> Podemos modificar estes termos a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após a publicação no site.
                </p>
                <p>
                  <strong>Lei Aplicável:</strong> Estes termos são regidos pelas leis brasileiras. 
                  Foro competente: Brasília, DF.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-4">Entre em Contato</h3>
                  <p className="mb-4">
                    Para dúvidas sobre estes termos ou nossos serviços:
                  </p>
                  <div className="space-y-2">
                    <p>📧 <strong>E-mail:</strong> juridico@petiskagatao.com.br</p>
                    <p>📱 <strong>WhatsApp:</strong> (61) 99999-9999</p>
                    <p>🏢 <strong>Endereço:</strong> Brasília, DF</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Actions */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/privacidade">
                <Button variant="outline" size="lg">
                  Ver Política de Privacidade
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="hero" size="lg">
                  Falar Conosco
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Ao continuar usando nossos serviços, você concorda com estes termos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
