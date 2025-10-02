import React, { useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

interface PetShop {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  neighborhood: string;
  coordinates: [number, number];
  products: string[];
}

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [selectedShop, setSelectedShop] = useState<PetShop | null>(null);

  // Mock data for pet shops in Brasília
  const petShops: PetShop[] = [
    {
      id: 1,
      name: "Pet Shop Asa Norte",
      address: "CLN 203, Bloco A, Loja 15 - Asa Norte",
      phone: "(61) 3340-1234",
      hours: "Seg-Sex: 8h-18h, Sáb: 8h-16h",
      neighborhood: "Asa Norte",
      coordinates: [-47.8825, -15.7213],
      products: ["Petiscos para Cães", "Petiscos para Gatos", "Mix Natural"]
    },
    {
      id: 2,
      name: "Mundo Pet Taguatinga",
      address: "QNA 42, Loja 03 - Taguatinga Norte",
      phone: "(61) 3563-7890",
      hours: "Seg-Sex: 9h-19h, Sáb: 9h-17h",
      neighborhood: "Taguatinga",
      coordinates: [-48.0582, -15.7801],
      products: ["Linha Completa Petiska & Gatão"]
    },
    {
      id: 3,
      name: "Bicho Feliz Águas Claras",
      address: "Rua das Pitangueiras, 42 - Águas Claras",
      phone: "(61) 3386-5555",
      hours: "Seg-Dom: 8h-20h",
      neighborhood: "Águas Claras",
      coordinates: [-48.0264, -15.8345],
      products: ["Petiscos Naturais", "Snacks Premium"]
    },
    {
      id: 4,
      name: "Pet Center Ceilândia",
      address: "QNM 11, Conjunto A, Loja 78 - Ceilândia",
      phone: "(61) 3374-9999",
      hours: "Seg-Sex: 8h-18h, Sáb: 8h-14h",
      neighborhood: "Ceilândia",
      coordinates: [-48.1074, -15.8176],
      products: ["Petiscos para Cães", "Petiscos para Gatos"]
    },
    {
      id: 5,
      name: "Mania Pet Sudoeste",
      address: "CLSW 300, Bloco B, Loja 25 - Sudoeste",
      phone: "(61) 3344-2020",
      hours: "Seg-Sex: 10h-19h, Sáb: 10h-16h",
      neighborhood: "Sudoeste",
      coordinates: [-47.9226, -15.7942],
      products: ["Linha Premium", "Petiscos Artesanais"]
    }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-47.9292, -15.7801], // Brasília center
      zoom: 10
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each pet shop
    petShops.forEach((shop) => {
      // Create marker element
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTUiIGZpbGw9IiNGRjY3MDAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0xNiA4QzEyLjY4NiA4IDEwIDEwLjY4NiAxMCAxNEMxMCAxNy4zMTQgMTYgMjQgMTYgMjRTMjIgMTcuMzE0IDIyIDE0QzIyIDEwLjY4NiAxOS4zMTQgOCAxNiA4WiIgZmlsbD0iI0ZGRkZGRiIvPgo8Y2lyY2xlIGN4PSIxNiIgY3k9IjE0IiByPSIzIiBmaWxsPSIjRkY2NzAwIi8+Cjwvc3ZnPgo=)';
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.cursor = 'pointer';
      el.style.backgroundSize = 'contain';

      el.addEventListener('click', () => setSelectedShop(shop));

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(shop.coordinates)
        .addTo(map.current!);
    });

    setShowTokenInput(false);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="bg-gradient-card border-0 rounded-3xl shadow-card overflow-hidden">
          <CardContent className="p-0">
            {showTokenInput ? (
              <div className="p-8">
                <div className="text-center mb-6">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Configurar Mapa Interativo
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Para exibir o mapa interativo, insira seu token público do Mapbox
                  </p>
                </div>
                
                <form onSubmit={handleTokenSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Cole seu token público do Mapbox aqui"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="rounded-full"
                  />
                  <Button type="submit" variant="hero" className="w-full">
                    Carregar Mapa
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-accent/10 rounded-2xl">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Como obter seu token:</strong>
                  </p>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Acesse <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">mapbox.com</a></li>
                    <li>2. Crie uma conta gratuita</li>
                    <li>3. Vá para a seção &ldquo;Tokens&rdquo; no dashboard</li>
                    <li>4. Copie seu token público</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="relative h-96 lg:h-[500px]">
                <div ref={mapContainer} className="absolute inset-0" />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-6 sticky top-4">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold text-primary mb-6">
              Pet Shops Parceiros
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {petShops.map((shop) => (
                <div
                  key={shop.id}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedShop?.id === shop.id
                      ? 'bg-primary/10 border-primary'
                      : 'bg-white/50 border-accent/20 hover:bg-white/80'
                  }`}
                  onClick={() => setSelectedShop(shop)}
                >
                  <h4 className="font-semibold text-primary mb-2">{shop.name}</h4>
                  
                  <div className="flex items-start mb-2">
                    <MapPin className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{shop.address}</p>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Phone className="w-4 h-4 text-accent mr-2" />
                    <p className="text-sm text-muted-foreground">{shop.phone}</p>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 text-accent mr-2" />
                    <p className="text-sm text-muted-foreground">{shop.hours}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {shop.products.slice(0, 2).map((product, index) => (
                      <span
                        key={index}
                        className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                    {shop.products.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{shop.products.length - 2} mais
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {selectedShop && (
              <div className="mt-6 p-4 bg-primary/5 rounded-2xl">
                <h4 className="font-semibold text-primary mb-3">
                  {selectedShop.name}
                </h4>
                <div className="space-y-2">
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/55${selectedShop.phone.replace(/\D/g, '')}`, '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedShop.address)}`, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveMap;