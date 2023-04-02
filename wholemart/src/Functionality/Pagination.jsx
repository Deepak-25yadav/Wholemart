

function createArrayOfSize(n) {
    return new Array(n).fill(0);
  }
  
  function Pagination({totalPages,currentPage,handlePageChange}) {

    console.log("currentPage in Pagination comp",currentPage)
    let pages = createArrayOfSize(totalPages).map((a, i) => {
      return <button data-testid="page-btn" disabled={currentPage==i+1} style={{backgroundColor:currentPage===i+1?"blue":"green"}}
      onClick={()=>{handlePageChange(i+1)}} border="2px solid red">{i+1}</button>;
    });
    return <div>{pages}</div>;
  }
  
  export default Pagination;
  