import React from 'react';
import { useForm } from 'react-hook-form';
import { getApiQuestions } from '../../api';


const GameStartForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            await getApiQuestions();
            // dispatch setGameStart = true with data.playerName
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