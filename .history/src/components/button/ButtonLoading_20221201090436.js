import React from 'react';

const ButtonLoading = ({children}) => {
    const child = !!loading ? 
    return (
        <button
              className={`mt-5 w-full h-[45px] text-white bg-primary rounded-md font-semibold ${loading ? 'bg-opacity-50 ' : ""}`}
            >
              {loading ? (
                
              ) : (
                {children}
              )}
            </button>
    );
};

export default ButtonLoading;