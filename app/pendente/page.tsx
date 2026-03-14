'use client';

import React from 'react';
import Link from 'next/link';

export default function PendingPage() {
  return (
    <div className="min-h-screen bg-[#100418] flex items-center justify-center p-5 font-['Jost']">
      <div className="card relative bg-white/5 border border-[#C9AA6D]/20 p-10 max-w-[480px] text-center shadow-[0_16px_40px_rgba(0,0,0,0.4)] animate-fadeUp">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#692988] via-[#C9AA6D] to-[#AD2D6C]"></div>
        
        <div className="inline-flex items-center justify-center w-[50px] height-[50px] rounded-full bg-[#C9AA6D]/10 border border-[#C9AA6D]/30 text-[20px] text-[#C9AA6D] mb-5 leading-[50px] h-[50px]">
          ⏳
        </div>
        
        <h1 className="font-['Playfair_Display'] text-[32px] text-[#C9AA6D] mb-4 font-medium leading-tight">
          Pagamento Pendente
        </h1>
        
        <p className="text-[#F5EEFA]/70 mb-4 text-[15px] leading-relaxed">
          Seu pagamento está aguardando confirmação (isso é comum para transações via Boleto ou Pix em processamento).
        </p>
        
        <p className="text-[#F5EEFA]/70 mb-6 text-[15px] leading-relaxed">
          Assim que o nosso sistema confirmar a transação, seu acesso será liberado e enviado automaticamente para o seu e-mail.
        </p>
        
        <Link href="/" className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9AA6D] via-[#E9D49A] to-[#C9AA6D] bg-[length:200%_100%] text-[#07020A] px-8 py-4 text-[11px] tracking-[2px] uppercase font-bold hover:bg-[100%_0] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(201,170,109,0.2)]">
          Voltar ao Início
        </Link>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
}
