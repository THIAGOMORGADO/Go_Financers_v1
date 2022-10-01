import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';


import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';


import Theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/pages';

export default function App() {
  // Instalando fonts personalizada no app
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  // Verificando se As fontes estao instaladas no App
    if(!fontsLoaded) {
      return null;
    }

  return(
    <ThemeProvider theme={Theme}>
      <StatusBar style='light'/>
        <Dashboard />
    </ThemeProvider>
  ) 
}

