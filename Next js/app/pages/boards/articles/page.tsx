'use client';
import { useEffect, useState } from "react";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/navigation";
import {Box, Button, Input } from '@mui/material';
import { API } from "@/redux/common/enums/API";
import {useSelector,useDispatch} from 'react-redux'
import AxiosConfig from "@/redux/common/configs/axios-config";
import { NextPage } from "next";
import {fetchAllArticles} from "@/redux/features/articles/article.service";
import { getAllArticles } from "@/redux/features/articles/article.slice";
import { IArticle } from "@/redux/features/articles/article.model";
import Columns from "@/app/components/articles/colums";




const ArtilcesPage: NextPage = ({data} : any) => {
    const dispatch = useDispatch()
    const [articles, setArticles] = useState([])
   const allArticles: [] = useSelector(getAllArticles)

    if(allArticles !== undefined){
        console.log('allArticles is not undefined')
        
        console.log('length is '+ allArticles.length)
        for(let i=0; i< allArticles.length; i++){
            console.log(JSON.stringify(allArticles[i]))
        }
    }else{
        console.log('allArticles is undefined')
    }
    

    useEffect(() => {
        dispatch(fetchAllArticles(1))
    }, [])
    



    // return (<>
    //     <h2>게시글 목록</h2>

    //     <Box sx={{ height: 400, width: '100%' }}>
    //   <DataGrid
    //     rows={rows}
    //     columns={columns}
    //     initialState={{
    //       pagination: {
    //         paginationModel: {
    //           pageSize: 5,
    //         },
    //       },
    //     }}
    //     pageSizeOptions={[5]}
    //     checkboxSelection
    //     disableRowSelectionOnClick
    //   />
    // </Box>
    // </>
    // )
    return (<>
        <h2>개인페이지 Article</h2>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={Columns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>)
}
export default ArtilcesPage;