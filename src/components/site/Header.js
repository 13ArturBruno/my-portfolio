import React from 'react';

import "./Header.css";

export default class Header extends React.Component {
   render() {
      return (
         <header className="header">
            <div>
               <ul>  
                  <li><text className="text-nav">Inicio</text></li>
                  <li><div className="line"></div></li>
                  <li><text className="text-nav">Formação</text></li>
                  <li><div className="line"></div></li>
                  <li><text className="text-nav">Sobre</text></li>
                  <li><div className="line"></div></li>
                  <li><text className="text-nav">Contato</text></li>
               </ul>
            </div>
        </header>
      );
   }
}