import { useState, useCallback } from 'react';
import { imageConfig, imageCategories } from '@/lib/image-config';

/**
 * Hook for managing image loading states and optimization
 */
export function useImageLoader() {
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  const handleImageLoad = useCallback((src: string) => {
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(src);
      return newSet;
    });
  }, []);

  const handleImageError = useCallback((src: string) => {
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(src);
      return newSet;
    });
    setErrorImages(prev => new Set(prev).add(src));
  }, []);

  const startLoading = useCallback((src: string) => {
    setLoadingImages(prev => new Set(prev).add(src));
    setErrorImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(src);
      return newSet;
    });
  }, []);

  const isLoading = useCallback((src: string) => loadingImages.has(src), [loadingImages]);
  const hasError = useCallback((src: string) => errorImages.has(src), [errorImages]);

  return {
    isLoading,
    hasError,
    handleImageLoad,
    handleImageError,
    startLoading,
  };
}

/**
 * Hook for getting optimized image props based on category
 */
export function useOptimizedImage(
  src: string,
  category: keyof typeof imageCategories = 'product'
) {
  const categoryConfig = imageCategories[category];
  
  return {
    src,
    quality: categoryConfig.quality,
    priority: categoryConfig.priority,
    sizes: categoryConfig.sizes,
    placeholder: 'blur' as const,
    blurDataURL: imageConfig.placeholders.blur,
  };
}

/**
 * Hook for preloading images
 */
export function useImagePreloader() {
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (preloadedImages.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set(prev).add(src));
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }, [preloadedImages]);

  const preloadImages = useCallback(async (sources: string[]) => {
    try {
      await Promise.all(sources.map(preloadImage));
    } catch (error) {
      console.warn('Failed to preload some images:', error);
    }
  }, [preloadImage]);

  const isPreloaded = useCallback((src: string) => preloadedImages.has(src), [preloadedImages]);

  return {
    preloadImage,
    preloadImages,
    isPreloaded,
  };
}

/**
 * Hook for responsive image sources
 */
export function useResponsiveImage(
  baseSrc: string,
  breakpoints: Record<string, string> = {}
) {
  const getResponsiveSource = useCallback(() => {
    if (typeof window === 'undefined') return baseSrc;

    const width = window.innerWidth;
    
    if (width >= 1200 && breakpoints.desktop) return breakpoints.desktop;
    if (width >= 768 && breakpoints.tablet) return breakpoints.tablet;
    if (breakpoints.mobile) return breakpoints.mobile;
    
    return baseSrc;
  }, [baseSrc, breakpoints]);

  return getResponsiveSource();
}

/**
 * Hook for managing favicon and app icons
 */
export function useFavicon() {
  const updateFavicon = useCallback((href: string) => {
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || 
                 document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = href;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  const updateAppleIcon = useCallback((href: string) => {
    const link = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement || 
                 document.createElement('link');
    link.rel = 'apple-touch-icon';
    link.href = href;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return {
    updateFavicon,
    updateAppleIcon,
  };
}

/**
 * Asset paths helper
 */
export const assetPaths = {
  images: {
    logo: '/logo.png',
    logoPlaceholder: '/logo-placeholder.svg',
    ogImage: '/og-image.jpg',
    placeholder: '/placeholder.svg',
    products: {
      placeholder: '/products/placeholder.jpg',
    },
    blog: {
      placeholder: '/blog/placeholder.jpg',
    },
    icons: {
      favicon: '/favicon.ico',
      icon192: '/icons/icon-192x192.png',
      icon512: '/icons/icon-512x512.png',
    }
  },
  documents: {
    manifest: '/manifest.json',
    robots: '/robots.txt',
    sitemap: '/sitemap.xml',
  }
};

/**
 * Hook for checking if assets are available
 */
export function useAssetChecker() {
  const [checkedAssets, setCheckedAssets] = useState<Map<string, boolean>>(new Map());

  const checkAsset = useCallback(async (url: string): Promise<boolean> => {
    if (checkedAssets.has(url)) {
      return checkedAssets.get(url)!;
    }

    try {
      const response = await fetch(url, { method: 'HEAD' });
      const exists = response.ok;
      
      setCheckedAssets(prev => new Map(prev).set(url, exists));
      return exists;
    } catch {
      setCheckedAssets(prev => new Map(prev).set(url, false));
      return false;
    }
  }, [checkedAssets]);

  return { checkAsset };
}
