interface JsonLd {
  "@context": string;
  "@type": string;
}

interface Author {
  "@type": "Person" | "Organization";
  name: string;
}

interface NutritionInformation {
  "@type": "NutritionInformation";
  calories?: string;
  fatContent?: string;
  proteinContent?: string;
  carbohydrateContent?: string;
  fiberContent?: string;
}

interface HowToStep {
  "@type": "HowToStep";
  text: string;
  name?: string;
  image?: string | string[];
  url?: string;
}

interface VideoObject {
  "@type": "VideoObject";
  name: string;
  description?: string;
  thumbnailUrl?: string | string[];
  contentUrl: string;
  uploadDate?: string;
}

export interface RecipeJson extends JsonLd {
  name: string;
  author: Author | Author[];
  description: string;
  image?: string | string[];
  datePublished?: string;
  dateModified?: string;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  recipeCategory?: string;
  recipeCuisine?: string;
  recipeYield?: string | string[];
  recipeIngredient: string[];
  recipeInstructions: HowToStep[];
  nutrition?: NutritionInformation;
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: number;
    bestRating: number;
    worstRating: number;
    ratingCount: number;
  };
  keywords?: string;
  video?: VideoObject | VideoObject[];
}