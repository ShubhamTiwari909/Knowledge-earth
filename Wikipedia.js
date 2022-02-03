import React, { useState } from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { FaSearchengin } from 'react-icons/fa'
import { SiInformatica } from 'react-icons/si'
import { RiUserVoiceFill } from 'react-icons/ri'
import axios from 'axios';
import { useSpeechSynthesis } from "react-speech-kit";//used for text-to-speech
import './Wiki.css'
import Footer from './Footer'


function Wikipedia() {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  const { speak } = useSpeechSynthesis();


  const searchPhotos = (e) => {
    e.preventDefault();
    axios.get(`https://en.wikipedia.org//w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${query}`)
      .then(response => {
        setSearch(response.data.query.search);
        console.log(response.data.query.search)
      }).catch((error) => {
        console.log(error);
      })
    speak({ text: `Searching Results for ${query}`, rate: 0.8, pitch: 1 })
  }

  const plainText = (value,replaceString) => {
    let str = value;
    var re = new RegExp(`<span class="searchmatch">${replaceString}</span>`, 'g');
    let newText = str.replace(re, replaceString);
    return newText;
  }

  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-500 via-indigo-700 to-indigo-900 
                        text-gray-100 rounded-sm ring-2 ring-blue-200 px-6 py-2 
                        hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 inline`;

  const welcomeContainer = {
    background: 'url("https://images.immediate.co.uk/production/volatile/sites/4/2021/08/GettyImages-1215288361-Hero-a892ab9.jpg?quality=90&resize=768,574")',
    backgroundSize: "cover"
  }
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-around lg:flex-row md:flex-row py-20 lg:py-36 md:py-36 sm:py-20 mnavbar' style={welcomeContainer}>
        <div className='flex lg:flex-row md:flex-row'>
          <h1 className='flex space-x-3 text-center font-sans font-semibold my-4 text-slate-100 lg:text-5xl md:text-4xl headingLogo'>
            <h1 className='lg:text-slate-200'>Knowledge Earth</h1>
            <SiInformatica color='magenta' />
          </h1>
        </div>
      </div>
      <div>
        <form className='h-48 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center' onSubmit={searchPhotos}>
          <div className='lg:justify-self-end md:justify-self-end sm:justify-self-center'>
            <BsGlobe2 size='2rem' color='slateblue' />
          </div>

          <input
            type='text'
            name='query'
            className='ring-2 ring-gray-dark px-3 rounded-lg py-2 outline-none hover:scale-110 hover:ring-green-400
                        transition-all duration-700 ease-in-out'
            placeholder='search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)} />

          <div className='lg:justify-self-start md:justify-self-start sm:justify-self-start'>
            <button
              type='submit'
              className={buttonStyling}>
              <p>Search</p>
              <FaSearchengin size='1.5rem' />
            </button>
          </div>
        </form>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-8 mx-10 my-10'>
        {search.map(item =>
          <div key={item.pageid} className='my-10 bg-slate-800 text-white text-center p-10 break-normal ring-2 ring-indigo-400 rounded-lg card'
          style={{boxShadow: "5px 5px 15px black"}}>
            <p className='text-2xl text-slate-200 font-mono py-4 text-center border-b-2 border-red-300'>{item.title}</p>
            <p className='text-blue-200 py-6' dangerouslySetInnerHTML={{ __html: item.snippet + "..." }}></p>
            <p className='py-6 my-8 text-xs border-b-4 border-blue-400'>Created at - {item.timestamp}</p>
            <div className='flex justify-center space-x-8'>
              <a className='px-4 py-2 rounded-md bg-slate-200 text-slate-800 ring-2 ring-blue-300 font-semibold'
                rel='noreferrer' target='_blank' href={`https://en.wikipedia.org/wiki/${item.title}`}>
                Read More
              </a>
              <button onClick={() => speak({ text: plainText(item.snippet,item.title) })}><RiUserVoiceFill className='self-end' size='2rem' /></button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Wikipedia;
