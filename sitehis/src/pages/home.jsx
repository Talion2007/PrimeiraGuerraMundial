import React from 'react';
import Header from '../components/header';
import '../styles/home.css'; 
import '../styles/page.css';
function Home() {
    return (
        <div className="homec">
            <Header />
            <h1>História do Séulo XX</h1>
            <section className="bloco">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores veniam laboriosam, tenetur consequatur, architecto sed error odit odio omnis distinctio optio quos numquam cumque consectetur pariatur qui saepe? Consectetur, esse?
                </p>
            </section>
        </div>
    );
};

export default Home;