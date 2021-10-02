import React from 'react'

export const AboutMe = () => {
    return (
        <section className="about" id="aboutMe">
            <div className="about-container">
                <div className="title">ОБО МНЕ</div>
                <div className="flex-cont">
                    <div className="about-me line-clamp">
                        <div>
                            <p>Развиваюсь в направлении web-разработки. Изучаю новые технологии и способы их применения на практике.</p>
                            <p>На данный момент совершенствую знания по TypeScript и нативному JS, изучаю Flutter + Dart.</p>
                            <p>Начинал свою деятельность с фриланса, последние пол года работаю фронтенд-разработчиком в Nord Clan. Стек: TypeScript, JavaScript,
                                React, Redux (saga, thunk + axios), MobX, HTML, CSS, SCSS, LESS, WebSockets. На данный момент пишу фронт для проекта Инвитро, нахожусь в тесном взаимодействии с бекендом (проектирование api, поиск и устранение багов и т.д.).</p>
                            <p>Обладаю хорошими навыками коммуникации, веду активный образ жизни, умею соблюдать сроки и стоически относиться к трудностям. С наслаждением занимаюсь любимым делом</p>
                        </div>
                    </div>
                    <div className="abilities">
                        <div className="abilities-title">Навыки</div>
                        <ul>
                            <li>React JS (ant design, styled-components, hooks, formik, tests, tdd, router,
                                react-responsive, axios, websockets, jest...)</li>
                            <li>Redux (thunk, saga, ducks, redux-form, hooks)</li>
                            <li>Java Core</li>
                            <li>ООП</li>
                            <li>HTML5, CSS3, SCSS (flex, flexboxgrid2, media queries)</li>
                            <li>JavaScript, TypeScript</li>
                            <li>Git (Github, Bitbucket, GitLab)</li>
                            <li>Figma, Miro, Trello</li>
                            <li>Linux</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>
                <div className="download-profile"><a href="assets/profile.pdf" download="BariVakhidov">Мое резюме</a></div>
            </div>
        </section>
    )
}
