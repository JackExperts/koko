import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'
import jaLocale from 'element-ui/lib/locale/lang/ja'
import ptLocale from 'element-ui/lib/locale/lang/pt-br'
import zh from './zh.json'
import en from './en.json'
import ja from './ja.json'
import pt from './pt.json'

export default {
  zh: {
    ...zhLocale,
    ...zh
  },
  en: {
    ...enLocale,
    ...en
  },
  ja: {
    ...jaLocale,
    ...ja
  },
  pt: {
    ...ptLocale,
    ...pt
  }
}
