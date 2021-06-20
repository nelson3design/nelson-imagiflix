import react, {useState} from 'react';

import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/logo.svg';
import placeholderUser from '../assets/user.jpg';

const Navbar = () =>{

    const [isMenuOpen, setisMenuOpen]= useState(false);

    const handleClick = () =>{
        setisMenuOpen(!isMenuOpen);
    }

    return(

    <nav className='navbar absolute top-0 left-0 grid grid-cols-2 items-center w-full py-8 px-20'>

        <div className='logo-menu flex justify-start gap-10 items-center'>

              
            <div className='logo'>
              <img src={logo} alt='imagiflix'/>
            </div>
            

            <ul className=' menu flex gap-4'>
                <li ><a href="#" className='font-bold'>Inicio</a></li>

                <li><a href="#series">Series</a></li>

                <li><a href="#movies">Filmes</a></li>
            </ul>

        </div>


        <div className='relative flex justify-end items-center gap-2'>

            <div className='search px-4 w-64'>
                <form className='nav relative '>
                    <input className='w-full text-white bg-black px-2 border rounded py-1 transition-all duration-300 ease-in-out opacity-0 
                    focus:opacity-100'
                     type='text' placeholder='Títulos, Gente e gêneros' />

                        <button className='absolute right-2 pt-1 focus:outline-none'onClick={e => e.preventDefault()}><FontAwesomeIcon icon={faSearch} /></button>
              </form>

            </div>

            <div className='conta relative'>

                <div className=' flex items-center gap-2'>

                    <img onClick={handleClick} src={placeholderUser} alt='foto do usuario'/>

                        <button className="focus:outline-none" onClick={handleClick}><FontAwesomeIcon icon={faCaretDown} /></button>
                </div>
                   

                 

                    <ul className={`absolute text-center border rounded bg-black right-0 top-10 w-32 ${!isMenuOpen && 'hidden'}`}>
                        <div onClick={handleClick}>

                            <li className='cursor-pointer hover:bg-white hover:text-black'><a ></a>Minha conta</li>

                            <li className='cursor-pointer hover:bg-white hover:text-black'><a ></a>Sair</li>
                    </div>
                </ul>

            </div>

        </div>

    </nav>

);}

export default Navbar;