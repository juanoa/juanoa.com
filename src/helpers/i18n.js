import {createProjectSlug} from "./createSlugs";

export const getI18nForProject = (locale, actualSlug, otherLangProject) => {
  const i18n = {
    actual: locale,
    languages: []
  }

  if (otherLangProject) {
    const {locale: localizationsLocale, slug: localizationsSlug} = otherLangProject
    i18n.languages.push(
      {
        lang: locale,
        url: createProjectSlug(actualSlug, locale)
      }
    )
    i18n.languages.push(
      {
        lang: localizationsLocale,
        url: createProjectSlug(localizationsSlug, localizationsLocale)
      }
    )
  }

  return i18n
}