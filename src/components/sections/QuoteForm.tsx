"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import { Check, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BackgroundSystem } from "@/components/ui/BackgroundSystem";
import { useReducedMotion, fadeInUp, easings } from "@/lib/motion";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const reduced = useReducedMotion();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const fieldConfig = [
    { id: "name", label: "Name *", type: "text", required: true, icon: null },
    { id: "phone", label: "Phone *", type: "tel", required: true, icon: Phone },
    { id: "email", label: "Email", type: "email", required: false, icon: Mail },
    { id: "suburb", label: "Suburb / Area", type: "text", required: false, icon: MapPin },
  ];

  return (
    <section className="relative bg-rus-black section-pad overflow-hidden" id="quote">
      <BackgroundSystem variant="diagonal" intensity="subtle" />

      <div className="container-rus">
        <motion.div
          {...fadeInUp(reduced)}
          className="mb-12 lg:mb-16"
        >
          <span className="eyebrow-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rus-white leading-[1.02] tracking-tight max-w-xl">
            Request a Quote
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={reduced ? {} : { opacity: 0, scale: 0.95, y: 20 }}
              animate={reduced ? {} : { opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: reduced ? 0 : 0.5, ease: easings.gentle }}
              className="max-w-xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: easings.gentle }}
                className="w-20 h-20 bg-rus-yellow mx-auto mb-8 flex items-center justify-center rounded-none"
              >
                <Check className="w-10 h-10 text-rus-black" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-rus-white text-2xl lg:text-3xl font-bold mb-4"
              >
                Thank you
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-rus-grey text-lg"
              >
                Your quote request has been received. We will be in touch shortly.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                onClick={() => setSubmitted(false)}
                className="mt-8 text-rus-yellow font-semibold text-sm hover:underline flex items-center justify-center gap-2 mx-auto"
              >
                Submit another request
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={reduced ? {} : { opacity: 0, y: 20 }}
              animate={reduced ? {} : { opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -20 }}
              transition={{ duration: reduced ? 0 : 0.4, ease: easings.smooth }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-8 lg:pr-8"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="eyebrow-sm mb-4">
                      Why RUS Electrical
                    </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-rus-white leading-tight mb-6 max-w-sm">
                    Professional work. Transparent pricing. No surprises.
                  </h3>
                </motion.div>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-5"
                >
                  {[
                    { icon: Check, label: "Transparent pricing", desc: "Clear quotes with no hidden costs" },
                    { icon: Check, label: "Qualified technicians", desc: "Experienced electricians on every job" },
                    { icon: Check, label: "Safety first", desc: "Full compliance with electrical standards" },
                    { icon: Check, label: "Local service", desc: "Based in Sandton, serving JHB North" },
                    { icon: Check, label: "Clean work sites", desc: "We leave it better than we found it" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.06, ease: easings.gentle }}
                      className="flex items-start gap-3"
                    >
                      <item.icon className="w-5 h-5 text-rus-yellow mt-0.5 shrink-0" />
                      <div>
                        <p className="text-rus-white font-medium">{item.label}</p>
                        <p className="text-rus-grey/70 text-sm">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="pt-8 border-t border-rus-white/10 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-rus-yellow" />
                  <div>
                    <p className="text-rus-grey/70 text-xs">Prefer to call?</p>
                    <a href="tel:+27721326098" className="text-rus-white font-semibold hover:text-rus-yellow transition-colors">
                      072 132 6098
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="bg-rus-graphite/50 border border-rus-white/5 p-6 lg:p-8 rounded-none"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                    <span className="eyebrow-sm mb-3 block">
                      Your Details
                    </span>
                </motion.div>

                <div className="space-y-5">
                  {fieldConfig.map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                      className="relative"
                    >
                      <label
                        htmlFor={field.id}
                        className={`block text-rus-grey text-sm mb-2 transition-colors duration-200 ${
                          focusedField === field.id ? "text-rus-yellow" : ""
                        }`}
                      >
                        {field.label}
                      </label>
                      <div className="relative">
                        {field.icon && (
                          <motion.div
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-rus-grey/50 transition-colors duration-200"
                            animate={{ color: focusedField === field.id ? "#FFC400" : "rgba(169,175,183,0.5)" }}
                          >
                            <field.icon className="w-5 h-5" aria-hidden="true" />
                          </motion.div>
                        )}
                        {field.type === "text" || field.type === "tel" || field.type === "email" ? (
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            required={field.required}
                            className={`w-full bg-rus-black/50 border border-rus-white/10 text-rus-white px-4 py-3.5 text-sm focus:outline-none transition-all duration-200 ${
                              field.icon ? "pl-12" : ""
                            } ${focusedField === field.id ? "border-rus-yellow" : "hover:border-rus-white/20"}`}
                            onFocus={() => setFocusedField(field.id)}
                            onBlur={() => setFocusedField(null)}
                            placeholder={field.label.replace(" *", "")}
                          />
                        ) : null}
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="relative"
                  >
                    <label htmlFor="propertyType" className="block text-rus-grey text-sm mb-2">
                      Property Type
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rus-grey/50" aria-hidden="true" />
                      <select
                        id="propertyType"
                        name="propertyType"
                        className="w-full bg-rus-black/50 border border-rus-white/10 text-rus-white pl-12 pr-10 py-3.5 text-sm focus:outline-none appearance-none transition-all duration-200 hover:border-rus-white/20 focus:border-rus-yellow"
                        onFocus={() => setFocusedField("propertyType")}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option value="">Select property type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-rus-grey/50">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.55 }}
                    className="relative"
                  >
                    <label htmlFor="service" className="block text-rus-grey text-sm mb-2">
                      Service Required
                    </label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rus-grey/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <select
                        id="service"
                        name="service"
                        className="w-full bg-rus-black/50 border border-rus-white/10 text-rus-white pl-12 pr-10 py-3.5 text-sm focus:outline-none appearance-none transition-all duration-200 hover:border-rus-white/20 focus:border-rus-yellow"
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.slug}>
                            {s.shortTitle}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-rus-grey/50">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    <div className="relative">
                      <label htmlFor="urgency" className="block text-rus-grey text-sm mb-2">
                        Urgency
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rus-grey/50" aria-hidden="true" />
                        <select
                          id="urgency"
                          name="urgency"
                          className="w-full bg-rus-black/50 border border-rus-white/10 text-rus-white pl-12 pr-10 py-3.5 text-sm focus:outline-none appearance-none transition-all duration-200 hover:border-rus-white/20 focus:border-rus-yellow"
                          onFocus={() => setFocusedField("urgency")}
                          onBlur={() => setFocusedField(null)}
                        >
                          <option value="standard">Standard</option>
                          <option value="urgent">Urgent</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-rus-grey/50">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.65 }}
                >
                  <label htmlFor="description" className="block text-rus-grey text-sm mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    className="w-full bg-rus-black/50 border border-rus-white/10 text-rus-white px-4 py-3.5 text-sm focus:outline-none transition-all duration-200 resize-none hover:border-rus-white/20 focus:border-rus-yellow"
                    placeholder="Describe the electrical work needed..."
                    onFocus={() => setFocusedField("description")}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="w-full"
                >
                  <Button variant="primary" size="lg" fullWidth icon="arrow" type="submit">
                    REQUEST A QUOTE
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}