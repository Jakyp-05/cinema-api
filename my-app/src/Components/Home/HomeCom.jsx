import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './HomeCom.css'
import { Link } from 'react-router-dom'

const KEY = '3fd2be6f0c70a2a598f084ddfb75487c'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`

function HomeCom() {
	const [use, setUse] = useState([])

	useEffect(() => {
		const getUse = async () => {
			try {
				const res = await axios.get(API_URL)
				setUse(res.data.results)
			} catch (error) {
				console.log(error)
			}
		}
		getUse()
	}, [])
	console.log(use)
	return (
		<div className='item'>
				{use.map(item => (
					<Link key={item.id} to={`/user/${item.id}`} style={{textDecoration: "none"}}>
						<img src={`${IMG_PATH}${item.poster_path}`} alt={item.title} style={{width: "300px", height: "300px", objectFit: "cover", marginLeft: "37px"}}/>
						<h2 style={{}}>{item.title}</h2>
					</Link>
				))}
		</div>
	)
}

export default HomeCom
