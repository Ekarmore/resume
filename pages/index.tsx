import Image from 'next/image'
import Head from 'next/head'
import avatar from "../public/Avatar.webp";
import MdiGithub from '../components/MdiGithub'
import IcOutlineArrowOutward from '../components/IcOutlineArrowOutward'
export default function resume() {
  return (
    <div className='p-5 flex flex-col md:grid md:grid-cols-10 md:gap-10 h-screen leading-8'>
      <Head>
        <title> Resume | ekar </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="icon" type='image' href="../public/Avatar.webp" /> */}
      </Head>
      <section className=' lg:col-span-3 md:col-span-4 md:col-start-1 lg:col-start-1 p-5  flex flex-col flex-wrap items-center'>
        <Image alt='my avatar' width={140} className='scale-1.5 rounded-full' placeholder='blur' src={avatar} />
        <p className='font-bold text-2xl mt-2'>依克买提</p>
        <span>前端开发</span>
        <a href='mailto:earthb0y@outlook.com' className='text-xs border-b border-dotted'>earthb0y@outlook.com</a>
      </section>
      <article className='md:col-span-6 xl:col-span-5 md:col-start-5 lg:col-start-4 md:p-5 '>
          <section className='mb-5 '>
          <h4 className='w-20 pl-2 mb-2 text-base font-extrabold bg-black text-white'>关于我</h4>
            <p className='p-5'>你好，我叫依克买提，一名前端开发，我对于编程的追求是用良好的用户界面以及优秀的交互体验实现有趣的想法。我追求所构建出的软件的体验以及架构和代码质量是上乘的。</p>
            <p className='pl-5'>作为一名开源社区和知识共享的受益者，我也希望并试图用自己微薄的力量作为回馈，平常我会将我所构建出的程序都开源出来与人共享，以能够像我被帮助到那样帮助到他人，这让我感觉到编程和开源的意义。</p>
          </section>
          <section className='mb-5 ' >
            <h4 className='w-24 pl-2 mb-2 text-base font-extrabold bg-black text-white' >教育经历</h4>
            <div className='p-5'>
              <p className='font-extrabold text-xs' >2018-2022</p>
              <span className='font-sans font-bold'>广东工业大学</span><span className='ml-2 font-sans font-bold'>网络工程</span>
            </div>
          </section>
          <section className='mb-5 ' >
            <h4 className='w-24 pl-2 mb-2 text-base font-extrabold bg-black text-white' >工作经历</h4>
            <div className='p-5'>
              <p className='font-extrabold text-xs' >2019-2021</p>
              <span className='font-sans font-bold'>Night's Watch 工作室</span><span className='ml-2 font-sans font-bold'>前端开发</span>
            </div>
          </section>
          <section className='mb-5' >
            <h4 className='w-20 pl-2 mb-2 text-base font-sans font-extrabold bg-black text-white' >技术栈</h4>
            <div className='p-5'>
              <div>
              <span className='font-sans font-bold mr-3'>前端</span><span className='break-all'>JavaScript,TypeScript,Vue,Nuxt,Vite,React,Next,TailWindCSS,UnoCSS,GSAP</span>
              </div>
              <div className='Stack'>
              <span className='font-sans font-bold mr-3'>后端</span><span>Node,mongoDB,MySQL</span>
              </div>
              <div className='Stack'>
              <span className='font-sans font-bold mr-3'>运维</span><span>阿里云,Netlify</span>
              </div>
              <div className='Stack'>
              <span className='font-sans font-bold mr-3'>设计</span><span>Figma,framer</span>
              </div>
            </div>
          </section>
          <section className='mb-5'>
            <h1 className='w-14 pl-2 mb-2 text-base font-extrabold bg-black text-white' >项目</h1>
            <div className='flex flex-col md:grid md:grid-cols-2 md:gap-10 p-5'>
              <div className='col-span-1 flex-wrap mb-2'>
              <div className='flex items-center'>
              <span className='projectTitle font-sans'>Aggr</span>
              <a target="_blank" href="https://github.com/Ekarmore/Aggr" rel="noreferrer"><MdiGithub className='ml-2' /></a>
              <a target="_blank" href="https://aggr.ekar.site" rel="noreferrer"><IcOutlineArrowOutward className='ml-2' /></a>
              </div>
              <span className='text-sm text-gray-500'>一个界面简洁支持i18n的聚合搜索引擎，可以让用户快速指定引擎并且进行搜索跳转</span>
              <span className='text-sm text-gray-500'>Vue3/Vite3/TailWindCss/UnoCSS</span>
              </div>
              <div className='col-span-1 mb-2'>
              <div className='flex items-center'>
              <span className='projectTitle font-sans'>Aggr</span>
              <a target="_blank" href="https://github.com/Ekarmore/Aggr" rel="noreferrer"><MdiGithub className='ml-2' /></a>
              <a target="_blank" href="https://aggr.ekar.site" rel="noreferrer"><IcOutlineArrowOutward className='ml-2' /></a>
              </div>
              <span className='text-sm text-gray-500'>一个聚合搜索引擎，可以让用户快速指定引擎并且进行跳转</span>
              <span className='text-sm text-gray-500'>Vue3/TailWindCss/Unocss</span>
              </div>
              <div className='col-span-1  mb-2'>
              <div className='flex items-center'>
              <span className='projectTitle font-sans'>Ekar-template</span>
              <a target="_blank" href="https://github.com/Ekarmore/ekar-template" rel="noreferrer"><MdiGithub className='ml-2' /></a>
              <a target="_blank" href="https://ekartemplate.netlify.app" rel="noreferrer"><IcOutlineArrowOutward className='ml-2' /></a>
              </div>
              <span className='text-sm text-gray-500'>一个简洁美观的摄影师个人网站开始模板</span>
              <span className='text-sm text-gray-500'>Nuxt3/Vite/UnoCSS</span>
              </div>
            </div>
          </section>
          <div className='text-center mb-5 md:m-0'>
            <a className='text-xs border-b border-dotted border-dark-200 text-gray-500' target='_blank' href="Resume.pdf" rel="noreferrer">PDF版本</a>
          </div>
      </article>
    </div>
  )
}
