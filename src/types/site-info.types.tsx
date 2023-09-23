export interface SliderContentItem {
  image: string;
  title: string;
  desc: string;
}

export interface QuoteContent {
  content: string;
  writer: string;
}

export interface CustomerReviewItem {
  name: string;
  image: string;
  designation: string;
  notes: string;
}

export interface GalleryContentItem {
  image: string;
}

export interface Items {
  [itemName: string]: ItemDetail[];
}

export interface ItemDetail {
  title: string;
  desc: string;
  image: string;
  currencyType: string;
  price: number;
}

export interface SiteInfo {
  sliderContent: SliderContentItem[];
  quoteContent: QuoteContent;
  customerReview: CustomerReviewItem[];
  galleryContent: GalleryContentItem[];
  items: Items;
}
