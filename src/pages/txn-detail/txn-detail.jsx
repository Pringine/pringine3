import React from 'react'
import './txn-detail.css';
import { CardProcess } from '../../components/card-process/card-process.component';
import { ViewTxn } from '../../components/view-txn/view-txn.component';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';


function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}


const TxnDetail = () => {
  const {id} = useParams()
  console.log(id);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get('sort')); 

  return (
    <div className="home ">
      <div className="create-card d-md-flex d-sm-block container">
        <div className="card-container mb-5">
          <CardProcess />
        </div>

        <div className="form-box">
          <div className="card-side">
            <ViewTxn />
          </div>
        </div>
      </div>

    </div>
  )
}

export default TxnDetail
