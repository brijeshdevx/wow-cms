import type { Schema, Attribute } from '@strapi/strapi';

export interface HeadAccordion extends Schema.Component {
  collectionName: 'components_head_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'plus';
    description: '';
  };
  attributes: {
    subMenuTitle: Attribute.String & Attribute.Required;
    subMenuLink: Attribute.String & Attribute.Required;
  };
}

export interface HeadCountdownTimer extends Schema.Component {
  collectionName: 'components_head_countdown_timers';
  info: {
    displayName: 'Countdown Timer';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    timer: Attribute.DateTime;
  };
}

export interface HeadMainAnnouncement extends Schema.Component {
  collectionName: 'components_head_main_announcements';
  info: {
    displayName: 'Main Announcement';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HeadMenuItems extends Schema.Component {
  collectionName: 'components_head_menu_items';
  info: {
    displayName: 'Menu Items';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    menuTitle: Attribute.String & Attribute.Required;
    menuLink: Attribute.String & Attribute.Required;
    subMenu: Attribute.Component<'head.accordion', true>;
  };
}

export interface HomeHeroSection extends Schema.Component {
  collectionName: 'components_home_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'cloud';
  };
  attributes: {
    webBannerImage: Attribute.Media & Attribute.Required;
    mWebBannerImage: Attribute.Media & Attribute.Required;
    bannerLink: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'head.accordion': HeadAccordion;
      'head.countdown-timer': HeadCountdownTimer;
      'head.main-announcement': HeadMainAnnouncement;
      'head.menu-items': HeadMenuItems;
      'home.hero-section': HomeHeroSection;
    }
  }
}
