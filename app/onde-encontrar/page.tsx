'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import InteractiveMap from '@/components/InteractiveMap';
import { Search, MapPin, Phone, Clock, Navigation, Store, Heart } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

interface PetShop {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  neighborhood: string;
  coordinates?: [number, number];
}

const mockPetShops: PetShop[] = [
  {
    id: 1,
    name: "Pet Shop Asa Norte",
    address: "SQN 210, Bloco A, Loja 15 - Asa Norte",
    phone: "(61) 3201-1234",
    hours: "8h às 18h",
    neighborhood: "Asa Norte",
    coordinates: [-15.7801, -47.8826]
  },
  {
    id: 2,
    name: "Pet Shop Asa Sul", 
    address: "SQS 308, Bloco B, Loja 22 - Asa Sul",
    phone: "(61) 3202-5678",
    hours: "9h às 19h", 
    neighborhood: "Asa Sul",
    coordinates: [-15.8267, -47.8826]
  },
  {
    id: 3,
    name: "Pet Shop Águas Claras",
    address: "Av. das Araucárias, 123 - Águas Claras", 
    phone: "(61) 3203-9012",
    hours: "8h às 17h",
    neighborhood: "Águas Claras",
    coordinates: [-15.8267, -48.0267]
  },
  {
    id: 4,
    name: "Pet Shop Taguatinga",
    address: "QNM 40, Conjunto A, Loja 8 - Taguatinga Norte", 
    phone: "(61) 3204-3456",
    hours: "8h30 às 18h30",
    neighborhood: "Taguatinga",
    coordinates: [-15.8267, -48.0567]
  },
  {
    id: 5,
    name: "Pet Shop Ceilândia",
    address: "QNM 15, Módulo A, Loja 12 - Ceilândia Sul", 
    phone: "(61) 3205-7890",
    hours: "9h às 18h",
    neighborhood: "Ceilândia",
    coordinates: [-15.8167, -48.1067]
  }
];

export default function WhereToFind() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredShops = mockPetShops.filter(shop => 
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.neighborhood.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCallShop = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address + ', Brasília, DF');
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Breadcrumb items={[{ label: 'Onde Encontrar' }]} />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-6 py-2 mb-6 text-lg">
              Pontos de Venda
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Onde <span className="text-accent">Encontrar</span><br />
              Nossos <span className="text-accent">Petiscos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Encontre os petiscos da Petiska & Gatão nos melhores pet shops de Brasília. 
              Mais de <strong>50 parceiros</strong> espalhados por todo o Distrito Federal.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por nome da loja ou bairro..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Pet Shops Parceiros</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Regiões Atendidas</div>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Cobertura no DF</div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Mapa Interativo
            </h2>
            <p className="text-xl text-muted-foreground">
              Visualize todos os pontos de venda no mapa
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-card mb-16">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* Pet Shops List */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Lista de Pet Shops
            </h2>
            <p className="text-xl text-muted-foreground">
              {filteredShops.length} {filteredShops.length === 1 ? 'loja encontrada' : 'lojas encontradas'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.map((shop) => (
              <Card key={shop.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Store className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">{shop.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {shop.neighborhood}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{shop.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{shop.phone}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{shop.hours}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleCallShop(shop.phone)}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Ligar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleGetDirections(shop.address)}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Rota
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredShops.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nenhuma loja encontrada
              </h3>
              <p className="text-muted-foreground mb-6">
                Tente buscar por outro termo ou limpe o filtro para ver todas as lojas.
              </p>
              <Button onClick={() => setSearchTerm('')} variant="outline">
                Ver Todas as Lojas
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Não Encontrou uma Loja Perto de Você?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco! Estamos sempre expandindo nossa rede de parceiros 
              e podemos indicar o pet shop mais próximo da sua região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
              <Button variant="outline" size="lg">
                Quero ser Parceiro
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
