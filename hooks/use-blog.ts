import { useEffect } from 'react';
import { useAppStore } from '@/lib/store';

/**
 * Hook for managing blog posts data
 */
export function useBlog() {
  const {
    blogPosts,
    blogLoading,
    blogError,
    fetchBlogPosts,
    searchQuery,
    selectedCategory
  } = useAppStore();

  // Auto-fetch blog posts on mount
  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Get post by slug
  const getPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
  };

  // Get posts by category
  const getPostsByCategory = (category: string) => {
    return blogPosts.filter(post => post.category === category);
  };

  // Get recent posts
  const getRecentPosts = (limit = 3) => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  };

  // Get related posts (same category, excluding current post)
  const getRelatedPosts = (currentSlug: string, limit = 3) => {
    const currentPost = getPostBySlug(currentSlug);
    if (!currentPost) return [];

    return blogPosts
      .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
      .slice(0, limit);
  };

  // Get available categories
  const categories = ['Todos', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  return {
    posts: filteredPosts,
    allPosts: blogPosts,
    loading: blogLoading,
    error: blogError,
    categories,
    selectedCategory,
    searchQuery,
    getPostBySlug,
    getPostsByCategory,
    getRecentPosts,
    getRelatedPosts,
    refetch: fetchBlogPosts,
  };
}

/**
 * Hook for getting a single blog post by slug
 */
export function useBlogPost(slug: string) {
  const { blogPosts, blogLoading, blogError, fetchBlogPosts } = useAppStore();

  useEffect(() => {
    if (blogPosts.length === 0) {
      fetchBlogPosts();
    }
  }, [blogPosts.length, fetchBlogPosts]);

  const post = blogPosts.find(p => p.slug === slug);

  // Get related posts
  const relatedPosts = post 
    ? blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3)
    : [];

  return {
    post,
    relatedPosts,
    loading: blogLoading,
    error: blogError,
    refetch: fetchBlogPosts,
  };
}

/**
 * Hook for getting posts by category
 */
export function useBlogCategory(category: string) {
  const { blogPosts, blogLoading, blogError, fetchBlogPosts } = useAppStore();

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  const categoryPosts = blogPosts.filter(post => 
    category === 'todos' || post.category.toLowerCase() === category.toLowerCase()
  );

  // Get category info
  const categoryInfo = {
    name: category === 'todos' ? 'Todos os Artigos' : category,
    count: categoryPosts.length,
    description: getCategoryDescription(category)
  };

  return {
    posts: categoryPosts,
    categoryInfo,
    loading: blogLoading,
    error: blogError,
    refetch: fetchBlogPosts,
  };
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'alimentacao': 'Tudo sobre nutrição, petiscos e alimentação saudável para pets',
    'comportamento': 'Dicas sobre adestramento, socialização e comportamento animal',
    'saude': 'Informações sobre saúde, prevenção e cuidados veterinários',
    'todos': 'Todos os nossos artigos sobre cuidados com pets'
  };

  return descriptions[category.toLowerCase()] || 'Artigos especializados sobre pets';
}
