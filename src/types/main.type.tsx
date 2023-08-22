export interface SlideItem {
  image: string;
  title: string;
  desc: string;
}

type CurrencyType = "INR" | "USD" | "UK";

export type Item = SlideItem & {
  price: number;
  currencyType: CurrencyType;
};

export type ItemMenuType = Record<string, Item[]>;

export type CustomerReviewType = {
  image: string;
  name: string;
  designation: string;
  notes: string;
};
