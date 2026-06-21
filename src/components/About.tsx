import React from 'react';
import { motion } from 'motion/react';
import { companyInfo } from '../data';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                About Menvish AI
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Menvish AI was founded with a simple vision: <strong className="text-slate-900 font-medium">{companyInfo.foundedVision}</strong>
                </p>
                <p>
                  Our expertise spans high-performance trading infrastructure, distributed systems, custom business applications, CRM platforms, dashboards, enterprise software, and performance optimization.
                </p>
                <p>
                  Whether you're building a new product, modernizing existing infrastructure, solving complex technical problems, or scaling a growing business, we bring engineering discipline and practical execution to every project.
                </p>
              </div>
            </div>
            <div className="mt-auto pt-8">
              <p className="text-xl md:text-2xl font-medium text-blue-700 leading-snug">
                We don't just write code.<br />
                We engineer solutions that create measurable business impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-8">Global Delivery</h3>
            <div className="space-y-8 mt-auto mb-auto">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1 text-lg">Based in India</h4>
                  <p className="text-slate-600">Ahmedabad, India</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-purple-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1 text-lg">Serving Clients Worldwide</h4>
                  <p className="text-slate-600">Professional execution with transparent communication across time zones.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-emerald-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1 text-lg">Custom Software Solutions</h4>
                  <p className="text-slate-600">Tailored applications, dashboards, CRM systems, and business platforms.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-orange-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1 text-lg">High-Performance Engineering</h4>
                  <p className="text-slate-600">Expertise in distributed systems, performance optimization, and scalable architectures.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-cyan-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1 text-lg">End-to-End Partnership</h4>
                  <p className="text-slate-600">From concept to deployment and beyond, supporting every stage of growth.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
