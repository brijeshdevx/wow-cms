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
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    image: Attribute.Media;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
          preset: 'rich';
        }
      >;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface AccordionIngredientsSection
  extends Schema.Component {
  collectionName: 'components_accordion_ingredients_sections';
  info: {
    displayName: 'Ingredients Section';
    icon: 'alien';
    description: '';
  };
  attributes: {
    ingredients: Attribute.Relation<
      'accordion.ingredients-section',
      'oneToMany',
      'api::ingredient.ingredient'
    >;
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BannerMiniBanners extends Schema.Component {
  collectionName: 'components_banner_mini_banners';
  info: {
    displayName: 'Mini Banners';
    description: '';
  };
  attributes: {
    miniBannerItems: Attribute.Component<
      'elements.responsive-image-link',
      true
    > &
      Attribute.Required;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BannerSingleBanner extends Schema.Component {
  collectionName: 'components_banner_single_banners';
  info: {
    displayName: 'Single Banner';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'elements.responsive-image-link'> &
      Attribute.Required;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    bgColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    showTimer: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    link: Attribute.String;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlocksBlogSection extends Schema.Component {
  collectionName: 'components_blocks_blog_sections';
  info: {
    displayName: 'Blog Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlocksBreadcrumb extends Schema.Component {
  collectionName: 'components_blocks_breadcrumbs';
  info: {
    displayName: 'Breadcrumb';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    showOutOfStockProducts: Attribute.Boolean &
      Attribute.DefaultTo<false>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    showOutOfStockProducts: Attribute.Boolean &
      Attribute.DefaultTo<false>;
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
          preset: 'rich';
        }
      >;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlocksPdp extends Schema.Component {
  collectionName: 'components_blocks_pdps';
  info: {
    displayName: 'PDP';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
      'blocks.pdp',
      'oneToOne',
      'api::product.product'
    >;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    showOutOfStockProducts: Attribute.Boolean &
      Attribute.DefaultTo<false>;
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
    verticalBlogSection: Attribute.Component<'common.vertical-blog-section'>;
    horizontalBlogSection: Attribute.Component<
      'common.horizontal-blog-section',
      true
    >;
  };
}

export interface BlocksRecentlyViewed extends Schema.Component {
  collectionName: 'components_blocks_recently_vieweds';
  info: {
    displayName: 'Recently Viewed';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME', 'BLUE']> &
      Attribute.Required &
      Attribute.DefaultTo<'WHITE'>;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlocksTestimonialSection extends Schema.Component {
  collectionName: 'components_blocks_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    testimonials: Attribute.Relation<
      'blocks.testimonial-section',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    image: Attribute.Media;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    > &
      Attribute.Required;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface CommonHorizontalBlogSection
  extends Schema.Component {
  collectionName: 'components_common_horizontal_blog_sections';
  info: {
    displayName: 'Horizontal Blog Section';
  };
  attributes: {
    row: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    horizontalBlogItems: Attribute.Component<
      'cards.blog-card',
      true
    > &
      Attribute.Required;
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
      Attribute.DefaultTo<true>;
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

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'SEO';
    icon: 'sun';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    metaTitle: Attribute.String;
    description: Attribute.Text;
    canonical: Attribute.String;
    noIndex: Attribute.Boolean & Attribute.DefaultTo<false>;
    schemaDefaultCollection: Attribute.String;
  };
}

export interface CommonVerticalBlogSection extends Schema.Component {
  collectionName: 'components_common_vertical_blog_sections';
  info: {
    displayName: 'Vertical Blog Section';
  };
  attributes: {
    row: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    verticalBlogItem: Attribute.Component<'cards.blog-card'> &
      Attribute.Required;
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
    description: '';
  };
  attributes: {
    image: Attribute.Media;
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
    description: '';
  };
  attributes: {
    webImage: Attribute.Media & Attribute.Required;
    mWebImage: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsRichTextNumber extends Schema.Component {
  collectionName: 'components_elements_rich_text_numbers';
  info: {
    displayName: 'RichText Number';
    description: '';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    number: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      >;
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
    icon: 'strikeThrough';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    subText: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsText extends Schema.Component {
  collectionName: 'components_elements_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
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
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    image: Attribute.Media;
    EffectivenessChart: Attribute.Component<
      'elements.rich-text-number',
      true
    > &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ProductProductHighlightImages
  extends Schema.Component {
  collectionName: 'components_product_product_highlight_images';
  info: {
    displayName: 'Product Highlight Images';
    description: '';
  };
  attributes: {
    images: Attribute.Component<'elements.responsive-image', true> &
      Attribute.Required;
    title: Attribute.String;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    secondaryIngredients: Attribute.Component<
      'elements.image-title',
      true
    >;
    primaryIngredient: Attribute.Component<'elements.responsive-image'>;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ProductProductLegalInfo extends Schema.Component {
  collectionName: 'components_product_product_legal_infos';
  info: {
    displayName: 'Product Legal Info';
    icon: 'shield';
    description: '';
  };
  attributes: {
    legalInfoItems: Attribute.Component<
      'elements.text-sub-text',
      true
    > &
      Attribute.Required;
    bgColor: Attribute.Enumeration<['WHITE', 'LIME', 'BLUE']> &
      Attribute.DefaultTo<'WHITE'>;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ProductProductReviews extends Schema.Component {
  collectionName: 'components_product_product_reviews';
  info: {
    displayName: 'Product Reviews';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    product: Attribute.Relation<
      'product.product-reviews',
      'oneToOne',
      'api::product.product'
    >;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface SearchInitialSearchProducts
  extends Schema.Component {
  collectionName: 'components_search_initial_search_products';
  info: {
    displayName: 'Initial Search Products';
    icon: 'search';
  };
  attributes: {
    products: Attribute.Relation<
      'search.initial-search-products',
      'oneToMany',
      'api::product.product'
    >;
    showComponent: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
      'banner.carousal': BannerCarousal;
      'banner.mini-banners': BannerMiniBanners;
      'banner.single-banner': BannerSingleBanner;
      'blocks.announcement-bar': BlocksAnnouncementBar;
      'blocks.blog-section': BlocksBlogSection;
      'blocks.breadcrumb': BlocksBreadcrumb;
      'blocks.collection-links': BlocksCollectionLinks;
      'blocks.featured-list': BlocksFeaturedList;
      'blocks.featured-products-by-tab': BlocksFeaturedProductsByTab;
      'blocks.featured-products': BlocksFeaturedProducts;
      'blocks.info-section': BlocksInfoSection;
      'blocks.pdp': BlocksPdp;
      'blocks.product-collection-by-tab': BlocksProductCollectionByTab;
      'blocks.recently-viewed': BlocksRecentlyViewed;
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
      'common.horizontal-blog-section': CommonHorizontalBlogSection;
      'common.menu-link': CommonMenuLink;
      'common.menu-slug': CommonMenuSlug;
      'common.product-offer-tag': CommonProductOfferTag;
      'common.products-by-tab': CommonProductsByTab;
      'common.seo': CommonSeo;
      'common.vertical-blog-section': CommonVerticalBlogSection;
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
      'elements.rich-text-number': ElementsRichTextNumber;
      'elements.text-link': ElementsTextLink;
      'elements.text-slug': ElementsTextSlug;
      'elements.text-sub-text': ElementsTextSubText;
      'elements.text': ElementsText;
      'elements.video': ElementsVideo;
      'product.product-benefits': ProductProductBenefits;
      'product.product-effectiveness-images': ProductProductEffectivenessImages;
      'product.product-highlight-images': ProductProductHighlightImages;
      'product.product-key-ingredient-images': ProductProductKeyIngredientImages;
      'product.product-legal-info': ProductProductLegalInfo;
      'product.product-reviews': ProductProductReviews;
      'search.initial-search-products': SearchInitialSearchProducts;
    }
  }
}
