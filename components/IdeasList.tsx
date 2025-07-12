'use client'

import React, { useEffect, useState } from 'react'
import { fetchIdeas } from '@/lib/api'
import Card from './Card'
import SelectBox from './SelectBox'
import Pagination from './Pagination'

interface Post {
  id: number
  title: string
  small_image: { url: string }
  published_at: string
}

const IdeasList = () => {
  const [ideas, setIdeas] = useState<Post[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)
  const [sort, setSort] = useState<'published_at' | '-published_at'>('-published_at')

  useEffect(() => {
    const loadIdeas = async () => {
      try {
        const res = await fetchIdeas(page, size, sort)
        setIdeas(res.data)
        setTotal(res.meta.total)
      } catch (err) {
        console.error('Failed to fetch ideas:', err)
      }
    }

    loadIdeas()
  }, [page, size, sort])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Control Bar */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="text-sm text-gray-600">
          Showing {ideas.length > 0 ? (page - 1) * size + 1 : 0} – {(page - 1) * size + ideas.length} of {total}
        </div>
        <div className="flex gap-4">
          <SelectBox
            label="Show per page"
            value={size}
            options={[10, 20, 50]}
            onChange={(val) => setSize(Number(val))}
          />
          <SelectBox
            label="Sort"
            value={sort}
            options={[
              { label: 'Newest', value: '-published_at' },
              { label: 'Oldest', value: 'published_at' },
            ]}
            onChange={(val) => setSort(val as any)}
          />
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ideas.map((idea) => (
          <Card key={idea.id} post={idea} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination total={total} page={page} size={size} onPageChange={setPage} />
    </div>
  )
}

export default IdeasList
