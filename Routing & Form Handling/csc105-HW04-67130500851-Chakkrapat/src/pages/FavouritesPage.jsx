import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from "../components/Navbar.jsx";

// แก้ไขสคีมา Zod เพื่อยอมรับสตริงและแปลงเป็นตัวเลข
const schema = z.object({
    number: z.string().refine(val => {
        const num = parseInt(val, 10);
        return !isNaN(num) && num >= 1 && num <= 100;
    }, {
        message: "Number must be between 1 and 100",
    }),
    q: z.enum(["love", "like"]),
    size: z.enum(["small", "medium", "large"]),
});

const FavouritesPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        // แปลงค่า number เป็นตัวเลขก่อนส่งไปยัง URL
        const num = parseInt(data.number, 10);
        navigate(`/fav/${num}?q=${data.q}&size=${data.size}`);
    };

    return (
        <>
            <Navbar />
            <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                <h2>Favourites Page</h2>
                <p>This is the Favourites Page.</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="number">Number (1-100):</label>
                        <input type="number" id="number" {...register("number")} />
                        {errors.number && <p style={{ color: "red" }}>{errors.number.message}</p>}
                    </div>

                    <div>
                        <label>Query Parameter (q):</label>
                        <select {...register("q")}>
                            <option value="love">love</option>
                            <option value="like">like</option>
                        </select>
                        {errors.q && <p style={{ color: "red" }}>{errors.q.message}</p>}
                    </div>

                    <div>
                        <label>Size Parameter (size):</label>
                        <select {...register("size")}>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>
                        {errors.size && <p style={{ color: "red" }}>{errors.size.message}</p>}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default FavouritesPage;