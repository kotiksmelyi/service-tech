import { AppRouter } from './router';
import './locale';
import './styles/App.scss'
import { ThemeProvider } from './theme';

function App() {
  // const { i18n } = useTranslation();
  return (
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
  );
}

export default App;
