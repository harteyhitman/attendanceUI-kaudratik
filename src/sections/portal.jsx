import React, { useState } from "react";
import { portal } from "../data/data";
import { Link } from "react-router-dom";

const Portal = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleClick = (index) => {
        setClickedIndex(clickedIndex === index ? null : index);
    };

    return (
        <div className="flex items-center flex-col justify-center border-r-tintBlue border-r-4 ml-3">
            {portal.map((portals, index) => (
                <Link  className="mr-2 mt-2" key={portals.id}>
                    <div
                        onClick={() => handleClick(index)}
                        className={`container ${clickedIndex === index ? 'red_bg' : ''} icons_img border-solid border-4 border-borderLine flex justify-center items-center rounded-xl gap-3 hover:bg-hovering hover:border-hoveringBorderLine cursor-pointer w-10 h-10`}
                    >
                     <div>{portals.portalIcons}</div>
                    </div>
                    <div className="portal_text flex justify-center items-center">
                        <h2 className="portal_list text-center text-textColor mt-2 font-medium">{portals.portalNames}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Portal;
