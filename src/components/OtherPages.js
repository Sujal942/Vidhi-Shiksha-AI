import React from "react";
import Feature from "./pages-ai-waqueel/Feature";
import AiLawyer from "./pages-ai-waqueel/AiLawyer";
import AiLawyerBetter from "./pages-ai-waqueel/AiLawyerBetter";
import FundamentalRights from "../components/pages-ai-waqueel/FundamentalRights";
import AiLawyerNews from "./pages-ai-waqueel/AiLawyerNews";

const OtherPages = () => {
  return (
    <>
      <div>
        <Feature />
        <AiLawyer />
        <AiLawyerBetter />
        <AiLawyerNews />
        <FundamentalRights />
      </div>
    </>
  );
};

export default OtherPages;
