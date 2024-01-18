// import React from 'react'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// const KEY = '3fd2be6f0c70a2a598f084ddfb75487c'
// const API_URL = 'https://api.themoviedb.org/3/discover/movie'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

// function ItemUser() {
//   const {id} = useParams()
//   const [info, setInfo] = useState({})

//   useEffect(() => {
//     const getInfo = async () => {
//       try {
//         const res = await axios.get(`${API_URL}/${id}`, {
//           params: {
//             api_key: KEY,
//           },
//         });
//         setInfo(res.data)
//         console.log(res);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getInfo()
//   }, [id])

//   return (
//     <div>
//       <img src={`${IMG_PATH}${info.poster_path}`} alt={info.title}/>
//       <h2>{info.title}</h2>
//     </div>
//   )
// }

// export default ItemUser

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const API_URL = 'https://api.themoviedb.org/3/movie'; // Corrected endpoint
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

function ItemUser() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`, {
          params: {
            api_key: KEY,
          },
        });
        setInfo(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, [id]);

  return (
    <div className='box'>
      <img src={`${IMG_PATH}${info.poster_path}`} alt={info.title} />
      <h2>{info.release_date}</h2>
      <p>{info.overview}</p>
    </div>
  );
}

export default ItemUser;

