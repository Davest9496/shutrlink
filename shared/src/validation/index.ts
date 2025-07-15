import { z } from 'zod';

// Album validation schemas
export const createAlbumSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  description: z.string().max(500, 'Description too long').optional(),
  isPublic: z.boolean().default(false),
});

export const updateAlbumSchema = createAlbumSchema.partial();

// Image validation schemas
export const imageMetadataSchema = z.object({
  width: z.number().positive(),
  height: z.number().positive(),
  fileSize: z.number().positive(),
  mimeType: z.string().regex(/^image\/(jpeg|jpg|png|webp|avif)$/),
  exif: z.record(z.any()).optional(),
  aspectRatio: z.number().positive(),
});

export const uploadImageSchema = z.object({
  albumId: z.string().uuid(),
  title: z.string().max(100).optional(),
  description: z.string().max(500).optional(),
  altText: z.string().max(200).optional(),
});

// Order validation schemas
export const createOrderItemSchema = z.object({
  imageId: z.string().uuid(),
  printProductId: z.string().uuid(),
  frameProductId: z.string().uuid().optional(),
  quantity: z.number().min(1).max(10),
});

export const createOrderSchema = z.object({
  albumId: z.string().uuid(),
  customerEmail: z.string().email(),
  customerName: z.string().min(1).max(100),
  items: z.array(createOrderItemSchema).min(1),
});

// User validation schemas
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    'Password must contain uppercase, lowercase, number and special character'
  ),
  name: z.string().min(1).max(100),
});

// Print product validation schemas
export const printProductSchema = z.object({
  name: z.string().min(1).max(100),
  width: z.number().positive(),
  height: z.number().positive(),
  basePrice: z.number().positive(),
  category: z.enum(['print', 'frame']),
  isActive: z.boolean().default(true),
});
