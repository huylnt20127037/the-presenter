import { extendTheme } from "@chakra-ui/react"

const AppColor = {
     text: '#e9ebef',
     primary: '#20242f',
     secondary: '#363a45',
     accent: '#0d111d',
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