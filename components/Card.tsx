import React, { useState } from 'react'

interface Post {
  id: number
  title: string
  small_image: {
    url: string
  }
  published_at: string
}

const Card = ({ post }: { post: Post }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="rounded overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={
            imageError || !post.small_image?.url
              ? '/lock.png' 
              : post.small_image.url
          }
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
      <div className="p-4">
        <h2
          className="text-black text-lg font-semibold leading-snug line-clamp-3"
          title={post.title}
        >
          {post.title}
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          {new Date(post.published_at).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
    </div>
  )
}

export default Card
