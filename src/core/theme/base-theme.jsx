import { extendTheme } from "@chakra-ui/react"

const colors = {
     text: '#1D2D46',
     primary: '#FFFFFF',
     
     secondary: '#EDFDFD',
     secondaryOrange: '#FFFAF0',
     secondaryYellow: '#FFFFF0',
     secondaryPurple: '#FAF5FF',
     secondaryRed: '#FFF5F5',
     secondaryGreen: '#F0FFF4',

     accent: '#2B6CB0',
     accentGreen: '#25855A',
     accentOrange: '#C05621',
     accentYellow: '#B7791F',
     accentPurple: '#6B46C1',
     accentRed: '#C53030',

     neutralGray: '#616161',
     lightGray: 'rgba(97, 97, 97, 0.2)',

     gradientAccent: 'linear-gradient(180deg, rgba(43,108,176,0.1) 0%, rgba(43,108,176,0.75) 100%)',
     gradientSecondary: 'linear-gradient(150deg, rgba(237,253,253,0) 0%, rgba(237,253,253,1) 100%)'
}

const styles = {
     global: {
          'html, body': {
               lineHeight: 'tall',
          },
     }
}

const baseTheme = extendTheme({ colors, styles })

export {colors, baseTheme}