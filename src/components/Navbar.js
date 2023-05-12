import { Fragment, useImperativeHandle } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';


//-----------wallet connect modules--------------
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, bsc } from 'wagmi/chains'

import { Web3Button } from '@web3modal/react'

const chains = [arbitrum, mainnet, polygon, bsc]
const projectId = 'fe62b424c4ab666f47d64744e0b3dca0'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)
//----------------------------------------------------


const navigation = [
  { name: 'Developers', href: '#Developer', current: false },
  { name: 'Tokenomics', href: '#Tokenomics', current: false },
  { name: 'Roadmap', href: '#Roadmap', current: false },
  { name: 'Whitepaper ', href: '#', current: false },
  {name: 'Staking', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const navigate = useNavigate();

  function gotoLanding(){
    navigate('/', { replace: true });
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 pt-2 fixed inset-x-0 z-10" style={{backgroundColor: "#00000077"}}>
      {({ open }) => (
        <>
          <div className="max-w-7x px-4 sm:px-8 lg:px-12">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden" style={{width: "120px"}}>
                <img src={logo} style={{minWidth: "120px", maxWidth: "120px"}}></img>
              </div>
              {/*Connect button for responsive */}
              
              {/* <div className="absolute inset-y-0 right-16 flex items-right items-center  lg:hidden"> 
                  <WagmiConfig client={wagmiClient}>
                    <Web3Button className="wallet_connect" label="Connect" accentColor="blueviolet" style={{ width: "120px"}}/> 
                  </WagmiConfig>
                  <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
              </div> */}
              
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                <Disclosure.Button style={{marginRight: "1px"}} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start hover:cursor-pointer" onClick={gotoLanding}>
                {/* Normal navigation*/}
                <div className="flex flex-shrink-0 items-center _lg:hidden">
                  <img
                    className="block h-16 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                    // style={{width: "150px", height: "60px"}}
                  />
                  <img
                    className="hidden h-16 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                    // style={{width: "150px", height: "60px"}}
                  />
                </div>
                <div className="hidden sm:ml-6 lg:block w-full pt-2">
                  <div className="flex flex-row justify-center items-center space-x-4 text-center" style={{justifyContent: "end"}}>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={gotoLanding}
                        style={{fontWeight: "bold"}}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white font-bold': 'font-bold text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <> {/* connect button */}
                      <WagmiConfig client={wagmiClient}>
                        <Web3Button accentColor="blueviolet"/>
                      </WagmiConfig>
                    </>
                  </div>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 _lg:hidden">
                <a className='text-gray-500 text-xl pr-5'>|</a>
                <a href="#" className='text-white text-sm pr-5'>Login</a>
                <a href="#" className='text-center text-white px-0 py-2 rounded-md mx-1 text-sm' style={{backgroundColor: "#662483", width: "130px"}}>Create an account</a>                                
              </div> */}
              {/* <div className='focus:ring-4 focus:outline-none focus:ring-spring-green-800 group-hover:from-spring-green-400 group-hover:to-cerulean-600 text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg group bg-gradient-to-br from-primary-500 via-primary-600 to-blue-500  text-white min-w-fit font-bold text-base hover:from-blue-500 hover:via-primary-600 hover:to-primary-500  hover:cursor-pointer '>
                  <span className='bg-opacity-0 hover:bg-opacity-20 relative px-5 py-2.5 transition-all ease-in duration-75 bg-ebony-clay-500 rounded-md flex flex-row font-bold min-w-fit items-center'>
                          Launchpad
                  </span>
              </div> */}
            </div>
          </div>
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          <Disclosure.Panel className="lg:hidden w-full">
            <div className="space-y-1 px-2 pb-3 pt-2 overflow">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={gotoLanding}
                  style={{fontWeight: "bold"}}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white font-bold' : 'font-bold text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Web3Button className="wallet_connect" label="Connect" accentColor="blueviolet" style={{ width: "120px"}}/>
            </div>
          </Disclosure.Panel>
          
        </>
      )}
    </Disclosure>
  )
}
