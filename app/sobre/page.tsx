import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PetIllustration from '@/components/PetIllustration';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Heart, 
  Shield, 
  Leaf, 
  Users,
  CheckCircle, 
  Star,
  Target,
  Calendar,
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Breadcrumb items={[{ label: 'Sobre Nós' }]} />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Nossa História
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Conheça a <span className="text-accent">Petiska & Gatão</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Uma jornada de amor pelos pets que começou em Brasília e conquistou o coração 
              de milhares de tutores no Distrito Federal.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História Detalhada */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                A História dos Fundadores Ana Silva e Pedro Santos
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Petiska & Gatão nasceu da paixão genuína de <strong>Ana Silva</strong> e <strong>Pedro Santos</strong> 
                pelos animais de estimação. Como tutores dedicados em Brasília, eles perceberam a dificuldade 
                de encontrar petiscos verdadeiramente naturais e saudáveis no mercado local.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <strong>Ana</strong>, formada em Nutrição, sempre se preocupou com a qualidade dos alimentos. 
                <strong>Pedro</strong>, empreendedor nato, viu a oportunidade de transformar essa paixão em um 
                negócio que pudesse impactar positivamente a vida de milhares de pets e seus tutores.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Em 2023, transformaram sua cozinha em um laboratório de amor, testando receitas artesanais 
                com ingredientes frescos e naturais. O que começou como uma necessidade pessoal se tornou 
                uma missão: <strong>oferecer aos pets de Brasília a alimentação natural que eles merecem</strong>.
              </p>

              <div className="bg-primary/10 rounded-3xl p-6 mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  <Calendar className="inline w-6 h-6 mr-2" />
                  Nossa Jornada
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/20 p-2 rounded-full mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">2023 - Início</p>
                      <p className="text-muted-foreground text-sm">Primeiras receitas desenvolvidas em casa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/20 p-2 rounded-full mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Março 2023 - Primeiro Parceiro</p>
                      <p className="text-muted-foreground text-sm">Pet shop pioneiro acredita no projeto</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/20 p-2 rounded-full mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Setembro 2024 - 50+ Parceiros</p>
                      <p className="text-muted-foreground text-sm">Presença em todo o Distrito Federal</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/processo">
                <Button variant="hero" size="lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Conheça Nosso Processo
                </Button>
              </Link>
            </div>

            <div className="space-y-8">
              <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-8">
                <CardContent className="p-0 text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Ana Silva - Co-fundadora
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Especialista em nutrição, responsável pelo desenvolvimento das receitas 
                    e controle de qualidade dos produtos
                  </p>
                  <div className="bg-primary/5 rounded-2xl p-4">
                    <p className="text-sm text-primary font-medium">
                      &ldquo;Cada ingrediente é escolhido pensando na saúde e felicidade dos pets&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-8">
                <CardContent className="p-0 text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Pedro Santos - Co-fundador
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Empreendedor experiente, cuida das parcerias estratégicas e 
                    crescimento sustentável da empresa
                  </p>
                  <div className="bg-primary/5 rounded-2xl p-4">
                    <p className="text-sm text-primary font-medium">
                      &ldquo;Nosso objetivo é fortalecer toda a cadeia pet de Brasília&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Nossos Valores e Compromissos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e cada petisco que produzimos
            </p>
          </div>

          {/* Missão */}
          <Card className="bg-primary text-primary-foreground border-0 rounded-3xl shadow-card p-12 text-center mb-12">
            <CardContent className="p-0">
              <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
              <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                &ldquo;Proporcionar alegria e saúde aos pets de Brasília através de petiscos naturais 
                e artesanais, fortalecendo os laços entre tutores e seus companheiros de quatro patas, 
                enquanto apoiamos o crescimento dos pet shops locais com produtos de qualidade excepcional.&rdquo;
              </p>
            </CardContent>
          </Card>

          {/* Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-card border-0 rounded-3xl shadow-card text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Amor & Diversão
                </h3>
                <p className="text-muted-foreground mb-6">
                  Acreditamos que a alimentação do pet deve ser um momento de prazer e conexão. 
                  Cada petisco é feito com amor genuíno.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Produção artesanal e cuidadosa
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Texturas e sabores irresistíveis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Momentos especiais entre tutor e pet
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 rounded-3xl shadow-card text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  100% Natural
                </h3>
                <p className="text-muted-foreground mb-6">
                  Compromisso total com ingredientes naturais, frescos e livres de 
                  qualquer aditivo químico prejudicial.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Zero conservantes artificiais
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Ingredientes de origem controlada
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Processos que preservam nutrientes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 rounded-3xl shadow-card text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Transparência
                </h3>
                <p className="text-muted-foreground mb-6">
                  Abertura total sobre nossos processos, ingredientes e práticas. 
                  Você tem o direito de saber exatamente o que seu pet está consumindo.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Rastreabilidade completa
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Informações nutricionais detalhadas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Processo produtivo aberto
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Visão de Futuro */}
          <Card className="bg-warm-beige/30 border-0 rounded-3xl shadow-card p-12 text-center">
            <CardContent className="p-0">
              <Star className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-3xl font-bold text-primary mb-6">Nossa Visão</h3>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                &ldquo;Ser reconhecida como a marca de petiscos naturais mais confiável e amada do Centro-Oeste, 
                contribuindo para um futuro onde cada pet tenha acesso à alimentação natural de qualidade 
                e cada tutor tenha a tranquilidade de oferecer o melhor para seu companheiro.&rdquo;
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-primary mb-2">2025</div>
                  <div className="text-sm text-muted-foreground">100+ Pet Shops Parceiros</div>
                </div>
                <div className="bg-accent/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-primary mb-2">2026</div>
                  <div className="text-sm text-muted-foreground">Expansão para Goiás</div>
                </div>
                <div className="bg-warm-beige/50 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-primary mb-2">2027</div>
                  <div className="text-sm text-muted-foreground">Centro-Oeste Completo</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nosso Compromisso com Brasília */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                <MapPin className="inline w-8 h-8 mr-3" />
                Orgulhosamente Brasiliense
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nascemos e crescemos no coração do Distrito Federal. Nossa conexão com Brasília 
                vai muito além da localização - é um compromisso com o desenvolvimento da 
                economia local e com a comunidade pet da capital.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Economia Local</h4>
                    <p className="text-muted-foreground">
                      Priorizamos fornecedores locais, geramos empregos em Brasília e 
                      fortalecemos a cadeia produtiva regional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Comunidade Pet</h4>
                    <p className="text-muted-foreground">
                      Participamos ativamente de eventos pet, apoiamos ONGs de proteção 
                      animal e educamos tutores sobre alimentação natural.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Sustentabilidade</h4>
                    <p className="text-muted-foreground">
                      Embalagens recicláveis, produção consciente e compromisso com 
                      práticas sustentáveis que preservem o Cerrado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-3xl p-6">
                <h4 className="text-xl font-bold text-primary mb-4">Nosso Impacto em Números</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Pet Shops Parceiros</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5.000+</div>
                    <div className="text-sm text-muted-foreground">Pets Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground">Empregos Gerados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Capital Local</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-8">
                <CardContent className="p-0">
                  <PetIllustration type="both" size="lg" className="mb-6" />
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Feito com Amor no DF
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Cada petisco carrega um pouquinho do carinho e da energia 
                    positiva de Brasília para a tigela do seu pet
                  </p>
                  <Link href="/onde-encontrar">
                    <Button variant="outline">
                      <MapPin className="w-4 h-4 mr-2" />
                      Encontrar em Brasília
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Quer Conhecer Mais Sobre Nossa História?
              </h3>
              <p className="text-muted-foreground mb-6">
                Explore nossos produtos, conheça nosso processo ou entre em contato conosco
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/produtos">
                  <Button variant="hero">
                    Ver Nossos Produtos
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button variant="outline">
                    Falar Conosco
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
