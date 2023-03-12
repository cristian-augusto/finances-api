import App from './app';
import AppConfig from './config/app.config';
(async () => {
  try {
    const { PORT, API_PREFIX } = AppConfig;

    const appInstance = new App({
      port: PORT,
      apiPrefix: API_PREFIX,
    });

    await appInstance.start();
  } catch (err: any) {
    console.error('Error starting APP instance...');
    console.log(err.message);
  }
})();
