'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Heart, BookOpen, Clock, User, ArrowRight, Filter } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string; 
  readTime: string;
  author: string;
  date: string;
  slug: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Quais são os benefícios dos petiscos naturais?",
    excerpt: "Descubra por que os petiscos naturais são uma ótima opção para o seu pet e como eles podem melhorar a saúde e bem-estar dos nossos amigos de quatro patas.",
    category: "Alimentação",
    readTime: "5 min",
    author: "Petiska & Gatão",
    date: "2024-01-15",
    slug: "beneficios-petiscos-naturais"
  },
  {
    id: 2,
    title: "Como lidar com a ansiedade de separação",
    excerpt: "Saiba quais são as estratégias para ajudar pets ansiosos a ficarem mais calmos quando você não está em casa.",
    category: "Comportamento", 
    readTime: "8 min",
    author: "Petiska & Gatão",
    date: "2024-01-12",
    slug: "ansiedade-separacao"
  },
  {
    id: 3,
    title: "Sinais de alergia em cães e gatos",
    excerpt: "Coceira, vermelhidão e quedas de pelo podem ser sinais de alergia. Aprenda a identificar e tratar alergias alimentares.",
    category: "Saúde",
    readTime: "6 min", 
    author: "Petiska & Gatão",
    date: "2024-01-10",
    slug: "sinais-alergia-caes-gatos"
  },
  {
    id: 4,
    title: "Receitas caseiras de petiscos saudáveis",
    excerpt: "Aprenda a fazer petiscos caseiros deliciosos e nutritivos para seu pet com ingredientes naturais que você tem em casa.",
    category: "Alimentação",
    readTime: "10 min",
    author: "Petiska & Gatão", 
    date: "2024-01-08",
    slug: "receitas-caseiras-petiscos"
  },
  {
    id: 5,
    title: "A importância da socialização para filhotes",
    excerpt: "Entenda por que a socialização é fundamental nos primeiros meses de vida e como fazer isso de forma segura.",
    category: "Comportamento",
    readTime: "7 min",
    author: "Petiska & Gatão",
    date: "2024-01-05",
    slug: "socializacao-filhotes"
  },
  {
    id: 6,
    title: "Cuidados especiais com pets idosos",
    excerpt: "Pets mais velhos precisam de cuidados especiais. Veja dicas de alimentação, exercícios e saúde para a terceira idade pet.",
    category: "Saúde",
    readTime: "9 min",
    author: "Petiska & Gatão",
    date: "2024-01-03",
    slug: "cuidados-pets-idosos"
  }
];

const categories = ["Todos", "Alimentação", "Comportamento", "Saúde"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Alimentação':
        return 'bg-accent/10 text-accent';
      case 'Comportamento':
        return 'bg-primary/10 text-primary';
      case 'Saúde':
        return 'bg-leaf-green/20 text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Blog da Petiska & Gatão
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Dicas e <span className="text-accent">Cuidados</span><br />
              para seu <span className="text-accent">Pet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Conteúdo especializado sobre alimentação natural, comportamento e saúde 
              dos pets. Informações confiáveis para cuidar melhor do seu companheiro.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="h-12"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">{mockPosts.length}</div>
              <div className="text-muted-foreground">Artigos Publicados</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <div className="text-muted-foreground">Categorias</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Leitores Mensais</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
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
                        {formatDate(post.date)}
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
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nenhum artigo encontrado
              </h3>
              <p className="text-muted-foreground mb-6">
                Tente buscar por outros termos ou selecione uma categoria diferente.
              </p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }} variant="outline">
                Ver Todos os Artigos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Receba Dicas Exclusivas
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cadastre-se para receber nossos melhores conteúdos sobre cuidados com pets 
              e novidades sobre nossos petiscos naturais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1"
              />
              <Button variant="hero">
                Cadastrar
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Não enviamos spam. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Explore por Categoria
            </h2>
            <p className="text-xl text-muted-foreground">
              Encontre conteúdo específico para suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Alimentação</h3>
                <p className="text-muted-foreground mb-6">
                  Dicas sobre nutrição, petiscos naturais e alimentação saudável para pets.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory('Alimentação')}
                >
                  Ver Artigos
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Comportamento</h3>
                <p className="text-muted-foreground mb-6">
                  Entenda melhor o comportamento do seu pet e como criar vínculos mais fortes.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setSelectedCategory('Comportamento')}
                >
                  Ver Artigos
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-leaf-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Saúde</h3>
                <p className="text-muted-foreground mb-6">
                  Informações sobre saúde, prevenção e cuidados veterinários essenciais.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setSelectedCategory('Saúde')}
                >
                  Ver Artigos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
