import {createCategorySlug, createPostSlug, createProjectSlug} from "./createSlugs";

export const getI18nForProject = (locale, currentSlug, otherLangProject) => {
  const i18n = {
    actual: locale,
    languages: []
  }

  if (otherLangProject) {
    const {locale: localizationsLocale, slug: localizationsSlug} = otherLangProject
    i18n.languages.push(
      {
        lang: locale,
        url: createProjectSlug(currentSlug, locale)
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

export const getI18nForPost = (locale, currentSlug, currentCategorySlug, otherLangPost) => {
  const i18n = {
    actual: locale,
    languages: []
  }

  if (otherLangPost) {
    const {locale: localizationsLocale, slug: localizationsSlug, category: {slug: localizationsCategorySlug}} = otherLangPost
    i18n.languages.push(
      {
        lang: locale,
        url: createPostSlug(currentSlug, currentCategorySlug, locale)
      }
    )
    i18n.languages.push(
      {
        lang: localizationsLocale,
        url: createPostSlug(localizationsSlug, localizationsCategorySlug, localizationsLocale)
      }
    )
  }

  return i18n
}

export const getI18nForPage = (locale, currentSlug, otherLocale, otherSlug) => {
  const i18n = {
    actual: locale,
    languages: []
  }

  if (otherLocale) {
    i18n.languages.push(
      {
        lang: locale,
        url: currentSlug
      }
    )
    i18n.languages.push(
      {
        lang: otherLocale,
        url: otherSlug
      }
    )
  }

  return i18n
}

export const getI18nForCategory = (locale, currentSlug, otherLangCategory) => {
  const i18n = {
    actual: locale,
    languages: []
  }

  if (otherLangCategory) {
    const {locale: localizationsLocale, slug: localizationsSlug} = otherLangCategory
    i18n.languages.push(
      {
        lang: locale,
        url: createCategorySlug(currentSlug, locale)
      }
    )
    i18n.languages.push(
      {
        lang: localizationsLocale,
        url: createCategorySlug(localizationsSlug, localizationsLocale)
      }
    )
  }

  return i18n
}