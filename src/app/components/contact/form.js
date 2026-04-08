"use client";

import { useState } from "react";
import {motion} from "framer-motion"
import { MapPin,Phone,Mail } from "lucide-react";
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const { name, email, subject, message } = form;

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ifti.hazara205@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Small delay for better UX
    setTimeout(() => {
      window.open(mailtoLink, "_blank");
      setLoading(false);
    }, 800);
  };


    const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };



  return (
   <>
    <section className="bg-white pt-64  ">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
           <motion.h2 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }} className="text-4xl md:text-5xl heading mb-4 ">
             Send us message
           </motion.h2>

           <motion.p 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }} className="text-gray-600 leading-relaxed md:max-w-[450px] max-w-[350px] mx-auto">
             Whether you have a question, feedback, or just want to say hello, feel free to contact us. Our team is always happy to help.
           </motion.p>
         </div>

        {/* Form */}
        <motion.form
        
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4, delay:0.6 }}
                viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl "
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fafafa]"
            required
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#fafafa]"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="border p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#fafafa]"
            required
          />

          {/* Button */}
          <button
            disabled={loading}
           className=" text-black py-3 rounded-md md:col-span-2 border  heading hover:bg-[#fafafa] cursor-pointer hover:text-black transition duration-300"
          >
            {loading ? "Redirecting..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
       <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-10"
      >

        {[{
          icon: MapPin,
          title: "Visit Us",
          text: <>123 Coffee Street <br /> Karachi, Pakistan</>
        },
        {
          icon: Phone,
          title: "Call Us",
          text: "+92 300 1234567"
        },
        {
          icon: Mail,
          title: "Email Us",
          text: "hello@coffeecafe.com"
        }].map((itemData, i) => {
          const Icon = itemData.icon;

          return (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center text-center space-y-4"
            >

              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Icon size={40} />
              </motion.div>

              <motion.h3 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }} className="text-xl heading">
                {itemData.title}
              </motion.h3>

              <motion.p 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }} className="text-gray-600">
                {itemData.text}
              </motion.p>

            </motion.div>
          );
        })}

      </motion.section>
   
    </>
  );
}
