import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from '../../img/Arrow 3.png'
import "./ScrollButton.scss";

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button onClick={scrollToTop}
                style={{display: visible ? 'inline' : 'none'}} className='Arrow-toTop'>
            <img src={ArrowUpwardIcon} alt="" className='ArrowUpwardIcon'/>
            <span>TO TOP</span>
        </Button>
    );
}

export default ScrollButton;