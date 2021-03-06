import TypingText from './typingText';
import { FaSlackHash, FaDiscourse, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row items-center justify-center px-8 md:px-16 py-16 bg-gray-200'>
        <h2 className='md:my-8 text-5xl lg:text-6xl text-gray-800 text-center md:text-left leading-tight'>
          Supporting software developers serving Native communities{' '}
        </h2>
        <img src='computer.svg' className='w-64 lg:w-1/4' />
      </div>

      <div className='flex flex-col md:flex-row bg-white px-8 md:px-16 leading-relaxed text-gray-800'>
        <div className='lg:w-1/2 md:w-3/4 w-full'>
          <h2 className='font-bold mb-3 text-4xl text-gray-800'>
            <TypingText />
          </h2>
          <p className='mb-6 text-gray-800 text-2xl'>
            Welcome 👋.{' '}
            <span className='text-blue-500 font-bold'>
              Natives in Tech is a coalition of Native and non-Native software
              developers whose goal is to support software application
              development that reinforces Native beliefs, knowledge, and
              identity.
            </span>
            This is achieved through four initiatives: networking with aspiring
            and experienced developers alike, creating a strong social media
            presence on platforms familiar to developers, hosting a yearly
            Natives in Tech conference, and building open source software that
            Native peoples can use to cultivate healthy online communities.
          </p>
          <p className='mb-6 text-gray-800 text-2xl'>
            Natives in Tech is a US 501(c)(3) charitable organization, funded by
            individual donations.
          </p>
        </div>
      </div>

      <div className='flex flex-col mx-auto bg-gray-200 px-8 md:px-16 py-16 text-gray-800'>
        <p className='text-6xl mx-auto py-8 text-bold text-center'>
          Connect with us!
        </p>
        <div className='flex flex-row py-8 justify-around w-full md:w-7/12 mx-auto text-teal-500'>
          {[
            { icon: FaSlackHash, url: 'https://nativesintech.herokuapp.com/' },
            { icon: FaDiscourse, url: 'https://forum.nativesintech.org/' },
            { icon: FaGithub, url: 'https://github.com/nativesintech' },
            {
              icon: AiFillTwitterCircle,
              url: 'https://twitter.com/nativesintech'
            },
            {
              icon: FaLinkedin,
              url: 'https://www.linkedin.com/company/natives-in-tech'
            }
          ].map(iconLink => (
            <a className='' href={iconLink.url}>
              <iconLink.icon className='h-24 w-24 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125' />
            </a>
          ))}
        </div>
      </div>

      {/* No logic in place yet for contact form */}
      <div className='flex flex-col bg-white px-8 md:px-16 py-16'>
        <div className='bg-white max-w-xl rounded '>
          <h1 className='text-4xl font-bold mb-4 text-gray-800'>
            Ask a question or leave a comment 💬
          </h1>
          <p className='text-2xl text-gray-800'>
            We would love to hear from you! Feel free to send a message to
            hello@nativesintech.org or drop us a line below.
          </p>
          <div className='mb-4 relative'>
            <input
              className='input border border-gray-400 appearance-none rounded my-2 pb-2 mr-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
              type='email'
              placeholder=' Name'
            />
            <input
              className='input border border-gray-400 appearance-none rounded my-2 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
              type='email'
              placeholder=' Email'
            />
            <input
              className='input border border-gray-400 appearance-none rounded w-full my-2 pb-16 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 '
              type='email'
              placeholder=' Message'
            />
          </div>
          <button className='bg-teal-500 text-white font-bold py-3 px-6 rounded hover:bg-white hover:text-teal-500 border-2 border-teal-500'>
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
