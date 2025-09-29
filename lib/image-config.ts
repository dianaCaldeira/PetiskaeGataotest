// Image optimization configuration for Next.js
export const imageConfig = {
  // Supported image formats
  formats: ['image/webp', 'image/avif'],
  
  // Image sizes for responsive images
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  
  // Device sizes for responsive images
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  
  // Image domains (add your CDN domains here)
  domains: [
    'localhost',
    'petiskaegatao.com.br',
    'images.unsplash.com',
    'via.placeholder.com'
  ],
  
  // Quality settings
  quality: {
    default: 80,
    high: 90,
    low: 60
  },
  
  // Placeholder configurations
  placeholders: {
    blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
    solid: '#f3f4f6'
  }
};

// Image optimization utilities
export function getOptimizedImageUrl(
  src: string,
  width?: number,
  quality?: number
): string {
  if (!src.startsWith('/')) return src;
  
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (quality) params.set('q', quality.toString());
  
  return params.toString() ? `${src}?${params.toString()}` : src;
}

export function generateSrcSet(
  src: string,
  sizes: number[] = imageConfig.imageSizes
): string {
  return sizes
    .map(size => `${getOptimizedImageUrl(src, size)} ${size}w`)
    .join(', ');
}

export function getImageDimensions(aspectRatio: string, width: number): {
  width: number;
  height: number;
} {
  const [w, h] = aspectRatio.split(':').map(Number);
  return {
    width,
    height: Math.round((width * h) / w)
  };
}

// Common aspect ratios
export const aspectRatios = {
  square: '1:1',
  landscape: '16:9',
  portrait: '3:4',
  wide: '21:9',
  product: '4:3',
  hero: '2:1'
};

// Image categories and their default settings
export const imageCategories = {
  hero: {
    quality: imageConfig.quality.high,
    priority: true,
    sizes: '100vw'
  },
  product: {
    quality: imageConfig.quality.default,
    priority: false,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  },
  blog: {
    quality: imageConfig.quality.default,
    priority: false,
    sizes: '(max-width: 768px) 100vw, 75vw'
  },
  avatar: {
    quality: imageConfig.quality.default,
    priority: false,
    sizes: '(max-width: 768px) 64px, 96px'
  },
  thumbnail: {
    quality: imageConfig.quality.low,
    priority: false,
    sizes: '(max-width: 768px) 150px, 200px'
  }
};
