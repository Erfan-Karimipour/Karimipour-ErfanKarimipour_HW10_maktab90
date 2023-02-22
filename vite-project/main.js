'use strict'
import El from './Modules/elementCreator';
const app = document.getElementById(`app`);

const header = El({
    element: "header",
    className: "flex h-12 m-auto my-2 border-0 border-b-2 border-b-gray-130 px-56 pb-2",
    child: El({
        element: "section",
        className: "flex w-3/5",
        child: El({
            element: "img",
            src: `Images/Divar.png`,
            className: " h-8 mt-auto pl-3 border-l-2 m-0",
        }),
        child: El({
            element: `button`,
            className: "w-44 rounded-sm hover:bg-gray-100 hover:text-black duration-300 align-middle text-sm text-gray-500 p-2 px-5 mr-2",
            child: El({
                element: `ion-icon`,
                name: `location-outline`,
                className: `align-middle`
            }),
            child: `تهران`
        })
    })
});

app.appendChild(header);
