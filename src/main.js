import 'bootstrap';
import XHR from "i18next-xhr-backend";

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin("aurelia-i18n", instance => {
        instance.i18next.use(XHR);
        instance.setup({
            backend: {
                loadPath: "locales/{{lng}}/{{ns}}.json"
            },
            //lng: "sv-SE", //Works
            //lng: "en-GB", //Works
            lng: "en", //Doesn't work with default namespace since resources with "translation"/"en" is already loaded from relativeTime.js and thus skipped?!
            attributes: ["t", "i18n"],
            //ns: ["translation", "main"], //...but if I add this and prefix the translation keys with main: in the html it works. (Given that I have a main.json)
            //defaultNs: "main", //...but this doesn't seem to have effect, since I had assumed it would default to use main as default namespace and thus I shouldn't need to prefix it with main:.
            fallbackLng: "en",
            debug: false
        });
        //Commenting out the above 0.5.0 settings and reverting to below 0.4.13 settings and also setting the aurelia-i18n version hard to 0.4.13 makes it work with "en" and default namespaces
/*      .plugin("aurelia-i18n", instance => {
          instance.setup({
              resGetPath: "locales/__lng__/__ns__.json",
              //lng: language || "en-US", // use language from cookie if exists, otherwise fall back to en-US.
              lng: "en", // use language from cookie if exists, otherwise fall back to en-US.
              attributes: ["t", "i18n"],
              getAsync: false,
              sendMissing: false,
              fallbackLng: "en",
              debug: false
          });*/
      });

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
