'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Check, Sparkles, ArrowRight } from 'lucide-react';
import { NeuCard } from '@/components/ui/NeuCard';
import { NeuBadge } from '@/components/ui/NeuBadge';
import { NeuIconDisc } from '@/components/ui/NeuIconDisc';
import { ProductItem } from '@/types';

interface FeaturedProductsProps {
  onAddToCart?: (product: ProductItem) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsProps> = ({
  onAddToCart,
}) => {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const products: ProductItem[] = [
    {
      id: 'prod-1',
      name: 'PawVita Chicken & Rice Dry Dog Food',
      category: 'Nutrition',
      price: 29.99,
      originalPrice: 34.99,
      rating: 5.0,
      reviewsCount: 128,
      badge: 'Best Seller',
      image: '/images/prod-food.svg',
      inStock: true,
    },
    {
      id: 'prod-2',
      name: 'Plush Squeaky Dog Toy',
      category: 'Toys',
      price: 12.99,
      originalPrice: 16.99,
      rating: 4.9,
      reviewsCount: 96,
      badge: 'Sale',
      image: '/images/prod-toy.svg',
      inStock: true,
    },
    {
      id: 'prod-3',
      name: 'Oatmeal Soothing Pet Shampoo',
      category: 'Grooming',
      price: 15.99,
      originalPrice: undefined,
      rating: 4.8,
      reviewsCount: 74,
      badge: 'New',
      image: '/images/prod-shampoo.svg',
      inStock: true,
    },
    {
      id: 'prod-4',
      name: 'Comfort Orthopedic Padded Pet Bed',
      category: 'Bedding',
      price: 39.99,
      originalPrice: 49.99,
      rating: 5.0,
      reviewsCount: 43,
      badge: undefined,
      image: '/images/prod-bed.svg',
      inStock: true,
    },
  ];

  const handleAdd = (product: ProductItem) => {
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    if (onAddToCart) {
      onAddToCart(product);
    }
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3EEE1] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.25),-3px_-3px_8px_rgba(255,255,255,0.85)] border border-white/50 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#2B4A34]">
                CLINIC PHARMACY & ESSENTIALS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B4A34] tracking-tight">
              Featured Products
            </h2>
          </div>

          <a
            href="#products"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#2B4A34] hover:text-[#D4A017] transition-colors cursor-pointer"
          >
            <span>All Products In Stock</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const isAdded = addedIds[product.id];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <NeuCard
                  variant="raised"
                  hoverEffect
                  className="w-full flex flex-col justify-between p-5 sm:p-6 relative group"
                >
                  {/* Badge top-left */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <NeuBadge
                        variant={
                          product.badge === 'Sale'
                            ? 'sale'
                            : product.badge === 'Best Seller'
                            ? 'green'
                            : 'gold'
                        }
                        size="sm"
                      >
                        {product.badge}
                      </NeuBadge>
                    </div>
                  )}

                  {/* Product Image Stage */}
                  <div className="w-full aspect-square rounded-2xl bg-[#EBE4D5] shadow-[inset_3px_3px_6px_rgba(163,148,116,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] border border-[#DFD5C2]/40 p-4 mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={180}
                      className="object-contain w-full h-full max-h-[160px] drop-shadow-md"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#2B4A34] mb-2 line-clamp-2 leading-snug">
                      {product.name}
                    </h3>

                    {/* Star Rating & Review Count */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center text-[#D4A017]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D4A017] text-[#D4A017]" />
                        ))}
                      </div>
                      <span className="text-xs text-[#6B6357] font-medium">
                        ({product.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Price and Add-To-Cart Action */}
                  <div className="pt-3 border-t border-[#E8E1D0] flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-xl font-bold text-[#2B4A34]">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#6B6357] line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Circular Add-to-cart Disc */}
                    <NeuIconDisc
                      size="sm"
                      variant={isAdded ? 'green' : 'raised'}
                      interactive
                      onClick={() => handleAdd(product)}
                      ariaLabel={`Add ${product.name} to cart`}
                      className={`
                        transition-all duration-200
                        ${isAdded ? 'scale-110' : 'hover:scale-110'}
                      `}
                    >
                      {isAdded ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <ShoppingBag className="w-4 h-4 text-[#2B4A34]" />
                      )}
                    </NeuIconDisc>
                  </div>
                </NeuCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
