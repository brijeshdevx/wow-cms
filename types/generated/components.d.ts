import type { Schema, Attribute } from '@strapi/strapi';

export interface CarouselHeroSection extends Schema.Component {
  collectionName: 'components_carousel_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'play';
  };
  attributes: {
    banner: Attribute.Component<'common.banner', true>;
  };
}

export interface CommonBanner extends Schema.Component {
  collectionName: 'components_carousel_banners';
  info: {
    displayName: 'Banner';
    description: '';
    icon: 'landscape';
  };
  attributes: {
    webImage: Attribute.Media & Attribute.Required;
    cta: Attribute.String;
    mWebImage: Attribute.Media & Attribute.Required;
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

export interface CommonFeaturedProducts extends Schema.Component {
  collectionName: 'components_common_featured_products';
  info: {
    displayName: 'Featured Products';
    icon: 'apps';
    description: '';
  };
  attributes: {
    products: Attribute.Relation<
      'common.featured-products',
      'oneToMany',
      'api::product.product'
    >;
    title: Attribute.String;
    bgColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface CommonProductsByTags extends Schema.Component {
  collectionName: 'components_common_products_by_tags';
  info: {
    displayName: 'Products By Tags';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    tags: Attribute.Relation<
      'common.products-by-tags',
      'oneToMany',
      'api::tag.tag'
    >;
    title: Attribute.String;
    button: Attribute.Component<'elements.button'>;
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

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    icon: 'gift';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    cta: Attribute.String & Attribute.Required;
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
      'carousel.hero-section': CarouselHeroSection;
      'common.banner': CommonBanner;
      'common.benefit': CommonBenefit;
      'common.featured-products': CommonFeaturedProducts;
      'common.products-by-tags': CommonProductsByTags;
      'common.wow-benefits': CommonWowBenefits;
      'elements.button': ElementsButton;
      'head.accordion': HeadAccordion;
      'head.countdown-timer': HeadCountdownTimer;
      'head.main-announcement': HeadMainAnnouncement;
      'head.menu-items': HeadMenuItems;
    }
  }
}
