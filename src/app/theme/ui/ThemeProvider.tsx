import { ConfigProvider } from 'antd';
import { FC, ReactNode } from 'react';
import { colors } from '../../../shared/ui';
import { headerConfig } from '../../../shared/components/header/header.config';
import { footerConfig } from '../../../shared/components/footer/footer.config';
import { segmentedConfig } from '../../../shared/components/search-toggles/search-toggles.config';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Montserrat',
          colorPrimary: colors.YELLOW,
        },
        components: {
          Layout: {...headerConfig, ...footerConfig},
          Segmented: segmentedConfig,
      },
      hashed: false,
        
      }}
    >
      {children}
    </ConfigProvider>
  );
};
