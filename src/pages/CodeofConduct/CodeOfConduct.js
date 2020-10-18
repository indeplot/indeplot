import React, { useState, useEffect } from "react";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbarr";

import CODE_OF_CONDUCT from "../../Assets/CODE_OF_CONDUCT.md";
import ReactMarkdown from "react-markdown";

import "./CodeOfConduct.styles.css";

const CodeOfConduct = () => {
  const [conductText, setConductText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(CODE_OF_CONDUCT).then((r) => r.text());
      setConductText(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row coc">
          <div className="col-sm-6">
            <ReactMarkdown source={conductText} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CodeOfConduct;
