import React from 'react';
import { HelpingHand } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <HelpingHand className="h-16 w-16 text-orange-600 mx-auto mb-6" />
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Ayuda instantánea</span>
            <span className="block text-orange-600">cuando más la necesitas</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          La solución instantánea para tus tareas diarias. Conectamos personas cercanas dispuestas a ayudarte con lo que necesitas, cuando lo necesitas. Fácil, rápido y accesible, porque sabemos que cada tarea importa.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button variant="primary">Buscar Ayuda</Button>
            <Button variant="secondary">Ofrecer mis Servicios</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;