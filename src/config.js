export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-trang-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://rh6g5j7jig.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_w3YyaZC0l",
    APP_CLIENT_ID: "206bfv1mp1hr80ebv93jk7f74f",
    IDENTITY_POOL_ID: "us-east-2:f46914dc-e363-403e-a8b5-39a70fc56a2e"
  },
  STRIPE_KEY: "pk_test_KB42d2QTufTcotdroZzT4oMu00PpvM7xD6",
};
