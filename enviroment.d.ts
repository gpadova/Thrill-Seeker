declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GITHUB_AUTH_TOKEN: string;
        PORT?: string;
        PWD: string;
        REDIS_PORT: number;
        REDIS_PASSWORD: string;
        REDIS_HOST: string;
      }
    }
  }
  
export {}  