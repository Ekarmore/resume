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
          <div className='mb-5'>
          <h4 className='w-auto pl-2 mb-2 text-lg font-extrabold bg-black text-white'>关于我</h4>
            <p >你好,我是依克买提,一名前端开发,我对于编程的喜好是用良好的用户界面以及交互体将有意思的想法实现</p>
          </div>
          <div className='mb-5' >
            <h4 className='w-auto pl-2 mb-2 text-lg font-extrabold bg-black text-white' >教育经历</h4>
            <div >
              <p className='font-extrabold' >2018-2022</p>
              <span>广东工业大学</span><span className='ml-2'>网络工程</span>
            </div>
          </div>
          <div className='mb-5'>
            <h1 className='w-auto pl-2 mb-2 text-lg font-extrabold bg-black text-white' >项目</h1>
            <div >
              <p className='font-extrabold' >Aggr聚合搜索引擎</p>
              <p className='font-extrabold' >Ekar-Template</p>
            </div>
          </div>
          <div>
            <a href="resume.pdf">PDF Version</a>
          </div>
        </section>
      </article>
    </div>
  )
}
