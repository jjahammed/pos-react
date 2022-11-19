import {useState} from 'react';


export const usePagination=(perPageRecords,totalRecords)=>{
    // console.log(perPageRecords);
const totalPages=Math.ceil(totalRecords/perPageRecords);

const [startPageIndex,setStartPageIndex]=useState(0)
const [endPageIndex,setEndPageIndex]=useState(perPageRecords);
const [currentPage,setCurrentPage]=useState(1);

const dispSearchPage=(searchPageNo=1)=>{
    // console.log(perPageRecords);
    setCurrentPage(searchPageNo);
    const firstPageIndex = (searchPageNo - 1) * perPageRecords;
    const lastPageIndex = parseFloat(firstPageIndex) + parseFloat(perPageRecords);
    setStartPageIndex(firstPageIndex);
    setEndPageIndex(lastPageIndex);
    // console.log(firstPageIndex,lastPageIndex)
}    

const dispPage=(pageNo)=>{
    setCurrentPage(pageNo);
    const firstPageIndex = (pageNo - 1) * perPageRecords;
    const lastPageIndex = parseFloat(firstPageIndex) + parseFloat(perPageRecords);
    setStartPageIndex(firstPageIndex);
    setEndPageIndex(lastPageIndex);
}    

return [
totalPages,
startPageIndex,
endPageIndex,
currentPage,
dispPage,
dispSearchPage
]
}