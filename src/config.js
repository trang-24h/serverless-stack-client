const dev = {
  STRIPE_KEY: "pk_test_KB42d2QTufTcotdroZzT4oMu00PpvM7xD6",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1l3l86sd2s3wl"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://crzd6xylta.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_iEkHwd8WX",
    APP_CLIENT_ID: "3icah1b07oi71k4h6oe1ppjsv1",
    IDENTITY_POOL_ID: "us-east-2:7151ba17-c568-41e8-91e8-e6c5d6f6334b"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_KB42d2QTufTcotdroZzT4oMu00PpvM7xD6",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1l3l86sd2s3wl"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://mhn9r1zrm4.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_JqRfTmGqa",
    APP_CLIENT_ID: "5olhbokbe7t482s9ppnjnc9doe",
    IDENTITY_POOL_ID: "us-east-2:80437cdf-f0b0-4f45-b670-85fb1b19bfe3"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};