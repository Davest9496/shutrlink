export interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  // For S3 images, we'll implement custom resizing logic
  if (src.includes('shutrlink-images.s3')) {
    const url = new URL(src);
    url.searchParams.set('w', width.toString());
    if (quality) {
      url.searchParams.set('q', quality.toString());
    }
    return url.toString();
  }

  // For other images, return as-is
  return src;
}
