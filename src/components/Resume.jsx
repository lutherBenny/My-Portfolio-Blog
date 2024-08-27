import React from 'react';

function Resume() {
    return (
        <div className="resume-container">
            <h2 className="text-center text-4xl font-bold my-8">My Resume</h2>
            <iframe 
                src="/lutherbenny10.pdf (8).pdf" // Make sure the path matches the location of your PDF in the public directory
                style={{ width: '100%', height: '100vh' }} 
                title="Resume"
            />
            <div className="text-center my-4">
                <a 
                    href="/lutherbenny10.pdf (8).pdf" // Path to your resume
                    download="lutherbenny10.pdf(8).pdf" // The name the file will be saved as
                    className="px-4 py-2 bg-orange-500 text-white rounded"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
}

export default Resume;
