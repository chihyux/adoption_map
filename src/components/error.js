import React from 'react'
import { useSelector } from 'react-redux'
import { ErrorWrapper } from './style/error'

const ErrorBox = () => {
  const { errMessage } = useSelector((state) => ({
    errMessage: state.dataStatus.isFetchingError,
  }))

  return <ErrorWrapper>{errMessage}</ErrorWrapper>
}

export default ErrorBox
