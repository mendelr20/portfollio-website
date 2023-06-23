import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/mendelrosenblum',
        text: 'Schedule time with me',
        color: '#ffffff',
        textColor: '#000000',
        branding: true,
        position: 'bottom-right' // Set the position to bottom right
      });
    }
  }, []);

  return <div id="calendly-badge-root" />;
};

export default CalendlyWidget;
