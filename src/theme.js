import { extendTheme } from "@chakra-ui/react"

const AppColor = {
     text: '#e9ebef',
     primary: '#20242f',
     secondary: '#0d111d',
     accent: '#363a45',
}

const styles = {
     global: {
          'html, body': {
               lineHeight: 'tall',
          },
     }
}

const baseTheme = extendTheme({ AppColor, styles })

export { AppColor, baseTheme }