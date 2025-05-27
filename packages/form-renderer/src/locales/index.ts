import de from './de'
import en from './en'
import fr from './fr'
import ja from './ja'
import pl from './pl'
import tr from './tr'
import zhCn from './zh-cn'
import zhTw from './zh-tw'
import es from './es'
import ptBr from './pt-br'
import cs from './cs'

// Only support English for now to avoid inconsistencies with the form builder
// (questions in English but labels in German if user browser language is German)
const translation = en;

export const locales: Record<string, any> = {
  en: {
    translation,
  },
  fr: {
    translation,
  },
  de: {
    translation,
  },
  es: {
    translation,
  },
  ja: {
    translation,
  },
  pl: {
    translation,
  },
	'pt-br': {
    translation,
  },
  tr: {
    translation,
  },
  'zh-cn': {
    translation,
  },
  'zh-tw': {
    translation,
  },
  cs: {
    translation,
  }
}
