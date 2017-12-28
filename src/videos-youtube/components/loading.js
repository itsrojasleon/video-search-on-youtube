import React from 'react'
import styled from 'styled-components'

const ContainerLink = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`


const Loading = () => (
  <ContainerLink>

    <h2 style={{fontSize: '48px'}}>Loading...</h2>
  </ContainerLink>
)
export default Loading
