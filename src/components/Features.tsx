import React from 'react';
import { motion } from 'motion/react';
import { industries, whyChooseUs, techStack } from '../data';
import { CheckCircle2 } from 'lucide-react';

export function Features() {
  return (
    <section className="py-24 bg-white" id="industries">
      <div className="container mx-auto px-6">
        
        {/* Industries Section */}
        <div className="mb-32">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600">Delivering specialized solutions across domains.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{ind.title}</h3>
                  <p className="text-slate-600">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us & Tech Stack */}
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Why Choose Menvish AI</h2>
            <div className="space-y-8">
              {whyChooseUs.map((reason, i) => (
                <div key={i} className="flex gap-5">
                  <div className="shrink-0 pt-1">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-2 text-lg">{reason.title}</h3>
                    <p className="text-slate-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Technology Stack</h2>
            <div className="space-y-8">
              {techStack.map((tech, i) => (
                <div key={i} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-slate-500 font-semibold uppercase tracking-wider text-xs mb-4">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {tech.items.map((item, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm xl:text-xs text-slate-800 font-medium shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
