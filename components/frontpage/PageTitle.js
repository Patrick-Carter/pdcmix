import React from "react";

const PageTitle = ({textOne, textTwo}) => {
    return (
        <div className="title"> 
            <h1 className="text">
                <span className="incredible">
                    {textOne}
                </span>
                <span className="mixes">
                    {textTwo}
                </span>
            </h1>
            <style jsx>{`

            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');

            h1 {
                color: #f1404b;
                font-family: Nunito, sans-serif;
                font-size: 3.5rem;
                margin-bottom: .5rem;
            }

            @media only screen and (max-width: 600px) {
                h1 {
                    font-size: 2.5rem;
                }
              }

            span {
                margin: .25rem;
            }
                     
            
            `}

            </style>
        </div>
    )
}

export default PageTitle;