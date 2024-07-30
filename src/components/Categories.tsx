"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import  ScrollableCategories  from "./ui/sticky-scroll-reveal-2";

const categories = [
    {
      title: "Decor",
      description: "Enhance your space with our range of decorative items.",
      products: [
        {
          title: "Vases",
          description: "Stylish vases to complement any decor.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Vases" 
              alt="Vases" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Table Lamps",
          description: "Elegant table lamps for any setting.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Table+Lamps" 
              alt="Table Lamps" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Wall Art",
          description: "Beautiful wall art to add personality to any room.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Wall+Art" 
              alt="Wall Art" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "Living",
      description: "Furniture and accessories for a comfortable living space.",
      products: [
        {
          title: "Sofas",
          description: "Comfortable and stylish sofas.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Sofas" 
              alt="Sofas" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Coffee Tables",
          description: "Modern coffee tables for your living room.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Coffee+Tables" 
              alt="Coffee Tables" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Rug",
          description: "Cozy rugs for a touch of warmth.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Rug" 
              alt="Rug" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "Home Office",
      description: "Everything you need for an efficient and stylish home office.",
      products: [
        {
          title: "Desks",
          description: "Functional and elegant desks.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Desks" 
              alt="Desks" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Office Chairs",
          description: "Comfortable chairs for long working hours.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Office+Chairs" 
              alt="Office Chairs" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Bookshelves",
          description: "Stylish bookshelves for your home office.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Bookshelves" 
              alt="Bookshelves" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "Garden and Outdoor",
      description: "Products to enhance your garden and outdoor spaces.",
      products: [
        {
          title: "Patio Furniture",
          description: "Durable and stylish patio furniture.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Patio+Furniture" 
              alt="Patio Furniture" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Garden Tools",
          description: "Essential tools for garden maintenance.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Garden+Tools" 
              alt="Garden Tools" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Outdoor Lighting",
          description: "Illuminate your outdoor space with stylish lighting.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Outdoor+Lighting" 
              alt="Outdoor Lighting" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "Bar",
      description: "Everything you need for a well-stocked bar.",
      products: [
        {
          title: "Bar Stools",
          description: "Elegant bar stools for any bar setup.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Bar+Stools" 
              alt="Bar Stools" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Cocktail Shakers",
          description: "Professional cocktail shakers.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Cocktail+Shakers" 
              alt="Cocktail Shakers" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Glassware",
          description: "High-quality glassware for every drink.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Glassware" 
              alt="Glassware" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "Mats",
      description: "Protective and decorative mats for various spaces.",
      products: [
        {
          title: "Entrance Mats",
          description: "Durable mats for high-traffic areas.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Entrance+Mats" 
              alt="Entrance Mats" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Anti-Fatigue Mats",
          description: "Comfortable mats for standing workstations.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Anti-Fatigue+Mats" 
              alt="Anti-Fatigue Mats" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Decorative Rugs",
          description: "Stylish rugs to enhance your decor.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Decorative+Rugs" 
              alt="Decorative Rugs" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "Wall Decor",
      description: "Add character to your walls with our decor options.",
      products: [
        {
          title: "Wall Stickers",
          description: "Easy-to-apply wall stickers in various designs.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Wall+Stickers" 
              alt="Wall Stickers" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Wall Clocks",
          description: "Stylish and functional wall clocks.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Wall+Clocks" 
              alt="Wall Clocks" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Picture Frames",
          description: "Elegant frames for your photos and art.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Picture+Frames" 
              alt="Picture Frames" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "Kitchen & Dining",
      description: "Essential items for a functional and stylish kitchen and dining area.",
      products: [
        {
          title: "Cookware",
          description: "High-quality cookware for every kitchen.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Cookware" 
              alt="Cookware" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Dining Sets",
          description: "Complete dining sets for your home or restaurant.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Dining+Sets" 
              alt="Dining Sets" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Cutlery",
          description: "Elegant cutlery for every meal.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Cutlery" 
              alt="Cutlery" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "Bathroom Essentials",
      description: "Everything you need for a well-equipped bathroom.",
      products: [
        {
          title: "Towels",
          description: "Soft and absorbent towels.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Towels" 
              alt="Towels" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Shower Curtains",
          description: "Stylish shower curtains to match your decor.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Shower+Curtains" 
              alt="Shower Curtains" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Bath Mats",
          description: "Comfortable mats for a slip-free bathroom.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Bath+Mats" 
              alt="Bath Mats" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "Seasonal",
      description: "Products for various seasons and holidays.",
      products: [
        {
          title: "Holiday Decorations",
          description: "Decorations for various holidays.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Holiday+Decorations" 
              alt="Holiday Decorations" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Summer Essentials",
          description: "Items for the summer season.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Summer+Essentials" 
              alt="Summer Essentials" 
              className="h-full w-full object-cover"
            />
          ),
        },
        {
          title: "Winter Gear",
          description: "Warm and cozy items for winter.",
          content: (
            <img 
              src="https://via.placeholder.com/300x300?text=Winter+Gear" 
              alt="Winter Gear" 
              className="h-full w-full object-cover"
            />
          ),
        },
      ],
    },
   
  ];
  
  
export default function Categories() {
  return (
    <div className="">
      {/* <StickyScroll categories={categories} /> */}
      <ScrollableCategories categories={categories} />
    </div>
  );
}
