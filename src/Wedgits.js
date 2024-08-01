import "./Wedgits.css"
import InfoIcon from '@mui/icons-material/Info';
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Wedgits() {
    const newsArticle = (heading,subtitle) => (
        <div className="wedgits_">
            <div className="wedgits_leftArticle">
                <FiberManualRecordIcon />
            </div>
            <div className="wedgits_rightArticle">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        );
  return (
    <div className="wedgits" >
      <div className="wedgits_header">
        <h2>Linked News</h2> 
        <InfoIcon />
      </div>
      {newsArticle("PAPA react is BAck" ,"Top news - 999")}
      {newsArticle("PAPA react is BAck" ,"Top news - 999")}
      {newsArticle("PAPA react is BAck" ,"Top news - 999")}
      {newsArticle("PAPA react is BAck" ,"Top news - 999")}
      {newsArticle("PAPA react is BAck" ,"Top news - 999")}
      {newsArticle("PAPA react is BAck" ,"Top news - 999")}
      
    </div>
  )
}

export default Wedgits
