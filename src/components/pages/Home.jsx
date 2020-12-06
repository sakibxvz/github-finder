import React,{Fragment} from 'react'
import Serach from "../users/Serach";
import Users from "../users/Users";
export const Home = () => {
    return (
      <Fragment>
        <Serach />
        <div className='conainter'>
          <Users />
        </div>
      </Fragment>
    );
}
