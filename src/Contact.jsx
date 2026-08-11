import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Folder from './animations/Folder'

const Contact = () => {
  const email = "sajedeshirkhani22@gmail.com";
  const githubUrl = "https://github.com/sinnshr";
  const linkedinUrl = "https://www.linkedin.com/in/sajede-shirkhani-4268b125b";
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({ name: "", from: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setToast("Email copied to clipboard!");
      setTimeout(() => setToast(""), 1600);
    } catch (err) {
      setToast("Copy failed");
      setTimeout(() => setToast(""), 1600);
    }
  };

  const contactItems = [

    // Github item
    <a
      key="github"
      href={githubUrl}
      target="_blank"
      rel="noreferrer"
      className="flex min-h-full min-w-full flex-col items-center justify-center rounded-lg bg-slate-900/95 text-white border-slate-500 border-2"
    >
      <FaGithub className="text-3xl" />
      <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">GitHub</span>
    </a>,

    // LinkedIn item
    <a
      key="linkedin"
      href={linkedinUrl}
      target="_blank"
      rel="noreferrer"
      className="flex min-h-full min-w-full flex-col items-center justify-center rounded-lg bg-sky-100/95 text-sky-800 border-2 border-sky-800"
    >
      <FaLinkedin className="text-3xl" />
      <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-sky-600">LinkedIn</span>
    </a>,

    // Email item
    <button
      key="email"
      type="button"
      onClick={copyEmail}
      className="flex min-h-full min-w-full flex-col items-center justify-center rounded-lg bg-violet-300 text-purple-950 border-2 border-purple-950"
    >
      <MdOutlineMail className="text-3xl" />
      <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-purple-950">Email</span>
    </button>,
    
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <section name="contact" className="relative w-full py-10 sm:pt-28 sm:pb-0">
      <div className="mx-auto max-w-4xl text-center">
        <span className="section-label">Contact</span>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let’s build something memorable.</h2>
      </div>

      {/* Folder Container */}
      <div style={{ height: '450px', position: 'relative' }} className="flex items-center justify-center">
        <Folder size={2} color="#4f46e5" className="custom-folder" items={contactItems} />
      </div>

      {toast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50">
          {toast}
        </div>
      )}
    </section>
  );
};

export default Contact;