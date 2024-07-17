import type { Schema, Attribute } from '@strapi/strapi';

export interface AccordionDescriptionSection
  extends Schema.Component {
  collectionName: 'components_accordion_description_sections';
  info: {
    displayName: 'Description Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface AccordionFaQsSection extends Schema.Component {
  collectionName: 'components_accordion_fa_qs_sections';
  info: {
    displayName: 'FAQs Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    FAQs: Attribute.Component<'accordion.faq', true>;
  };
}

export interface AccordionFaq extends Schema.Component {
  collectionName: 'components_accordion_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.String & Attribute.Required;
  };
}

export interface AccordionIngredientsSection
  extends Schema.Component {
  collectionName: 'components_accordion_ingredients_sections';
  info: {
    displayName: 'Ingredients Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    ingredientItems: Attribute.Relation<
      'accordion.ingredients-section',
      'oneToMany',
      'api::ingredient-type.ingredient-type'
    >;
  };
}

export interface AccordionUsageInstructionsSection
  extends Schema.Component {
  collectionName: 'components_accordion_usage_instructions_sections';
  info: {
    displayName: 'Usage Instructions Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface BannerBanners extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banners';
    description: '';
  };
  attributes: {
    banners: Attribute.Component<
      'elements.responsive-image-link',
      true
    > &
      Attribute.Required;
  };
}

