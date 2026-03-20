const { translations } = require("./lib/translations.js");

function resolveTranslation(namespace, path) {
    const keys = path.split(".");
    let current = namespace;

    for (const key of keys) {
      if (
        current &&
        typeof current === "object" &&
        key in current
      ) {
        current = current[key];
      } else {
        return null;
      }
    }

    return typeof current === "string" ? current : null;
}

const en = translations.en;
console.log(resolveTranslation(en, "engineeringServices.retrofit.title"));
console.log(resolveTranslation(en, "engineeringServices.radar.title"));
console.log(resolveTranslation(en, "engineeringServices.navigation.title"));
console.log(resolveTranslation(en, "engineeringServices.programming.title"));
