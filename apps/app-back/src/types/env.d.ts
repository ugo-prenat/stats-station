declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      NODE_ENV: 'development' | 'production';
      MONGO_URI: string;
    }
  }
}

export {};
