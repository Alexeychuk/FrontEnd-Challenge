import React, { Component } from 'react';

import Posts from '../containers/Posts/connector';
import Header from '../components/Header/Header';
const Index = () => (
    <div id="home">
        <Header referTo={'/posts/new'} label={'Create New Post'} />
        <Posts />
    </div>
);

export default Index;
