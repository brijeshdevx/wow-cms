module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'wow-prod-media-bucket.s3.ap-south-1.amazonaws.com',
            'media-prod.buywow.in',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'wow-prod-media-bucket.s3.ap-south-1.amazonaws.com',
            'media-prod.buywow.in',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
