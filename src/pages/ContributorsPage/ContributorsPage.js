
import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ContributorsMarkdown from './ContributorList.md';
import ReactMarkdown from 'react-markdown';

class ContributorsPage extends Component {

    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(ContributorsMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div>
                <Navbar />
                <ContributorContainer>
                    <h1>Our Contributors</h1>
                    <p>Thanks goes to these wonderful people who make this big!</p>
                    <ReactMarkdown source={markdown} allowDangerousHtml />
                </ContributorContainer>
                <Footer />
            </div>
        )
    }
}

const ContributorContainer = styled.div`
    padding: 1.5rem 2rem;
    img {
        margin: 1.5rem;
    }
`;

export default ContributorsPage;