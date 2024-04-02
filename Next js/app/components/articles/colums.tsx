import { GridColDef } from "@mui/x-data-grid"



export default function Columns() : GridColDef[]{

    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'ID',
            renderCell(){
                return <></>
            }
        },
            {
                flex: 0.04,
                minWidth: 30,
                sortable: false,
                field: 'id',
                headerName: '제목',
                renderCell(){
                    return <></>
                }
            },
                {
                    flex: 0.04,
                    minWidth: 30,
                    sortable: false,
                    field: 'id',
                    headerName: '내용',
                    renderCell(){
                        return <></>
                    }
                },
                    {
                        flex: 0.04,
                        minWidth: 30,
                        sortable: false,
                        field: 'id',
                        headerName: '등록일',
                        renderCell(){
                            return <></>
                        }
                    }
    ]
}