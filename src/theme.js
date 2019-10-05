import { load } from 'webfontloader'

load({
  google: {
    families: ['Nunito Sans']
  }
})

const theme = {
  colors: {
    font: {
      primary: '#475057',
      secondary: '#E5E5E5',
      tertiary: '#BDBDBD',
      header: '#23495F',
      accent: '#9DCBD6',
      darkAccent: '#9CABC1',
      link: '#2F80ED',
      black: '#343942'
    },
    background: {
      primary: '#E5E5E5',
      secondary: '#F2F2F2',
      merchant: '#F6F7FA'
    },
    accent: {
      primary: '#23495F',
      secondary: '#9DCBD6',
      tertiary: '#9CABC1',
      quarternary: '#D0D2D6',
      quinary: '#C0C8DD'
    },
    button: {
      primary: '#23495F',
      secondary: '#9DCBD6',
      tertiary: '#9CABC1'
    }
  },
  fonts: {
    header: {
      family: 'Nunito Sans'
    },
    body: {
      family: 'Nunito Sans'
    }
  }
}

export default theme
