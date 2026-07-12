export interface BirthdayOpening {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  buttonText: string;
}

export interface BirthdayIntroduction {
  label: string;
  message: string;
  supportingMessage: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface BirthdayGallery {
  label: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface MainQuote {
  label: string;
  quote: string;
  description: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface Reason {
  title: string;
  description: string;
}

export interface LetterContent {
  greeting: string;
  paragraphs: string[];
  closing: string;
}

export interface WishContent {
  label: string;
  title: string;
  message: string;
  buttonText: string;
}

export interface FinaleContent {
  label: string;
  titlePrefix: string;
  message: string;
  secondaryMessage: string;
  quote: string;
  closing: string;
}

export interface MusicConfig {
  src: string;
  defaultVolume: number;
}

export interface BirthdayData {
  recipientName: string;
  recipientInitial: string;
  senderName: string;
  birthdayDate: string;
  age: number;

  opening: BirthdayOpening;
  introduction: BirthdayIntroduction;
  gallery: BirthdayGallery;
  mainQuote: MainQuote;
  timeline: TimelineEvent[];
  reasons: Reason[];
  letter: LetterContent;
  wish: WishContent;
  finale: FinaleContent;
  music: MusicConfig;
}
