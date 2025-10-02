import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';

interface FilterOptions {
  petType: string[];
  ingredients: string[];
  benefits: string[];
  priceRange: string;
  availability: string;
}

interface ProductFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  totalProducts: number;
  filteredCount: number;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  onFilterChange,
  totalProducts,
  filteredCount
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    petType: [],
    ingredients: [],
    benefits: [],
    priceRange: '',
    availability: ''
  });

  const petTypes = [
    { value: 'caes', label: 'Cães' },
    { value: 'gatos', label: 'Gatos' },
    { value: 'ambos', label: 'Cães e Gatos' }
  ];

  const ingredients = [
    { value: 'frango', label: 'Frango' },
    { value: 'peixe', label: 'Peixe' },
    { value: 'carne', label: 'Carne Bovina' },
    { value: 'vegetais', label: 'Vegetais' },
    { value: 'frutas', label: 'Frutas' }
  ];

  const benefits = [
    { value: 'pele-pelo', label: 'Pele e Pelo' },
    { value: 'digestao', label: 'Digestão' },
    { value: 'articulacoes', label: 'Articulações' },
    { value: 'imunidade', label: 'Imunidade' },
    { value: 'dental', label: 'Saúde Dental' }
  ];

  const priceRanges = [
    { value: 'ate-20', label: 'Até R$ 20' },
    { value: '20-40', label: 'R$ 20 - R$ 40' },
    { value: '40-60', label: 'R$ 40 - R$ 60' },
    { value: 'acima-60', label: 'Acima de R$ 60' }
  ];

  const availabilityOptions = [
    { value: 'disponivel', label: 'Disponível' },
    { value: 'pre-venda', label: 'Pré-venda' },
    { value: 'todos', label: 'Todos' }
  ];

  const handleFilterChange = (category: keyof FilterOptions, value: string | string[]) => {
    const newFilters = { ...filters, [category]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleMultiSelectChange = (category: 'petType' | 'ingredients' | 'benefits', value: string, checked: boolean) => {
    const currentValues = filters[category];
    const newValues = checked 
      ? [...currentValues, value]
      : currentValues.filter(item => item !== value);
    
    handleFilterChange(category, newValues);
  };

  const clearAllFilters = () => {
    const emptyFilters: FilterOptions = {
      petType: [],
      ingredients: [],
      benefits: [],
      priceRange: '',
      availability: ''
    };
    setFilters(emptyFilters);
    setSearchTerm('');
    onFilterChange(emptyFilters);
  };

  const activeFiltersCount = 
    filters.petType.length + 
    filters.ingredients.length + 
    filters.benefits.length + 
    (filters.priceRange ? 1 : 0) + 
    (filters.availability ? 1 : 0);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 pr-16 h-12 rounded-full"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filtros
          {activeFiltersCount > 0 && (
            <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredCount} de {totalProducts} produtos
        </p>
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-muted-foreground hover:text-primary"
          >
            <X className="w-4 h-4 mr-2" />
            Limpar Filtros
          </Button>
        )}
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <Card className="bg-gradient-card border-0 rounded-3xl shadow-card p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-primary flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filtros
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Pet Type Filter */}
              <div>
                <h4 className="font-semibold text-primary mb-3">Tipo de Pet</h4>
                <div className="space-y-2">
                  {petTypes.map((type) => (
                    <div key={type.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`pet-${type.value}`}
                        checked={filters.petType.includes(type.value)}
                        onCheckedChange={(checked) => 
                          handleMultiSelectChange('petType', type.value, Boolean(checked))
                        }
                      />
                      <label htmlFor={`pet-${type.value}`} className="text-sm cursor-pointer">
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ingredients Filter */}
              <div>
                <h4 className="font-semibold text-primary mb-3">Ingredientes</h4>
                <div className="space-y-2">
                  {ingredients.map((ingredient) => (
                    <div key={ingredient.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`ingredient-${ingredient.value}`}
                        checked={filters.ingredients.includes(ingredient.value)}
                        onCheckedChange={(checked) => 
                          handleMultiSelectChange('ingredients', ingredient.value, Boolean(checked))
                        }
                      />
                      <label htmlFor={`ingredient-${ingredient.value}`} className="text-sm cursor-pointer">
                        {ingredient.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Filter */}
              <div>
                <h4 className="font-semibold text-primary mb-3">Benefícios</h4>
                <div className="space-y-2">
                  {benefits.map((benefit) => (
                    <div key={benefit.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`benefit-${benefit.value}`}
                        checked={filters.benefits.includes(benefit.value)}
                        onCheckedChange={(checked) => 
                          handleMultiSelectChange('benefits', benefit.value, Boolean(checked))
                        }
                      />
                      <label htmlFor={`benefit-${benefit.value}`} className="text-sm cursor-pointer">
                        {benefit.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h4 className="font-semibold text-primary mb-3">Faixa de Preço</h4>
                <Select 
                  value={filters.priceRange} 
                  onValueChange={(value) => handleFilterChange('priceRange', value)}
                >
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Selecionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Availability Filter */}
              <div>
                <h4 className="font-semibold text-primary mb-3">Disponibilidade</h4>
                <Select 
                  value={filters.availability} 
                  onValueChange={(value) => handleFilterChange('availability', value)}
                >
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Selecionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {availabilityOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters Display */}
            {activeFiltersCount > 0 && (
              <div className="mt-6 pt-6 border-t border-accent/20">
                <div className="flex flex-wrap gap-2">
                  {filters.petType.map(type => (
                    <Badge key={type} variant="outline" className="gap-1">
                      {petTypes.find(p => p.value === type)?.label}
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => handleMultiSelectChange('petType', type, false)}
                      />
                    </Badge>
                  ))}
                  {filters.ingredients.map(ingredient => (
                    <Badge key={ingredient} variant="outline" className="gap-1">
                      {ingredients.find(i => i.value === ingredient)?.label}
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => handleMultiSelectChange('ingredients', ingredient, false)}
                      />
                    </Badge>
                  ))}
                  {filters.benefits.map(benefit => (
                    <Badge key={benefit} variant="outline" className="gap-1">
                      {benefits.find(b => b.value === benefit)?.label}
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => handleMultiSelectChange('benefits', benefit, false)}
                      />
                    </Badge>
                  ))}
                  {filters.priceRange && (
                    <Badge variant="outline" className="gap-1">
                      {priceRanges.find(p => p.value === filters.priceRange)?.label}
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => handleFilterChange('priceRange', '')}
                      />
                    </Badge>
                  )}
                  {filters.availability && (
                    <Badge variant="outline" className="gap-1">
                      {availabilityOptions.find(a => a.value === filters.availability)?.label}
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => handleFilterChange('availability', '')}
                      />
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductFilter;