import { useState } from "react";
import s from "./Paginator.module.css";
import cn from "classnames";
import arrow from "../../../assets/images/nextArrow.svg";

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;




  return <div className={s.paginator}>

    {portionNumber > 1 &&
      <button
        onClick={() => { setPortionNumber(portionNumber - 1) }}
        className={`${s.nextBackBtn} ${s.backBtn}`}
      >
        <img src={arrow} alt="" />
      </button>
    }
    {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p) => {
        return <span className={cn({
          [s.selectedPage]: currentPage === p
        }, s.pageNumber)}
          key={p}
          onClick={(e) => {
            onPageChanged(p);
          }}>
          {p}
        </span>
      })}


    {portionCount > portionNumber &&
      <button
        onClick={() => { setPortionNumber(portionNumber + 1) }}
        className={s.nextBackBtn}
      >
        <img src={arrow} alt="" />
      </button>}
  </div>

};

export default Paginator;
