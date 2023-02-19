import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';

const TermsConditionsAdd = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        const data = {
            title: "terms & conditions",
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
                navigate("/terms-conditions");
            });

        console.log(data);
    }

    return (
        <div className='py-24'>
            <h2 className="text-3xl font-bold mx-auto text-center my-4">Adding Content for Terms & Conditions</h2>
            <form onSubmit={handleSubmit}>
                <div className='card shadow-xl p-8 '>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                    />
                    <button className='btn btn-primary mt-6 mb-4 w-1/2 text-center mx-auto text-white' type="submit">Publish</button>
                </div>
            </form>
            {/* {parse(content)}
            {content} */}
        </div>
    );
};

export default TermsConditionsAdd;