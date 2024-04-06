import { InfinityScroll } from '@/shared/ui/infinity-scroll';
import './locale';
import { AppRouter } from './router';
import './styles/App.scss';
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
