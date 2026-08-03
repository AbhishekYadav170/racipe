import React from 'react'
import { useForm } from 'react-hook-form'; 
import { nanoid } from "nanoid";
import { useContext } from 'react';
import { recipeContext } from '../context/RacipeContext.jsx';

const Create = () => {
    
    const { data, setData } = useContext(recipeContext);
    const {register, handleSubmit, reset} = useForm();

    const SubmitHandler = (racipe) => {

        racipe.id = nanoid();
        // console.log(racipe);

        setData([...data, racipe]);

        reset();
    };

    return (
        <form onSubmit={handleSubmit(SubmitHandler)}>
        
           <input 
                className="block border-b outline-0 p-2"
                {...register("image")}
                type="url"
                 placeholder="Enter Image Url"
            />
            <small className="text-red-400">
                This is the error is shown
            </small>


           <input 
                className="block border-b outline-0 p-2"
                {...register("title")}
                 type="text"
                placeholder="Recipe Title"
            />
            {/* <small className="text-red-400">
                This is the error is shown
            </small>
         */}

          <input 
                className="block border-b outline-0 p-2"
                {...register("chef")}
                 type="text"
                placeholder="Chef Name"
            />

           <textarea
                className="block border-b outline-0 p-2"
                {...register("description")}
                placeholder="//start from here"
            ></textarea>
            {/* <small className="text-red-400">
                This is the error is shown
            </small> */}
            
           <textarea
                className="block border-b outline-0 p-2"
                {...register("ingredients")}
                placeholder="//write ingredients seperated by comma"
            ></textarea>
            {/* <small className="text-red-400">
                This is the error is shown
            </small> */}

           <textarea
                className="block border-b outline-0 p-2"
                {...register("instructions")}
                placeholder="//write cooking instructions"
            ></textarea>


           <select
               
                className="block border-b outline-0 p-2"
                {...register("category")}
               
            >
                <option value="cat 1">Category 1</option>
                <option value="cat 2">Category 2</option>
                <option value="cat 3">Category 3</option>

            </select>
            

            <button className="mt-5 block bg-gray-900 px-4 py-2 rounded" type="submit">
                Save Recipe
            </button>
        
        </form>
    )
}

export default Create
