

import React from 'react';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen">
      <style>
        {`
          :root {
            --color-blue-50: #eff6ff;
            --color-blue-600: #2563eb;
            --color-blue-700: #1d4ed8;
            --color-gray-50: #f9fafb;
            --color-gray-600: #4b5563;
            --color-gray-900: #111827;
            --ss-blue: #042136;
            --ss-yellow: #FFC94A;
            --ss-text-dark: #0A1A24;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          * {
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: var(--color-gray-900);
          }
          
          .container {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          @media (min-width: 640px) {
            .container {
              max-width: 640px;
            }
          }
          
          @media (min-width: 768px) {
            .container {
              max-width: 768px;
            }
          }
          
          @media (min-width: 1024px) {
            .container {
              max-width: 1024px;
            }
          }
          
          @media (min-width: 1280px) {
            .container {
              max-width: 1280px;
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes ssBubbleIn { 
            0% { transform: scale(.96); opacity: 0; } 
            100% { transform: scale(1); opacity: 1; } 
          }

          /* Slideshow Styles */
          .slideshow, .slideshow-viewport {
            max-width: 1120px;
            margin: 0 auto;
          }
          .slideshow-viewport,
          .slideshow .slide-frame {
            height: auto;
            min-height: 520px;
            overflow: visible;
          }
          @media (max-width: 1024px){
            .slideshow-viewport, .slideshow .slide-frame { min-height: 460px; }
          }
          @media (max-width: 640px){
            .slideshow-viewport, .slideshow .slide-frame { min-height: 380px; }
          }

          .slideshow .slide-media {
            background: #042136;
          }
          .slideshow .slide-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 35%;
          }
          @media (max-width: 640px){
            .slideshow .slide-media img { object-fit: contain; }
          }

          .slide__caption {
            position: absolute; 
            left: 0; right: 0; bottom: 0;
            background: linear-gradient(to top, rgba(0,0,0,.70), rgba(0,0,0,.20));
            padding: 16px 20px 18px;
            max-height: none; 
            overflow: visible;
            border-bottom-left-radius: 12px; 
            border-bottom-right-radius: 12px;
          }
          .slide__title { 
            color:#fff; 
            font-weight:800; 
            margin:0 0 6px; 
            font-size: clamp(18px, 2vw, 22px);
          }
          .slide__text { 
            color:#EEF3F7; 
            margin:0; 
            font-size: clamp(14px, 1.6vw, 16px);
          }

          .slide--cta .slide-content {
            display:flex; 
            flex-direction:column; 
            align-items:center; 
            justify-content:center;
            gap: 16px; 
            padding: 32px 20px;
            min-height: 520px;
          }
          .slide--cta .btn-cta { 
            margin-bottom: 12px; 
          }

          .slideshow-dots { 
            margin-top: 10px; 
          }

          /* Complete Bubble Bar using transparent artwork - ROBUST TEXT ALIGNMENT */
          .ss-bubblebar {
            position: relative;
            margin: 16px auto 26px;
            max-width: 1120px;
            display: grid;
            place-items: center; /* This centers both the image and the text overlay */
          }
          
          /* This makes both the image and the overlay occupy the same space */
          .ss-bubblebar > * {
            grid-column: 1 / -1;
            grid-row: 1 / -1;
          }

          .ss-bubblebar-image {
            width: 100%;
            max-width: 800px; /* Base width for the artwork */
            height: auto;
            display: block;
          }

          /* The text container is now forced to the same size as the image */
          .ss-text-overlay {
            width: 100%;
            max-width: 800px; /* Match the image max-width */
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* Precise padding to push text into the yellow area */
            padding-left: 28%;
            padding-right: 12%;
            padding-top: 6px; /* Nudge text block down to perfectly center it */
            box-sizing: border-box; /* Ensures padding doesn't break the layout */
            z-index: 2;
          }

          .ss-label {
            display: block;
            font-size: 11px;
            letter-spacing: .08em;
            text-transform: uppercase;
            color: rgba(10,26,36,.75);
            margin-bottom: 3px;
            line-height: 1;
          }

          .ss-text {
            display: block;
            font-size: clamp(14px, 1.5vw, 16px);
            font-weight: 600;
            color: var(--ss-text-dark);
            line-height: 1.3;
            text-wrap: pretty;
            animation: ssBubbleIn 240ms ease-out;
          }

          @media (max-width: 640px) {
            .ss-text-overlay {
              padding-left: 30%;
              padding-right: 15%;
            }
            .ss-text {
              font-size: 13px;
              line-height: 1.25;
            }
             .ss-label {
              font-size: 10px;
            }
          }
        `}
      </style>
      {children}
    </div>
  );
}

