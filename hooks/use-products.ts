import { useEffect } from 'react';
import { useAppStore } from '@/lib/store';

/**
 * Hook for managing products data
 * Automatically fetches products on mount and provides loading/error states
 */
export function useProducts() {
  const {
    products,
    productsLoading,
    productsError,
    fetchProducts,
    selectedCategory,
    searchQuery
  } = useAppStore();

  // Auto-fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Get product by ID
  const getProductById = (id: number) => {
    return products.find(product => product.id === id);
  };

  // Get products by category
  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  // Get available categories
  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

  return {
    products: filteredProducts,
    allProducts: products,
    loading: productsLoading,
    error: productsError,
    categories,
    selectedCategory,
    searchQuery,
    getProductById,
    getProductsByCategory,
    refetch: fetchProducts,
  };
}

/**
 * Hook for getting a single product by ID
 */
export function useProduct(id: number) {
  const { products, productsLoading, productsError, fetchProducts } = useAppStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  const product = products.find(p => p.id === id);

  return {
    product,
    loading: productsLoading,
    error: productsError,
    refetch: fetchProducts,
  };
}
