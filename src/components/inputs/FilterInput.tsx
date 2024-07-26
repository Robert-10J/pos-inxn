import React from 'react'
import type { Filters } from '../../types'
import { Option, Select } from '@material-tailwind/react'

interface Props {
  label: string
  options: Filters[]
}

const FilterInput: React.FC<Props> = ({ label, options }) => {
  return (
    <Select label={label} size='lg' color='purple'>
      {options.map(({ option, id }) => {
        return (
          <Option key={id}>{option}</Option>
        )
      })}
    </Select>
  )
}

export default FilterInput