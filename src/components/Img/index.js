import React, { useMemo } from 'react';

import facebook from '~/assets/facebook.png';
import twitter from '~/assets/twitter.png';
import instagram from '~/assets/instagram.png';
import google_my_business from '~/assets/googlemybusiness.png';
import pinterest from '~/assets/pinterest.png';
import linkedin from '~/assets/linkedin.png';
import youtube from '~/assets/youtube.png';
import whatsapp from '~/assets/whatsapp.png';
import google_analytics from '~/assets/googleanalytics.png';

export default function Img({ channel_key }) {
  const img = useMemo(() => {
    switch (channel_key) {
      case 'facebook':
        return { src: facebook, alt: channel_key };
      case 'twitter':
        return { src: twitter, alt: channel_key };
      case 'instagram':
        return { src: instagram, alt: channel_key };
      case 'google_my_business':
        return { src: google_my_business, alt: channel_key };
      case 'pinterest':
        return { src: pinterest, alt: channel_key };
      case 'linkedin':
        return { src: linkedin, alt: channel_key };
      case 'youtube':
        return { src: youtube, alt: channel_key };
      case 'whatsapp':
        return { src: whatsapp, alt: channel_key };
      case 'google_analytics':
        return { src: google_analytics, alt: channel_key };
      default:
        return { src: channel_key, alt: channel_key };
    }
  }, [channel_key]);

  return <img src={img.src} alt={img.alt} />;
}
