import React, { useEffect } from 'react';
import Navigation from './navigation';

import { focusManager, QueryClient, QueryClientProvider } from 'react-query';
import { AppState, AppStateStatus, Platform } from 'react-native';

const App = () => {
  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
