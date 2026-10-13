import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

// Static replica of the source's Element Plus pagination (page 1 active, 5 pages total).
// Pages 2-5 are display-only: only the first page of articles was captured.
export function Pagination() {
  return (
    <div className="pagination-wrap">
      <div className="el-pagination is-background">
        <button type="button" className="btn-prev is-first" disabled aria-label="上一页">
          <i className="el-icon"><ArrowLeftIcon /></i>
        </button>
        <ul className="el-pager">
          <li className="is-active number" aria-current="true" aria-label="第 1 页"> 1 </li>
          {[2, 3, 4, 5].map((page) => (
            <li key={page} className="number" aria-current="false" aria-label={`第 ${page} 页`}>{page}</li>
          ))}
        </ul>
        <button type="button" className="btn-next is-last" aria-label="下一页">
          <i className="el-icon"><ArrowRightIcon /></i>
        </button>
      </div>
    </div>
  );
}
