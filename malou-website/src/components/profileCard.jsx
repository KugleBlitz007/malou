import {FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import React from 'react';

export default function ProfileCard({ profile }) {
  return (
    <div className="h-[75vh] relative rounded-2xl shadow-md w-full max-w-xs text-center overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${profile.image})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-green-800 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
        <h4 className="text-sm text-gray-200 tracking-widest uppercase mb-1">{profile.role}</h4>
        <h2 className="text-xl font-bold text-white mb-2">{profile.name}</h2>
        <p className="text-gray-100 text-sm mb-4 leading-relaxed">
          {profile.description}
        </p>
        <div className="flex justify-center gap-4">
          <a href={profile.email} className="text-white hover:text-pink-300">
            <IoMdMail />
          </a>
          <a href={profile.linkedin} className="text-white hover:text-pink-300">
            <FaLinkedin />
          </a>
          <a href={profile.instagram} className="text-white hover:text-pink-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}