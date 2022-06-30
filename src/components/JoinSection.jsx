import React from 'react';
import BackgroundImage from '/Users/ningchu/Desktop/landing-page/src/images/accomplishment.png';
// import { ExternalLinkIcon } from '@heroicons/react/solid'

function CTA() {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 ">
        <div className="relative bg-cover max-w-6xl mx-auto px-4 pb-10 sm:px-6 " style={{backgroundImage: `url(${BackgroundImage})` }}>
          <section className="mx-auto container w-full py-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="font-mont md:text-3xl  font-black text-center text-gray-800 dark:text-white leading-snug lg:w-3/4">
                      <h2>Start Your WOD Jounery Now</h2>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <button className="font-bold focus:outline-none focus:ring-2 focus:ring-offset-2  hover:opacity-90 w-48 h-12 text-lg text-black bg-yellow-100 rounded">
                          <a href="https://www.wodsquad.app/feed">LET'S GO</a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
}

export default CTA;


// export default function Example() {
//   return (
//     <div className="relative bg-gray-800">
//       <div className="h-56 bg-yellow-100 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
//         <img
//           className="w-full h-full object-cover"
//           src={BackgroundImage}
//           alt=""
//         />
//       </div>
//       <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         <div className="md:ml-auto md:w-1/2 md:pl-10">
//           <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Award winning support</h2>
//           <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
//           <p className="mt-3 text-lg text-gray-300">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
//             scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
//             tincidunt duis.
//           </p>
//           <div className="mt-8">
//             <div className="inline-flex rounded-md shadow">
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
//               >
//                 Visit the help center
//                 <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
