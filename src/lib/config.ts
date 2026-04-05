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
    sunday: 'Mbyllur',
  },
};

export const services: Service[] = [
  {
    id: 1,
    title: 'Higjiena Dentare',
    description: 'Pastrimi profesional dhe parandalimi i problemeve dentare',
    icon: 'tooth',
    slug: 'higjiena-dentare',
  },
  {
    id: 2,
    title: 'Estetika Dentare',
    description: 'Zbardhje dhe restaurime estetike për buzëqeshjen tuaj',
    icon: 'sparkles',
    slug: 'estetika-dentare',
  },
  {
    id: 3,
    title: 'Implante Dentare',
    description: 'Zëvendësimi i dhëmbëve të humbur me implante moderne',
    icon: 'screwdriver',
    slug: 'implante-dentare',
  },
  {
    id: 4,
    title: 'Ortodonci',
    description: 'Korrigjimi i pozicionit të dhëmbëve me aparate',
    icon: 'smile',
    slug: 'ortodonci',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mozzik Albanian',
    text: 'The best doctor,in my music show i broke my leg and he fixed it😁he put teeths inside of my bones…',
    rating: 5,
  },
  {
    id: 2,
    name: 'Bjorni Q.',
    text: 'Great experience at Adi Dent. I had tartar cleaning and a filling done, and everything was handled professionally and with care. The staff was friendly, the clinic was very clean, and I’m very satisfied with the results.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Celmenta R.',
    text: 'Sherbim cilesor, korrekt dhe profesional. E rekomandoj, me shume siguri, per profesionalizmin dhe kushtet perfekte',
    rating: 5,
  },
];