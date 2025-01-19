'use client';

import React from 'react';
import { ArrowRight, Check, Users, Brain, Target, BookOpen } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Next CPNS
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Revolutionizing the CPNS Journey with Mindful, Data-Driven, and Community-Based Approaches
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                Mulai Sekarang <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Brain className="w-8 h-8" />}
              title="Mindful Decision"
              description="Temukan formasi yang sesuai dengan minat dan keahlianmu melalui analisis data komprehensif"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title="Community Support"
              description="Bergabung dengan komunitas yang saling mendukung dalam perjalanan CPNS"
            />
            <FeatureCard 
              icon={<Target className="w-8 h-8" />}
              title="Personal Tracking"
              description="Pantau progresmu dengan roadmap personal dan evaluasi berkala"
            />
            <FeatureCard 
              icon={<BookOpen className="w-8 h-8" />}
              title="Expert Guidance"
              description="Dapatkan bimbingan langsung dari ASN berpengalaman"
            />
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Pilih Paket Sesuai Kebutuhanmu</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard 
              title="Basic"
              price="Gratis"
              features={[
                "Akses Grup WhatsApp Komunitas Umum",
                "Informasi Dasar CPNS",
                "Update Regulasi Terbaru"
              ]}
              isPremium={false}
            />
            <PricingCard 
              title="Premium"
              price="Berbayar"
              features={[
                "Grup Eksklusif dengan Mentor",
                "Materi Lengkap & Eksklusif",
                "Mindful Decision Tool",
                "Self-Assessment Mendalam",
                "Webinar & Mentoring Rutin",
                "Progress Tracking",
                "Latihan Soal & Pembahasan"
              ]}
              isPremium={true}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Mulai Perjalanan CPNS-mu Sekarang</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Menjawab panggilan jiwa, mengabdi untuk bangsa
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Gabung Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Next CPNS</h3>
              <p className="text-gray-400">Mempersiapkan generasi ASN berkualitas untuk Indonesia yang lebih baik.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Mindful Decision Tool</li>
                <li>Community Support</li>
                <li>Progress Tracking</li>
                <li>Expert Guidance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tentang</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Tim Kami</li>
                <li>Testimoni</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp</li>
                <li>Email</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Next CPNS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PricingCard = ({ title, price, features, isPremium }: {
  title: string;
  price: string;
  features: string[];
  isPremium: boolean;
}) => (
  <div className={`p-8 rounded-lg ${isPremium ? 'bg-blue-600 text-white' : 'bg-white border-2 border-gray-200'}`}>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-lg mb-6">{price}</p>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className="w-5 h-5" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors ${
      isPremium 
        ? 'bg-white text-blue-600 hover:bg-blue-50' 
        : 'bg-blue-600 text-white hover:bg-blue-700'
    }`}>
      Pilih Paket
    </button>
  </div>
);

export default LandingPage;