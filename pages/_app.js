import './globals.css';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, goerli } from 'wagmi/chains'


const chains = [arbitrum, mainnet, polygon, goerli]
const projectId = '3abfc8888ede721231745719f8a51808'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
          <Component {...pageProps} />
      </WagmiConfig>

    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default MyApp;