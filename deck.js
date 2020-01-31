import { nightOwlFull } from 'code-surfer'
import { customTheme } from './theme'
import './styles.css'

import { slides as introduction } from './introduction.mdx'
import { slides as hoc } from './hoc/slides.mdx'
import { slides as renderProp } from './render-prop/slides.mdx'
import { slides as hooks } from './hooks/slides.mdx'
// import { slides as customHooks } from './custom-hooks/slides.mdx'

export const themes = [nightOwlFull, customTheme]

export const slides = [
  ...introduction,
  ...hoc,
  ...renderProp,
  ...hooks,
  // ...customHooks,
]
