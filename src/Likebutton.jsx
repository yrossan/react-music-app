import React, { useState } from "react";
import Heart from "react-animated-heart";

export default function likeButton() {
  const [Like, setLike] = useState(false)

  const LikeToggle = () => {
    setLike(prevState => !prevState)
  }

  return (
    <button
        onClick={LikeToggle}
    >
    Like

    </button>
  )
}
