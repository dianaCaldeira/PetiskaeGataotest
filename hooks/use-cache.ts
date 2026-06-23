import { useAppStore } from '@/lib/store';
import { useCallback } from 'react';

/**
 * Hook for managing cache and data revalidation
 */
export function useCache() {
  const {
    lastProductsFetch,
    lastBlogFetch,
    lastPartnersFetch,
    shouldRefetch,
    clearCache,
    fetchProducts,
    fetchBlogPosts,
    fetchPartners
  } = useAppStore();

  // Force refresh all data
  const refreshAll = useCallback(async () => {
    clearCache();
    await Promise.all([
      fetchProducts(),
      fetchBlogPosts(),
      fetchPartners()
    ]);
  }, [clearCache, fetchProducts, fetchBlogPosts, fetchPartners]);

  // Force refresh specific data type
  const refreshProducts = useCallback(async () => {
    await fetchProducts();
  }, [fetchProducts]);

  const refreshBlog = useCallback(async () => {
    await fetchBlogPosts();
  }, [fetchBlogPosts]);

  const refreshPartners = useCallback(async () => {
    await fetchPartners();
  }, [fetchPartners]);

  // Check if data is stale
  const isStale = useCallback((lastFetch: number | null, maxAge = 5 * 60 * 1000) => {
    return shouldRefetch(lastFetch, maxAge);
  }, [shouldRefetch]);

  // Get cache status for all data types
  const getCacheStatus = () => {
    const now = Date.now();
    const maxAge = 5 * 60 * 1000; // 5 minutes

    return {
      products: {
        lastFetch: lastProductsFetch,
        isStale: isStale(lastProductsFetch),
        age: lastProductsFetch ? now - lastProductsFetch : null,
        maxAge
      },
      blog: {
        lastFetch: lastBlogFetch,
        isStale: isStale(lastBlogFetch),
        age: lastBlogFetch ? now - lastBlogFetch : null,
        maxAge
      },
      partners: {
        lastFetch: lastPartnersFetch,
        isStale: isStale(lastPartnersFetch),
        age: lastPartnersFetch ? now - lastPartnersFetch : null,
        maxAge
      }
    };
  };

  // Format cache age for display
  const formatCacheAge = (timestamp: number | null) => {
    if (!timestamp) return 'Nunca carregado';
    
    const age = Date.now() - timestamp;
    const minutes = Math.floor(age / (1000 * 60));
    const seconds = Math.floor((age % (1000 * 60)) / 1000);
    
    if (minutes > 0) {
      return `${minutes}m ${seconds}s atrás`;
    }
    return `${seconds}s atrás`;
  };

  return {
    // Cache status
    getCacheStatus,
    formatCacheAge,
    isStale,
    
    // Refresh actions
    refreshAll,
    refreshProducts,
    refreshBlog,
    refreshPartners,
    clearCache,
    
    // Individual cache timestamps
    lastProductsFetch,
    lastBlogFetch,
    lastPartnersFetch,
  };
}

/**
 * Hook for automatic data revalidation based on focus/visibility
 */
export function useAutoRevalidate() {
  const { refreshAll, getCacheStatus } = useCache();

  // Revalidate stale data when window gains focus
  const handleFocus = useCallback(() => {
    const status = getCacheStatus();
    const hasStaleData = status.products.isStale || status.blog.isStale || status.partners.isStale;
    
    if (hasStaleData) {
      refreshAll();
    }
  }, [refreshAll, getCacheStatus]);

  // Set up event listeners for auto-revalidation
  const setupAutoRevalidation = useCallback(() => {
    window.addEventListener('focus', handleFocus);
    window.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        handleFocus();
      }
    });

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('visibilitychange', handleFocus);
    };
  }, [handleFocus]);

  return {
    setupAutoRevalidation,
    handleFocus,
  };
}
