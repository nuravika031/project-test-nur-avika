import React from 'react'

type Option = number | { label: string; value: string }

interface Props {
  label: string
  options: Option[]
  value: string | number
  onChange: (val: string | number) => void
}

const SelectBox: React.FC<Props> = ({ label, options, value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-black">{label}:</label>
      <select
        value={value}
        onChange={(e) =>
          onChange(
            isNaN(Number(e.target.value))
              ? e.target.value
              : Number(e.target.value)
          )
        }
        className="border border-gray-300 rounded px-3 py-1 text-sm text-black bg-white"
      >
        {options.map((opt, idx) =>
          typeof opt === 'object' ? (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ) : (
            <option key={idx} value={opt}>
              {opt}
            </option>
          )
        )}
      </select>
    </div>
  )
}

export default SelectBox
