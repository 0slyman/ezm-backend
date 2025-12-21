import Logo from "./extensions/logo.png";

export default {
  config: {
    // LOGO AYARLARI
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    // METİN AYARLARI
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "EZM Panel",
        "Auth.form.welcome.title": "EZM Yönetim Paneline Hoş Geldiniz",
        "Auth.form.welcome.subtitle": "Hesabınıza giriş yapın",
      },
      tr: {
        "app.components.LeftMenu.navbrand.title": "EZM Panel",
        "Auth.form.welcome.title": "EZM Yönetim Paneline Hoş Geldiniz",
        "Auth.form.welcome.subtitle": "Hesabınıza giriş yapın",
      },
    },
    // TEMA AYARLARI (Teal Rengi)
    theme: {
      light: {
        colors: {
          primary100: '#f0fdfa',
          primary200: '#ccfbf1',
          primary500: '#14b8a6',
          primary600: '#0d9488',
          primary700: '#0f766e',
          buttonPrimary600: '#0d9488',
          buttonPrimary500: '#14b8a6',
        },
      },
    },
    // GEREKSİZLERİ GİZLE
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap(app: any) {
    console.log(app);
  },
};