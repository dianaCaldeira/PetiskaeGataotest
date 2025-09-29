import { useEffect } from 'react';
import { useAppStore } from '@/lib/store';

/**
 * Hook for managing partners data
 */
export function usePartners() {
  const {
    partners,
    partnersLoading,
    partnersError,
    fetchPartners
  } = useAppStore();

  // Auto-fetch partners on mount
  useEffect(() => {
    fetchPartners();
  }, [fetchPartners]);

  // Get partners by type
  const getPartnersByType = (type: 'pet_shop' | 'veterinaria' | 'distribuidor') => {
    return partners.filter(partner => partner.type === type);
  };

  // Get partner by ID
  const getPartnerById = (id: number) => {
    return partners.find(partner => partner.id === id);
  };

  // Search partners by name or address
  const searchPartners = (query: string) => {
    if (!query.trim()) return partners;
    
    const searchTerm = query.toLowerCase();
    return partners.filter(partner => 
      partner.name.toLowerCase().includes(searchTerm) ||
      partner.address.toLowerCase().includes(searchTerm)
    );
  };

  // Get partners for map (with coordinates)
  const getMapPartners = () => {
    return partners.map(partner => ({
      id: partner.id,
      name: partner.name,
      address: partner.address,
      phone: partner.phone,
      coordinates: partner.coordinates,
      type: partner.type
    }));
  };

  // Get partners by region (simplified by coordinates)
  const getPartnersByRegion = (region: string) => {
    // Simple region mapping based on coordinates
    // In a real app, this would be more sophisticated
    const regionMap: Record<string, (coords: [number, number]) => boolean> = {
      'asa-norte': ([lat, lng]) => lat > -15.78 && lng > -47.90,
      'asa-sul': ([lat, lng]) => lat < -15.78 && lng > -47.90,
      'taguatinga': ([lat, lng]) => lng < -48.00,
      'aguas-claras': ([lat, lng]) => lat < -15.82 && lng < -48.01,
    };

    const filterFn = regionMap[region];
    if (!filterFn) return partners;

    return partners.filter(partner => filterFn(partner.coordinates));
  };

  // Get statistics
  const getStats = () => {
    const totalPartners = partners.length;
    const petShops = getPartnersByType('pet_shop').length;
    const veterinarias = getPartnersByType('veterinaria').length;
    const distribuidores = getPartnersByType('distribuidor').length;

    return {
      total: totalPartners,
      petShops,
      veterinarias,
      distribuidores
    };
  };

  return {
    partners,
    loading: partnersLoading,
    error: partnersError,
    getPartnersByType,
    getPartnerById,
    searchPartners,
    getMapPartners,
    getPartnersByRegion,
    getStats,
    refetch: fetchPartners,
  };
}

/**
 * Hook for getting a single partner by ID
 */
export function usePartner(id: number) {
  const { partners, partnersLoading, partnersError, fetchPartners } = useAppStore();

  useEffect(() => {
    if (partners.length === 0) {
      fetchPartners();
    }
  }, [partners.length, fetchPartners]);

  const partner = partners.find(p => p.id === id);

  return {
    partner,
    loading: partnersLoading,
    error: partnersError,
    refetch: fetchPartners,
  };
}
