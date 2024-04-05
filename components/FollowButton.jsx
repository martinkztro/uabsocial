'use client'

import { useState } from 'react'

export default function FollowButton() {
    const [follow, setFollow] = useState(false)
    const handleFollow = () => {
        setFollow(!follow)
    }

    return (
        
        follow ?
            <span onClick={handleFollow} className="text-xs text-red-500 cursor-pointer">Dejar de seguir</span>
            :
            <span onClick={handleFollow} className="text-xs text-blue-500 cursor-pointer">Seguir</span>

    )
}