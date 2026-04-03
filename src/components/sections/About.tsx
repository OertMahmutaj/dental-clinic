// src/components/sections/About.tsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rreth <span className="text-blue-600">Adi Dent</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Klinika Dentare Adi Dent është një nga klinikat më të besueshme
                në Tiranë, e pajisur me teknologjinë më të fundit dentare dhe
                një ekip profesionistësh të dedikuar për shëndetin tuaj oral.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ne ofrojmë një gamë të gjerë shërbimesh, nga higjiena dentare
                deri tek implante dhe estetika dentare, duke garantuar rezultate
                cilësore dhe kujdes të personalizuar për çdo pacient.
              </p>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <span className="text-3xl">💙</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Misioni Ynë
                  </h3>
                  <p className="text-gray-700">
                    Të krijojmë buzëqeshje të shëndetshme dhe të lumtura
                    përmes kujdesit profesional dhe trajtimit me respekt.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Vite Eksperiencë</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-teal-100">Pacientë të Kënaqur</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-purple-100">Profesionalizëm</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-orange-100">Mbështetje</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}