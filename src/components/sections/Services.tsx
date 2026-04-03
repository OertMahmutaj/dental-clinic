import { services } from '@/lib/config';

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Shërbimet <span className="text-blue-600">Tona</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ofrojmë një gamë të plotë shërbimesh dentare me standarde të larta
                        cilësore
                    </p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="mt-4 text-blue-600 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Mëso më shumë
                                <span>→</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services Banner */}
                <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-3">Shërbime të Tjera</h3>
                    <p className="text-blue-50 mb-6">
                        Endodonci • Kirurgji Orale • Proteza Dentare • Pediatri Dentare •
                        Periodontologji
                    </p>
                    <a
                        href="tel:+355695579998"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                    >
                        Kontaktoni për Detaje
                    </a>
                </div>
            </div>
        </section >
    );
}