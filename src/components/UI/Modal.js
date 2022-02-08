import React from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 bg-[rgba(0,0,0,0.75)]" onClick={props.onBackdrop}></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-11/12 p-4 shadow-md z-30 md:w-[40rem] md:left-[calc(50%-20rem)] animate-slide bg-alice-blue rounded-xl">
      <div className="">
        {props.children}
      </div>
    </div>
  )
}

const portalElem = document.getElementById('modal')

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onBackdrop={props.onBackdrop}/>, portalElem)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElem)}
    </>
  )
}

export default Modal