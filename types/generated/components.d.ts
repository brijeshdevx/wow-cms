import type { Schema, Attribute } from '@strapi/strapi';

export interface CarouselBanner extends Schema.Component {
  collectionName: 'components_carousel_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    webImage: Attribute.Media & Attribute.Required;
    cta: Attribute.String;
    mWebImage: Attribute.Media & Attribute.Required;
  };
}

export interface CarouselHeroSection extends Schema.Component {
  collectionName: 'components_carousel_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'play';
  };
  attributes: {
    banner: Attribute.Component<'carousel.banner', true>;
  };
}

export interface CommonBenefit extends Schema.Component {
  collectionName: 'components_common_benefits';
  info: {
    displayName: 'Benefit';
    icon: 'feather';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    caption: Attribute.String;
  };
}

export interface CommonMenu extends Schema.Component {
  collectionName: 'components_common_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    menuTitle: Attribute.String & Attribute.Required;
    menuLink: Attribute.String;
    subMenuTitle: Attribute.Component<'common.sub-menu', true>;
  };
}

export interface CommonSubMenu extends Schema.Component {
  collectionName: 'components_common_sub_menus';
  info: {
    displayName: 'Sub Menu';
  };
  attributes: {
    subMenuTitle: Attribute.String & Attribute.Required;
    subMenuLink: Attribute.String & Attribute.Required;
  };
}

export interface CommonWowBenefits extends Schema.Component {
  collectionName: 'components_common_wow_benefits';
  info: {
    displayName: 'Wow Benefits';
    icon: 'television';
  };
  attributes: {
    benefit: Attribute.Component<'common.benefit', true> & Attribute.Required;
  };
}

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carousel.banner': CarouselBanner;
      'carousel.hero-section': CarouselHeroSection;
      'common.benefit': CommonBenefit;
      'common.menu': CommonMenu;
      'common.sub-menu': CommonSubMenu;
      'common.wow-benefits': CommonWowBenefits;
      'head.accordion': HeadAccordion;
      'head.countdown-timer': HeadCountdownTimer;
      'head.main-announcement': HeadMainAnnouncement;
      'head.menu-items': HeadMenuItems;
    }
  }
}
