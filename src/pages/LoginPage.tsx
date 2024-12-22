import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <AuthLayout 
      title="¡Bienvenido de nuevo!"
      subtitle="Ingresa tus credenciales para continuar"
      alternativeLink={{
        text: "Crear una cuenta",
        to: "/register",
        message: "¿No tienes una cuenta?"
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Correo Electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          icon={<Mail className="w-5 h-5 text-gray-400" />}
          placeholder="tu@email.com"
        />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          icon={<Lock className="w-5 h-5 text-gray-400" />}
          placeholder="••••••••"
        />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
            <span className="ml-2 text-gray-600">Recordarme</span>
          </label>
          <a href="#" className="text-orange-600 hover:text-orange-700">¿Olvidaste tu contraseña?</a>
        </div>
        <Button variant="primary" className="w-full">
          Iniciar Sesión
        </Button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;