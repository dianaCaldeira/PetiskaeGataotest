'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  BookOpen, 
  Download, 
  CheckCircle, 
  Heart, 
  Star, 
  Gift, 
  Mail,
  FileText,
  Users,
  Award,
  Leaf,
  Shield
} from 'lucide-react';

export default function GuiaPetiscos() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    "Guia completo com 50+ páginas de conteúdo especializado",
    "Receitas caseiras aprovadas por veterinários",
    "Dicas de nutrição para cada fase da vida do pet",
    "Lista de ingredientes seguros e perigosos",
    "Calendário de introdução de novos alimentos",
    "Bonus: Receitas especiais para ocasiões festivas"
  ];

  const topics = [
    {
      icon: Heart,
      title: "Nutrição Básica",
      description: "Fundamentos da alimentação saudável para pets"
    },
    {
      icon: Leaf,
      title: "Ingredientes Naturais",
      description: "Como escolher e usar ingredientes 100% naturais"
    },
    {
      icon: Shield,
      title: "Segurança Alimentar",
      description: "Alimentos seguros vs. perigosos para pets"
    },
    {
      icon: Award,
      title: "Receitas Especiais",
      description: "Petiscos para diferentes necessidades e idades"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "E-mail obrigatório",
        description: "Por favor, insira seu e-mail para receber o guia.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Guia enviado com sucesso!",
        description: "Verifique sua caixa de entrada e spam. O guia chegará em alguns minutos.",
      });

      setEmail('');
    } catch {
      toast({
        title: "Erro ao enviar guia",
        description: "Tente novamente ou entre em contato conosco.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge className="bg-accent text-accent-foreground px-6 py-2 mb-6 text-lg">
                Guia Gratuito
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Guia Completo de<br />
                <span className="text-accent">Petiscos Naturais</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Descubra os segredos para fazer petiscos caseiros saudáveis e deliciosos 
                para seu pet. Mais de <strong>50 páginas</strong> de conteúdo especializado, 
                receitas aprovadas por veterinários e dicas exclusivas.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Mais de 2.000 downloads</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-muted-foreground ml-2">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Download Form */}
            <div>
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gift className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      Baixe Gratuitamente
                    </h2>
                    <p className="text-muted-foreground">
                      Insira seu e-mail e receba o guia completo em PDF
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Seu melhor e-mail
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="h-12"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5 mr-2" />
                          Baixar Guia Gratuito
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Não enviamos spam. Você pode cancelar a qualquer momento.
                    </p>
                  </form>

                  <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-primary">100% Gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Receba em até 5 minutos</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              O Que Você Vai Aprender
            </h2>
            <p className="text-xl text-muted-foreground">
              Conteúdo completo e prático para transformar a alimentação do seu pet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{topic.title}</h3>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-8 md:p-16">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Tudo Que Está Incluído
                </h2>
                <p className="text-lg text-muted-foreground">
                  Um guia completo para revolucionar a alimentação do seu pet
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-card rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                  🎁 Bônus Exclusivo
                </h3>
                <p className="text-muted-foreground text-center">
                  Receitas especiais para datas comemorativas: aniversário do pet, 
                  Natal, Páscoa e muito mais!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              O Que Nossos Leitores Dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Mais de 2.000 tutores já transformaram a alimentação dos seus pets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  &ldquo;Incrível! Meu cão adora as receitas do guia. Já fiz várias e todas foram um sucesso!&rdquo;
                </p>
                <div className="font-semibold text-primary">Maria Santos</div>
                <div className="text-sm text-muted-foreground">Tutora da Luna</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  &ldquo;Finalmente um guia completo e confiável. As dicas de segurança alimentar são valiosas!&rdquo;
                </p>
                <div className="font-semibold text-primary">João Silva</div>
                <div className="text-sm text-muted-foreground">Tutor do Rex</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  &ldquo;Minha gata, que é super exigente, aprovou todas as receitas que testei!&rdquo;
                </p>
                <div className="font-semibold text-primary">Ana Costa</div>
                <div className="text-sm text-muted-foreground">Tutora da Mimi</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Transforme a Alimentação do Seu Pet Hoje
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Não perca a oportunidade de oferecer o melhor para seu companheiro. 
              Baixe agora o guia completo e comece a fazer petiscos caseiros incríveis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar Guia Gratuito
              </Button>
              <Link href="/produtos">
                <Button variant="outline" size="lg">
                  Ver Nossos Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
