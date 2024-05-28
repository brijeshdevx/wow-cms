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

export interface HomeBenefitFeature extends Schema.Component {
  collectionName: 'components_home_benefit_features';
  info: {
    displayName: 'Benefit Feature';
    icon: 'picture';
    description: '';
  };
  attributes: {
    imageCaption: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface HomeBenefits extends Schema.Component {
  collectionName: 'components_home_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'seed';
    description: '';
  };
  attributes: {
    benefitFeature: Attribute.Component<'home.benefit-feature', true> &
      Attribute.Required;
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

export interface HomeMiniBanners extends Schema.Component {
  collectionName: 'components_home_mini_banners';
  info: {
    displayName: 'Mini Banners';
    icon: 'picture';
    description: '';
  };
  attributes: {
    webBannerImage: Attribute.Media & Attribute.Required;
    mWebBannerImage: Attribute.Media & Attribute.Required;
    bannerLink: Attribute.String & Attribute.Required;
  };
}

export interface HomeTestimonials extends Schema.Component {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'Testimonial Component';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    testimonials: Attribute.Relation<
      'home.testimonials',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'head.accordion': HeadAccordion;
      'head.countdown-timer': HeadCountdownTimer;
      'head.main-announcement': HeadMainAnnouncement;
      'head.menu-items': HeadMenuItems;
      'home.benefit-feature': HomeBenefitFeature;
      'home.benefits': HomeBenefits;
      'home.hero-section': HomeHeroSection;
      'home.mini-banners': HomeMiniBanners;
      'home.testimonials': HomeTestimonials;
    }
  }
}
