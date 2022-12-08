import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='relative'>
<section className='top-10 left-40 fixed'>
      <p  pt-5 text-xl font-extrabold font-mono>依克买提</p>
      <span text-sm op-80>前端开发</span>
      <div className='pt-4 flex items-center'><span className='text-xs border-b border-b-dashed'>earthb0y@outlook.com</span></div>
    </section>
     <article  className='mx-auto w-1/3 h-screen mt-12'>
       <section>
       <p font-sans w-12 text-white text-sm p-1 bg-black>关于我</p>
       <div pt-5>
       <p font-sans>你好,我是依克买提,一名前端开发,</p>
       </div>
       <div mt-5>
       <p font-mono w-16 text-white text-sm p-1 bg-black>教育经历</p>
       <div pt-5>
       <p font-sans font-bold>2018-2022</p><span>广东工业大学</span><span> 网络工程</span>
       </div>
       </div>
       </section>
     </article>
    </div>
       )
}
