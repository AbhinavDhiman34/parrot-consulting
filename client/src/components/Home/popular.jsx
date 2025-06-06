import React from "react";
import {
  Search,
  Monitor,
  ShoppingCart,
  Scale,
  User,
  Calendar,
  Star,
} from "lucide-react";

export default function PopularCategories() {
  const categories = [
    {
      icon: <Monitor className="w-18 h-18 text-green-800" />,
      title: "IT Consulting",
      description: "Get supp't guidence on your Echnology needs",
    },
    {
      icon: <ShoppingCart className="w-18 h-18 text-green-800" />,
      title: "Ecommerce Consulting",
      description: "Spice ts pootible business for grobath",
    },
    {
      icon: <Scale className="w-18 h-18 text-green-800" />,
      title: "Legal Consulting",
      description: "Nanagarimes challeng's with canfobbus",
    },
  ];

  return (
    <section className="pt-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white w-[280px] text-center hover:shadow-lg transition py-8 rounded-2xl shadow"
            >
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
