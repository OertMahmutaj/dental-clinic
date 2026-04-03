'use client';

import { testimonials } from '@/lib/config';
import { useState } from 'react';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Çfarë Thonë <span className="text-blue-600">Pacientët</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Kënaqësia juaj është prioriteti ynë kryesor
                    </p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4" />
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Testimonial Display */}
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-12 mb-8 min-h-[300px] flex flex-col justify-center">
                        <div className="text-6xl text-blue-600 mb-6"></div>
                        <p className="text-2xl text-gray-800 leading-relaxed mb-8 italic">
                            {testimonials[activeIndex].text}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {testimonials[activeIndex].name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 text-lg">
                                    {testimonials[activeIndex].name}
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">
                                            ⭐
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Navigation */}
                    <div className="flex justify-center gap-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'bg-blue-600 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Google Reviews CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">Lexo më shumë recensione në</p>
                        <button className="inline-flex items-center gap-2 bg-white border-2 border-gray-300 px-6 py-3 rounded-xl hover:border-blue-600 transition-colors">
                            <span className="text-2xl">📝</span>
                            <span className="font-semibold">Google Reviews</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}