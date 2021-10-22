import React from 'react'
import { Button } from '../../components/Button';
import { Section, Container, ColumnLeft, ColumnRight } from '../About/aboutelements';


const Aboutsec = ({ heading, paragraphOne, buttonLabel, reverse, image, delay }) => {
    return (
        <>
            <Section>
                <Container>
                    <ColumnLeft reverse={reverse} delay={delay}>
                        <h1>{heading}</h1>
                        <p>{paragraphOne}</p>
                        {/* <p>{paragraph}</p> */}
                        <Button to="/Portfolio" primary='true'> {buttonLabel}</Button>
                    </ColumnLeft>
                    <ColumnRight reverse={reverse} delay={delay}>
                        <img src={image} alt="home" />
                    </ColumnRight>
                </Container>

            </Section>

        </>
    )
}

export default Aboutsec
