import { PaginationButton, PaginationWrapper } from "./styled";

const Pagination = ({ backFn, nextFn, disabledFn }) => {
  return (
    <PaginationWrapper>
      <PaginationButton disabled={disabledFn} onClick={backFn}>
        {"<"}
      </PaginationButton>
      <PaginationButton next="true" onClick={nextFn}>
        {"Next >"}
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
