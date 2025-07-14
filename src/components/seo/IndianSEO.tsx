import React from 'react';
import { Helmet } from 'react-helmet-async';

interface IndianSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  hindiTitle?: string;
  hindiDescription?: string;
  page?: 'home' | 'calculator' | 'ncert' | 'jee' | 'neet' | 'board';
}

const IndianSEO: React.FC<IndianSEOProps> = ({
  title,
  description,
  keywords,
  hindiTitle,
  hindiDescription,
  page = 'home'
}) => {
  // Default SEO content for different pages
  const defaultContent = {
    home: {
      title: 'Ganitagya - Free Math Learning Platform for Indian Students | गणितज्ञ',
      description: 'Free online math learning platform for CBSE, JEE, NEET preparation. Get NCERT solutions, calculators, and video tutorials in Hindi & English.',
      keywords: 'free math learning, NCERT solutions, JEE preparation, NEET maths, CBSE board exam, online calculator, math tutorials hindi, गणित सीखें',
      hindiTitle: 'गणितज्ञ - भारतीय छात्रों के लिए मुफ्त गणित शिक्षा मंच',
      hindiDescription: 'सीबीएसई, जेईई, नीट की तैयारी के लिए मुफ्त ऑनलाइन गणित शिक्षा। एनसीईआरटी समाधान, कैलकुलेटर और हिंदी में वीडियो ट्यूटोरियल।'
    },
    calculator: {
      title: 'Free Online Calculator for Students | Scientific Calculator India',
      description: 'Free scientific calculator for JEE, NEET, board exams. Solve algebra, trigonometry, calculus problems online.',
      keywords: 'free online calculator, scientific calculator, JEE calculator, NEET calculator, algebra calculator, trigonometry calculator',
      hindiTitle: 'छात्रों के लिए मुफ्त ऑनलाइन कैलकुलेटर | वैज्ञानिक कैलकुलेटर',
      hindiDescription: 'जेईई, नीट, बोर्ड परीक्षा के लिए मुफ्त वैज्ञानिक कैलकुलेटर। बीजगणित, त्रिकोणमिति की समस्याओं को ऑनलाइन हल करें।'
    },
    ncert: {
      title: 'NCERT Solutions for Mathematics | Class 6-12 CBSE',
      description: 'Complete NCERT solutions for mathematics Class 6 to 12. Step-by-step solutions for all CBSE board exam preparation.',
      keywords: 'NCERT solutions mathematics, CBSE class 10 maths, CBSE class 12 maths, NCERT math solutions, board exam preparation',
      hindiTitle: 'गणित के लिए एनसीईआरटी समाधान | कक्षा 6-12 सीबीएसई',
      hindiDescription: 'कक्षा 6 से 12 तक गणित के पूर्ण एनसीईआरटी समाधान। सीबीएसई बोर्ड परीक्षा की तैयारी के लिए चरणबद्ध समाधान।'
    },
    jee: {
      title: 'JEE Main & Advanced Mathematics Preparation | Free Study Material',
      description: 'Complete JEE mathematics preparation with video lectures, practice questions, mock tests. Best free resources for JEE aspirants.',
      keywords: 'JEE main mathematics, JEE advanced maths, JEE preparation free, JEE mock test, IIT JEE maths, engineering entrance exam',
      hindiTitle: 'जेईई मुख्य और एडवांस गणित की तैयारी | मुफ्त अध्ययन सामग्री',
      hindiDescription: 'वीडियो व्याख्यान, अभ्यास प्रश्न, मॉक टेस्ट के साथ पूर्ण जेईई गणित की तैयारी। जेईई अभ्यर्थियों के लिए सर्वोत्तम मुफ्त संसाधन।'
    },
    neet: {
      title: 'NEET Mathematics Preparation | Medical Entrance Exam',
      description: 'NEET mathematics preparation with important topics, formulas, practice questions. Score high in NEET medical entrance exam.',
      keywords: 'NEET mathematics, medical entrance exam, NEET maths syllabus, NEET preparation, medical college entrance',
      hindiTitle: 'नीट गणित की तैयारी | मेडिकल प्रवेश परीक्षा',
      hindiDescription: 'महत्वपूर्ण विषयों, सूत्रों, अभ्यास प्रश्नों के साथ नीट गणित की तैयारी। नीट मेडिकल प्रवेश परीक्षा में उच्च अंक प्राप्त करें।'
    },
    board: {
      title: 'CBSE Board Exam Mathematics | Class 10 & 12 Preparation',
      description: 'Complete CBSE board exam preparation for mathematics. Important questions, sample papers, marking scheme for Class 10 & 12.',
      keywords: 'CBSE board exam, class 10 maths, class 12 maths, board exam preparation, CBSE mathematics, sample papers',
      hindiTitle: 'सीबीएसई बोर्ड परीक्षा गणित | कक्षा 10 और 12 की तैयारी',
      hindiDescription: 'गणित के लिए पूर्ण सीबीएसई बोर्ड परीक्षा की तैयारी। कक्षा 10 और 12 के लिए महत्वपूर्ण प्रश्न, नमूना पत्र, अंकन योजना।'
    }
  };

  const content = defaultContent[page];
  const finalTitle = title || content.title;
  const finalDescription = description || content.description;
  const finalKeywords = keywords || content.keywords;
  const finalHindiTitle = hindiTitle || content.hindiTitle;
  const finalHindiDescription = hindiDescription || content.hindiDescription;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Hindi Meta Tags */}
      <meta name="title-hindi" content={finalHindiTitle} />
      <meta name="description-hindi" content={finalHindiDescription} />
      
      {/* Indian Market Specific */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="language" content="hi-IN,en-IN" />
      <meta name="target-audience" content="Indian students, CBSE, JEE, NEET" />
      
      {/* Open Graph for Indian Market */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      
      {/* Indian Education Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Ganitagya",
          "alternateName": "गणितज्ञ",
          "description": finalDescription,
          "url": "https://ganitagya.com",
          "logo": "https://ganitagya.com/images/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "areaServed": "India",
          "availableLanguage": ["Hindi", "English"],
          "educationalCredentialAwarded": "Mathematics Certification",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Mathematics Education",
            "recognizedBy": {
              "@type": "Organization",
              "name": "CBSE"
            }
          },
          "offers": [
            {
              "@type": "Course",
              "name": "JEE Mathematics Preparation",
              "description": "Complete JEE Main and Advanced mathematics preparation",
              "provider": {
                "@type": "Organization",
                "name": "Ganitagya"
              },
              "educationalLevel": "Higher Secondary",
              "teaches": "Mathematics",
              "inLanguage": ["hi", "en"]
            },
            {
              "@type": "Course", 
              "name": "CBSE Board Mathematics",
              "description": "NCERT-based mathematics for CBSE board exams",
              "provider": {
                "@type": "Organization",
                "name": "Ganitagya"
              },
              "educationalLevel": "Secondary",
              "teaches": "Mathematics",
              "inLanguage": ["hi", "en"]
            }
          ],
          "sameAs": [
            "https://facebook.com/ganitagya",
            "https://youtube.com/ganitagya",
            "https://instagram.com/ganitagya"
          ]
        })}
      </script>

      {/* Course Schema for specific pages */}
      {page === 'jee' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "JEE Mathematics Preparation Course",
            "description": "Complete preparation course for JEE Main and Advanced Mathematics",
            "provider": {
              "@type": "Organization",
              "name": "Ganitagya",
              "url": "https://ganitagya.com"
            },
            "educationalLevel": "Higher Secondary",
            "teaches": "Mathematics for Engineering Entrance",
            "coursePrerequisites": "Class 11 Mathematics",
            "educationalCredentialAwarded": "JEE Mathematics Certification",
            "inLanguage": ["hi", "en"],
            "availableLanguage": ["Hindi", "English"],
            "courseMode": "Online",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Online",
              "instructor": {
                "@type": "Person",
                "name": "Ganitagya Expert Faculty"
              }
            }
          })}
        </script>
      )}

      {/* FAQ Schema for common questions */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is Ganitagya free for Indian students?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Ganitagya offers free access to basic mathematics content, NCERT solutions, and calculators for all Indian students. Premium features are available at affordable prices."
              }
            },
            {
              "@type": "Question", 
              "name": "Does Ganitagya support Hindi language?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Ganitagya provides content in both Hindi and English to help Indian students learn mathematics in their preferred language."
              }
            },
            {
              "@type": "Question",
              "name": "Is Ganitagya suitable for JEE and NEET preparation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Ganitagya offers specialized content for JEE Main, JEE Advanced, and NEET mathematics preparation with practice questions and video explanations."
              }
            }
          ]
        })}
      </script>

      {/* Hreflang for language targeting */}
      <link rel="alternate" hrefLang="en-IN" href="https://ganitagya.com" />
      <link rel="alternate" hrefLang="hi-IN" href="https://ganitagya.com/hi" />
      <link rel="alternate" hrefLang="x-default" href="https://ganitagya.com" />
    </Helmet>
  );
};

export default IndianSEO;
