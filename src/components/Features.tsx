import React from 'react';
import { Clock, Users, Globe, Shield } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Por qué elegir HelpConnect?
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-4">
          <Feature 
            icon={<Clock className="h-8 w-8 text-orange-600" />}
            title="Ayuda 24/7"
            description="Encuentra ayuda en cualquier momento, día o noche."
          />
          <Feature 
            icon={<Users className="h-8 w-8 text-orange-600" />}
            title="Comunidad Verificada"
            description="Colaboradores verificados y evaluados por la comunidad."
          />
          <Feature 
            icon={<Globe className="h-8 w-8 text-orange-600" />}
            title="Virtual o Presencial"
            description="Recibe ayuda en línea o en persona según tus necesidades."
          />
          <Feature 
            icon={<Shield className="h-8 w-8 text-orange-600" />}
            title="100% Seguro"
            description="Pagos seguros y garantía de satisfacción."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;