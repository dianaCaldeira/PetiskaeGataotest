import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Heart, Package, Store, ShoppingCart, Stethoscope } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'produtos' | 'parceiros' | 'pedidos' | 'saude';
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Os petiscos servem para gatos?',
    answer: 'Sim! A maioria dos nossos petiscos são formulados para cães e gatos. Produtos como frango desidratado são seguros e muito apreciados por gatos. Sempre verifique a descrição do produto.',
    category: 'produtos'
  },
  {
    id: '2',
    question: 'Posso dar petiscos todos os dias?',
    answer: 'Sim, nossos petiscos são naturais e podem ser usados como parte da rotina diária, sempre com moderação. Recomendamos de 1 a 5 unidades por dia, conforme porte e nível de atividade do animal.',
    category: 'produtos'
  },
  {
    id: '3',
    question: 'Os produtos precisam ser refrigerados?',
    answer: 'Não, nossos petiscos desidratados não precisam de refrigeração. Basta manter em local fresco, seco e ao abrigo da luz. Após abrir, consuma em até 30 dias.',
    category: 'produtos'
  },
  {
    id: '4',
    question: 'Como ajudam com problemas de pele?',
    answer: 'Nossos produtos ricos em proteínas de qualidade contribuem para uma pele e pelos saudáveis, prevenindo ressecamento. Ingredientes naturais evitam alérgenos comuns encontrados em produtos industrializados.',
    category: 'saude'
  },
  {
    id: '5',
    question: 'Qual a margem de lucro para lojistas?',
    answer: 'Trabalhamos com margens competitivas que garantem boa lucratividade para nossos parceiros. Entre em contato através do formulário "Seja Parceiro" para receber nossa tabela de preços atacado.',
    category: 'parceiros'
  },
  {
    id: '6',
    question: 'Qual o pedido mínimo para pet shops?',
    answer: 'Nosso pedido mínimo é flexível e varia de acordo com a localização em Brasília. Oferecemos condições especiais para novos parceiros. Consulte-nos para saber mais.',
    category: 'parceiros'
  },
  {
    id: '7',
    question: 'Como fazer um pedido?',
    answer: 'Entre em contato conosco pelo WhatsApp ou e-mail. Temos uma equipe dedicada para atender pet shops e processar pedidos rapidamente. Entregamos em toda Brasília.',
    category: 'pedidos'
  },
  {
    id: '8',
    question: 'Qual o prazo de entrega?',
    answer: 'Para pet shops em Brasília, o prazo é de 2 a 5 dias úteis. Oferecemos entrega expressa para pedidos urgentes. Consulte disponibilidade na sua região.',
    category: 'pedidos'
  },
  {
    id: '9',
    question: 'Os petiscos são seguros para filhotes?',
    answer: 'Sim, nossos petiscos naturais são seguros para filhotes a partir de 3 meses. Recomendamos quebrar em pedaços menores para facilitar a mastigação e digestão.',
    category: 'saude'
  },
  {
    id: '10',
    question: 'Pets com alergias podem consumir?',
    answer: 'Nossos produtos são livres de conservantes artificiais e corantes, reduzindo riscos de alergias. Para pets com restrições específicas, consulte sempre um veterinário antes de introduzir novos alimentos.',
    category: 'saude'
  }
];

const categoryInfo = {
  produtos: {
    title: 'Produtos',
    icon: Package,
    color: 'bg-primary/10 text-primary'
  },
  parceiros: {
    title: 'Parceiros',
    icon: Store,
    color: 'bg-accent/10 text-accent'
  },
  pedidos: {
    title: 'Pedidos',
    icon: ShoppingCart,
    color: 'bg-warm-beige/30 text-primary'
  },
  saude: {
    title: 'Saúde',
    icon: Stethoscope,
    color: 'bg-leaf-green/20 text-primary'
  }
};

export default function FAQ() {
  const categories = Object.keys(categoryInfo) as Array<keyof typeof categoryInfo>;

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Breadcrumb items={[{ label: 'Perguntas Frequentes' }]} />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Perguntas Frequentes
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Tire Suas <span className="text-accent">Dúvidas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Encontre respostas para as perguntas mais comuns sobre nossos petiscos naturais, 
              parcerias e processos. Se não encontrar sua dúvida, entre em contato conosco!
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {categories.map((category) => {
              const info = categoryInfo[category];
              const Icon = info.icon;
              const count = faqData.filter(faq => faq.category === category).length;
              
              return (
                <div key={category} className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{count}</div>
                  <div className="text-sm text-muted-foreground">{info.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => {
            const info = categoryInfo[category];
            const Icon = info.icon;
            const categoryFAQs = faqData.filter(faq => faq.category === category);
            
            return (
              <div key={category} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">
                    {info.title}
                  </h2>
                </div>

                <Card className="shadow-card">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {categoryFAQs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id} className="border-b last:border-b-0">
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50">
                            <span className="text-lg font-semibold text-primary pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Não Encontrou sua Dúvida?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa equipe está sempre pronta para ajudar! Entre em contato conosco 
              e teremos prazer em esclarecer qualquer questão sobre nossos produtos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button variant="hero" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar Conosco
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Outros Recursos Úteis
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore mais informações sobre a Petiska & Gatão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Nossos Produtos</h3>
                <p className="text-muted-foreground mb-4">
                  Conheça toda nossa linha de petiscos naturais para cães e gatos.
                </p>
                <Link href="/produtos">
                  <Button variant="outline" size="sm">
                    Ver Produtos
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Onde Encontrar</h3>
                <p className="text-muted-foreground mb-4">
                  Localize os pet shops parceiros mais próximos de você.
                </p>
                <Link href="/onde-encontrar">
                  <Button variant="outline" size="sm">
                    Ver Lojas
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-warm-beige/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Nossa História</h3>
                <p className="text-muted-foreground mb-4">
                  Saiba mais sobre a Petiska & Gatão e nossos valores.
                </p>
                <Link href="/sobre">
                  <Button variant="outline" size="sm">
                    Conhecer
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
