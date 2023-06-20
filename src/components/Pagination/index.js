import { PaginationButton, PaginationWrapper } from "./styled";

const Pagination = ({ backFn, nextFn, disabledFn, pageNumber }) => {
  return (
    <PaginationWrapper>
      <PaginationButton disabled={disabledFn} onClick={backFn}>
        {"<"}
      </PaginationButton>
      <p>Page {pageNumber}</p>
      <PaginationButton next="true" onClick={nextFn}>
        {"Next >"}
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
