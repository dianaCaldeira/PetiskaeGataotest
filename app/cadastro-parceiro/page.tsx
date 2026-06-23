'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Store,
  MapPin, 
  User, 
  FileText,
  CheckCircle,
  AlertCircle,
  Send,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

interface PartnerFormData {
  petshopName: string;
  ownerName: string;
  email: string;
  phone: string;
  cnpj: string;
  address: string;
  neighborhood: string;
  city: string;
  businessType: string;
  experience: string;
  averageMonthlyPurchase: string;
  targetMarket: string[];
  hasPhysicalStore: boolean;
  monthlyCustomers: string;
  expectations: string;
  acceptTerms: boolean;
}

export default function PartnerRegistration() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PartnerFormData>({
    petshopName: '',
    ownerName: '',
    email: '',
    phone: '',
    cnpj: '',
    address: '',
    neighborhood: '',
    city: 'Brasília',
    businessType: '',
    experience: '',
    averageMonthlyPurchase: '',
    targetMarket: [],
    hasPhysicalStore: true,
    monthlyCustomers: '',
    expectations: '',
    acceptTerms: false
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof PartnerFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof PartnerFormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof PartnerFormData, string>> = {};
    
    if (!formData.petshopName.trim()) newErrors.petshopName = 'Nome do pet shop é obrigatório';
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Nome do proprietário é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.cnpj.trim()) newErrors.cnpj = 'CNPJ é obrigatório';
    if (!formData.address.trim()) newErrors.address = 'Endereço é obrigatório';
    if (!formData.neighborhood.trim()) newErrors.neighborhood = 'Bairro é obrigatório';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Você deve aceitar os termos';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const businessTypeLabels: Record<string, string> = {
        'pet-shop': 'Pet Shop',
        'veterinaria': 'Clínica Veterinária',
        'agropecuaria': 'Agropecuária',
        'distribuidor': 'Distribuidor',
        'outros': 'Outros'
      };

      const experienceLabels: Record<string, string> = {
        'menos-1-ano': 'Menos de 1 ano',
        '1-3-anos': '1 a 3 anos',
        '3-5-anos': '3 a 5 anos',
        'mais-5-anos': 'Mais de 5 anos'
      };

      const purchaseLabels: Record<string, string> = {
        'ate-500': 'Até R$ 500/mês',
        '500-1500': 'R$ 500 a R$ 1.500/mês',
        '1500-3000': 'R$ 1.500 a R$ 3.000/mês',
        'acima-3000': 'Acima de R$ 3.000/mês'
      };

      const targetMarketLabels: Record<string, string> = {
        'tutores-individuais': 'Tutores Individuais',
        'criadores': 'Criadores',
        'hoteis-pets': 'Hotéis para Pets',
        'veterinarias': 'Clínicas Veterinárias',
        'revendedores': 'Outros Revendedores'
      };

      const message = `🏪 *NOVO CADASTRO DE PARCEIRO*

*DADOS DO PET SHOP:*
• Nome: ${formData.petshopName}
• Proprietário: ${formData.ownerName}
• E-mail: ${formData.email}
• Telefone: ${formData.phone}
• CNPJ: ${formData.cnpj}

*LOCALIZAÇÃO:*
• Endereço: ${formData.address}
• Bairro: ${formData.neighborhood}
• Cidade: ${formData.city}

*INFORMAÇÕES COMERCIAIS:*
• Tipo de Negócio: ${formData.businessType ? businessTypeLabels[formData.businessType] : 'Não informado'}
• Experiência: ${formData.experience ? experienceLabels[formData.experience] : 'Não informado'}
• Volume de Compra: ${formData.averageMonthlyPurchase ? purchaseLabels[formData.averageMonthlyPurchase] : 'Não informado'}
• Loja Física: ${formData.hasPhysicalStore ? 'Sim' : 'Não'}
• Clientes/mês: ${formData.monthlyCustomers || 'Não informado'}

*PÚBLICO-ALVO:*
${formData.targetMarket.length > 0 ? formData.targetMarket.map(market => `• ${targetMarketLabels[market]}`).join('\n') : '• Não informado'}

*EXPECTATIVAS:*
${formData.expectations || 'Não informado'}

*Enviado através do site da Petiska & Gatão* �`;

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/5561999999999?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Cadastro enviado com sucesso!",
        description: "Você será redirecionado para o WhatsApp. Nossa equipe entrará em contato em breve.",
      });

      // Reset form
      setFormData({
        petshopName: '',
        ownerName: '',
        email: '',
        phone: '',
        cnpj: '',
        address: '',
        neighborhood: '',
        city: 'Brasília',
        businessType: '',
        experience: '',
        averageMonthlyPurchase: '',
        targetMarket: [],
        hasPhysicalStore: true,
        monthlyCustomers: '',
        expectations: '',
        acceptTerms: false
      });

    } catch {
      toast({
        title: "Erro ao enviar cadastro",
        description: "Tente novamente ou entre em contato diretamente pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Margem Atrativa",
      description: "35-45% de margem nos produtos"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "2-5 dias úteis em todo o DF"
    },
    {
      icon: Award,
      title: "Suporte Completo",
      description: "Material promocional e treinamento"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Breadcrumb items={[{ label: 'Para Pet Shops', href: '/parceiros' }, { label: 'Cadastro de Parceiro' }]} />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent text-accent-foreground px-6 py-2 mb-6 text-lg">
              Cadastro de Parceiro
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Cadastre seu <span className="text-accent">Pet Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Preencha o formulário abaixo e nossa equipe entrará em contato para 
              apresentar as condições comerciais e iniciar nossa parceria.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Formulário de Cadastro
                </h2>
                <p className="text-muted-foreground">
                  Todas as informações são confidenciais e serão usadas apenas para análise da parceria.
                </p>
              </div>

              {/* Progress indicator */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  {[
                    { icon: Store, label: 'Pet Shop' },
                    { icon: User, label: 'Proprietário' },
                    { icon: MapPin, label: 'Localização' },
                    { icon: FileText, label: 'Comercial' },
                  ].map((step, index) => {
                    const StepIcon = step.icon;
                    const sectionFields: (keyof PartnerFormData)[][] = [
                      ['petshopName', 'cnpj'],
                      ['ownerName', 'phone', 'email'],
                      ['address', 'neighborhood'],
                      [],
                    ];
                    const filled = sectionFields[index].every(f => {
                      const v = formData[f];
                      return typeof v === 'string' ? v.trim() !== '' : !!v;
                    });
                    return (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors ${
                          filled ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          {filled ? <CheckCircle className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                        </div>
                        <span className="text-xs text-muted-foreground hidden sm:block">{step.label}</span>
                        {index < 3 && (
                          <div className={`hidden sm:block h-0.5 w-full mt-5 absolute ${filled ? 'bg-accent' : 'bg-muted'}`} />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.round(
                        (['petshopName', 'cnpj', 'ownerName', 'phone', 'email', 'address', 'neighborhood'] as (keyof PartnerFormData)[])
                          .filter(f => { const v = formData[f]; return typeof v === 'string' ? v.trim() !== '' : !!v; }).length / 7 * 100
                      )}%`
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  {(['petshopName', 'cnpj', 'ownerName', 'phone', 'email', 'address', 'neighborhood'] as (keyof PartnerFormData)[])
                    .filter(f => { const v = formData[f]; return typeof v === 'string' ? v.trim() !== '' : !!v; }).length} de 7 campos obrigatórios preenchidos
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dados do Pet Shop */}
                <div id="section-petshop">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Store className="w-5 h-5" />
                    Dados do Pet Shop
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome do Pet Shop *
                      </label>
                      <Input
                        type="text"
                        value={formData.petshopName}
                        onChange={(e) => handleInputChange('petshopName', e.target.value)}
                        placeholder="Ex: Pet Shop Asa Norte"
                        className={errors.petshopName ? 'border-destructive' : ''}
                      />
                      {errors.petshopName && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.petshopName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        CNPJ *
                      </label>
                      <Input
                        type="text"
                        value={formData.cnpj}
                        onChange={(e) => handleInputChange('cnpj', e.target.value)}
                        placeholder="00.000.000/0001-00"
                        className={errors.cnpj ? 'border-destructive' : ''}
                      />
                      {errors.cnpj && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.cnpj}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dados do Proprietário */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Dados do Proprietário
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        value={formData.ownerName}
                        onChange={(e) => handleInputChange('ownerName', e.target.value)}
                        placeholder="Seu nome completo"
                        className={errors.ownerName ? 'border-destructive' : ''}
                      />
                      {errors.ownerName && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.ownerName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(61) 99999-9999"
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Localização */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Localização
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Endereço Completo *
                      </label>
                      <Input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Rua, número, complemento"
                        className={errors.address ? 'border-destructive' : ''}
                      />
                      {errors.address && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Bairro *
                      </label>
                      <Input
                        type="text"
                        value={formData.neighborhood}
                        onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                        placeholder="Ex: Asa Norte"
                        className={errors.neighborhood ? 'border-destructive' : ''}
                      />
                      {errors.neighborhood && (
                        <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.neighborhood}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Cidade
                      </label>
                      <Input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Brasília"
                      />
                    </div>
                  </div>
                </div>

                {/* Informações Comerciais */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Informações Comerciais
                  </h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Tipo de negócio
                        </label>
                        <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pet-shop">Pet Shop</SelectItem>
                            <SelectItem value="veterinaria">Clínica Veterinária</SelectItem>
                            <SelectItem value="agropecuaria">Agropecuária</SelectItem>
                            <SelectItem value="distribuidor">Distribuidor</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Experiência no setor
                        </label>
                        <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="menos-1-ano">Menos de 1 ano</SelectItem>
                            <SelectItem value="1-3-anos">1 a 3 anos</SelectItem>
                            <SelectItem value="3-5-anos">3 a 5 anos</SelectItem>
                            <SelectItem value="mais-5-anos">Mais de 5 anos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Volume de compra mensal
                        </label>
                        <Select value={formData.averageMonthlyPurchase} onValueChange={(value) => handleInputChange('averageMonthlyPurchase', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ate-500">Até R$ 500/mês</SelectItem>
                            <SelectItem value="500-1500">R$ 500 a R$ 1.500/mês</SelectItem>
                            <SelectItem value="1500-3000">R$ 1.500 a R$ 3.000/mês</SelectItem>
                            <SelectItem value="acima-3000">Acima de R$ 3.000/mês</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        Qual o seu público-alvo? (Selecione todas as opções aplicáveis)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: 'tutores-individuais', label: 'Tutores Individuais' },
                          { value: 'criadores', label: 'Criadores' },
                          { value: 'hoteis-pets', label: 'Hotéis para Pets' },
                          { value: 'veterinarias', label: 'Clínicas Veterinárias' },
                          { value: 'revendedores', label: 'Outros Revendedores' }
                        ].map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={option.value}
                              checked={formData.targetMarket.includes(option.value)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleInputChange('targetMarket', [...formData.targetMarket, option.value]);
                                } else {
                                  handleInputChange('targetMarket', formData.targetMarket.filter(item => item !== option.value));
                                }
                              }}
                            />
                            <label htmlFor={option.value} className="text-sm text-foreground cursor-pointer">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasPhysicalStore"
                        checked={formData.hasPhysicalStore}
                        onCheckedChange={(checked) => handleInputChange('hasPhysicalStore', !!checked)}
                      />
                      <label htmlFor="hasPhysicalStore" className="text-sm text-foreground cursor-pointer">
                        Possuo loja física para receber clientes
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Número aproximado de clientes por mês
                      </label>
                      <Input
                        type="number"
                        value={formData.monthlyCustomers}
                        onChange={(e) => handleInputChange('monthlyCustomers', e.target.value)}
                        placeholder="Ex: 200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Expectativas com a parceria
                      </label>
                      <Textarea
                        value={formData.expectations}
                        onChange={(e) => handleInputChange('expectations', e.target.value)}
                        placeholder="O que espera da parceria com a Petiska & Gatão?"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange('acceptTerms', !!checked)}
                  />
                  <div className="text-sm">
                    <label htmlFor="terms" className="text-foreground cursor-pointer">
                      Aceito os{' '}
                      <Link href="/termos" className="text-primary hover:underline">
                        termos e condições
                      </Link>{' '}
                      e autorizo o uso dos meus dados para análise da parceria. *
                    </label>
                    {errors.acceptTerms && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.acceptTerms}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Cadastro
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-16 shadow-card">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Próximos Passos
            </h2>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-primary">Análise do Cadastro</h4>
                  <p className="text-muted-foreground">Nossa equipe analisará suas informações em até 24 horas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-primary">Contato Comercial</h4>
                  <p className="text-muted-foreground">Entraremos em contato para apresentar condições e tabela de preços.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-primary">Início da Parceria</h4>
                  <p className="text-muted-foreground">Após aprovação, você receberá seu primeiro pedido e material de apoio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
