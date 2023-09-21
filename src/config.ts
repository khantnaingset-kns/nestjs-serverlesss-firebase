export const config = () => ({
  tableName: process.env.DYNAMODB_TABLE_NAME,
  firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY,
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
});