export interface BannerCarousal extends Schema.Component {
  collectionName: 'components_banner_carousals';
  info: {
    displayName: 'Carousal';
    description: '';
  };
  attributes: {
    carousalBanners: Attribute.Component<
      'elements.responsive-image-link',
      true
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
    autoPlay: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    autoPlayInterval: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<2000>;
    stopOnInteraction: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlocksContentOverview extends Schema.Component {
  collectionName: 'components_blocks_content_overviews';
  info: {
    displayName: 'Content Overview';
  };
  attributes: {
    descriptionSection: Attribute.Component<
      'accordion.description-section',
      true
    >;
    ingredientsSection: Attribute.Component<
      'accordion.ingredients-section',
      true
    >;
    usageInstructionsSection: Attribute.Component<
      'accordion.usage-instructions-section',
      true
    >;
    faqsSection: Attribute.Component<'accordion.fa-qs-section', true>;
  };
}

export interface BlocksProductRoutine extends Schema.Component {
  collectionName: 'components_blocks_product_routines';
  info: {
    displayName: 'Product Routine';
  };
  attributes: {
    title: Attribute.String;
    productRoutineCard: Attribute.Component<
      'cards.extended-product-card',
      true
    > &
      Attribute.Required;
  };
}

export interface BlocksWowBenefits extends Schema.Component {
  collectionName: 'components_blocks_wow_benefits';
  info: {
    displayName: 'WOW Benefits';
    description: '';
  };
  attributes: {
    benefits: Attribute.Component<'elements.image-text', true> &
      Attribute.Required;
    isWebHorizontal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface CardsExtendedProductCard extends Schema.Component {
  collectionName: 'components_cards_extended_product_cards';
  info: {
    displayName: 'Extended Product Card';
  };
  attributes: {
    slug: Attribute.Relation<
      'cards.extended-product-card',
      'oneToOne',
      'api::product.product'
    >;
    text: Attribute.String & Attribute.Required;
    subText: Attribute.String;
  };
}

export interface CardsProductCard extends Schema.Component {
  collectionName: 'components_cards_product_cards';
  info: {
    displayName: 'Product Card';
  };
  attributes: {
    slug: Attribute.Relation<
      'cards.product-card',
      'oneToOne',
      'api::product.product'
    >;
  };
}

export interface CategoriesFeaturedCategories
  extends Schema.Component {
  collectionName: 'components_categories_featured_categories';
  info: {
    displayName: 'Featured Categories';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    type: Attribute.Enumeration<['SMALL', 'MEDIUM', 'LARGE']> &
      Attribute.Required;
    featuredCategoryItems: Attribute.Component<
      'elements.image-slug',
      true
    > &
      Attribute.Required;
  };
}

export interface CategoriesIngredientCategories
  extends Schema.Component {
  collectionName: 'components_categories_ingredient_categories';
  info: {
    displayName: 'Ingredient Categories';
  };
  attributes: {
    title: Attribute.String;
    ingredientCategoryItems: Attribute.Component<
      'elements.image-slug',
      true
    > &
      Attribute.Required;
  };
}

export interface CategoriesTrendingCategories
  extends Schema.Component {
  collectionName: 'components_categories_trending_categories';
  info: {
    displayName: 'Trending Categories';
  };
  attributes: {
    trendingCategoryItems: Attribute.Component<
      'elements.image-slug',
      true
    > &
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
    startTime: Attribute.DateTime;
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

export interface CommonMenu extends Schema.Component {
  collectionName: 'components_common_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String;
    subMenu: Attribute.Component<'elements.text-slug', true>;
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
    title: Attribute.String;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface CommonTestimonials extends Schema.Component {
  collectionName: 'components_common_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'emotionHappy';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    testimonials: Attribute.Relation<
      'common.testimonials',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
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

export interface ElementsImageLink extends Schema.Component {
  collectionName: 'components_elements_image_links';
  info: {
    displayName: 'Image Link';
    description: '';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String;
  };
}

export interface ElementsImageSlug extends Schema.Component {
  collectionName: 'components_elements_image_slugs';
  info: {
    displayName: 'Image Slug';
    description: '';
  };
  attributes: {
    slug: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String;
  };
}

export interface ElementsImageText extends Schema.Component {
  collectionName: 'components_elements_image_texts';
  info: {
    displayName: 'Image Text';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    subText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface ElementsResponsiveImageLink
  extends Schema.Component {
  collectionName: 'components_elements_responsive_image_links';
  info: {
    displayName: 'Responsive Image Link';
    description: '';
  };
  attributes: {
    webImage: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    mWebImage: Attribute.Media & Attribute.Required;
    title: Attribute.String;
  };
}

export interface ElementsTextLink extends Schema.Component {
  collectionName: 'components_elements_text_links';
  info: {
    displayName: 'Text Link';
    description: '';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTextSlug extends Schema.Component {
  collectionName: 'components_elements_text_slugs';
  info: {
    displayName: 'Text Slug';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
  };
}

export interface ElementsTextSubText extends Schema.Component {
  collectionName: 'components_elements_text_sub_texts';
  info: {
    displayName: 'Text SubText';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    subText: Attribute.String;
  };
}

export interface ElementsText extends Schema.Component {
  collectionName: 'components_elements_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accordion.description-section': AccordionDescriptionSection;
      'accordion.fa-qs-section': AccordionFaQsSection;
      'accordion.faq': AccordionFaq;
      'accordion.ingredients-section': AccordionIngredientsSection;
      'accordion.usage-instructions-section': AccordionUsageInstructionsSection;
      'banner.banners': BannerBanners;
      'banner.carousal': BannerCarousal;
      'blocks.content-overview': BlocksContentOverview;
      'blocks.product-routine': BlocksProductRoutine;
      'blocks.wow-benefits': BlocksWowBenefits;
      'cards.extended-product-card': CardsExtendedProductCard;
      'cards.product-card': CardsProductCard;
      'categories.featured-categories': CategoriesFeaturedCategories;
      'categories.ingredient-categories': CategoriesIngredientCategories;
      'categories.trending-categories': CategoriesTrendingCategories;
      'common.countdown-timer': CommonCountdownTimer;
      'common.featured-products': CommonFeaturedProducts;
      'common.main-announcement': CommonMainAnnouncement;
      'common.menu': CommonMenu;
      'common.products-by-tags': CommonProductsByTags;
      'common.testimonials': CommonTestimonials;
      'elements.button': ElementsButton;
      'elements.image-link': ElementsImageLink;
      'elements.image-slug': ElementsImageSlug;
      'elements.image-text': ElementsImageText;
      'elements.responsive-image-link': ElementsResponsiveImageLink;
      'elements.text-link': ElementsTextLink;
      'elements.text-slug': ElementsTextSlug;
      'elements.text-sub-text': ElementsTextSubText;
      'elements.text': ElementsText;
    }
  }
}
