'use client'

import React from 'react'
import classNames from 'classnames'

interface Props {
  total: number
  page: number
  size: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<Props> = ({ total, page, size, onPageChange }) => {
  const totalPages = Math.ceil(total / size)
  const maxVisible = 5

  const getPages = () => {
    const half = Math.floor(maxVisible / 2)
    let start = Math.max(1, page - half)
    let end = start + maxVisible - 1

    if (end > totalPages) {
      end = totalPages
      start = Math.max(1, end - maxVisible + 1)
    }

    const pages = []
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  const colorClasses = [
    'text-gray-500',
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'text-black',
  ]

  const isFirstPage = page === 1
  const isLastPage = page === totalPages

  return (
    <div className="mt-10 flex justify-center items-center gap-2 select-none">
      {/* First page */}
      <button
        onClick={() => onPageChange(1)}
        disabled={isFirstPage}
        className={classNames(
          'text-sm px-2 py-1',
          { 'text-gray-300 cursor-default': isFirstPage },
          { 'hover:text-black text-gray-600': !isFirstPage }
        )}
      >
        «
      </button>

      {/* Previous page */}
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={isFirstPage}
        className={classNames(
          'text-sm px-2 py-1',
          { 'text-gray-300 cursor-default': isFirstPage },
          { 'hover:text-black text-gray-600': !isFirstPage }
        )}
      >
        ‹
      </button>

      {/* Page numbers */}
      {getPages().map((p, idx) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={classNames(
            'px-3 py-1 rounded text-sm transition-colors font-medium',
            {
              'bg-[#f26821] text-white font-bold': p === page,
              [colorClasses[idx]]: p !== page,
              'hover:bg-gray-200': p !== page,
            }
          )}
        >
          {p}
        </button>
      ))}

      {/* Next page */}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={isLastPage}
        className={classNames(
          'text-sm px-2 py-1',
          { 'text-gray-300 cursor-default': isLastPage },
          { 'hover:text-black text-gray-600': !isLastPage }
        )}
      >
        ›
      </button>

      {/* Last page */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={isLastPage}
        className={classNames(
          'text-sm px-2 py-1',
          { 'text-gray-300 cursor-default': isLastPage },
          { 'hover:text-black text-gray-600': !isLastPage }
        )}
      >
        »
      </button>
    </div>
  )
}

export default Pagination
