import React from 'react'
import linkedIn from 'assets/images/Link.svg'
import phone from 'assets/images/Tel.svg'
import mail from 'assets/images/Mail.svg'
import whatsUp from 'assets/images/WhatsUp.svg'
import github from 'assets/images/Github.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container" id="contacts">
                <div className="title">КОНТАКТЫ</div>
                <div className="links">
                    <a href="https://www.linkedin.com/in/bari-vakhidov-273474149/" title="LinkedIn">
                        <img src={linkedIn} alt="" />
                    </a>
                    <a href="tel:+79992389684">
                        <img src={phone} alt="" />
                    </a>
                    <a href="mailto:memeshuntergod@gmail.com">
                        <img src={mail} alt="" />
                    </a>
                    <a href="https://wa.me/79992389684">
                        <img src={whatsUp} alt="" />
                    </a>
                    <a href="https://github.com/BariVakhidov">
                        <img src={github} alt="" />
                    </a>
                </div>
                <div className="location">
                    Санкт-Петербург, Россия
                </div>
            </div>
        </footer>
    )
}
