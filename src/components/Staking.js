/* https://lorwatch.vercel.app/ */

import * as React from 'react'
import '../css/react-base.css'
import '../css/animations.css';
import '../css/second_section.css';
import '../css/roadmap.css';
import '../css/real_roadmap.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Staking () {

    return (
      <div className="App">
        <Navbar name="Staking" />

        <div className='relative h-full pt-6' style={{backgroundColor: "#1F2633"}}>
          <div className='mt-6 flex h-full flex-col items-center relative'>
              <div className='first_section relative px-4 sm:px-6 flex flex-col justify-center items-center w-full' style={{height: "1000px"}}>
        
                {/* Staking */}
                <div className="roadmap_card rgb pt-4 px-4 flex flex-col" style={{width: "400px", height: "600px", backgroundColor: "rgba(0,0,0,0.9)"}}>
                    <div className='text-white text-xl font-bold my-5' style={{height: "30px"}}>Pepe Born</div>
                    <div><img src="img/head_logo.png" style={{width: "150px", height:"50px"}}></img></div>
                    
                    <div id='devote' className='my-5 flex justify-center tabcontent' style={{height: "350px"}}>
                        <div className='border border-gray-700 p-4 rounded-xl' style={{backgroundColor: "#1A1530"}}>
                            <div className='flex flex-row justify-between'>
                                <div className='text-gray-400 flex flex-row items-center text-sm'>
                                    <p className='pr-1'>Locked Amount</p>
                                </div>
                                <div className='text-gray-400 text-sm'>
                                    MIN
                                </div>
                            </div>
                            <div className='py-2'>
                                <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='20000'></input>
                            </div>
                            <div className='py-3 flex flex-row'>
                                <div className='flex flex-col w-1/2 mr-2'>
                                    <p className='text-gray-400 text-sm pb-2 text-left'>Lock date</p>
                                    <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='2/02/2022'></input>
                                </div>
                                <div className='flex flex-col w-1/2'>
                                    <p className='text-gray-400 text-sm pb-2 text-left'>Unlock date</p>
                                    <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='2/02/2022'></input>
                                </div>
                            </div>
                            <div className='flex flex-row items-center py-3'>
                                <p className='text-gray-400 text-sm pr-1'>Claim</p>
                                <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='3,000,000'></input>
                            </div>
                            <div className='w-full my-2 py-3 rounded-md text-white lorswap_vote text-center'>
                                Stake
                            </div>
                        </div>
                    </div>

                    <div>Total Staked Pepe Born: 1,200,000</div>
                    <div>Deposit Fee: 0.2%</div>
                </div>
              </div>
            </div>
        </div> 

        {/* footer */}
        <div className='footer py-12 flex justify-center  relative' style={{height: "300px"}}>
           <video autoPlay loop muted className="absolute h-full w-full border border-gray-600" style={{ objectFit: 'cover', height: '240px' }}>
              <source src="https://belaunch.io/assets/bg.206574b5.mp4" type="video/mp4"></source>
          </video> 

          <div className='text-left grid grid-cols-3 _lg:grid-cols-1 _md:grid-cols-1 _sm:grid-cols-1 relative'  style={{width: "1440px"}}>
            <div className='footer_email flex justify-center items-center _md:m-auto'>
              <div className='footerLogo flex flex-col pb-5 py-5'>
                <img className='items-start' src="img/head_logo.png" style={{width: "200px", height:"80px"}}></img>
                <div className='flex flex-row footer_email pt-5'>
                  <input type="text" placeholder='Enter email' className='mr-2' style={{width: "240px", backgroundColor: "#1F2633", height: "40px"}}></input>
                  <div className='focus:ring-4 focus:outline-none focus:ring-spring-green-800 group-hover:from-spring-green-400 group-hover:to-cerulean-600 hover:text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#1FD992] to-[#249CD2]  text-white min-w-fit hover:cursor-pointer leading-6'>
                    <span className='group-hover:bg-opacity-0 relative px-5 py-1 transition-all ease-in duration-75 bg-ebony-clay-500 rounded-md flex flex-row font-bold min-w-fit items-center'>Subscribe</span>
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
            </div>
          </div>
        </div>
        <div className='text-sm text-gray-400 py-1'> Copyright 2023 Pepe born All rights reserved </div>
      </div>
    );
}

export default Staking;
