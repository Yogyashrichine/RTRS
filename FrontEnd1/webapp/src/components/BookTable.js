import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const BookTable = () => {
  useEffect(() => {
    document.title = 'BookTable';
  }, []);

  const [booktable, setBookTable] = useState([]);
 const [userId, setUserId] = useState(localStorage.getItem('userid'));
 // const [userId] = useState(localStorage.getItem('userid'));
  // const uid = localStorage.getItem('userid');
  // const uid = localStorage.getItem('userid');
  // setUserId(uid); //added madhura
  console.log('set user id ', userId);
  
  //creating function to post data on server

  const postDatatoServer = (data) => {
    axios.post(`${base_url}/reservations`, data).then(
      (response) => {
        //for success
        console.log(response.data);
        alert('table booked  successfully');
        window.location.href = '/';
      },
      (error) => {
        //for error
        console.log(error);
        console.log('error');
        toast.error('error ! something went wrong');
      }
    );
  };

  function handledForm(e) {
    e.preventDefault();
    //console.log(booktable);
    //     const uid = localStorage.getItem("userid");
    console.log('in handle submit', booktable);
    console.log(userId);

    // setBookTable(...booktable, { userId:userid})
    // setBookTable({...booktable, reservationTime:e.target.value})
    //   setBookTable({ ...booktable, userId: userId });
    const newBooking = { ...booktable, userId: userId };
    setBookTable(newBooking);
    console.log(newBooking);
    postDatatoServer(newBooking);
    console.log('clear');
  }

  //const [value, onChange] = useState(new Date());

  if (!localStorage.getItem('userid')) {
    alert('please login first');
    return (window.location.href = '/Login');
  }

  return (
    <div>
      <div class='container'>
        <ol class='breadcrumb w3l-crumbs'>
          <li>
            <a href='/'>
              <i class='fa fa-home'></i> Home
            </a>
          </li>
          <li class='active'>Book Table</li>
        </ol>
      </div>

      <div class='login-page about'>
        <img class='login-w3img' src='images/img3.jpg' alt='' />
        <div class='container'>
          <h3 class='w3ls-title w3ls-title1'>Book Table </h3>
          <div class='login-agileinfo'>
            <form onSubmit={handledForm}>
              {/* <DateTimePicker onChange={onChange} value={value} class="agile-ltext"/> */}
              <Input
                type='datetime-local'
                class='agile-ltext'
                placeholder='select time'
                id='reservationTime'
                name='reservationTime'
                onChange={(e) => {
                  setBookTable({
                    ...booktable,
                    reservationTime: e.target.value,
                  });
                }}
              />

              <Input
                type='text'
                class='agile-ltext'
                placeholder='Enter no.of persons'
                id='noOfPersons'
                name='noOfPersons'
                onChange={(e) => {
                  setBookTable({ ...booktable, noOfPersons: e.target.value });
                }}
              />

              {/* <Input
                type='hidden'
                class='agile-ltext'
                id='userId'
                name='userId'
                value={userId}
              /> */}

              <div class='clearfix'></div>

              <input type='submit' value='Book Table' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
