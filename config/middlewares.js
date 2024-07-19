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
            'wow-dev-media-bucket.s3.ap-south-1.amazonaws.com',
            'media-dev.buywow.in',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'wow-dev-media-bucket.s3.ap-south-1.amazonaws.com',
            'media-dev.buywow.in',
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
