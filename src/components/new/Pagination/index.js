import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Pagination = ({ current, numberOfPages, context }) => {
  const isFirstPage = current === 1
  const isLastPage = current === numberOfPages

  const previousIndex = current - 1
  const previousPage = previousIndex === 1 ? "" : previousIndex
  const nextPage = current + 1

  const contextUrl = context ? `/${context}` : ""

  return (
    <S.Container>
      <S.PaginationComponent>

      {isFirstPage ? (
        <S.NoLink>
          <S.LeftArrow disabled />
        </S.NoLink>
      ) : (
        <S.Link to={`${contextUrl}/${previousPage}`} title="página anterior">
          <S.LeftArrow />
        </S.Link>
      )}
      <S.Text>
        {current} de {numberOfPages}
      </S.Text>
      {isLastPage ? (
        <S.NoLink>
          <S.RightArrow disabled />
        </S.NoLink>
      ) : (
        <S.Link to={`${contextUrl}/${nextPage}`} title="próxima página">
          <S.RightArrow />
        </S.Link>
      )}
      </S.PaginationComponent>
    </S.Container>
  )
}

Pagination.defaultProps = {
  context: "",
}

Pagination.propTypes = {
  context: PropTypes.string,
  current: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
}
export default Pagination
