import React from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import "./Card.scss"
import logo1 from "../../img/Group 16.png";
import logo2 from "../../img/Group 15.png";
import logo3 from "../../img/Group 14.png";
import logo4 from "../../img/Group 13.png";

const Cards = () => {
    return (
        <div className="card-wrapper">
            <Card className="cards">
                <div className="card-logo">
                    <img src={logo1} alt="logo1"/>
                </div>
                <div className="card-text-wrapper">
                    <h6>РАЗРАБОТКА <strong>WEB</strong> ПРОЕКТОВ</h6>
                    <p className="card-text">
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                        стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный
                        печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                        образцов.
                    </p>
                    <Button className='card-button'>
                        Детальнее
                    </Button>
                </div>
            </Card>
            <Card className="cards">
                <div className="card-logo">
                    <img src={logo2}  alt="logo2"/>
                </div>
                <div className="card-text-wrapper">
                    <h6>РАЗРАБОТКА <strong>ДИЗАЙНА</strong></h6>
                    <p className="card-text">
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                        стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный
                        печатник
                        создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    </p>
                    <Button className='card-button'>
                        Детальнее
                    </Button>
                </div>
            </Card>
            <Card className="cards">
                <div className="card-logo">
                    <img src={logo3} alt="logo3"/>
                </div>
                <div className="card-text-wrapper">

                    <h6>ПОДДЕРЖКА <strong>СЕРВЕРОВ</strong></h6>
                    <p className="card-text">
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                        стандартной
                        "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал
                        большую
                        коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    </p>
                    <Button className='card-button'>
                        Детальнее
                    </Button>
                </div>

            </Card>
            <Card className="cards">
                <div className="card-logo">
                    <img src={logo4} alt="logo4"/>
                </div>
                <div className="card-text-wrapper">

                    <h6>НАСТРОЙКА И <strong>КОНФИГУРАЦИЯ</strong></h6>
                    <p className="card-text">
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                        стандартной
                        "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал
                        большую
                        коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    </p>
                    <Button className='card-button'>
                        Детальнее
                    </Button>
                </div>

            </Card>
        </div>
    )   ;
};


export default Cards;