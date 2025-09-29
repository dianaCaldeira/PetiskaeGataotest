import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, User, ArrowRight, BookOpen, Heart, Stethoscope } from 'lucide-react';

interface BlogCategoryProps {
  params: {
    category: string;
  };
}

export default function BlogCategory({ params }: BlogCategoryProps) {
  const { category } = params;

  // Mock data - in real app, this would come from API based on category
  const categoryData = {
    'alimentacao': {
      name: 'Alimentação',
      description: 'Tudo sobre nutrição, petiscos e alimentação saudável para pets',
      icon: Heart,
      color: 'bg-accent/10 text-accent',
      posts: [
        {
          id: 1,
          title: "Os Benefícios dos Petiscos Naturais para a Saúde do Seu Pet",
          excerpt: "Descubra como os petiscos naturais podem melhorar a saúde e bem-estar do seu companheiro.",
          readTime: "5 min",
          author: "Petiska & Gatão",
          date: "2024-01-15",
          slug: "beneficios-petiscos-naturais"
        },
        {
          id: 2,
          title: "Receitas Caseiras de Petiscos Saudáveis",
          excerpt: "Aprenda a fazer petiscos caseiros deliciosos e nutritivos para seu pet.",
          readTime: "8 min",
          author: "Petiska & Gatão",
          date: "2024-01-10",
          slug: "receitas-caseiras-petiscos"
        },
        {
          id: 3,
          title: "Como Escolher a Melhor Ração para Seu Pet",
          excerpt: "Guia completo para escolher a alimentação ideal para cada fase da vida do seu pet.",
          readTime: "6 min",
          author: "Petiska & Gatão",
          date: "2024-01-08",
          slug: "escolher-melhor-racao"
        },
        {
          id: 4,
          title: "Alimentos Proibidos para Cães e Gatos",
          excerpt: "Lista completa de alimentos que podem ser perigosos para a saúde dos pets.",
          readTime: "4 min",
          author: "Petiska & Gatão",
          date: "2024-01-05",
          slug: "alimentos-proibidos-pets"
        }
      ]
    },
    'comportamento': {
      name: 'Comportamento',
      description: 'Dicas sobre adestramento, socialização e comportamento animal',
      icon: BookOpen,
      color: 'bg-primary/10 text-primary',
      posts: [
        {
          id: 5,
          title: "Como Lidar com a Ansiedade de Separação",
          excerpt: "Estratégias eficazes para ajudar pets ansiosos quando ficam sozinhos.",
          readTime: "7 min",
          author: "Petiska & Gatão",
          date: "2024-01-12",
          slug: "ansiedade-separacao"
        },
        {
          id: 6,
          title: "A Importância da Socialização para Filhotes",
          excerpt: "Por que socializar é fundamental nos primeiros meses de vida do pet.",
          readTime: "6 min",
          author: "Petiska & Gatão",
          date: "2024-01-07",
          slug: "socializacao-filhotes"
        },
        {
          id: 7,
          title: "Adestramento Positivo: Técnicas e Benefícios",
          excerpt: "Como usar o reforço positivo para educar seu pet de forma eficaz.",
          readTime: "9 min",
          author: "Petiska & Gatão",
          date: "2024-01-03",
          slug: "adestramento-positivo"
        }
      ]
    },
    'saude': {
      name: 'Saúde',
      description: 'Informações sobre saúde, prevenção e cuidados veterinários',
      icon: Stethoscope,
      color: 'bg-leaf-green/20 text-primary',
      posts: [
        {
          id: 8,
          title: "Sinais de Alergia em Cães e Gatos",
          excerpt: "Como identificar e tratar alergias alimentares e ambientais em pets.",
          readTime: "6 min",
          author: "Petiska & Gatão",
          date: "2024-01-10",
          slug: "sinais-alergia-pets"
        },
        {
          id: 9,
          title: "Cuidados Especiais com Pets Idosos",
          excerpt: "Dicas essenciais para manter a qualidade de vida de pets na terceira idade.",
          readTime: "8 min",
          author: "Petiska & Gatão",
          date: "2024-01-06",
          slug: "cuidados-pets-idosos"
        },
        {
          id: 10,
          title: "Vacinação: Calendário e Importância",
          excerpt: "Tudo sobre o calendário vacinal e a importância da imunização.",
          readTime: "5 min",
          author: "Petiska & Gatão",
          date: "2024-01-02",
          slug: "vacinacao-pets"
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];
  
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Categoria não encontrada</h1>
          <p className="text-muted-foreground mb-8">A categoria que você procura não existe.</p>
          <Link href="/blog">
            <Button variant="hero">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = currentCategory.icon;

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Breadcrumb */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-primary">{currentCategory.name}</span>
          </div>
          <Link href="/blog">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Category Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`w-20 h-20 ${currentCategory.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <Icon className="w-10 h-10" />
            </div>
            <Badge className={`${currentCategory.color} px-6 py-2 mb-6 text-lg`}>
              Categoria
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              {currentCategory.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {currentCategory.description}
            </p>
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">{currentCategory.posts.length}</div>
              <div className="text-muted-foreground">Artigos Publicados</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">
                {Math.round(currentCategory.posts.reduce((acc, post) => acc + parseInt(post.readTime), 0) / currentCategory.posts.length)}
              </div>
              <div className="text-muted-foreground">Tempo Médio de Leitura</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Leitores Mensais</div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Artigos sobre {currentCategory.name}
            </h2>
            <p className="text-xl text-muted-foreground">
              Conteúdo especializado para você e seu pet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={currentCategory.color}>
                      {currentCategory.name}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Outras Categorias
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore mais conteúdo sobre cuidados com pets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(categoryData)
              .filter(([key]) => key !== category)
              .map(([key, cat]) => {
                const CatIcon = cat.icon;
                return (
                  <Card key={key} className="text-center p-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <CatIcon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{cat.name}</h3>
                      <p className="text-muted-foreground mb-6">{cat.description}</p>
                      <div className="text-sm text-muted-foreground mb-6">
                        {cat.posts.length} artigos disponíveis
                      </div>
                      <Link href={`/blog/categoria/${key}`}>
                        <Button variant="outline">
                          Explorar Categoria
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className={`w-16 h-16 ${currentCategory.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <Icon className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Receba Mais Conteúdo sobre {currentCategory.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cadastre-se em nossa newsletter e receba os melhores artigos sobre 
              {currentCategory.name.toLowerCase()} diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Assinar Newsletter
              </Button>
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  Ver Todos os Artigos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
