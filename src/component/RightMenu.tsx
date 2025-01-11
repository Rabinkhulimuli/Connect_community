import Ad from '@/components/Ad'
import Birthdays from '@/components/Birthdays'
import FriendRequest from '@/components/FriendRequest'
import React from 'react'

function RightMenu({userId}:{userId?:string}) {
  return (
    <div>
      <FriendRequest />
      <Birthdays/>
      <Ad
      size="sm"
      />
    </div>
  )
}

export default RightMenu
