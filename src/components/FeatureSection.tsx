
import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { cn } from '@/lib/utils';

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imagePosition?: 'left' | 'right';
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  imagePosition = 'right',
  children,
  bgColor = 'bg-white',
  textColor = 'text-gray-800'
}) => {
  return (
    <section id={id} className={cn("py-20 md:py-28", bgColor)}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center",
          imagePosition === 'left' ? 'md:flex-row-reverse' : ''
        )}>
          <ScrollAnimation 
            animation={imagePosition === 'right' ? 'fade-right' : 'fade-left'}
            className="h-full flex items-center justify-center"
          >
            <div className="max-w-md mx-auto">
              {children}
            </div>
          </ScrollAnimation>

          <div className="max-w-lg">
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
                {subtitle}
              </div>
              <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", textColor)}>
                {title}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover-lift">
                Try It Now
              </button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
