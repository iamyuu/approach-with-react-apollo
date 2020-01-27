import { nightOwlFull } from 'code-surfer'
import { customTheme } from './theme'
import './styles.css'

import { slides as introduction } from './introduction.mdx'

export const themes = [nightOwlFull, customTheme]

export const slides = [
  ...introduction,
]
