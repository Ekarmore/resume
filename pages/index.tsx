import Image from 'next/image'
import Head from 'next/head'
import avatar from "../public/Avatar.webp";
export default function resume() {
  return (
    <div className='p-5 flex flex-col md:grid md:grid-cols-8 md:gap-10 h-screen leading-7'>
      <Head>
        <title> Resume | ekar </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" type='image' href="../public/Avatar.webp" /> */}
      </Head>
      <section className=' md:col-span-2 p-5  flex flex-col flex-wrap items-center'>
        <Image alt='my avatar' width={140} className='scale-1.5 rounded-full' placeholder='blur' src={avatar} />
        <p className='font-bold text-2xl mt-2'>依克买提</p>
        <span>前端开发</span>
        <a href='mailto:earthb0y@outlook.com' className='text-xs border-b border-dotted'>earthb0y@outlook.com</a>
      </section>
      <article className='md:col-span-5 md:p-5 '>
          <section className='mb-5 '>
          <h4 className='w-20 pl-2 mb-2 text-base font-extrabold bg-black text-white'>关于我</h4>
            <p className='p-5'>你好，我是依克买提，一名前端开发，我对于编程的喜好是用良好的用户界面以及优秀的交互体让有趣的想法成为现实。</p>
          </section>
          <section className='mb-5 ' >
            <h4 className='w-24 pl-2 mb-2 text-base font-extrabold bg-black text-white' >教育经历</h4>
            <div className='p-5'>
              <p className='font-extrabold text-sm' >2018-2022</p>
              <span className='font-sans font-bold'>广东工业大学</span><span className='ml-2 font-sans font-bold'>网络工程</span>
            </div>
          </section>
          <section className='mb-5 ' >
            <h4 className='w-20 pl-2 mb-2 text-base font-extrabold bg-black text-white' >技术栈</h4>
            <div className='p-5'>
              <div className='Stack'>
              <span className='font-sans font-bold mr-3'>前端</span><span className='break-all'>JavaScript,TypeScript,Vue,Nuxt,Vite,React,Next,TailWindCSS,WindiCSS,UnoCSS</span>
              </div>
              <div className='Stack'>
              <span className='font-sans font-bold mr-3'>后端</span><span>Node,mongoDB,MySQL</span>
              </div>
              <div className='Stack'>
              <span className='font-sans font-bold mr-3'>运维</span><span>阿里云,Netlify</span>
              </div>
              <div className='Stack'>
              <span className='font-sans font-bold mr-3'>设计</span><span>Figma</span>
              </div>
            </div>
          </section>
          <section className='mb-5 '>
            <h1 className='w-14 pl-2 mb-2 text-base font-extrabold bg-black text-white' >项目</h1>
            <div className='flex flex-col md:grid md:grid-cols-8 md:gap-10 p-5'>
              <div className='col-span-3 flex-wrap mb-2'>
              <h4 className='projectTitle mb-2 font-sans' >Aggr</h4>
              <span className='text-sm text-gray-500'>一个聚合搜索引擎，可以让用户快速指定引擎并且进行跳转</span>
              <span className='text-sm text-gray-500'>Vue3/TailWindCss/Unocss</span>
              </div>
              <div className='col-span-3 col-start-5 mb-2'>
              <h4 className='projectTitle mb-2 font-sans' >Ekar-Template</h4>
              <span className='text-sm text-gray-500'>一个聚合搜索引擎，可以让用户快速指定引擎并且进行跳转</span>
              <span className='text-sm text-gray-500'>Vue3/TailWindCss/Unocss</span>
              </div>
              <div className='col-span-3  mb-2'>
              <h4 className='projectTitle mb-2 font-sans' >Ekar-Template</h4>
              <span className='text-sm text-gray-500'>一个聚合搜索引擎，可以让用户快速指定引擎并且进行跳转</span>
              <span className='text-sm text-gray-500'>Vue3/TailWindCss/Unocss</span>
              </div>
            </div>
          </section>
          <div>
            <a href="resume.pdf">PDF Version</a>
          </div>
      </article>
    </div>
  )
}
