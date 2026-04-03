// src/lib/config.ts
import { ClinicInfo, Service, Testimonial } from '@/types';

export const clinicInfo: ClinicInfo = {
  name: 'Klinika Dentare Adi Dent',
  phone: '+355695579998',
  whatsapp: '355695579998', 
  email: 'info@adident.al', 
  address: 'Shkolla e Baletit, Rruga Petro Nini Luarasi, Tiranë 1001, Albania',
  coordinates: {
    lat: 41.3258039, 
    lng: 19.8269137,
  },
  hours: {
    weekdays: '8:30 AM - 8:00 PM',
    saturday: '8:30 AM - 2:00 PM',
    sunday: 'Closed',
  },
};

export const services: Service[] = [
  {
    id: 1,
    title: 'Higjiena Dentare',
    description: 'Pastrimi profesional dhe parandalimi i problemeve dentare',
    icon: '🦷',
  },
  {
    id: 2,
    title: 'Estetika Dentare',
    description: 'Zbardhje dhe restaurime estetike për buzëqeshjen tuaj',
    icon: '✨',
  },
  {
    id: 3,
    title: 'Implante Dentare',
    description: 'Zëvendësimi i dhëmbëve të humbur me implante moderne',
    icon: '🔧',
  },
  {
    id: 4,
    title: 'Ortodonci',
    description: 'Korrigjimi i pozicionit të dhëmbëve me aparate',
    icon: '😁',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Elona M.',
    text: 'Shërbim profesional dhe mjaft i kujdesshëm. Rekomandoj pa hezitim!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Artan K.',
    text: 'Klinika më e mirë në Tiranë. Stafi shumë i sjellshëm dhe ambiente moderne.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mirela S.',
    text: 'Rezultate të shkëlqyera në zbardhjen e dhëmbëve. Faleminderit!',
    rating: 5,
  },
];