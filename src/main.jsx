import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@mysten/dapp-kit/dist/index.css';

import { createNetworkConfig, lightTheme, SuiClientProvider,WalletProvider } from '@mysten/dapp-kit';

import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
	localnet: { url: getFullnodeUrl('localnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
});
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
			<SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
				<WalletProvider theme={lightTheme}>
					<App />
				</WalletProvider>
			</SuiClientProvider>
		</QueryClientProvider>
   
  </StrictMode>,
)
