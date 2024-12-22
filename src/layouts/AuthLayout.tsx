import React from 'react';
import { Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  alternativeLink?: {
    text: string;
    to: string;
    message: string;
  };
}

const AuthLayout = ({ children, title, subtitle, alternativeLink }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 animate-bounce">
            <Wrench className="h-12 w-12 text-orange-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
          {children}
          {alternativeLink && (
            <div className="mt-6 text-center text-sm text-gray-600">
              {alternativeLink.message}{' '}
              <Link to={alternativeLink.to} className="text-orange-600 hover:text-orange-700 font-medium">
                {alternativeLink.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;