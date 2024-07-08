module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: "https://media-uat.buywow.in",
        rootPath: "public/wow-cms/",
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          params: {
            ACL: env("AWS_ACL", "private"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 6 * 24 * 60 * 60),
            Bucket: env("S3_BUCKET_NAME"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
    },
    config: {
      provider: "sendmail",
      settings: {
        defaultFrom: "piyush@devxconsultancy.com",
        defaultReplyTo: "piyush@devxconsultancy.com",
      },
    },
  },
});
