/* https://lorwatch.vercel.app/ */

import * as React from 'react'
import '../css/react-base.css'
import '../css/animations.css';
import '../css/second_section.css';
import '../css/roadmap.css';
import '../css/real_roadmap.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Landing () {

    return (
      <div className="App">
        <Navbar />

        <div className='relative h-full pt-6' style={{backgroundColor: "#1F2633"}}>
          <div className='mt-6 flex h-full flex-col items-center relative'>
              {/* Background */}
              
              <img className='absolute top-0' src="https://raydium.io/backgroundImages/home-bg-element-1.png"></img>
              {/* FirstSection Content */}
              <div className='first_section relative px-4 sm:px-6 flex flex-col justify-center items-center w-full' style={{height: "1000px"}}>
                <div className="absolute inset-0">
                  <video autoPlay loop muted className="absolute h-full w-full object-cover">
                    <source src="img/hero.webm" type="video/webm"></source>
                  </video>
                </div>
                {/* Title */}
                <h1 className='rounded-lg bg-ebony-clay-500/70 text-4xl text-left only:font-extrabold tracking-tight text-white sm:text-6xl sm:leading-none xl:text-6xl'>
                  Multi-Chain&nbsp;
                  <span className='bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent '>Solutions&nbsp;</span>
                  <span className='text-primary-400 '>For&nbsp;</span>
                  <div className='flex justify-center bg-gradient-to-r from-primary via-white to-white bg-clip-text text-transparent '>Every Crypto Asset</div>
                </h1>
                {/* SubTitle */}
                <p className='text-center mt-6 rounded-lg bg-ebony-clay-500/70 text-2xl text-left text-gray-300 lg:text-3xl xl:text-3xl'>The ultimate dao-driven inter-blockchain hub for web3.0</p>
                {/* Buttons */}
                <div className='mt-5 w-full sm:max-w-lg lg:ml-0'>
                  <div className='mt-24 items-center gap-5 flex justify-center text-white'>
                    <a href="#">
                      <div className='focus:ring-4 focus:outline-none focus:ring-spring-green-800 group-hover:from-spring-green-400 group-hover:to-cerulean-600 text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-lg group bg-gradient-to-br from-primary-500 via-primary-600 to-blue-500  text-white min-w-fit font-bold text-base hover:from-blue-500 hover:via-primary-600 hover:to-primary-500  hover:cursor-pointer '>
                        <span className='bg-opacity-0 hover:bg-opacity-20 relative px-5 py-2.5 transition-all ease-in duration-75 bg-ebony-clay-500 rounded-md flex flex-row font-bold min-w-fit items-center'>
                          Launch App
                        </span>
                      </div>
                    </a>
                    {/* <div className='mt-7 sm:mt-0 sm:pl-0 _md:mt-0'>
                      <a className='text-base mr-2 font-bold underline underline-offset-4' href="#">Documentation</a>
                    </div> */}
                  </div>
                </div>
              </div>
              
              {/* SecondSection Content */}
              <div className='relative flex flex-col justify-center items-center w-full h-full'>
                <img src="https://raydium.io/backgroundImages/home-bg-element-3.png" className='absolute top-0' style={{top: "0%", width: "100%"}}></img>
                <p className='text-white text-4xl font-bold pt-36'>How to participate</p>
                <div className="second_section">
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <h2>01</h2>
                        <h3>Submit KYC</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <h2>02</h2>
                        <h3>Verify Wallet</h3>
                        <p>Popular belief Ipsum is not simply random text. It has roots in a piece of classical</p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <h2>03</h2>
                        <h3>Start Staking</h3>
                        <p>Belief norem Isum is not simply random text. It has roots in a piece of classical?</p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roadmap */}
              {/* Title */}
              <div id="Developer" className='relative mb-8 pt-32'>
                <div className='text-4xl text-white font-bold'>Developer</div>
              </div>
              <div className='relative flex flex-col justify-center items-center w-full h-full'>
                {/* <img src="https://raydium.io/backgroundImages/home-bg-element-3.png" className='absolute top-0' style={{top: "-60%", width: "100%"}}></img> */}

                <div className="box-container m-auto">
                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/1.jpg" className='absolute top-0 left-0 h-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                        <div className='text-white text-2xl text-left pl-4'>Mr.Versace</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Project Lead</div>
                          <div className='flex flex-row justify-end'>
                            <a href="https://t.me/thebabyborn" target="_blank"><img className='pr-6' src="https://app.mopots.io/static/media/telegram.f3a1d66a4ba10831f07f86c58b8d8394.svg"></img></a>
                            <a href="https://twitter.com/thebabyborn" target="_blank"><img className='pr-5' src="https://app.mopots.io/static/media/twitter.7fdc99d9abf21c3334b63a1274630fde.svg"></img></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/frbd9towf/cta-2.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/2.jpg" className='absolute top-0 left-0 h-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                        <div className='text-white text-2xl text-left pl-4'>Mr.Velaso</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Admin</div>
                          <div className='flex flex-row justify-end'>
                            <a href="https://t.me/thebabyborn" target="_blank"><img className='pr-6' src="https://app.mopots.io/static/media/telegram.f3a1d66a4ba10831f07f86c58b8d8394.svg"></img></a>
                            <a href="https://twitter.com/thebabyborn" target="_blank"><img className='pr-5' src="https://app.mopots.io/static/media/twitter.7fdc99d9abf21c3334b63a1274630fde.svg"></img></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/l2q9ujy4f/cta-4.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/3.jpg" className='absolute top-0 left-0 h-full w-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                        <div className='text-white text-2xl text-left pl-4'>Jyax</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Moderator</div>
                          <div className='flex flex-row justify-end'>
                            <a href="https://t.me/thebabyborn" target="_blank"><img className='pr-6' src="https://app.mopots.io/static/media/telegram.f3a1d66a4ba10831f07f86c58b8d8394.svg"></img></a>
                            <a href="https://twitter.com/thebabyborn" target="_blank"><img className='pr-5' src="https://app.mopots.io/static/media/twitter.7fdc99d9abf21c3334b63a1274630fde.svg"></img></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/hj4c4qnov/cta-3.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  <div className="box-item">
                  <div className="flip-box">
                    <div className="flip-box-front text-center relative">
                      <img src="img/4.jpg" className='absolute top-0 left-0 h-full'></img>
                      <div className="absolute w-full h-1/4 color-white" style={{top:"75%", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                        <div className='text-white text-2xl text-left pl-4'>Mr.Edestuss</div>
                        <div className='text-white text-base text-right pr-4 flex flex-row justify-between'>
                          <div className='text-white text-base text-left pl-4'>Designer</div>
                          <div className='flex flex-row justify-end'>
                            <a href="https://t.me/thebabyborn" target="_blank"><img className='pr-6' src="https://app.mopots.io/static/media/telegram.f3a1d66a4ba10831f07f86c58b8d8394.svg"></img></a>
                            <a href="https://twitter.com/thebabyborn" target="_blank"><img className='pr-5' src="https://app.mopots.io/static/media/twitter.7fdc99d9abf21c3334b63a1274630fde.svg"></img></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box-back text-center" style={{backgroundImage: "url('https://s25.postimg.cc/l2q9ujy4f/cta-4.png')"}}>
                      <div className="inner color-white">
                        <button className="flip-box-button">Learn More</button>
                      </div>
                    </div>
                  </div>
                  </div>

              </div>
              </div>
          </div>
        </div>

        {/* Tokenomics */}
        <div id="Tokenomics" className='flex flex-col justify-center items-center pt-20 pb-32'>
          <div>
            <div className='relative font-bold text-3xl text-white pb-10'>TOKENOMICS</div>

            <div className='tokenomics' style={{width: "1000px"}}>
              <div className='flex flex-row _lg:flex-col w-full _lg:pl-10'>
              <div className='flex flex-col' style={{width: "5%"}}>
                <div className='text-gray-600 text-lg font-bold'>Team</div>
                <div className='text-white text-lg font-bold'>5%</div>
                <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.2)"}}></div>
              </div>
              <div className='flex flex-col' style={{width: "5%"}}>
                <div className='text-gray-600 text-lg font-bold'>Sale</div>
                <div className='text-white text-lg font-bold'>5%</div>
                <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.3)"}}></div>
              </div>
              <div className='flex flex-col' style={{width: "10%"}}>
                <div className='text-gray-600 text-lg font-bold'>Burning</div>
                <div className='text-white text-lg font-bold'>10%</div>
                <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.4)"}}></div>
              </div>
              <div className='flex flex-col' style={{width: "10%"}}>
                <div className='text-gray-600 text-lg font-bold'>Reward</div>
                <div className='text-white text-lg font-bold'>10%</div>
                <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.5)"}}></div>
              </div>
              <div className='flex flex-col' style={{width: "20%"}}>
                <div className='text-gray-600 text-lg font-bold'>Marketing</div>
                <div className='text-white text-lg font-bold'>20%</div>
                <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.6)"}}></div>
              </div>
              <div className='flex flex-col' style={{width: "20%"}}>
                <div className='text-gray-600 text-lg font-bold'>Liquidity</div>
                <div className='text-white text-lg font-bold'>20%</div>
                <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.6)"}}></div>
              </div>
              <div className='flex flex-col' style={{width: "30%"}}>
                <div className='text-gray-600 text-lg font-bold'>Fair Launch</div>
                <div className='text-white text-lg font-bold'>30%</div>
                <div className='h-14 w-full' style={{backgroundColor: "rgba(109, 74, 254, 0.7)"}}></div>
              </div>
              </div>
            </div>

            <div className='grid grid-cols-4 pt-10'>
              <div className='flex flex-col'>
                <p className='text-purple-600 text-2xl font-bold'>386</p>
                <p className='text-white text-lg font-bold'>Funded Projects</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-purple-600 text-2xl font-bold'>486</p>
                <p className='text-white text-lg font-bold'>Unique Participants</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-purple-600 text-2xl font-bold'>$9M+</p>
                <p className='text-white text-lg font-bold'>Raised Capital</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-purple-600 text-2xl font-bold'>$18M+</p>
                <p className='text-white text-lg font-bold'>Inital Mark Cap</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        {/* Title */}
        <div id="Roadmap" className='relative mb-8 pt-10'>
          <div className='text-4xl text-white font-bold'>Roadmap</div>
        </div>
        {/* Cards */}
        {/* <div className="relative flex justify-center items-center pb-10">
        <div className='grid gap-20 grid-cols-3 _md:grid-cols-1 _sm:grid-cols-1 _lg:grid-cols-1'>
          <div className='Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl _md:w-full _sm:w-full'>
            <div className='frosted-glass-teal p-3 mb-3 rounded-xl flex justify-center'>
              <div className='Icon grid h-max w-max'>
                <img src="img/1.jpg" className='select-none' style={{maxWidth:"200px"}}></img>
              </div>
            </div>
            <div className='font-semibold text-2xl text-white mb-2'>Phase 1</div>
            <div className='font-light text-lg text-[#c4d6ff] mb-5 text-left'>
            1. Grow 10K Community <br></br>
            2. Launch TBB Site V1<br></br>
            3. Presale TBB Token<br></br>
            4. Listing On PancakeSwap, CMC or CGK<br></br>
            5. Launch Staking TBB token<br></br>
            6. Marketing Campaign and Partnership<br></br>
            </div>

          </div>
          <div className='Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl _md:w-full _sm:w-full'>
            <div className='frosted-glass-teal p-3 mb-3 rounded-xl flex justify-center'>
              <div className='Icon grid h-max w-max'>
                <img src="img/2.jpg" className='select-none' style={{maxWidth:"200px"}}></img>
              </div>
            </div>
            <div className='font-semibold text-2xl text-white mb-2'>Phase 2</div>
            <div className='font-light text-lg text-left text-[#c4d6ff] mb-5'>
            1. Launch TBB NFT<br></br>
            2. Presale / Minting NFT<br></br>
            3. Launch TBB NFT MarketPlace<br></br>
            4. Launch TBB Site V2<br></br>
            5. Launch Staking TBB NFT<br></br>
            6. Multichain Launch<br></br>
            </div>
          </div>
          <div className='Card flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl _md:w-full _sm:w-full'>
            <div className='frosted-glass-teal p-3 mb-3 rounded-xl flex justify-center'>
              <div className='Icon grid h-max w-max'>
                <img src="img/4.jpg" className='select-none' style={{maxWidth:"200px"}}></img>
              </div>
            </div>
            <div className='font-semibold text-2xl text-white mb-2'>Phase 3</div>
            <div className='font-light text-lg text-[#c4d6ff] mb-5 text-left'>
            1. Growing more usecase for TBB token<br></br> ( Will be taken from community voting )<br></br>
            3. Audited by Certik<br></br>
            2. CEX Listing<br></br>
            </div>
          </div>
        </div>
        </div> */}
        <div className='flex flex-row _lg:flex-col justify-center'>
        <div class="roadmap_card rgb">
          <div class="card-image" ></div>
          <div class="card-text">
            <h2>Phase 1</h2>
            <div className='text-gray-500 text-sm'>
              1. Grow 10K Community<br></br>
              <p style={{color: "white"}}>2. Launch TBB Site V1</p>
              3. Presale TBB Token<br></br>
              4. Listing On PancakeSwap, CMC or CGK<br></br>
              5. Launch Staking TBB token<br></br>
              6. Marketing Campaign and Partnership<br></br>
            </div>
          </div>
        </div>
        <div class="roadmap_card">
          <div class="card-image card2"></div>
          <div class="card-text card2">
            <h2>Phase 2</h2>
            <div className='text-gray-500 text-sm'>
              1. Launch TBB NFT<br></br>
              2. Presale / Minting NFT<br></br>
              3. Launch TBB NFT MarketPlace<br></br>
              4. Launch TBB Site V2<br></br>
              5. Launch Staking TBB NFT<br></br>
              6. Multichain Launch<br></br>
            </div>
          </div>
        </div>
        <div class="roadmap_card">
            <div class="card-image card3"></div>
            <div class="card-text card3">
              <h2>Phase 3</h2>
              <div className='text-gray-500 text-sm'>1. Growing more usecase for TBB token ( Will be taken from community voting )<br></br>
                 2. CEX Listing<br></br>
                 3. Audited by Certik<br></br>
              </div>
            </div>
        </div>
        </div>

        {/* footer */}
        <div className='footer py-12 flex justify-center border border-gray-800'>
          <div className='text-left grid grid-cols-3 _lg:grid-cols-1 _md:grid-cols-1 _sm:grid-cols-1'>
            <div className='footer_email flex justify-center items-center _md:m-auto'>
              <div className='footerLogo flex flex-col pb-5 py-5'>
                <img className='items-start' src="img/logo.png" style={{width: "94px", height:"94px"}}></img>
                <div className='flex flex-row footer_email pt-5'>
                  <input type="text" placeholder='Enter email' className='mr-2' style={{width: "261px", backgroundColor: "#1F2633"}}></input>
                  <div className='focus:ring-4 focus:outline-none focus:ring-spring-green-800 group-hover:from-spring-green-400 group-hover:to-cerulean-600 hover:text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#1FD992] to-[#249CD2]  text-white min-w-fit hover:cursor-pointer leading-6'>
                    <span className='group-hover:bg-opacity-0 relative px-5 py-2.5 transition-all ease-in duration-75 bg-ebony-clay-500 rounded-md flex flex-row font-bold min-w-fit items-center'>Subscribe</span>
                  </div>
                </div>
                <a href="#" className='text-center text-gray-300 px-1 py-1 mt-4 rounded-md mx-1 border border-gray-600 text-sm' style={{backgroundColor: "#1F2633", width: "117px"}}>English (US)&nbsp;˅</a>
              </div>
            </div>
            
            <div className='flex flex-row justify-center _md:text-center'>
              <div className='footerLink pr-24 py-5'>
                <p className='text-sm text-gray-300 font-bold py-2'>General</p>
                <p className='text-sm text-gray-400 py-1'>About</p>
                <p className='text-sm text-gray-400 py-1'>Blog</p>
                <p className='text-sm text-gray-400 py-1'>Contact us</p>
                <p className='text-sm text-gray-400 py-1'>Support</p>
                <p className='text-sm text-gray-400 py-1'>Community</p>
              </div>

              <div className='footerLink py-5'>
                <p className='text-sm text-gray-300 font-bold py-2'>Legal</p>
                <p className='text-sm text-gray-400 py-1'>Terms & conditions</p>
                <p className='text-sm text-gray-400 py-1'>Privacy policy</p>
                <p className='text-sm text-gray-400 py-1'>Cookie policy</p>
              </div>
            </div>

            <div className='flex justify-center flex-col items-center pt-5'>
              <p className='text-sm text-gray-300 font-bold py-2'>Follow us</p>
              <div className='flex flex-row py-1 justify-start'>
                  <a href="https://t.me/thebabyborn" target="_blank"><img className='pr-6' src="https://app.mopots.io/static/media/telegram.f3a1d66a4ba10831f07f86c58b8d8394.svg"></img></a>
                  <a href="https://twitter.com/thebabyborn" target="_blank"><img className='pr-5' src="https://app.mopots.io/static/media/twitter.7fdc99d9abf21c3334b63a1274630fde.svg"></img></a>
                  <a href="https://medium.com/@babybornlabs" target="_blank"><img src="https://app.mopots.io/static/media/medium.88b1df0cd4fba32a91140609053abfce.svg"></img></a>
              </div>
              <div className='text-sm text-gray-400 py-3'>
                  Copyright 2023 Lorchain All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Landing;
