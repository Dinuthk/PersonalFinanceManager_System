import React, { useState } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import user from '../../img/user.png';
import Button from '../Button/Button';
import { edit, save } from '../../utils/Icons';

function UserProfile() {
  const [userDetails, setUserDetails] = useState({
    username: 'Saman Kumara',
    fullName: 'Saman Bandula Kumara',
    age: 21,
    email: 'samankumara@gmail.com',
    phone: '0712345678',
    gender: 'Male',
    address: '123 Main Street, New York, NY 10018',
  });

  const [editMode, setEditMode] = useState(false);

  const handleInput = (field) => (e) => {
    setUserDetails({
      ...userDetails,
      [field]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setUserDetails({
      ...userDetails,
      gender: e.target.value,
    });
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    setEditMode(false);
  };

  return (
    <UserProfileStyled>
      <InnerLayout>
        <h1>Your Profile</h1>
        <div className='container'>
          <img src={user} alt='' />
          <div className='text'>
            <h1>{userDetails.username}</h1>
            <div className='edit' onClick={handleEditProfile}>
              <h3>Edit Profile {edit && <i className="fa-solid fa-pen-to-square"></i>}</h3>
            </div>
          </div>
          {editMode ? (
            <div className='form'>
              <div className="input-control">
                Edit your username
                <input
                  type="text"
                  placeholder="Username"
                  value={userDetails.username}
                  onChange={handleInput('username')}
                />
              </div>
              <div className="input-control">
                Edit your full name
                <input
                  type="text"
                  placeholder="Full Name"
                  value={userDetails.fullName}
                  onChange={handleInput('fullName')}
                />
              </div>
              <div className="input-control">
                Edit your age
                <input
                  type="text"
                  placeholder="Age"
                  value={userDetails.age}
                  onChange={handleInput('age')}
                />
              </div>
              <div className="input-control">
                Edit your email address
                <input
                  type="text"
                  placeholder="Email address"
                  value={userDetails.email}
                  onChange={handleInput('email')}
                />
              </div>
              <div className="input-control">
                Edit your phone number
                <input
                  type="text"
                  placeholder="Phone number"
                  value={userDetails.phone}
                  onChange={handleInput('phone')}
                />
              </div>
              <div className="selects input-control">
                Edit your gender
                <select
                  required
                  value={userDetails.gender}
                  name="gender"
                  id="gender"
                  onChange={handleSelect}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="submit-btn">
                <Button
                  name={'Save Profile'}
                  icon={save}
                  bPad={'.8rem 1.6rem'}
                  bRad={'30px'}
                  bg={'var(--color-accent'}
                  color={'#fff'}
                  onClick={handleSaveProfile}
                />
              </div>
            </div>
          ) : (
            <div className='content'>
              Username: {userDetails.username}<br />
              Full name: {userDetails.fullName}<br />
              Age: {userDetails.age}<br />
              Email: {userDetails.email}<br />
              Phone: {userDetails.phone}<br />
              Gender: {userDetails.gender}<br />
              Address: {userDetails.address}<br />
            </div>
          )}
        </div>
      </InnerLayout>
    </UserProfileStyled>
  );
}

const UserProfileStyled = styled.div`
    .container {
        text-align: center;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding:.2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h1{
            color: rgba(34, 34, 96, 1);
        }
    }

    .content {
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 1rem;
        width: 100%;
        color: #222260;
        margin-top: 20px;
        font-weight: bold;
        text-align: left;
    }
    .edit{
        cursor: pointer;
    }
    .form{
        text-align: left;
        
    }
    input, select{
        font-family: inherit;
        font-size: inherit;
        margin-bottom: 1rem;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        flex-direction: column;
        justify-content: flex;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
        padding{
            margin-bottom: 10px;
        }
    }
`;

export default UserProfile