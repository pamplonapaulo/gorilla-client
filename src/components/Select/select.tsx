import React, { useState } from 'react'

import * as S from './styles'

type Props = {
  parentCallback: (name: string) => void
  label: string
  options: string[]
}

const Select = ({ parentCallback, label, options }: Props) => {
  const [dropDown, setDropDown] = useState(false)
  const [selected, setSelected] = useState(options[0])
  const handleSelect = (e: React.MouseEvent<HTMLSelectElement>) => {
    console.log(e.target)
    console.log(e)
    console.log('paulo')
    setDropDown(!dropDown)
  }

  const handleOption = (opt: string) => {
    setSelected(opt)
    parentCallback(opt)
    setDropDown(false)
  }

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Select onClick={(e) => handleSelect(e)} value={selected}>
        {options.map((opt) => (
          <S.Option key={opt}>{opt}</S.Option>
        ))}
      </S.Select>
      <S.StyledOptions theme={{ visible: dropDown }}>
        {options.map((opt) => (
          <S.Opt key={opt} onClick={() => handleOption(opt)}>
            {opt}
          </S.Opt>
        ))}
      </S.StyledOptions>
    </S.Wrapper>
  )
}

export default Select
