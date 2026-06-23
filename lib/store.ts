import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Types for our data structures
export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  image?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  slug: string;
}

export interface Partner {
  id: number;
  name: string;
  address: string;
  phone: string;
  coordinates: [number, number];
  type: 'pet_shop' | 'veterinaria' | 'distribuidor';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

// Main store interface
interface AppStore {
  // Products state
  products: Product[];
  productsLoading: boolean;
  productsError: string | null;
  
  // Blog state
  blogPosts: BlogPost[];
  blogLoading: boolean;
  blogError: string | null;
  
  // Partners state
  partners: Partner[];
  partnersLoading: boolean;
  partnersError: string | null;
  
  // UI state
  isMenuOpen: boolean;
  searchQuery: string;
  selectedCategory: string;
  
  // Cache timestamps
  lastProductsFetch: number | null;
  lastBlogFetch: number | null;
  lastPartnersFetch: number | null;
  
  // Actions
  setProducts: (products: Product[]) => void;
  setProductsLoading: (loading: boolean) => void;
  setProductsError: (error: string | null) => void;
  
  setBlogPosts: (posts: BlogPost[]) => void;
  setBlogLoading: (loading: boolean) => void;
  setBlogError: (error: string | null) => void;
  
  setPartners: (partners: Partner[]) => void;
  setPartnersLoading: (loading: boolean) => void;
  setPartnersError: (error: string | null) => void;
  
  setMenuOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  
  // Data fetching actions
  fetchProducts: () => Promise<void>;
  fetchBlogPosts: () => Promise<void>;
  fetchPartners: () => Promise<void>;
  
  // Cache management
  shouldRefetch: (lastFetch: number | null, maxAge?: number) => boolean;
  clearCache: () => void;
}

// Cache duration (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

// Mock data - in real app, these would come from API
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Petiscos para Cães",
    category: "Cães",
    price: "A partir de R$ 15,00",
    description: "Deliciosos petiscos naturais especialmente desenvolvidos para cães",
    features: ["100% Natural", "Rico em Proteínas", "Sem Conservantes"],
    image: "/products/dog-treats.jpg"
  },
  {
    id: 2,
    name: "Petiscos para Gatos",
    category: "Gatos",
    price: "A partir de R$ 18,00",
    description: "Irresistíveis petiscos naturais que os gatos adoram",
    features: ["100% Natural", "Alto Valor Nutricional", "Sabor Irresistível"],
    image: "/products/cat-treats.jpg"
  },
  {
    id: 3,
    name: "Mix Especial",
    category: "Universal",
    price: "A partir de R$ 25,00",
    description: "Combinação especial de petiscos para cães e gatos",
    features: ["Variedade de Sabores", "Embalagem Econômica", "Para Toda Família Pet"],
    image: "/products/mix-treats.jpg"
  }
];

const mockBlogPosts: BlogPost[] = [
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
  }
];

const mockPartners: Partner[] = [
  {
    id: 1,
    name: "Pet Shop Asa Norte",
    address: "SCLN 404, Bloco A, Loja 15 - Asa Norte, Brasília - DF",
    phone: "(61) 3333-1111",
    coordinates: [-15.7801, -47.8919],
    type: "pet_shop"
  },
  {
    id: 2,
    name: "Mundo Pet Taguatinga",
    address: "QNM 40, Conjunto E, Loja 10 - Taguatinga Norte, Brasília - DF",
    phone: "(61) 3333-2222",
    coordinates: [-15.7801, -48.0583],
    type: "pet_shop"
  },
  {
    id: 3,
    name: "Pet Center Águas Claras",
    address: "Rua 7 Norte, Lote 3/5 - Águas Claras, Brasília - DF",
    phone: "(61) 3333-3333",
    coordinates: [-15.8267, -48.0175],
    type: "pet_shop"
  }
];

