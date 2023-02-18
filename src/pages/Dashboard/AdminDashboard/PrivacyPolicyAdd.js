import JoditEditor from 'jodit-react';
import React, { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicyAdd = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const config = {
        placeholder: "Start Typing"
    }


    const handleSubmit = (e) => {

        e.preventDefault();
        const data = {
            title: "privacy policy",
            pageDetails: content
        }
        fetch("https://nerd-academy-server.vercel.app/api/menu-items", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Published");
                navigate("/privacy-policy");
            });

        console.log(data);
    }



    return (
        <div className='py-24'>
            <h2 className="text-3xl font-bold mx-auto text-center my-4">Adding Content for Privacy Policy</h2>
            <form onSubmit={handleSubmit}>
                <div className='card shadow-xl p-8 '>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                        config={config}
                    />
                    <button className='btn btn-primary mt-6 mb-4 w-1/2 text-center mx-auto text-white' type="submit">Publish</button>
                </div>
            </form>
            {/* {parse(content)}
            {content} */}
        </div>
    );
};

export default PrivacyPolicyAdd;