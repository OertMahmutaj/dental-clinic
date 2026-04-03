export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ClinicInfo {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}