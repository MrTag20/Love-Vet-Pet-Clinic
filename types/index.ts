export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  features: string[];
}

export interface WhyUsCertification {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  turnaroundTime: string;
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: "Best Seller" | "Sale" | "New";
  inStock: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  title: string;
  bio: string;
  yearsExperience: number;
  petsTreated: string;
  rating: number;
  specializations: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  petOwnerName: string;
  petName: string;
  petType: string;
  avatar: string;
  rating: number;
  quote: string;
  date: string;
  verified: boolean;
}

export interface AppointmentFormData {
  ownerName: string;
  phone: string;
  email: string;
  petName: string;
  petType: 'Dog' | 'Cat' | 'Bird' | 'Other';
  serviceType: 'Grooming' | 'Vaccination' | 'Consultation' | 'Surgery' | 'Certification' | 'Other';
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
