import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data';

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl text-center mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Services</h2>
          <p className="text-lg text-slate-600">
            Comprehensive engineering services focused on performance, scalability, and robust architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-slate-300 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm font-medium text-slate-700 flex items-start gap-3">
                        <span className="text-blue-500 mt-0.5 text-xs">◆</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
