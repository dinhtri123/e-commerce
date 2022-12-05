import React from 'react';
import IconArrowUp from '../../icons/IconArrowUp';

const ScrollTop = () => {
const handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
}
    return (
        <div className='fixed right-5 sm:bottom-5 bottom-[100px] w-[50px] h-[50px] bg-primary rounded-lg text-white flex justify-center items-center hover:bg-error transition-all cursor-pointer scrollTop z-100' onClick={handleScrollTop}>
            <IconArrowUp></IconArrowUp>
        </div>
    );
};

export default ScrollTop;