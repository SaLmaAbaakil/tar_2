import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homme from './homme.png';
import femme from './femme.png';

const Calculpoids = () => {
    const [srcImg, setSrcImg] = useState(homme);
    const [err, setErr] = useState('');
    const [taille, setTaille] = useState('');
    const [poids,setPoids] = useState('');
    const [genre,setGenre] = useState('homme');

    const handlegenre = (e) => {
        const selectedGenre = e.target.value;
        setGenre(selectedGenre);
        setSrcImg(selectedGenre === 'homme' ? homme : femme);    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const height = parseInt(taille);

        if (isNaN(height)) {
            setErr("Saisir un nombre valide !!!");
        } else if (height < 150) {
            setErr("La taille doit être supérieure à 150 cm");
        } else {
            setErr('');
            const calculatedPoids = genre === 'homme' 
                ? height - 100 - ((height - 150) / 4)
                : height - 100 - ((height - 150) / 2.5);
            setPoids(calculatedPoids.toFixed(2));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mx-4">
                    <label htmlFor="Taille">Taille en CM</label>
                    <input
                        type="text"
                        className="form-control w-50"
                        id="Taille"
                        placeholder="Enter your Taille"
                        name="Taille"
                        value={taille}
                        onChange={(e) => setTaille(e.target.value)}
                    />
                    {err && <div className="text-danger mt-2">{err}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="Genre">Genre</label>
                    <select 
                        name="genre" 
                        id="genre" 
                        className='form-select w-50' 
                        onChange={handlegenre} 
                    >
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <img 
                        src={srcImg} 
                        alt="Genre" 
                        className="img-fluid" 
                        style={{ maxWidth: '20%', height: 'auto' }} 
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="poids">Poids Idéal</label>
                    <input
                        type="text"
                        className="form-control w-50"
                        id="poids"
                        placeholder=""
                        name="poids"
                        value={poids +'kg' }
                        disabled
                    />
                </div>
                <button type='submit' className='btn btn-outline-primary w-50 mt-4'>Calculer</button>
            </form>
        </div>
    );
}

export default Calculpoids;
