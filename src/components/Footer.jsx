import React from 'react';


function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Bottom area */}
        <div className="text-center md:flex md:items-center md:justify-between py-4 md:py-8 border-t  border-gray-200">
          {/* Social links */}
          <ul className="text-center flex-row  md:flex mb-2 md:order-1 md:ml-4 md:mb-0  xs:flex-col">
            <li>
              <a className="text-sm text-center text-gray-600 hover:underline" href="https://company.wodsquad.app/privacy-policy">Privacy Policy</a>
            </li>
            <li className="md:ml-5">
              <a className="text-sm text-center text-gray-600 hover:underline" href="https://company.wodsquad.app/terms-of-service">Terms of Service</a>
            </li>
            <li className="md:ml-5">
              <a className="text-sm text-gray-600 hover:underline" href="https://company.wodsquad.app/faqs">FAQ</a>
            </li>
          </ul>
          {/* Copyrights note */}
          <div className="text-center  text-sm text-gray-600 mr-4 ">© 2022 Kinetik Athlete. All right reserved.</div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
