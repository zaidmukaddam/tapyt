import { HOME, META_ICON, META_IMAGE } from 'constants/paths'
import { BRAND, BRAND_TAGLINE_LONG } from 'constants/brand'

export function makeWebsiteSchema() {
  return {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: `${HOME}`,
    description: BRAND_TAGLINE_LONG,
    image: META_ICON,
    thumbnailUrl: META_IMAGE,
    name: BRAND,
    sameAs: [
      'https://instagram.com/zaidmukaddam',
      'https://www.linkedin.com/in/zaidmukaddam/',
      'https://github.com/zaidmukaddam',
    ],
  }
}
