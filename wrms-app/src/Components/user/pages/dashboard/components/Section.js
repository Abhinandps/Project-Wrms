import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Section.css";

import ComponentOne from "./UI/ComponentOne";
import ComponentTwo from "./UI/ComponentTwo";





import { review } from './Reviewdata'

import Popup from './Popup'



const Section = () => {
  const [show,setShow] = useState(false);

  return (
    <>
      <ComponentOne>
        <>
          <p>Work Report Summary</p>

          <div className="status-group">
            <div className="status">
              <p>Pending</p>
              <Link className="count" to="report-details">
                0
              </Link>
            </div>

            <div className="status">
              <p>Pending HOD Aproval</p>
              <Link className="count" to="report-details">
                0
              </Link>
            </div>
          </div>
        </>
      </ComponentOne>

      <ComponentTwo>
        <Popup show={show} onClose={() => setShow(false)} />

        <p className="heading">Recent Review</p>
        <table>
          <tr>
            <th>Date</th>
            <th>Rate</th>
            <th>Comments</th>
          </tr>

          {review.map((item) => {
            return (
              <tr>
                <td>
                  <Link onClick={() => setShow(true)} index>
                    {item.date}
                  </Link>
                </td>
                <td>
                  <i className={item.icon}></i>
                </td>
                <td>{item.comments}</td>
              </tr>
            );
          })}
        </table>
      </ComponentTwo>
    </>
  );
};

export default Section;
