import React, { useState } from 'react';

const NewMovie = (props) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [titleError, setTitleError] = useState('');
    const [subtitleError, setSubtitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [imageUrlError, setImageUrlError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(title === '') {
            setTitleError('Title is mandatory!');
        } else {
            setTitleError('');
        }
        if(subtitle === '') {
            setSubtitleError('Subtitle is mandatory!');
        } else {
            setSubtitleError('');
        }
        if(description === '') {
            setDescriptionError('Description is mandatory!');
        } else {
            setDescriptionError('');
        }
        if(imageUrl === '') {
            setImageUrlError('Image URL is mandatory!');
        } else {
            setImageUrlError('');
        }
        if(title !== '' && subtitle !== '' && description !== '' && imageUrl !== '') {
            props.addNewMovie(title, subtitle, description, imageUrl);
        }
    };

    return (
        <div className="form-group">
                <label htmlFor="title">Enter movie title:   </label>
                <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" type="text" />
                {titleError ? <label className="alert alert-danger">{titleError}</label> : ''}
                <br />
                <label htmlFor="subtitle">Enter movie subtitle:    </label>
                <input className="form-control" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} name="subtitle" id="subtitle" type="text" />
                {subtitleError ? <label className="alert alert-danger">{subtitleError}</label> : ''}
                <br />
                <label htmlFor="description">Enter movie description: </label>
                <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" type="text" />
                {descriptionError ? <label className="alert alert-danger">{descriptionError}</label> : ''}
                <br />
                <label htmlFor="imageUrl">Enter movie image url:   </label>
                <input className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} name="imageUrl" id="imageUrl" type="text" />
                {imageUrlError ? <label className="alert alert-danger">{imageUrlError}</label> : ''}
                <br />
                <button className="btn btn-primary" onClick={handleSubmit}>Submit new movie</button>
        </div>
    );
};

export default NewMovie;