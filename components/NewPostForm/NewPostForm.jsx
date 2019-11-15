import React, { Component, useState, useEffect } from 'react';
import { withRouter } from 'next/router';

import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const NewPostForm = ({ dispatchNewPost, router }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatchNewPost(title, body).then(() => {
            setTitle('');
            setBody('');
            router.replace('/');
        });
        return;
    };

    const handleChange = e => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        }
        if (e.target.name === 'body') {
            setBody(e.target.value);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                title
                <Input type="text" value={title} name="title" onChange={handleChange} />
            </Label>
            <Label>
                body
                <Input type="text" value={body} name="body" onChange={handleChange} />
            </Label>
            <Button label="Create" type="submit" />
        </Form>
    );
};

export default withRouter(NewPostForm);
