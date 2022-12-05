import React from 'react';

const Offer = () => {
    return (
        <div className="container mx-auto px-5 grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
          <o
            img="/24-7.png"
            text="24/7 Support"
            imgIcon="/tech-support.gif"
          ></Offer>
          <Offer
            img="/cash-back.png"
            text="Cash Back"
            imgIcon="/cashback.gif"
          ></Offer>
          <Offer
            img="/discount.png"
            text="Monthly Offer"
            imgIcon="/black-friday.gif"
          ></Offer>
          <Offer
            img="/premium.png"
            text="Membership"
            imgIcon="/award.gif"
          ></Offer>
        </div>
    );
};

export default Offer;