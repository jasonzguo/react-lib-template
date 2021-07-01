import { createContext } from 'react';

// interfaces
interface ConfigConsumerProps {
  locale: string;
  namespace: string;
  theme?: 'light' | 'dark';
}

const ConfigContext = createContext<ConfigConsumerProps>({
  namespace: process.env.UI_KIT_NAMESPACE ? `${process.env.UI_KIT_NAMESPACE}-ui-kit` : 'ui-kit',
  locale: process.env.UI_KIT_LOCALE || 'en',
  theme: 'light'
});

export default ConfigContext;
