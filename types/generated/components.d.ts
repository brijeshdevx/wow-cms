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

export interface CommonCollectionItem extends Schema.Component {
  collectionName: 'components_common_collection_items';
  info: {
    displayName: 'Collection Item';
    icon: 'server';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    image: Attribute.Media;
    bgColor: Attribute.String;
  };
}

export interface CommonCollectionList extends Schema.Component {
  collectionName: 'components_common_collection_lists';
  info: {
    displayName: 'Collection List';
    icon: 'stack';
  };
  attributes: {
    CollectionItem: Attribute.Component<'common.collection-item', true>;
    title: Attribute.String & Attribute.Required;
    CollectionType: Attribute.Enumeration<['Small', 'Medium', 'Large']> &
      Attribute.Required;
  };
}

export interface CommonCountdownTimer extends Schema.Component {
  collectionName: 'components_head_countdown_timers';
  info: {
    displayName: 'Countdown Timer';
    icon: 'clock';
    description: '';
  };
  attributes: {
    TimerType: Attribute.Enumeration<['Daily', 'Custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'Custom'>;
    startTime: Attribute.DateTime & Attribute.Required;
    endTime: Attribute.DateTime & Attribute.Required;
    title: Attribute.Blocks;
    titleColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    bgColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
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

export interface CommonMainAnnouncement extends Schema.Component {
  collectionName: 'components_head_main_announcements';
  info: {
    displayName: 'Announcement';
    icon: 'television';
    description: '';
  };
  attributes: {
    leftTitle: Attribute.String;
    RightTitle: Attribute.String;
    middleTitle: Attribute.String;
    timer: Attribute.Component<'common.countdown-timer'>;
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
      'common.collection-item': CommonCollectionItem;
      'common.collection-list': CommonCollectionList;
      'common.countdown-timer': CommonCountdownTimer;
      'common.featured-products': CommonFeaturedProducts;
      'common.main-announcement': CommonMainAnnouncement;
      'common.products-by-tags': CommonProductsByTags;
      'common.wow-benefits': CommonWowBenefits;
      'elements.button': ElementsButton;
      'head.accordion': HeadAccordion;
      'head.menu-items': HeadMenuItems;
    }
  }
}
