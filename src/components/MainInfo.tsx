import React from 'react'
import avatar from 'assets/images/avatar.png'

export const MainInfo = () => {
    return (
        <section className="content-main">
            <div className="main-information">
                <div className="background">
                    <div className="main-information-container">
                        <div className="profile-photo">
                            <img src={avatar} alt="Photo" />
                        </div>
                        <div className="name">
                            <p>Привет, меня зовут</p>
                            <h1 className="fullname">Бари Вахидов</h1>
                            <p>Я web-разработчик</p>
                            <p>Люблю кодить и строить коптеры</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
