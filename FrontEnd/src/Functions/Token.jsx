import React from 'react'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import {getToken} from '../Api/GetApi'
import { checkToken } from '../Api/PostApi'

export const Tokener = () => {
  const[token,setToken]=useState(null)
  useLayoutEffect(()=>{
      const access= getToken()
      setToken(access.token)
  },[])
  return token
}

export const TokenCheck=(token)=>{
  useLayoutEffect(()=>{
      checkToken(token)
  })
}