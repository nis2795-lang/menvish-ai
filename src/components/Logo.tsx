import React from 'react';
import { companyInfo } from '../data';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function Logo({ className = "", iconClassName = "", textClassName = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <div className={`w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white tracking-tighter group-hover:bg-blue-500 transition-colors shadow-sm ${iconClassName}`}>
        M
      </div>
      <span className={`font-bold text-xl tracking-tight text-slate-900 ${textClassName}`}>
        {companyInfo.name}
      </span>
    </div>
  );
}
