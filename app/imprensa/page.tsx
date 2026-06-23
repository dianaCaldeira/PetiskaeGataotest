import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Newspaper, 
  Download, 
  Mail, 
  Phone, 
  FileText, 
  Image, 
  Award,
  Users,
  TrendingUp,
  Calendar,
  ExternalLink
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      title: "Petiska & Gatão Expande Rede de Parceiros em Brasília",
      date: "2024-01-20",
      excerpt: "Empresa brasiliense de petiscos naturais alcança marca de 50 pet shops parceiros no Distrito Federal.",
      category: "Expansão",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Nova Linha de Petiscos para Gatos Chega ao Mercado",
      date: "2024-01-10",
      excerpt: "Petiska & Gatão lança produtos específicos para felinos, ampliando portfólio de petiscos naturais.",
      category: "Produto",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Compromisso com Sustentabilidade: Embalagens Eco-friendly",
      date: "2023-12-15",
      excerpt: "Empresa adota embalagens 100% recicláveis em toda sua linha de produtos.",
      category: "Sustentabilidade",
      downloadUrl: "#"
    }
  ];

  const mediaKit = [
    {
      title: "Logo da Empresa",
      description: "Logotipos em alta resolução em diversos formatos",
      type: "ZIP",
      size: "2.5 MB",
      icon: Image
    },
    {
      title: "Fact Sheet",
      description: "Informações essenciais sobre a Petiska & Gatão",
      type: "PDF",
      size: "1.2 MB",
      icon: FileText
    },
    {
      title: "Fotos de Produtos",
      description: "Galeria de imagens dos produtos em alta qualidade",
      type: "ZIP",
      size: "15 MB",
      icon: Image
    },
    {
      title: "Biografia dos Fundadores",
      description: "História e trajetória dos criadores da empresa",
      type: "PDF",
      size: "800 KB",
      icon: FileText
    }
  ];

  const stats = [
    {
      number: "5.000+",
      label: "Pets Atendidos",
      icon: Users
    },
    {
      number: "50+",
      label: "Pet Shops Parceiros",
      icon: Award
    },
    {
      number: "2 anos",
      label: "No Mercado",
      icon: Calendar
    },
    {
      number: "100%",
      label: "Produtos Naturais",
      icon: TrendingUp
    }
  ];

  const coverage = [
    {
      outlet: "Correio Braziliense",
      title: "Empresa brasiliense inova no mercado de petiscos naturais",
      date: "2024-01-15",
      type: "Matéria"
    },
    {
      outlet: "G1 DF",
      title: "Petiscos artesanais ganham espaço no mercado pet de Brasília",
      date: "2023-12-20",
      type: "Reportagem"
    },
    {
      outlet: "Metrópoles",
      title: "Sustentabilidade e qualidade marcam crescimento de empresa local",
      date: "2023-11-30",
      type: "Entrevista"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Breadcrumb items={[{ label: 'Imprensa' }]} />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Sala de Imprensa
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Imprensa <span className="text-accent">Petiska & Gatão</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Recursos, informações e materiais para jornalistas e veículos de comunicação. 
              Conheça nossa história, produtos e impacto no mercado pet de Brasília.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Comunicados à Imprensa
            </h2>
            <p className="text-xl text-muted-foreground">
              Últimas novidades e anúncios da Petiska & Gatão
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{release.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(release.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {release.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {release.excerpt}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Comunicado
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Kit de Imprensa
            </h2>
            <p className="text-xl text-muted-foreground">
              Materiais e recursos para jornalistas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaKit.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-4">
                      <span>{item.type}</span>
                      <span>•</span>
                      <span>{item.size}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Na Mídia
            </h2>
            <p className="text-xl text-muted-foreground">
              Cobertura da imprensa sobre a Petiska & Gatão
            </p>
          </div>

          <div className="space-y-6">
            {coverage.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <Badge variant="secondary">{item.outlet}</Badge>
                        <Badge variant="outline">{item.type}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(item.date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Matéria
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-8 md:p-16">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Newspaper className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Sobre a Petiska & Gatão
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  A <strong>Petiska & Gatão</strong> é uma empresa brasiliense especializada na produção 
                  artesanal de petiscos naturais para cães e gatos. Fundada em 2022, a empresa nasceu 
                  da paixão pelos animais e do compromisso em oferecer produtos de alta qualidade, 
                  livres de conservantes artificiais e aditivos químicos.
                </p>

                <p className="mb-6">
                  Com sede em Brasília, a empresa atende todo o Distrito Federal através de uma rede 
                  de mais de 50 pet shops parceiros. Todos os produtos são desenvolvidos com 
                  ingredientes naturais cuidadosamente selecionados, seguindo rigorosos padrões 
                  de qualidade e segurança alimentar.
                </p>

                <p className="mb-6">
                  A Petiska & Gatão se destaca no mercado pet local pelo compromisso com a 
                  sustentabilidade, utilizando embalagens eco-friendly, e pela transparência 
                  em todo o processo produtivo. A empresa já impactou positivamente a vida de 
                  mais de 5.000 pets na região.
                </p>

                <div className="bg-accent/10 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Missão</h3>
                  <p className="mb-4">
                    Proporcionar momentos de alegria e saúde para pets através de petiscos 
                    naturais de alta qualidade, produzidos com amor e responsabilidade.
                  </p>
                  
                  <h3 className="text-xl font-bold text-primary mb-4">Visão</h3>
                  <p>
                    Ser referência em petiscos naturais no Centro-Oeste, expandindo nossa 
                    presença e impacto positivo na vida dos pets e suas famílias.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Contato para Imprensa
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Para entrevistas, informações adicionais ou agendamento de pautas, 
              entre em contato com nossa assessoria de imprensa.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-primary">E-mail</div>
                <div className="text-muted-foreground">imprensa@petiskagatao.com.br</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-primary">Telefone</div>
                <div className="text-muted-foreground">(61) 99999-9999</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </Button>
              <Link href="/contato">
                <Button variant="outline" size="lg">
                  Formulário de Contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
