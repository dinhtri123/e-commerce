import React from 'react';
import OfferItem from './OfferItem';

const Offer = () => {
    return (
        <div className="container mx-auto px-5 grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
          <OfferItem
            img="/24-7.png"
            text="24/7 Support"
            imgIcon="/tech-support.gif"
          ></OfferItem>
          <OfferItem
            img="/cash-back.png"
            text="Cash Back"
            imgIcon="/cashback.gif"
          ></OfferItem>
          <OfferItem
            img="/discount.png"
            text="Monthly Offer"
            imgIcon="/black-friday.gif"
          ></OfferItem>
          <OfferItem
            img="/premium.png"
            text="Membership"
            imgIcon="/award.gif"
          ></OfferItem>
        </div>
    );
};

export default Offer;