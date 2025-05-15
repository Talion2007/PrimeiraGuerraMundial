import React from 'react';
import Header from '../components/header';
import Footer from "../components/footer";
import '../styles/home.css'; 
import '../styles/page.css';
function Home() {
    return (
        <div className="homec">
            <Header />
            <br />
            <br />
            <section className="bloco">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores veniam laboriosam, tenetur consequatur, architecto sed error odit odio omnis distinctio optio quos numquam cumque consectetur pariatur qui saepe? Consectetur, esse?
                </p>
            </section>
      <Footer/>
        </div>
    );
};

export default Home;