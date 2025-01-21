import * as React from 'react';
import resume from '../../assets/files/2025Resume.pdf';
import certificate from '../../assets/files/WebDevCertification.pdf';

function Resume() {
    return (
        <>
            <header className='page-header'>
                <h2>Resume</h2>
            </header>
            <main className='certAndResume'>
                <section>
                    <aside className='resume'>
                        <figure>
                            <embed
                                src={resume}
                                />
                        </figure>
                    </aside>
                </section>
                <section>
                    <aside>
                        <figure className='certificate'>
                            <embed
                                src={certificate}
                                />
                        </figure>
                    </aside>
                </section>
            </main>
        </>
    )
}

export default Resume;