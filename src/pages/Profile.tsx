import React from "react";
import {IUser} from '../interfaces/user'

const data = {
    user:{
        name : 'Кондуров Никита Германович' ,
        userType: "globalAdmin",
    },
    companies: [
        {
            name:       "ПАО Сбербанк",
            logo:       "https://regnum.ru/uploads/pictures/news/2020/11/11/regnum_picture_160507890570607_normal.jpg",
            admin:      {
                name: "Иван Иванович Иванов"
            }
        }
    ],
}

const Profile = () => {
  const [opened, setOpened] = React.useState(-1);  

  return <div>
      <h1>EWEWFFEW</h1>
      
  </div>;
};

export default Profile;
