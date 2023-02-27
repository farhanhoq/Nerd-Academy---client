import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const SuggestEditModal = ({ course }) => {
    const { register, handleSubmit, reset } = useForm();
    console.log(course);

    const {_id} = course;


    const handlePost = suggestion => {
        const handleAddPost = {
            suggested: suggestion
        }

        console.log(handleAddPost);
        fetch(`https://nerd-academy-server.vercel.app/pending/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(handleAddPost),
        })
            .then(res => res.json())
        reset();
    };

    return (
        <div>
            <input type="checkbox" id="admin-modal" className="modal-toggle" />
            <label htmlFor="admin-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <form onSubmit={handleSubmit(handlePost)} data-aos="zoom-in-down">
                        <div className='justify-center'>
                            <div className='gap-5 mt-5 form-control'>
                                <textarea {...register('suggestion')} required className="textarea textarea-primary w-full"
                                    name='suggestion'
                                    placeholder="Type your feedback">
                                </textarea>
                            </div>
                            <div className='form-control'>
                                <button>
                                    <label onClick={handlePost} htmlFor="admin-modal" className="btn
                                     btn-active btn-primary text-white mt-6" type='submit'>Place Suggestion</label>
                                </button>
                            </div>
                        </div>
                    </form>
                </label>
            </label>
        </div>
    );
};

export default SuggestEditModal;