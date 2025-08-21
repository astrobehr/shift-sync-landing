
import { EventsAnalytics } from '@/api/entities';

export const trackEvent = async (eventName, eventData = {}) => {
  try {
    const event = {
      event_name: eventName,
      event_data: eventData,
      page_url: window.location.href,
      user_agent: navigator.userAgent
    };

    // Log in development (check if we're in development mode)
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      console.info('Analytics Event:', event);
    }

    // Save to database
    await EventsAnalytics.create(event);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};
