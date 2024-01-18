import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';



export default function formacion() {
    return (
        <section className='contenedor'>

            <h2 className="heading">Formación</h2>

            <Timeline>
                <TimelineItem>
                    <TimelineOppositeContent fontSize={18} color="text.primary">
                        <p style={{ margin: '0' }}> UCAD - En curso</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='success' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent fontSize={18}><p style={{ margin: '0' }}> Ingeniería en Sistemas</p></TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent fontSize={18} color="text.secondary">
                        <p style={{ margin: '0' }}> UDEMY - 2022</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='secondary' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent fontSize={18}><p style={{ margin: '0' }}> Java Script - La guía completa</p></TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent fontSize={18} color="text.secondary">
                        <p style={{ margin: '0' }}>UDEMY - 2022 </p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='warning' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent fontSize={18}><p style={{ margin: '0' }}>CSS - La guía completa </p></TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent fontSize={18} color="text.secondary">
                        <p style={{ margin: '0' }}>  Alura & ORACLE - 2023</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='error' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent fontSize={18}><p style={{ margin: '0' }}>Bootcamp Front-end </p></TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent fontSize={18} color="text.secondary">
                        <p style={{ margin: '0' }}>  UDEMY - En curso</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='error' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent fontSize={18}><p style={{ margin: '0' }}> React, Redux, Next, MERN - Guía completa</p></TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent fontSize={18} color="text.secondary">
                        <p style={{ margin: '0' }}> UDEMY - En curso </p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='error' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent fontSize={18}><p style={{ margin: '0' }}>Desarrollo Web Completo - Html, Css, Php, Js, MySQL </p></TimelineContent>
                </TimelineItem>

            </Timeline>
        </section>

    );
}