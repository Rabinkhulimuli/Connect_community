import Ad from '@/components/Ad'
import Birthdays from '@/components/Birthdays'
import FriendRequest from '@/components/FriendRequest'
import UserInfoCard from '@/components/UserInfoCard'
import UserMediaCard from '@/components/UserMediaCard'

import React from 'react'

function RightMenu({userId}:{userId?:string}) {
  return (
    <div>
      {userId?( <>
      <UserInfoCard userId={userId}/>
      <UserMediaCard userId={userId}/>
      </> ):null}
      <FriendRequest />
      <Birthdays/>
      <Ad
      size="sm"
      />
    </div>
  )
}

export default RightMenu
