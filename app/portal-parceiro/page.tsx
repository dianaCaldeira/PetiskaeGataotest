'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Lock, 
  User, 
  Mail, 
  Eye, 
  EyeOff, 
  LogIn,
  Store,
  Package,
  TrendingUp,
  FileText,
  DollarSign,
  BarChart3,
  Download,
  Bell,
  Settings
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function PartnerPortal() {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.email || !loginData.password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha e-mail e senha.",
        variant: "destructive",
      });
      return;
    }

    // Simulate login
    setTimeout(() => {
      setIsLoggedIn(true);
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao Portal do Parceiro.",
      });
    }, 1000);
  };

  const dashboardData = {
    petshop: "Pet Shop Asa Norte",
    owner: "Maria Silva",
    since: "Janeiro 2023",
    stats: [
      { label: "Vendas este mês", value: "R$ 2.450,00", icon: DollarSign, change: "+12%" },
      { label: "Produtos vendidos", value: "156", icon: Package, change: "+8%" },
      { label: "Margem média", value: "38%", icon: TrendingUp, change: "+2%" },
      { label: "Clientes atendidos", value: "89", icon: User, change: "+15%" }
    ],
    recentOrders: [
      { id: "#001", date: "2024-01-20", value: "R$ 280,00", status: "Entregue" },
      { id: "#002", date: "2024-01-18", value: "R$ 450,00", status: "Em trânsito" },
      { id: "#003", date: "2024-01-15", value: "R$ 320,00", status: "Entregue" }
    ],
    notifications: [
      { id: 1, message: "Novo catálogo de produtos disponível", date: "Hoje" },
      { id: 2, message: "Promoção especial para parceiros", date: "Ontem" },
      { id: 3, message: "Material promocional atualizado", date: "2 dias atrás" }
    ]
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center px-4">
        <Breadcrumb items={[{ label: 'Para Pet Shops', href: '/parceiros' }, { label: 'Portal do Parceiro' }]} />
        <div className="max-w-md w-full">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold text-primary mb-2">
                  Portal do Parceiro
                </h1>
                <p className="text-muted-foreground">
                  Acesse sua área exclusiva
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="seu@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={loginData.password}
                      onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                      placeholder="Sua senha"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Ainda não é parceiro?
                </p>
                <Link href="/cadastro-parceiro">
                  <Button variant="outline" size="sm">
                    Cadastre-se Agora
                  </Button>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-xs text-muted-foreground mb-2">
                  Esqueceu sua senha?
                </p>
                <Button variant="ghost" size="sm" className="text-xs">
                  Recuperar Senha
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Breadcrumb items={[{ label: 'Para Pet Shops', href: '/parceiros' }, { label: 'Portal do Parceiro' }]} />
      {/* Header */}
      <section className="py-8 px-4 border-b bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">Portal do Parceiro</h1>
              <p className="text-muted-foreground">Bem-vindo, {dashboardData.owner}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notificações
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsLoggedIn(false)}
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Pet Shop Info */}
          <Card className="mb-8 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Store className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary">{dashboardData.petshop}</h2>
                    <p className="text-muted-foreground">Parceiro desde {dashboardData.since}</p>
                  </div>
                </div>
                <Badge className="bg-accent text-accent-foreground">
                  Parceiro Ativo
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardData.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary">Pedidos Recentes</h3>
                  <Button variant="outline" size="sm">
                    Ver Todos
                  </Button>
                </div>
                <div className="space-y-4">
                  {dashboardData.recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div>
                        <div className="font-semibold text-primary">{order.id}</div>
                        <div className="text-sm text-muted-foreground">{order.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">{order.value}</div>
                        <Badge 
                          variant={order.status === 'Entregue' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary">Notificações</h3>
                  <Button variant="outline" size="sm">
                    Marcar como Lidas
                  </Button>
                </div>
                <div className="space-y-4">
                  {dashboardData.notifications.map((notification) => (
                    <div key={notification.id} className="p-4 bg-muted/20 rounded-lg">
                      <div className="font-medium text-primary mb-1">
                        {notification.message}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {notification.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Ações Rápidas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Fazer Pedido</h3>
                <p className="text-muted-foreground text-sm">
                  Solicite novos produtos para seu estoque
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Relatórios</h3>
                <p className="text-muted-foreground text-sm">
                  Acompanhe suas vendas e performance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-warm-beige/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Material</h3>
                <p className="text-muted-foreground text-sm">
                  Baixe catálogos e material promocional
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-leaf-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Suporte</h3>
                <p className="text-muted-foreground text-sm">
                  Entre em contato com nossa equipe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Store className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Precisa de Ajuda?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa equipe está sempre disponível para apoiar nossos parceiros. 
              Entre em contato conosco para qualquer dúvida ou sugestão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Falar com Suporte
              </Button>
              <Link href="/faq">
                <Button variant="outline" size="lg">
                  Ver FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
