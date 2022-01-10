import './App.scss';
import React from "react";
import {Button} from "@material-ui/core";
import PersonIcon from "./img/user.png";
import VpnKeyIcon from "./img/key.png";
import topPicture from "./img/topPicture.jpg"
import dedv from "./img/dedv.png"
import quotationMarks from "./img/Group.png"
import Cards from "./components/Card/Card";
import './components/ScrollButton/ScrollButton';
import ScrollButton from "./components/ScrollButton/ScrollButton";
import SwiperSlides from "./components/SwiperSlides/SwiperSlides";


const App = () => {
  return (
      <div className="App">
        <header className="header">
          <div className="container">
            <div className="flex-wrapper">
              <div className="left-content">
                <a className="button-header" href="/">О КОМПАНИИ</a>
                <a className="button-header" href="/">УСЛУГИ</a>
                <a className="button-header" href="/">ПОРТФОЛИО</a>
                <a className="button-header" href="/">КОНТАКТЫ</a>
                <a className="button-header" href="/">ГОТОВЫЕ РЕШЕНИЯ</a>
              </div>
              <div className="right-content">
                <Button className="right_button"> <img src={PersonIcon} alt=""/> АВТОРИЗАЦИЯ</Button>
                <Button className="right_button"> <img src={VpnKeyIcon} alt=""/> РЕГИСТРАЦИЯ</Button>
              </div>
            </div>
          </div>
        </header>

        <div className='main-section'>
          <div className="container">
            <div className="flex-wrapper">
              <div className="left-content">
                <SwiperSlides/>
                <div className='line'/>
              </div>
              <div className="right-content">
                <img src={topPicture} alt="img" className='topPicture'/>
              </div>
            </div>
          </div>
        </div>

        <div className="cards-section">
          <div className="container">
            <div className="flex-wrapper">
              <Cards/>
              <div className="wrapper-button">
                <Button className='services-button'
                        href='/'>
                  ВСЕ УСЛУГИ
                </Button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="flex-wrapper">
              <div className="left-content">
                <img src={dedv} alt="dedv"/>
              </div>
              <div className="right-content">
                <h6>ИНФОРМАЦИЯ</h6>
                <h3>О НАС</h3>
                <div className="p-wrapper">
                  <p>Вас приветствует дружелюбная и креативная команда. Если Вам необходимо решение для
                    бизнеса в формате эффективного сайта, мы хотим предложить свой опыт. Более 6-ти лет
                    наше
                    агентство разрабатывает интернет-магазины, корпоративные сайты, каталоги, онлайн
                    сервисы
                    и другие ресурсы для украинского рынка и ближнего зарубежья.</p>
                  <img src={quotationMarks} alt="quotation marks" className='quotation-marks-1'/>
                  <p>Каждому своему клиенту мы можем предложить налаженный сервис и современные
                    технические
                    решения. Наши специалисты работают для Вас в удаленном формате, но мы всегда плотно
                    поддерживаем связь с заказчиком – и процесс разработки становится абсолютно
                    прозрачным и
                    эффективным для обеих сторон. К примеру, Вы можете следить за выполнением задач по
                    проекту через CRM систему или поддерживать связь с личным менеджером Swipex в Skype,
                    по
                    телефону.</p>
                  <img src={quotationMarks} alt="quotation marks" className='quotation-marks-2'/>
                  <p> Мы – веб студия полного цикла, поскольку выполняем проекты с нуля, когда у вас есть
                    только лишь идея и большое желание воплотить ее в работающий бизнес проект.
                    Сотрудники
                    Swipex помогут Вам создать правильное техническое задание для интернет ресурса,
                    дизайнеры поработают над актуальным визуальным представлением, а разработчики
                    реализуют
                    задачи на современной и гибкой платформе.</p>
                  <img src={quotationMarks} alt="quotation marks" className='quotation-marks-3'/>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <ScrollButton/>
      </div>
  );
}

export default App;
