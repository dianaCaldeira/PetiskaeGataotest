'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Shield, 
  Star, 
  Quote, 
  BarChart3,
  Truck,
  HeadphonesIcon,
  Target,
  Award,
  ArrowRight,
  Phone,
  Calculator
} from 'lucide-react';

export default function ForPetShops() {
  const [calculatorData, setCalculatorData] = useState({
    monthlyCustomers: '',
    averageTicket: '',
    petiscosPercentage: ''
  });

  const calculatePotential = () => {
    const customers = parseInt(calculatorData.monthlyCustomers) || 0;
    const ticket = parseFloat(calculatorData.averageTicket) || 0;
    const percentage = parseFloat(calculatorData.petiscosPercentage) || 0;
    
    const monthlyRevenue = customers * ticket * (percentage / 100);
    const yearlyRevenue = monthlyRevenue * 12;
    const profit = monthlyRevenue * 0.35; // 35% margem média
    
    return {
      monthlyRevenue,
      yearlyRevenue,
      profit
    };
  };

  const potential = calculatePotential();

  const benefits = [
    {
      icon: DollarSign,
      title: "Margem Atrativa",
      description: "Margens competitivas que garantem boa lucratividade para seu pet shop",
      highlight: "35-45% de margem"
    },
    {
      icon: TrendingUp,
      title: "Produtos em Alta",
      description: "Petiscos naturais são tendência e têm alta demanda no mercado pet",
      highlight: "Crescimento de 25% ao ano"
    },
    {
      icon: Users,
      title: "Fidelização de Clientes",
      description: "Produtos de qualidade que fazem os clientes voltarem sempre",
      highlight: "85% de recompra"
    },
    {
      icon: Shield,
      title: "Marca Confiável",
      description: "Empresa brasiliense consolidada com excelente reputação",
      highlight: "5000+ pets atendidos"
    }
  ];

  const support = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Entregas em 2-5 dias úteis em todo o DF"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Dedicado",
      description: "Equipe especializada para atender parceiros"
    },
    {
      icon: BarChart3,
      title: "Material de Apoio",
      description: "Displays, folders e material promocional"
    },
    {
      icon: Target,
      title: "Flexibilidade",
      description: "Pedidos mínimos adaptados ao seu negócio"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      petshop: "Pet Shop Asa Norte",
      text: "Os petiscos da Petiska & Gatão são os mais procurados na nossa loja. A qualidade é excepcional e os clientes sempre voltam para comprar mais!",
      rating: 5
    },
    {
      name: "João Santos",
      petshop: "Pet Center Taguatinga",
      text: "Parceria excelente! O suporte é fantástico e a margem de lucro nos permite crescer. Recomendo para todos os colegas do setor.",
      rating: 5
    },
    {
      name: "Ana Costa",
      petshop: "Pet Shop Águas Claras",
      text: "Desde que começamos a vender os produtos da Petiska & Gatão, nossas vendas de petiscos aumentaram 40%. Qualidade incomparável!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground px-6 py-2 mb-6 text-lg">
              Para Pet Shops
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Seja Nosso <span className="text-accent">Parceiro</span><br />
              e <span className="text-accent">Lucre Mais</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Junte-se aos <strong>50+ pet shops</strong> que já vendem nossos petiscos naturais 
              e aumentaram sua lucratividade. Oferecemos suporte completo, margens atrativas 
              e produtos que os clientes adoram.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cadastro-parceiro">
                <Button variant="hero" size="xl">
                  <ArrowRight className="w-6 h-6 mr-3" />
                  Quero ser Parceiro
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                <Phone className="w-6 h-6 mr-3" />
                Falar com Consultor
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Pet Shops Parceiros</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">35%</div>
              <div className="text-muted-foreground">Margem Média</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">85%</div>
              <div className="text-muted-foreground">Taxa de Recompra</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">2-5</div>
              <div className="text-muted-foreground">Dias para Entrega</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Por Que Escolher a Petiska & Gatão?
            </h2>
            <p className="text-xl text-muted-foreground">
              Vantagens exclusivas para nossos parceiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {benefit.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Calcule seu Potencial de Lucro
              </h2>
              <p className="text-lg text-muted-foreground">
                Veja quanto você pode ganhar vendendo nossos petiscos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Clientes por mês
                </label>
                <Input
                  type="number"
                  placeholder="Ex: 200"
                  value={calculatorData.monthlyCustomers}
                  onChange={(e) => setCalculatorData(prev => ({
                    ...prev,
                    monthlyCustomers: e.target.value
                  }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ticket médio (R$)
                </label>
                <Input
                  type="number"
                  placeholder="Ex: 50"
                  value={calculatorData.averageTicket}
                  onChange={(e) => setCalculatorData(prev => ({
                    ...prev,
                    averageTicket: e.target.value
                  }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  % Petiscos
                </label>
                <Input
                  type="number"
                  placeholder="Ex: 15"
                  value={calculatorData.petiscosPercentage}
                  onChange={(e) => setCalculatorData(prev => ({
                    ...prev,
                    petiscosPercentage: e.target.value
                  }))}
                />
              </div>
            </div>

            {potential.monthlyRevenue > 0 && (
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                  Seu Potencial de Lucro
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">
                      R$ {potential.monthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-muted-foreground">Faturamento Mensal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">
                      R$ {potential.profit.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-muted-foreground">Lucro Mensal (35%)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">
                      R$ {potential.yearlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-muted-foreground">Faturamento Anual</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Suporte Completo para Parceiros
            </h2>
            <p className="text-xl text-muted-foreground">
              Não deixamos você sozinho. Oferecemos todo o apoio necessário
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {support.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              O Que Nossos Parceiros Dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Depoimentos reais de pet shops parceiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.petshop}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Pronto para Aumentar seus Lucros?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Junte-se aos nossos parceiros de sucesso e comece a vender os petiscos 
              mais procurados de Brasília. Processo simples e rápido!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cadastro-parceiro">
                <Button variant="hero" size="lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Cadastrar Pet Shop
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Consultor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
