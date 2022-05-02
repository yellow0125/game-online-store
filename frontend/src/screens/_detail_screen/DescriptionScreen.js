import React, { useEffect, useRef } from 'react'
import { Row } from 'react-bootstrap'
import Ad from '../../components/Ad'

const DescriptionScreen = ({ description }) => {
    const descriptionRef = useRef(null)
    useEffect(() => {
        // descriptionRef.current.focus()
    })
    return (
        <>
            <Row className="mt-5">
                Description
            </Row>
            <Row className="mt-3">
                <div tabIndex='0' ref={descriptionRef}
                    dangerouslySetInnerHTML={{ __html: `${description}` }} />
            </Row>
            <Ad />
        </>
    )
}

export default DescriptionScreen