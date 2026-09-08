export type ProductCategory = 
  | 'all'
  | 'iv_fixation'
  | 'wound_care'
  | 'tapes'
  | 'bandages'
  | 'ppe_safety'
  | 'respiratory'
  | 'nebulizers'
  | 'urology_tubes'
  | 'antisepsis'
  | 'first_aid';

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  shortLabel: string;
  iconName: string;
  description: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  brand: string;
  category: ProductCategory;
  dimensions: string;
  presentation: string;
  unitPerBox: number;
  masterBoxUnits: number;
  shortDescription: string;
  description: string;
  features: string[];
  clinicalIndications: string[];
  technicalSpecs: {
    material: string;
    adhesive: string;
    permeability: string;
    sterilization: string;
    shelfLife: string;
    latexFree: boolean;
    hypoallergenic: boolean;
    radiotransparent: boolean;
  };
  applicationSteps: string[];
  removalProtocol: string;
  certifications: string[];
  image: string;
  inStock: boolean;
  featured?: boolean;
  badge?: string;
  galleryImages?: string[];
  availableCalibers?: {
    gauge: string;
    colorName: string;
    hexColor: string;
    description: string;
  }[];
  availableFormats?: {
    format: string;
    inches: string;
    boxUnits: number;
    targetArea: string;
    clinicalUse: string;
    technique: string;
    badge?: string;
    refCode?: string;
    image?: string;
  }[];
}

export interface ClinicalProcedureRecommendation {
  id: string;
  procedureName: string;
  specialty: string;
  recommendedProductIds: string[];
  clinicalRationale: string;
  bestPracticeTip: string;
}

export interface QuoteItem {
  productId: string;
  productName: string;
  brand: string;
  dimensions: string;
  unitPerBox: number;
  quantityBoxes: number;
  formatOrCaliber?: string;
  image?: string;
}

