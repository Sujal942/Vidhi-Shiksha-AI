import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";
// import logo from "../logo.png";

const Header = () => {
  useEffect(() => {
    // Add Google Translate script if it doesn't already exist
    if (
      !document.querySelector(
        'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
      )
    ) {
      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      googleTranslateScript.type = "text/javascript";
      googleTranslateScript.async = true;
      document.body.appendChild(googleTranslateScript);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "hi,en,kn,mr,ur,te,ta,sa,pa,kok,gu,ml,bn", // Supported languages
          },
          "google_translate_element"
        );
      };
    }

    const hideGoogleTranslateElements = () => {
      const intervalId = setInterval(() => {
        const iframe = document.querySelector('iframe[class*="skiptranslate"]');
        if (iframe) iframe.style.visibility = "hidden";

        const skipTranslateDiv = document.querySelector(".skiptranslate");
        if (skipTranslateDiv) {
          const tables = skipTranslateDiv.querySelectorAll("table");
          tables.forEach((table) => {
            table.style.display = "none";
          });
        }
      }, 100);

      return intervalId;
    };

    const cleanUpGoogleElements = () => {
      const intervalId = setInterval(() => {
        const googleTable = document.querySelector(
          'table[class="VIpgJd-ZVi9od-ORHb-KE6vqe"]'
        );
        if (googleTable) googleTable.style.display = "none";

        const googleGadget = document.querySelector(".goog-te-gadget");
        if (googleGadget) {
          googleGadget.childNodes.forEach((node) => {
            if (
              node.nodeType === Node.TEXT_NODE &&
              node.nodeValue?.includes("Powered by")
            ) {
              node.remove();
            }
          });
        }
      }, 100);

      return intervalId;
    };

    // Start hiding elements and cleaning up unwanted Google Translate components
    const interval1 = hideGoogleTranslateElements();
    const interval2 = cleanUpGoogleElements();

    // Cleanup function to clear intervals
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const openStreamlitApp = () => {
    window.open("https://ai-waqeel.streamlit.app/", "_blank");
  };

  return (
    <header className="bg-slate-800 p-5 flex flex-wrap justify-between items-center gap-2 md:gap-6 lg:gap-8">
      {/* Logo */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
        {/* <img
          className="w-32 md:w-44 object-contain"
          src={logo}
          alt="Company Logo"
        /> */}
        <h1 className="text-3xl text-white">Logo</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end">
        <Link
          to="/"
          className="text-white bg-olive-600 font-bold px-4 py-2 text-sm sm:text-base hover:underline"
        >
          Home
        </Link>
        <Link
          to="/live-hearings"
          className="text-white bg-olive-600 font-bold px-4 py-2 text-sm sm:text-base hover:underline"
        >
          Live Hearings
        </Link>
        <Link
          to="/find-lawyers"
          className="text-white bg-olive-600 font-bold px-5 py-2 hover:underline"
        >
          Find Lawyers
        </Link>
        {/* <Link
          to="/query-page"
          className="text-white bg-olive-600 font-bold px-5 py-2 hover:underline"
        >
          Ask Query
        </Link> */}
        <select
          className="bg-slate-900 rounded-lg text-white font-bold px-3 py-2 text-sm sm:text-base"
          onChange={(e) => {
            if (e.target.value) window.location.href = e.target.value;
          }}
        >
          <option value="">Documents Sharing</option>
          <option value="/upload-documents">Upload Documents</option>
          <option value="/access-documents">Access Documents</option>
          <option value="/documnet-analyzer">Document Analysis</option>
        </select>
        <select
          className="bg-slate-900 rounded-lg text-white font-bold px-3 py-2 text-sm sm:text-base"
          onChange={(e) => {
            if (e.target.value) window.location.href = e.target.value;
          }}
        >
          <option value="">Reading Material</option>
          <option value="/constitution">Constitution</option>
          <option value="/keep-notes">Keep Notes</option>
        </select>
      </nav>

      {/* Login Button and Google Translate */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center w-full sm:w-auto justify-center sm:justify-end">
        <button
          onClick={openStreamlitApp}
          className="bg-yellow-400 px-5 py-2 rounded-lg font-bold text-sm sm:text-base"
        >
          Login
        </button>
        <div id="google_translate_element"></div>
      </div>
    </header>
  );
};

export default Header;