// Create the store
export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        products: [],
        productsLoading: false,
        productsError: null,
        
        blogPosts: [],
        blogLoading: false,
        blogError: null,
        
        partners: [],
        partnersLoading: false,
        partnersError: null,
        
        isMenuOpen: false,
        searchQuery: '',
        selectedCategory: 'Todos',
        
        lastProductsFetch: null,
        lastBlogFetch: null,
        lastPartnersFetch: null,
        
        // Basic setters
        setProducts: (products) => set({ products, lastProductsFetch: Date.now() }),
        setProductsLoading: (productsLoading) => set({ productsLoading }),
        setProductsError: (productsError) => set({ productsError }),
        
        setBlogPosts: (blogPosts) => set({ blogPosts, lastBlogFetch: Date.now() }),
        setBlogLoading: (blogLoading) => set({ blogLoading }),
        setBlogError: (blogError) => set({ blogError }),
        
        setPartners: (partners) => set({ partners, lastPartnersFetch: Date.now() }),
        setPartnersLoading: (partnersLoading) => set({ partnersLoading }),
        setPartnersError: (partnersError) => set({ partnersError }),
        
        setMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
        setSearchQuery: (searchQuery) => set({ searchQuery }),
        setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
        
        // Cache management
        shouldRefetch: (lastFetch, maxAge = CACHE_DURATION) => {
          if (!lastFetch) return true;
          return Date.now() - lastFetch > maxAge;
        },
        
        clearCache: () => set({
          lastProductsFetch: null,
          lastBlogFetch: null,
          lastPartnersFetch: null,
          products: [],
          blogPosts: [],
          partners: []
        }),
        
        // Data fetching actions
        fetchProducts: async () => {
          const { shouldRefetch, lastProductsFetch } = get();
          
          if (!shouldRefetch(lastProductsFetch)) {
            return; // Use cached data
          }
          
          set({ productsLoading: true, productsError: null });
          
          try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // In real app, this would be an actual API call
            // const response = await fetch('/api/products');
            // const products = await response.json();
            
            set({ 
              products: mockProducts, 
              productsLoading: false,
              lastProductsFetch: Date.now()
            });
          } catch (error) {
            set({ 
              productsError: error instanceof Error ? error.message : 'Erro ao carregar produtos',
              productsLoading: false 
            });
          }
        },
        
        fetchBlogPosts: async () => {
          const { shouldRefetch, lastBlogFetch } = get();
          
          if (!shouldRefetch(lastBlogFetch)) {
            return; // Use cached data
          }
          
          set({ blogLoading: true, blogError: null });
          
          try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 800));
            
            set({ 
              blogPosts: mockBlogPosts, 
              blogLoading: false,
              lastBlogFetch: Date.now()
            });
          } catch (error) {
            set({ 
              blogError: error instanceof Error ? error.message : 'Erro ao carregar artigos',
              blogLoading: false 
            });
          }
        },
        
        fetchPartners: async () => {
          const { shouldRefetch, lastPartnersFetch } = get();
          
          if (!shouldRefetch(lastPartnersFetch)) {
            return; // Use cached data
          }
          
          set({ partnersLoading: true, partnersError: null });
          
          try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 600));
            
            set({ 
              partners: mockPartners, 
              partnersLoading: false,
              lastPartnersFetch: Date.now()
            });
          } catch (error) {
            set({ 
              partnersError: error instanceof Error ? error.message : 'Erro ao carregar parceiros',
              partnersLoading: false 
            });
          }
        }
      }),
      {
        name: 'petiska-gatao-store',
        partialize: (state) => ({
          // Only persist certain parts of the state
          products: state.products,
          blogPosts: state.blogPosts,
          partners: state.partners,
          lastProductsFetch: state.lastProductsFetch,
          lastBlogFetch: state.lastBlogFetch,
          lastPartnersFetch: state.lastPartnersFetch,
          selectedCategory: state.selectedCategory,
        }),
      }
    ),
    {
      name: 'petiska-gatao-store',
    }
  )
);
