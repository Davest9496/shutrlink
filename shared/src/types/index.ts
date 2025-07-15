// Core domain types for Shutrlink platform
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'photographer' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Album {
  id: string;
  title: string;
  description?: string;
  slug: string;
  coverImageId?: string;
  isPublic: boolean;
  accessToken: string;
  createdAt: Date;
  updatedAt: Date;
  photographerId: string;
}

export interface Image {
  id: string;
  originalUrl: string;
  hdUrl: string;
  ldUrl: string;
  thumbnailUrl: string;
  filename: string;
  title?: string;
  description?: string;
  altText?: string;
  metadata: ImageMetadata;
  albumId: string;
  uploadedAt: Date;
}

export interface ImageMetadata {
  width: number;
  height: number;
  fileSize: number;
  mimeType: string;
  exif?: Record<string, any>;
  aspectRatio: number;
}

export interface PrintProduct {
  id: string;
  name: string;
  width: number;
  height: number;
  basePrice: number;
  category: 'print' | 'frame';
  isActive: boolean;
}

export interface Order {
  id: string;
  albumId: string;
  customerEmail: string;
  customerName: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentIntentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  imageId: string;
  printProductId: string;
  frameProductId?: string;
  quantity: number;
  unitPrice: number;
}

export type OrderStatus = 
  | 'pending'
  | 'payment_required'
  | 'paid'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form validation types
export interface CreateAlbumRequest {
  title: string;
  description?: string;
  isPublic: boolean;
}

export interface UploadImageRequest {
  albumId: string;
  images: File[];
}

export interface CreateOrderRequest {
  albumId: string;
  customerEmail: string;
  customerName: string;
  items: {
    imageId: string;
    printProductId: string;
    frameProductId?: string;
    quantity: number;
  }[];
}
