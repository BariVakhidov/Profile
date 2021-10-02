import React from 'react'

export const Header = () => {
    return (
        <header className="header">
        <div className="header-container">
          <div className="header-body">
            <a href="#content" className="logo">
              <img
                src="https://img-fs-2.wnlimg.com/p/2ec/a26/cd7/4e3f887579cc9a1ba8fe7c1/x354-q80.jpg"
                alt=""
              />
            </a>
            <div className="burger">
              <span></span>
            </div>
            <nav className="menu" id="menu">
              <div className="list">
                <a href="#aboutMe">
                  <div className="link">Обо мне</div>
                </a>
                <a href="#portfolio" >
                  <div className="link">Мои проекты</div>
                </a>
                <a href="#feedback" >
                  <div className="link">Обратная связь</div>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
}
