/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "./product";

export interface WishlistItem {
  _id: string;
  userId: string;
  categoryId: string;
  supplierId: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  images: ProductImage[];
  productType: string;
  productName: string;
  shelfLife: string;
  originCountry: string;
  isHalal: boolean;
  isOrganic: boolean;
  isFrozen: boolean;
  isKosher: boolean;
  seo: SEO;
  averageRating: number;
  totalRatings: number;
  totalReviews: number;
  status: string;
  isFeatured: boolean;
  addBy: string;
  createdAt: string;
  updatedAt: string;
  wholesaleId: WholesaleItem[];
  isAvailable: boolean;
  quantity: number;
  isPallet: boolean;
  isCase: boolean;
}

export interface WishlistResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: WishlistItem[];
  meta?: Meta;
}

export interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface ProductImage {
  public_id: string;
  url: string;
  _id: string;
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface WholesaleItem {
  _id: string;
  type: string;
  label: string;
  palletItems: PalletItem[];
  isActive: boolean;
  caseItems: CaseItem[];
  fastMovingItems: any[]; // Can be typed more specifically if needed
  createdAt: string;
  updatedAt: string;
}

export interface PalletItem {
  palletName: string;
  items: PalletItemProduct[];
  totalCases: number;
  price: number;
  estimatedWeight: number;
  isMixed: boolean;
  isActive: boolean;
  _id: string;
}

export interface PalletItemProduct {
  productId: string;
  caseQuantity: number;
  _id: string;
}

export interface CaseItem {
  productId: string;
  quantity: number;
  price: number;
  discount: number;
  isActive: boolean;
  _id: string;
}