import React, { useEffect, useRef } from 'react'
import { Row } from 'react-bootstrap'

const HighlightScreen = ({ highlights }) => {
    const highlightRef = useRef(null)
    useEffect(() => {
        highlightRef.current.focus()
    })
    return (
        <>
            {/* <Row className="mt-5" as='p'>
                Highlights
            </Row> */}
            <Row className="mt-5">
                <div tabIndex='0' ref={highlightRef}
                    dangerouslySetInnerHTML={{ __html: `${highlights}` }} />
            </Row>
        </>
    )
}

export default HighlightScreen