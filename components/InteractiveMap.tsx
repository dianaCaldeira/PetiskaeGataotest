"use client";

import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';

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

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<unknown>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [selectedShop, setSelectedShop] = useState<PetShop | null>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token || !mapContainer.current || map.current) return;

    const loadMap = async () => {
      try {
        const mapboxgl = (await import('mapbox-gl')).default;
        await import('mapbox-gl/dist/mapbox-gl.css');

        mapboxgl.accessToken = token;

        const mapInstance = new mapboxgl.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/light-v11',
          center: [-47.9292, -15.7801],
          zoom: 10
        });

        mapInstance.addControl(new mapboxgl.NavigationControl(), 'top-right');

        petShops.forEach((shop) => {
          const el = document.createElement('div');
          el.className = 'custom-marker';
          el.style.width = '32px';
          el.style.height = '32px';
          el.style.cursor = 'pointer';
          el.style.borderRadius = '50%';
          el.style.backgroundColor = 'hsl(25 90% 60%)';
          el.style.border = '3px solid white';
          el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
          el.addEventListener('click', () => setSelectedShop(shop));

          new mapboxgl.Marker(el)
            .setLngLat(shop.coordinates)
            .addTo(mapInstance);
        });

        map.current = mapInstance;
        setMapLoaded(true);
      } catch {
        setMapError(true);
      }
    };

    loadMap();
  }, []);

  const openGoogleMaps = (shop: PetShop) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${shop.coordinates[1]},${shop.coordinates[0]}`,
      '_blank'
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Mapa ou fallback */}
      <div className="lg:col-span-2">
        <Card className="bg-gradient-card border-0 rounded-3xl shadow-card overflow-hidden">
          <CardContent className="p-0">
            {!process.env.NEXT_PUBLIC_MAPBOX_TOKEN || mapError ? (
              /* Fallback: lista visual com link pro Google Maps */
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Navigation className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Nossos Parceiros em Brasília
                  </h3>
                  <p className="text-muted-foreground">
                    Clique em um parceiro para ver a localização no Google Maps
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {petShops.map((shop) => (
                    <button
                      key={shop.id}
                      onClick={() => { setSelectedShop(shop); openGoogleMaps(shop); }}
                      className="text-left p-4 bg-white/60 rounded-2xl border border-accent/20 hover:bg-white hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary text-sm">{shop.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{shop.neighborhood}</p>
                          <p className="text-xs text-accent mt-1 flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Ver no mapa
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative h-96 lg:h-[500px]">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                    <div className="text-center">
                      <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Carregando mapa...</p>
                    </div>
                  </div>
                )}
                <div ref={mapContainer} className="absolute inset-0" />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Lista lateral */}
      <div>
        <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-6 sticky top-20">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold text-primary mb-6">
              Pet Shops Parceiros
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {petShops.map((shop) => (
                <button
                  key={shop.id}
                  className={`w-full text-left p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedShop?.id === shop.id
                      ? 'bg-primary/10 border-primary'
                      : 'bg-white/50 border-accent/20 hover:bg-white/80'
                  }`}
                  onClick={() => setSelectedShop(shop)}
                  aria-label={`Selecionar ${shop.name}`}
                >
                  <h4 className="font-semibold text-primary mb-2">{shop.name}</h4>

                  <div className="flex items-start mb-2">
                    <MapPin className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground">{shop.address}</p>
                  </div>

                  <div className="flex items-center mb-2">
                    <Phone className="w-4 h-4 text-accent mr-2" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground">{shop.phone}</p>
                  </div>

                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 text-accent mr-2" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground">{shop.hours}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {shop.products.slice(0, 2).map((product, index) => (
                      <span key={index} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                        {product}
                      </span>
                    ))}
                    {shop.products.length > 2 && (
                      <span className="text-xs text-muted-foreground">+{shop.products.length - 2} mais</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {selectedShop && (
              <div className="mt-6 p-4 bg-primary/5 rounded-2xl">
                <h4 className="font-semibold text-primary mb-3">{selectedShop.name}</h4>
                <div className="space-y-2">
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/55${selectedShop.phone.replace(/\D/g, '')}`, '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => openGoogleMaps(selectedShop)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
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
