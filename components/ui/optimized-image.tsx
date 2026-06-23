import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  fallback?: string;
  containerClassName?: string;
  showLoader?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  fallback = '/placeholder.svg',
  containerClassName,
  showLoader = true,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {/* Loading skeleton */}
      {isLoading && showLoader && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
      
      <Image
        src={hasError ? fallback : src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        {...props}
      />
    </div>
  );
}

// Preset components for common use cases
export function ProductImage({ src, alt, ...props }: Omit<OptimizedImageProps, 'fallback'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fallback="/products/placeholder.jpg"
      {...props}
    />
  );
}

export function BlogImage({ src, alt, ...props }: Omit<OptimizedImageProps, 'fallback'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fallback="/blog/placeholder.jpg"
      {...props}
    />
  );
}

export function AvatarImage({ src, alt, ...props }: Omit<OptimizedImageProps, 'fallback'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fallback="/avatars/placeholder.jpg"
      className="rounded-full"
      {...props}
    />
  );
}

export function LogoImage({ src, alt, ...props }: Omit<OptimizedImageProps, 'fallback'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fallback="/logo-placeholder.svg"
      {...props}
    />
  );
}
