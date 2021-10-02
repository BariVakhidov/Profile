import React from 'react'

export const Feedback = () => {
    return (
        <section id="feedback" className="feedback">
            <div className="back">
                <div className="feedback-container">
                    <div className="title">ОБРАТНАЯ СВЯЗЬ</div>
                    <form action="https://formspree.io/f/mzbkwnep" method="POST" id="my-form" className="form">
                        <div className="form-inputs">
                            <div className="input-cont">
                                <input type="text" name="name" className="user-info" placeholder="ФИО" />
                                <input type="text" name="phone" className="tel" placeholder="Телефон" />
                                <input type="text" className="mail" name="replyto" placeholder="E-mail" />
                            </div>
                            <textarea name="message" id="message" className="message" placeholder="Сообщение"></textarea>
                        </div>
                        <button type="submit" id="submit" className="submit">Отправить</button>
                    </form>
                    <div id="status" className="status"></div>
                </div>
            </div>
        </section>
    )
}
