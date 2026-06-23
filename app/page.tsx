"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PetIllustration from '@/components/PetIllustration';
import { Heart, Leaf, Award, MapPin, ShoppingBag, CheckCircle, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section Melhorada */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-16 shadow-card">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-leaf-green/20 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-pet-orange/20 rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10 text-center">
              <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
                Petiska & Gatão - Desde 2023
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
                Petiscos <span className="text-accent">Naturais</span><br />
                Feitos com <span className="text-accent">Amor</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Bem-vindo ao universo dos <strong>melhores petiscos artesanais de Brasília</strong>. 
                Somos Ana Silva e Pedro Santos, uma empresa brasiliense dedicada exclusivamente à produção de petiscos 
                <strong> 100% naturais</strong> para cães e gatos, criados com ingredientes 
                cuidadosamente selecionados e muito amor por nossos amigos de quatro patas.
              </p>
              
              {/* Value Props Destacadas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-primary/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground font-medium">Natural & Artesanal</div>
                </div>
                <div className="bg-accent/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Pet Shops Parceiros</div>
                </div>
                <div className="bg-warm-beige/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5.000+</div>
                  <div className="text-sm text-muted-foreground font-medium">Pets Felizes em Brasília</div>
                </div>
              </div>
              
              {/* Mascotes e Produtos */}
              <div className="flex justify-center items-center my-12 gap-6">
                <Image
                  src="/imagens/personagens/PETISKA_e_GATAO_abracados_vetor.png"
                  alt="Petiska e Gatão abraçados"
                  width={200}
                  height={200}
                  className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-lg"
                />
                <Image
                  src="/imagens/produtos/IMG-20250620-WA0145.jpg"
                  alt="Linha completa de produtos Petiska & Gatão"
                  width={300}
                  height={200}
                  className="w-48 h-32 md:w-64 md:h-44 object-cover rounded-2xl shadow-card"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/onde-encontrar">
                  <Button variant="hero" size="xl" className="text-lg px-8 py-6">
                    <MapPin className="w-6 h-6 mr-3" />
                    Onde Encontrar em Brasília
                  </Button>
                </Link>
                <Link href="/cadastro-parceiro">
                  <Button variant="outline" size="xl" className="text-lg px-8 py-6">
                    <ShoppingBag className="w-6 h-6 mr-3" />
                    Quero Revender
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Aprovado por Veterinários</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Sem Conservantes Artificiais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Produzido no Coração de Brasília</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História e Diferenciação */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Por Que a Petiska & Gatão é Especial?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça nossa jornada e o que nos torna únicos no mercado de petiscos naturais de Brasília
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                A Paixão que Move Nossa Empresa
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fundada em 2023 pelos empreendedores <strong>Ana Silva</strong> e <strong>Pedro Santos</strong>, 
                a Petiska & Gatão nasceu de uma necessidade real: encontrar petiscos verdadeiramente saudáveis 
                e naturais para nossos próprios pets aqui em Brasília.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Como tutores apaixonados, percebemos a dificuldade de encontrar produtos que combinassem 
                <strong> sabor irresistível com qualidade nutricional excepcional</strong>. Assim nasceu 
                nossa missão: ser o melhor amigo online dos tutores de pets da capital federal.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Hoje, nossa produção 100% artesanal já conquistou mais de 50 pet shops parceiros e 
                proporcionou alegria para milhares de cães e gatos em todo o Distrito Federal.
              </p>

              <div className="bg-warm-beige/30 rounded-3xl p-6">
                <h4 className="text-xl font-bold text-primary mb-4">Nossos Pilares Fundamentais</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Transparência Total:</strong> Você pode acompanhar cada etapa do nosso processo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Qualidade Garantida:</strong> Aprovação veterinária em todos os produtos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Economia Local:</strong> Fortalecemos pet shops de Brasília</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Sustentabilidade:</strong> Produção responsável e embalagens recicláveis</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-8">
                <CardContent className="p-0 text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">
                    Conheça Ana e Pedro
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Os fundadores apaixonados por pets que transformaram amor em negócio
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/sobre">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Nossa História Completa
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground border-0 rounded-3xl shadow-card p-8">
                <CardContent className="p-0 text-center">
                  <PetIllustration type="both" size="md" className="opacity-80 mb-6" />
                  <h4 className="text-xl font-bold mb-4">
                    Processo 100% Artesanal
                  </h4>
                  <p className="text-primary-foreground/90 mb-6">
                    Da seleção criteriosa dos ingredientes até a embalagem final, 
                    cada etapa é realizada com máximo cuidado e dedicação
                  </p>
                  <Button variant="secondary" asChild>
                    <Link href="/processo">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Ver Como Fazemos
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              O Que Nos Torna Únicos em Brasília
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça os diferenciais que fazem da Petiska & Gatão a escolha preferida dos tutores conscientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-0 rounded-3xl shadow-card text-center p-8 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
                <Badge className="bg-primary text-primary-foreground px-4 py-1 mb-4">
                  100% NATURAL
                </Badge>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Ingredientes Selecionados
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ingredientes frescos de fornecedores locais de Brasília, sem conservantes, 
                  corantes ou aromatizantes artificiais
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Carnes frescas e de qualidade</li>
                  <li>✓ Vegetais orgânicos quando possível</li>
                  <li>✓ Zero aditivos químicos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 rounded-3xl shadow-card text-center p-8 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <Badge className="bg-primary text-primary-foreground px-4 py-1 mb-4">
                  FEITO COM AMOR
                </Badge>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Produção 100% Artesanal
                </h3>
                <p className="text-muted-foreground mb-4">
                  Cada lote é preparado manualmente por nossa equipe dedicada, 
                  garantindo qualidade e carinho em cada petisco
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Processo lento de desidratação</li>
                  <li>✓ Controle rigoroso de qualidade</li>
                  <li>✓ Lotes pequenos para máximo frescor</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 rounded-3xl shadow-card text-center p-8 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <Badge className="bg-primary text-primary-foreground px-4 py-1 mb-4">
                  BRASÍLIA ❤️
                </Badge>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Orgulhosamente Brasiliense
                </h3>
                <p className="text-muted-foreground mb-4">
                  Produzido no coração do Distrito Federal, fortalecendo a economia 
                  local e garantindo frescor máximo
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Entrega rápida em todo o DF</li>
                  <li>✓ Apoio ao comércio local</li>
                  <li>✓ Ingredientes regionais</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Mais Queridinhos do Mês
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça os petiscos que conquistaram o coração dos pets de Brasília
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Bifinho de Frango Natural",
                description: "Delicioso petisco de frango desidratado, perfeito para treinos e recompensas diárias",
                features: ["Rico em proteínas", "Livre de conservantes", "Ideal para cães"]
              },
              {
                name: "Snack de Salmão para Gatos",
                description: "Irresistível petisco de salmão, especialmente desenvolvido para o paladar felino",
                features: ["Ômega 3 natural", "Textura perfeita", "Favorito dos gatos"]
              },
              {
                name: "Mix Natural Cães e Gatos",
                description: "Combinação especial de carnes e vegetais, aprovado por toda a família pet",
                features: ["Receita exclusiva", "Para todos os pets", "Máxima qualidade"]
              }
            ].map((product, index) => (
              <Card key={index} className="bg-gradient-card border-0 rounded-3xl shadow-card overflow-hidden group hover:shadow-elegant transition-all duration-300">
                <div className="aspect-video bg-primary/10 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <PetIllustration type="both" size="md" className="opacity-60" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-1 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/produtos">
                      Ver Mais Detalhes
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/produtos">
                <ArrowRight className="w-5 h-5 mr-2" />
                Ver Todos os Produtos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground border-0 rounded-3xl shadow-card p-12 text-center">
            <CardContent className="p-0">
              <PetIllustration type="both" size="lg" className="opacity-80 mb-8" />
              <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
              <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed mb-8">
                &ldquo;Proporcionar alegria e saúde aos pets de Brasília através de petiscos naturais 
                e artesanais, fortalecendo os laços entre tutores e seus companheiros de quatro patas, 
                enquanto apoiamos o crescimento dos pet shops locais com produtos de qualidade excepcional.&rdquo;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/sobre">
                    Conhecer Nossa História
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contato">
                    Falar Conosco
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA para Pet Shops */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-warm-beige/50 border-0 rounded-3xl shadow-card p-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-6">
                    Pet Shop em Brasília?<br />
                    <span className="text-accent">Seja Nosso Parceiro!</span>
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Ofereça aos seus clientes os melhores petiscos naturais da capital. 
                    Junte-se a mais de 50 estabelecimentos que já confiam na qualidade Petiska & Gatão.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Margem de lucro atrativa</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Suporte completo de marketing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Entrega rápida em todo o DF</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Produtos exclusivos e diferenciados</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <Link href="/cadastro-parceiro">
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Quero ser Parceiro
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/parceiros">
                        Saber Mais
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-3xl p-8">
                    <PetIllustration type="both" size="lg" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Pronto para Proporcionar Mais Alegria ao Seu Pet?
              </h3>
              <p className="text-muted-foreground mb-6">
                Encontre nossos petiscos naturais nos melhores pet shops de Brasília ou descubra como se tornar nosso parceiro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <Link href="/onde-encontrar">
                    <MapPin className="w-5 h-5 mr-2" />
                    Onde Encontrar
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/produtos">
                    Ver Produtos
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
