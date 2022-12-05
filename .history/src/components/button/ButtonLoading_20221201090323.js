import React from 'react';

const ButtonLoading = ({}) => {

    return (
        <button
              className={`mt-5 w-full h-[45px] text-white bg-primary rounded-md font-semibold ${loading ? 'bg-opacity-50 ' : ""}`}
            >
              {loading ? (
                <p className=" mx-auto w-[30px] h-[30px] rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></p>
              ) : (
                
              )}
            </button>
    );
};

export default ButtonLoading;