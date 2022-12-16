import Image from 'next/image'
import Head from 'next/head'
import avatar from "../public/Avatar.webp";
import { useState } from 'react';
export default function resume() {
  return (
    <div className='relative'>
      <Head>
        <title> Resume | ekar </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" type='image' href="../public/Avatar.webp" /> */}
      </Head>
      <section className='mx-auto flex flex-col flex-wrap w-78 justify-center items-center md:top-10 md:left-24 md:fixed'>
        <Image alt='my avatar' width={140} className='scale-1.5 rounded-full' placeholder='blur' src={avatar} />
        <p className='font-bold text-2xl'>依克买提</p>
        <div >前端开发</div>
        <div className='flex items-center'><div className='text-xs border-b border-b-dashed'>earthb0y@outlook.com</div></div>
      </section>
      <article className='mx-auto w-1/4 mt-24'>
        <section>
          <p className='text-lg font-bold'>关于我</p>
          <div>
            <p >你好,我是依克买提,一名前端开发,</p>
          </div>
          <div >
            <p >教育经历</p>
            <div >
              <p >2018-2022</p><span>广东工业大学</span><span> 网络工程</span>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
