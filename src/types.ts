/**
 * Types and interfaces for the Akhilesh Chauhan Luxury Real Estate Consulting Applet
 */

export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string; // e.g., "5,200 Sq.Ft."
  type: 'Penthouse' | 'Villa' | 'Builder Floor' | 'Apartment' | 'Condo';
  description: string;
  image: string;
  status: 'Exclusive' | 'New Launch' | 'Private Treaty' | 'Investment Gem' | 'Signature Estate';
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string; // Matches Lucide icon names dynamically
}

export interface AreaExpertise {
  id: string;
  name: string;
  tagline: string;
  description: string;
  propertiesRange: string;
  image: string;
  keyHighlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  reviewText: string;
  propertyType: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  budgetRange: string;
  propertyRequirement: string;
  isContacted: boolean;
  createdAt: string;
  notes?: string;
}
