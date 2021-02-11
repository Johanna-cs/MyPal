import React from 'react'
import { useHistory } from "react-router-dom";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ReturnButton() {
    let history = useHistory();
    return (
      <div className="return">
          <button onClick={()=>history.goBack()} className="return_btn">
            {/* <FontAwesomeIcon icon={faChevronLeft}/>  */}
          </button>
      </div>
    );
}

export default ReturnButton