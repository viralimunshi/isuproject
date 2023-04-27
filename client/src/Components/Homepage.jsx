import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../Style/Homepage.css'
import Axios from 'axios'

export default function Homepage({ route }) {
  const location = useLocation();
  const [terms, setTerms] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    Axios.post('http://localhost:3001/api/loadterm')
      .then((response) => {
        setTerms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    Axios.post('http://localhost:3001/api/loadsubject')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    //preventing browser back button
    if (location.state.user !== '') {
      window.history.pushState(null, null, window.location.pathname);
      const handleBackButton = () => {
        window.history.forward();
      };
      window.addEventListener('popstate', handleBackButton);
      return () => {
        window.removeEventListener('popstate', handleBackButton);
      };
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post('http://localhost:3001/api/savedata', {
      term_id: selectedTerm,
      course_id: selectedCourse
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="menubar"><span>Welcome to Dashboard, {location.state.user} !!</span>
      </div>
      <div className="line"></div>
      <div className='row'>
        <div className="col-sm-3 col-md-6 col-lg-4">
          <table>
            <tr>
              <td>
                <label htmlFor="termList">Select Term: </label>
              </td>
              <td>
                <select name="termList" id="termList" onChange={(event) => setSelectedTerm(event.target.value)} required>
                  <option value="-1">--Select Term--</option>
                  {terms.map((term) => (
                    <option key={term.term_id} value={term.term_id}>{term.term_name}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="courseList">Select Course: </label></td>
              <td>Computer Science</td>
            </tr>
            <tr>
              <td><label htmlFor="subjectList">Select Subject: </label></td>
              <td>
                <select name="subjectList" id="subjectList" onChange={(event) => setSelectedCourse(event.target.value)} required>
                  <option value="-1">--Select Subject--</option>
                  {courses.map((course) => (
                    <option value={course.sub_code} key={course.crn}>{course.sub_name}</option>
                  ))}
                </select>
              </td>
            </tr>
          </table>
        </div>
        <div className="col-sm-9 col-md-6 col-lg-8">
          <table>
            <tr>
              <td>
                <label htmlFor="termList">Start Time: </label>
              </td>
              <td>
                Hour <select name="s_hh" size="1" id="s_hh_id">
                  <option value="0"> 00</option>
                  <option value="1"> 01</option>
                  <option value="2"> 02</option>
                  <option value="3"> 03</option>
                  <option value="4"> 04</option>
                  <option value="5"> 05</option>
                  <option value="6"> 06</option>
                  <option value="7"> 07</option>
                  <option value="8"> 08</option>
                  <option value="9"> 09</option>
                  <option value="10"> 10</option>
                  <option value="11"> 11</option>
                  <option value="12"> 12</option>
                </select>
                Minute <select name="s_mm" size="1" id="s_mm_id">
                  <option value="00"> 00</option>
                  <option value="05"> 05</option>
                  <option value="10"> 10</option>
                  <option value="15"> 15</option>
                  <option value="20"> 20</option>
                  <option value="25"> 25</option>
                  <option value="30"> 30</option>
                  <option value="35"> 35</option>
                  <option value="40"> 40</option>
                  <option value="45"> 45</option>
                  <option value="50"> 50</option>
                  <option value="55"> 55</option>
                </select>
                am/pm <select name="s_ap" size="1" id="s_ap_id">
                  <option value="a">am</option>
                  <option value="p">pm</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="termList">End Time: </label>
              </td>
              <td>
                Hour <select name="e_hh" size="1" id="e_hh_id">
                  <option value="0"> 00</option>
                  <option value="1"> 01</option>
                  <option value="2"> 02</option>
                  <option value="3"> 03</option>
                  <option value="4"> 04</option>
                  <option value="5"> 05</option>
                  <option value="6"> 06</option>
                  <option value="7"> 07</option>
                  <option value="8"> 08</option>
                  <option value="9"> 09</option>
                  <option value="10"> 10</option>
                  <option value="11"> 11</option>
                  <option value="12"> 12</option>
                </select>
                Minute <select name="e_mm" size="1" id="e_mm_id">
                  <option value="00"> 00</option>
                  <option value="05"> 05</option>
                  <option value="10"> 10</option>
                  <option value="15"> 15</option>
                  <option value="20"> 20</option>
                  <option value="25"> 25</option>
                  <option value="30"> 30</option>
                  <option value="35"> 35</option>
                  <option value="40"> 40</option>
                  <option value="45"> 45</option>
                  <option value="50"> 50</option>
                  <option value="55"> 55</option>
                </select>
                am/pm <select name="e_ap" size="1" id="e_ap_id">
                  <option value="a">am</option>
                  <option value="p">pm</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="days">Days: </label>
              </td>
              <td>
                <select name="days" id="days_id" multiple>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Tuesday">Wednesday</option>
                  <option value="Tuesday">Thursday</option>
                  <option value="Tuesday">Friday</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className='btn btn-primary' type='submit' onSubmit={handleSubmit}>Submit</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
