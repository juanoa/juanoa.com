export const createProjectSlug = (projectSlug, lang) => {
  return `/${(lang === 'es') ? 'proyectos' : 'en/projects'}/${projectSlug}/`
}

export const createPostSlug = (postSlug, categorySlug, lang) => {
  return `/${(lang === 'es') ? '' : 'en/'}${categorySlug}/${postSlug}/`
}