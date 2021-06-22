import { useCallback } from "react"
import { Container } from "react-bootstrap"
import Link from "next/link"

import classNames from "@/classNames"

const BackButton = (props) => {
  const { hide } = props
  const handleClick = useCallback(() => {
    history.back()
  }, [])

  return (
    <span
      onClick={handleClick}
      className="p-1"
      style={{ fontSize: "2rem", visibility: hide ? "hidden" : "visible" }}
    >
      ⬅︎
    </span>
  )
}

export const PageHeader = (props) => {
  const { children, noMenu, noBack, ...otherProps } = props

  return (
    <header
      {...otherProps}
      {...classNames(
        "d-flex align-items-center bg-primary px-2 py-3 position-sticky",
        props,
      )}
      style={{ zIndex: 100000, top: 0 }}
    >
      <BackButton hide={noBack} />
      <h1 {...classNames("flex-grow-1 h2 text-white text-center m-0", props)}>
        {children}
      </h1>
      {noMenu ? null : (
        <Link href="/settings">
          <a className="p-1" style={{ fontSize: "2rem" }}>
            ⚙️
          </a>
        </Link>
      )}
    </header>
  )
}

export const PageContent = (props) => {
  const { noPadding, ...otherProps } = props

  return (
    <div
      {...otherProps}
      {...classNames(`flex-grow-1  ${noPadding ? "" : "p-3"}`, otherProps)}
    />
  )
}

const Page = (props) => (
  <Container
    as="main"
    fluid
    {...props}
    {...classNames("h-100 d-flex flex-column p-0", props)}
  />
)

export default Page
