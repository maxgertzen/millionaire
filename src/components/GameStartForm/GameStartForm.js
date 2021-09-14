import React from 'react';
import { useForm } from 'react-hook-form';


const GameStartForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            await getApiQuestion(data);
            // dispatch setGameStart = true
        } catch (error) {

        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label>Name
                    <input {...register("playerName")} />
                </label>
            </div>
            <input type="submit" value="Begin" />
        </form>
    )
}

export default GameStartForm