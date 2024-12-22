import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'client'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
  };

  return (
    <AuthLayout 
      title="Crea tu cuenta"
      subtitle="Únete a nuestra comunidad de profesionales y clientes"
      alternativeLink={{
        text: "Iniciar sesión",
        to: "/login",
        message: "¿Ya tienes una cuenta?"
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Nombre Completo"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          icon={<User className="w-5 h-5 text-gray-400" />}
          placeholder="Juan Pérez"
        />
        <Input
          label="Correo Electrónico"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          icon={<Mail className="w-5 h-5 text-gray-400" />}
          placeholder="tu@email.com"
        />
        <Input
          label="Contraseña"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          icon={<Lock className="w-5 h-5 text-gray-400" />}
          placeholder="••••••••"
        />
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Tipo de Cuenta</label>
          <div className="grid grid-cols-2 gap-4">
            <label className="relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-orange-50 transition-colors">
              <input
                type="radio"
                name="role"
                value="client"
                checked={formData.role === 'client'}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="sr-only"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">Cliente</span>
                <span className="text-xs text-gray-500">Busco servicios</span>
              </div>
              <div className={`absolute inset-0 border-2 rounded-lg pointer-events-none transition-colors ${formData.role === 'client' ? 'border-orange-600' : 'border-transparent'}`} />
            </label>
            <label className="relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-orange-50 transition-colors">
              <input
                type="radio"
                name="role"
                value="professional"
                checked={formData.role === 'professional'}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="sr-only"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">Profesional</span>
                <span className="text-xs text-gray-500">Ofrezco servicios</span>
              </div>
              <div className={`absolute inset-0 border-2 rounded-lg pointer-events-none transition-colors ${formData.role === 'professional' ? 'border-orange-600' : 'border-transparent'}`} />
            </label>
          </div>
        </div>
        <Button variant="primary" className="w-full">
          Crear Cuenta
        </Button>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;