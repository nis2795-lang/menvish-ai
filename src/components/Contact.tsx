import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-indigo-100/50 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-20 text-center shadow-xl shadow-slate-200/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-sans tracking-tight">
              Let's Build Something Great
            </h2>
            <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto leading-relaxed">
              Whether you're launching a new product, improving an existing platform, solving performance challenges, or modernizing legacy systems, we're ready to help.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-14">
              <a 
                href={`mailto:${companyInfo.email}`}
                className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-base font-bold text-slate-900 mb-2">Email Us</span>
                <span className="text-sm text-slate-600 font-medium truncate w-full px-2" title={companyInfo.email}>
                  {companyInfo.email}
                </span>
              </a>

              <a 
                href={`https://${companyInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-100 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-base font-bold text-slate-900 mb-2">LinkedIn</span>
                <span className="text-sm text-slate-600 font-medium flex items-center gap-1">
                  Connect <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              <a 
                href={`https://wa.me/${companyInfo.whatsapp?.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-green-200 hover:bg-green-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-100 text-green-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-base font-bold text-slate-900 mb-2">WhatsApp</span>
                <span className="text-sm text-slate-600 font-medium text-center">
                  {companyInfo.whatsapp}
                </span>
              </a>
            </div>

            <a 
              href={`mailto:${companyInfo.email}?subject=Consultation Inquiry`}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-slate-900 rounded-2xl hover:bg-blue-600 transition-all hover:shadow-xl hover:shadow-blue-900/20"
            >
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
