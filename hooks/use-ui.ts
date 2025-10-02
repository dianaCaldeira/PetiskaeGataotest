import { useState } from 'react';
import { useAppStore } from '@/lib/store';

/**
 * Hook for managing UI state
 */
export function useUI() {
  const {
    isMenuOpen,
    searchQuery,
    selectedCategory,
    setMenuOpen,
    setSearchQuery,
    setSelectedCategory
  } = useAppStore();

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Close menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Open menu
  const openMenu = () => {
    setMenuOpen(true);
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todos');
  };

  return {
    // State
    isMenuOpen,
    searchQuery,
    selectedCategory,
    
    // Menu actions
    toggleMenu,
    closeMenu,
    openMenu,
    
    // Search actions
    handleSearch,
    clearSearch,
    
    // Filter actions
    handleCategoryChange,
    resetFilters,
  };
}

/**
 * Hook for managing form state
 */
export function useFormState<T extends Record<string, unknown>>(initialState: T) {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof T, value: unknown) => {
    setState(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const setFieldError = (field: keyof T, error: string) => {
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  const reset = () => {
    setState(initialState);
    setErrors({});
    setIsSubmitting(false);
  };

  const validate = (validationRules: Partial<Record<keyof T, (value: unknown) => string | undefined>>) => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    Object.entries(validationRules).forEach(([field, validator]) => {
      if (validator) {
        const error = validator(state[field as keyof T]);
        if (error) {
          newErrors[field as keyof T] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return {
    state,
    errors,
    isSubmitting,
    updateField,
    setFieldError,
    clearErrors,
    reset,
    validate,
    setIsSubmitting,
  };
}

