import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // ================= HANDLE CHANGE =================
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // ================= VALIDATION =================
  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  }

  // ================= SUBMIT =================
  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setErrors({});

    try {
      const response = await fetch(
        "https://formspree.io/f/xgawvjry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      className="bg-slate-50 py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Contact Me
          </h2>

          <p className="text-slate-600 mt-4">
            Have a project idea or collaboration in mind? Let's connect and build something amazing.
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[36px] border border-slate-200 bg-white p-10 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* NAME */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-slate-200 px-6 py-4 outline-none transition duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-200 px-6 py-4 outline-none transition duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-3 font-semibold text-slate-700">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-slate-200 px-6 py-4 outline-none transition duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="rounded-2xl bg-green-50 border border-green-200 px-6 py-4 text-green-700 font-medium">
                Message sent successfully 
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-cyan-500 px-10 py-4 font-semibold text-white transition duration-300 hover:bg-cyan-600 hover:-translate-y-1 shadow-lg"
            >
              Send Message
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;