'use client'

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import { Button } from "@mui/material";
import { PG } from "../redux/common/enums/PG";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "../redux/common/configs/axios-config";
import { NextPage } from "next";


const HomePage : NextPage = () => {
  const [name, setName] = useState('')
  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    alert('입력완료' + name)
    axios.post(`${API.SERVER}/name`, {name} , AxiosConfig())
      .then(res => {
        alert("리스펀스가 가져온이름 : " + JSON.stringify(res.data))
      })
  }

  return (<div className='text-center'>
     <div>welcom to react world !</div><br />
    <h3 className='text-red-500'>이름을 입력하세요</h3>
    <input className = 'board-black-500' type="text" onChange={handleChange} /> <br />
    <Button onClick={handleClick}>완료</Button><br /><br />
    <Link href={`${PG.USER}/login`} >로그인</Link> <br />
    <Link href={`${PG.USER}/join`}>회원가입</Link> <br />
    <Link href={`${PG.DEMO}/mui-demo`}>MUI 데모</Link> <br />
    <Link href={`${PG.DEMO}/counter`}>카운터 데모</Link> <br />
    <Link href={`${PG.DEMO}/redux-counter`}>리덕스 카운터 데모</Link> <br />
    <Link href={`${PG.BOARD}/articles`}>전체게시판</Link> <br />
    <Link href={`${PG.BOARD}/articles`}> 게시판 </Link> <br />
    <Link href={`${PG.USER}/users`}> 유저목록 </Link>
  </div>)
  
}
export default HomePage;