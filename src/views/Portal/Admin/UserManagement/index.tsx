import React, { useState, Dispatch } from "react"
import "./index.scss"
import ManageTable from "./components/table/index"
import ApplicantData from "./components/doughnut/index"

export interface TableProps {
  search: string
  hackers: any[]
  setHackers: Dispatch<any[]>
}

const handleOnChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setSearchText: Dispatch<string>
) => {
  setSearchText(event.target.value)
}

const UserManagement: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("")
  const [hackers, setHackers] = useState<Array<any>>([])

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
          onChange={event => handleOnChange(event, setSearchText)}
        ></input>
      </div>
      <div className='usermgmt__container--table'>
        <ManageTable
          search={searchText}
          hackers={hackers}
          setHackers={setHackers}
        />
      </div>
    </div>
  )
}

export default UserManagement
