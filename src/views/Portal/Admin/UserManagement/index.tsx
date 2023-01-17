import React from "react"
import "./index.scss"
import ManageTable from "./components/table/index"
import ApplicantData from "./components/doughnut/index"

const UserManagement: React.FC = () => {
  return (
    <div className='usermgmt__container'>
      <div className='usermgmt__container--top'>
        <div className='usermgmt__container--title'>User Management</div>
      </div>
      <ApplicantData />
      <div className='usermgmt__container--top-table'>
        <input
          className='usermgmt__container--search-bar'
          type='text'
          placeholder='Search People or Email'
        ></input>
      </div>
      <div className='usermgmt__container--table'>
        <ManageTable />
      </div>
    </div>
  )
}

export default UserManagement
