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
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    FAQs: Attribute.Component<'common.faq', true> &
      Attribute.Required;
  };
}

export interface AccordionInfoDropdownSection
  extends Schema.Component {
  collectionName: 'components_accordion_info_dropdown_sections';
  info: {
    displayName: 'Info Dropdown Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME', 'BLUE']> &
      Attribute.Required &
      Attribute.DefaultTo<'BLUE'>;
    information: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
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
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    usageInstructionItems: Attribute.Component<
      'elements.text',
      true
    > &
      Attribute.Required;
  };
}

export interface BannerBanners extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banners';
    description: '';
  };
  attributes: {
    bannerItems: Attribute.Component<
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
    carousalItems: Attribute.Component<
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
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<2000>;
  };
}

export interface BlocksAnnouncementBar extends Schema.Component {
  collectionName: 'components_blocks_announcement_bars';
  info: {
    displayName: 'Announcement Bar';
    description: '';
  };
  attributes: {
    leftText: Attribute.String;
    rightText: Attribute.String;
    centerText: Attribute.String;
    timer: Attribute.Component<'common.countdown-timer'>;
  };
}

export interface BlocksBlogSection extends Schema.Component {
  collectionName: 'components_blocks_blog_sections';
  info: {
    displayName: 'Blog Section';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface BlocksCollectionLinks extends Schema.Component {
  collectionName: 'components_blocks_collection_links';
  info: {
    displayName: 'Collection Links';
    description: '';
  };
  attributes: {
    collectionLinkItems: Attribute.Component<
      'elements.button-slug',
      true
    > &
      Attribute.Required;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME', 'BLUE']> &
      Attribute.Required &
      Attribute.DefaultTo<'LIME'>;
  };
}

export interface BlocksFeaturedList extends Schema.Component {
  collectionName: 'components_blocks_featured_lists';
  info: {
    displayName: 'Featured List';
    description: '';
  };
  attributes: {
    isWebHorizontal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    featuredListItems: Attribute.Component<
      'elements.image-rich-text',
      true
    > &
      Attribute.Required;
  };
}

export interface BlocksFeaturedProductsByTab
  extends Schema.Component {
  collectionName: 'components_blocks_featured_products_by_tabs';
  info: {
    displayName: 'Featured Products By Tab';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    featuredProductsTabItems: Attribute.Component<
      'common.products-by-tab',
      true
    > &
      Attribute.Required;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME', 'BLUE']> &
      Attribute.Required;
    button: Attribute.Component<'elements.button-slug'>;
  };
}

export interface BlocksFeaturedProducts extends Schema.Component {
  collectionName: 'components_common_featured_products';
  info: {
    displayName: 'Featured Products';
    icon: 'apps';
    description: '';
  };
  attributes: {
    products: Attribute.Relation<
      'blocks.featured-products',
      'oneToMany',
      'api::product.product'
    >;
    title: Attribute.String;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME', 'BLUE']> &
      Attribute.Required &
      Attribute.DefaultTo<'WHITE'>;
    button: Attribute.Component<'elements.button-slug'>;
  };
}

export interface BlocksInfoSection extends Schema.Component {
  collectionName: 'components_blocks_info_sections';
  info: {
    displayName: 'Info Section';
    description: '';
  };
  attributes: {
    information: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface BlocksPdp extends Schema.Component {
  collectionName: 'components_blocks_pdps';
  info: {
    displayName: 'PDP';
    description: '';
  };
  attributes: {
    product: Attribute.Component<'cards.product-card'> &
      Attribute.Required;
  };
}

export interface BlocksProductCollectionByTab
  extends Schema.Component {
  collectionName: 'components_blocks_product_collection_by_tabs';
  info: {
    displayName: 'Product Collection By Tab';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    defaultCollectionSorting: Attribute.Enumeration<
      [
        'RECOMMENDED',
        'LATEST',
        'BEST_SELLERS',
        'HIGHEST_RATED',
        'PRICE_HIGH_TO_LOW',
        'PRICE_LOW_TO_HIGH',
        'AVAILABILITY'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'RECOMMENDED'>;
    productCollectionTabItems: Attribute.Component<
      'common.products-by-tab',
      true
    > &
      Attribute.Required;
    verticalBlogCard: Attribute.Component<'cards.blog-card'>;
    horizontalBlogCards: Attribute.Component<'cards.blog-card', true>;
  };
}

export interface BlocksTestimonialSection extends Schema.Component {
  collectionName: 'components_blocks_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    title: Attribute.String;
    testimonials: Attribute.Relation<
      'blocks.testimonial-section',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface BlocksUpsellProducts extends Schema.Component {
  collectionName: 'components_blocks_upsell_products';
  info: {
    displayName: 'Upsell Products';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    upsellProductItems: Attribute.Component<
      'cards.extended-product-card',
      true
    > &
      Attribute.Required;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME', 'BLUE']> &
      Attribute.Required &
      Attribute.DefaultTo<'LIME'>;
  };
}

export interface BlocksVideoSection extends Schema.Component {
  collectionName: 'components_blocks_video_sections';
  info: {
    displayName: 'Video Section';
    description: '';
  };
  attributes: {
    videoItems: Attribute.Component<'elements.video', true> &
      Attribute.Required;
    title: Attribute.String;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME']> &
      Attribute.Required &
      Attribute.DefaultTo<'WHITE'>;
    size: Attribute.Enumeration<['SMALL', 'MEDIUM']> &
      Attribute.Required &
      Attribute.DefaultTo<'SMALL'>;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface CardsBlogCard extends Schema.Component {
  collectionName: 'components_cards_blog_cards';
  info: {
    displayName: 'Blog Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'elements.button-link'> &
      Attribute.Required;
    bgColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    row: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
  };
}

export interface CardsExtendedProductCard extends Schema.Component {
  collectionName: 'components_cards_extended_product_cards';
  info: {
    displayName: 'Extended Product Card';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
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
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
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
    size: Attribute.Enumeration<['SMALL', 'MEDIUM']> &
      Attribute.Required &
      Attribute.DefaultTo<'SMALL'>;
    featuredCategoryItems: Attribute.Component<
      'elements.image-slug-title',
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
    description: '';
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
    description: '';
  };
  attributes: {
    trendingCategoryItems: Attribute.Component<
      'elements.image-slug-title',
      true
    >;
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
    type: Attribute.Enumeration<['DAILY', 'CUSTOM']> &
      Attribute.Required &
      Attribute.DefaultTo<'CUSTOM'>;
    startTime: Attribute.Time &
      Attribute.Required &
      Attribute.DefaultTo<'00:00'>;
    endTime: Attribute.Time &
      Attribute.Required &
      Attribute.DefaultTo<'00:00'>;
    startDate: Attribute.Date & Attribute.Required;
    endDate: Attribute.Date & Attribute.Required;
  };
}

export interface CommonFaq extends Schema.Component {
  collectionName: 'components_accordion_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.String & Attribute.Required;
  };
}

export interface CommonMenuLink extends Schema.Component {
  collectionName: 'components_common_menu_links';
  info: {
    displayName: 'Menu Link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String;
    subMenu: Attribute.Component<'elements.text-link', true>;
  };
}

export interface CommonMenuSlug extends Schema.Component {
  collectionName: 'components_common_menu_slugs';
  info: {
    displayName: 'Menu Slug';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String;
    subMenu: Attribute.Component<'elements.text-slug', true>;
  };
}

export interface CommonProductOfferTag extends Schema.Component {
  collectionName: 'components_product_product_offer_tags';
  info: {
    displayName: 'Product Offer Tag';
    description: '';
  };
  attributes: {
    showOfferTag: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    bgColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface CommonProductsByTab extends Schema.Component {
  collectionName: 'components_common_products_by_tabs';
  info: {
    displayName: 'Products By Tab';
    description: '';
  };
  attributes: {
    products: Attribute.Relation<
      'common.products-by-tab',
      'oneToMany',
      'api::product.product'
    >;
    tab: Attribute.Relation<
      'common.products-by-tab',
      'oneToOne',
      'api::collection-tab.collection-tab'
    >;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ElementsButtonSlug extends Schema.Component {
  collectionName: 'components_elements_button_slugs';
  info: {
    displayName: 'Button Slug';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
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
    text: Attribute.String & Attribute.Required;
    cta: Attribute.String & Attribute.Required;
  };
}

export interface ElementsExtendedText extends Schema.Component {
  collectionName: 'components_elements_extended_texts';
  info: {
    displayName: 'Extended Text';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    subText: Attribute.String & Attribute.Required;
  };
}

export interface ElementsImageExtendedRichText
  extends Schema.Component {
  collectionName: 'components_elements_image_extended_rich_texts';
  info: {
    displayName: 'Image Extended RichText';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    subText: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface ElementsImageExtendedText extends Schema.Component {
  collectionName: 'components_elements_image_extended_texts';
  info: {
    displayName: 'Image Extended Text';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    subText: Attribute.String & Attribute.Required;
  };
}

export interface ElementsImageLinkTitle extends Schema.Component {
  collectionName: 'components_elements_image_link_titles';
  info: {
    displayName: 'Image Link Title';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
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
  };
}

export interface ElementsImageRichText extends Schema.Component {
  collectionName: 'components_elements_image_rich_texts';
  info: {
    displayName: 'Image RichText';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface ElementsImageSlugTitle extends Schema.Component {
  collectionName: 'components_elements_image_slug_titles';
  info: {
    displayName: 'Image Slug Title';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
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
    moeText: Attribute.String;
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
    text: Attribute.String & Attribute.Required;
  };
}

export interface ElementsImageTitle extends Schema.Component {
  collectionName: 'components_elements_image_titles';
  info: {
    displayName: 'Image Title';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsResponsiveImageLinkTitle
  extends Schema.Component {
  collectionName: 'components_elements_responsive_image_link_titles';
  info: {
    displayName: 'Responsive Image Link Title';
    description: '';
  };
  attributes: {
    webImage: Attribute.Media & Attribute.Required;
    mWebImage: Attribute.Media & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
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
    moeText: Attribute.String;
  };
}

export interface ElementsResponsiveImage extends Schema.Component {
  collectionName: 'components_elements_responsive_images';
  info: {
    displayName: 'Responsive Image';
  };
  attributes: {
    webImage: Attribute.Media & Attribute.Required;
    mWebImage: Attribute.Media;
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

export interface ElementsText extends Schema.Component {
  collectionName: 'components_elements_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface ElementsVideo extends Schema.Component {
  collectionName: 'components_elements_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    video: Attribute.Media & Attribute.Required;
    thumbnail: Attribute.Media;
  };
}

export interface ProductProductBenefits extends Schema.Component {
  collectionName: 'components_product_product_benefits';
  info: {
    displayName: 'Product Benefits';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME', 'BLUE']> &
      Attribute.Required &
      Attribute.DefaultTo<'LIME'>;
    productBenefitItems: Attribute.Component<
      'elements.image-extended-text',
      true
    > &
      Attribute.Required;
  };
}

export interface ProductProductEffectivenessImages
  extends Schema.Component {
  collectionName: 'components_product_product_effectiveness_images';
  info: {
    displayName: 'Product Effectiveness Images';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Component<'elements.image', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface ProductProductHighlightImages
  extends Schema.Component {
  collectionName: 'components_product_product_highlight_images';
  info: {
    displayName: 'Product Highlight Images';
  };
  attributes: {
    images: Attribute.Component<'elements.responsive-image', true> &
      Attribute.Required;
  };
}

export interface ProductProductKeyIngredientImages
  extends Schema.Component {
  collectionName: 'components_product_product_key_ingredient_images';
  info: {
    displayName: 'Product Key Ingredient Images';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME', 'BLUE']> &
      Attribute.Required &
      Attribute.DefaultTo<'LIME'>;
    primaryIngredient: Attribute.Media;
    secondaryIngredients: Attribute.Component<
      'elements.image-title',
      true
    >;
  };
}

export interface ProductProductReviews extends Schema.Component {
  collectionName: 'components_product_product_reviews';
  info: {
    displayName: 'Product Reviews';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accordion.description-section': AccordionDescriptionSection;
      'accordion.fa-qs-section': AccordionFaQsSection;
      'accordion.info-dropdown-section': AccordionInfoDropdownSection;
      'accordion.ingredients-section': AccordionIngredientsSection;
      'accordion.usage-instructions-section': AccordionUsageInstructionsSection;
      'banner.banners': BannerBanners;
      'banner.carousal': BannerCarousal;
      'blocks.announcement-bar': BlocksAnnouncementBar;
      'blocks.blog-section': BlocksBlogSection;
      'blocks.collection-links': BlocksCollectionLinks;
      'blocks.featured-list': BlocksFeaturedList;
      'blocks.featured-products-by-tab': BlocksFeaturedProductsByTab;
      'blocks.featured-products': BlocksFeaturedProducts;
      'blocks.info-section': BlocksInfoSection;
      'blocks.pdp': BlocksPdp;
      'blocks.product-collection-by-tab': BlocksProductCollectionByTab;
      'blocks.testimonial-section': BlocksTestimonialSection;
      'blocks.upsell-products': BlocksUpsellProducts;
      'blocks.video-section': BlocksVideoSection;
      'cards.blog-card': CardsBlogCard;
      'cards.extended-product-card': CardsExtendedProductCard;
      'cards.product-card': CardsProductCard;
      'categories.featured-categories': CategoriesFeaturedCategories;
      'categories.ingredient-categories': CategoriesIngredientCategories;
      'categories.trending-categories': CategoriesTrendingCategories;
      'common.countdown-timer': CommonCountdownTimer;
      'common.faq': CommonFaq;
      'common.menu-link': CommonMenuLink;
      'common.menu-slug': CommonMenuSlug;
      'common.product-offer-tag': CommonProductOfferTag;
      'common.products-by-tab': CommonProductsByTab;
      'elements.button-link': ElementsButtonLink;
      'elements.button-slug': ElementsButtonSlug;
      'elements.button': ElementsButton;
      'elements.extended-text': ElementsExtendedText;
      'elements.image-extended-rich-text': ElementsImageExtendedRichText;
      'elements.image-extended-text': ElementsImageExtendedText;
      'elements.image-link-title': ElementsImageLinkTitle;
      'elements.image-link': ElementsImageLink;
      'elements.image-rich-text': ElementsImageRichText;
      'elements.image-slug-title': ElementsImageSlugTitle;
      'elements.image-slug': ElementsImageSlug;
      'elements.image-text': ElementsImageText;
      'elements.image-title': ElementsImageTitle;
      'elements.image': ElementsImage;
      'elements.responsive-image-link-title': ElementsResponsiveImageLinkTitle;
      'elements.responsive-image-link': ElementsResponsiveImageLink;
      'elements.responsive-image': ElementsResponsiveImage;
      'elements.text-link': ElementsTextLink;
      'elements.text-slug': ElementsTextSlug;
      'elements.text': ElementsText;
      'elements.video': ElementsVideo;
      'product.product-benefits': ProductProductBenefits;
      'product.product-effectiveness-images': ProductProductEffectivenessImages;
      'product.product-highlight-images': ProductProductHighlightImages;
      'product.product-key-ingredient-images': ProductProductKeyIngredientImages;
      'product.product-reviews': ProductProductReviews;
    }
  }
}
