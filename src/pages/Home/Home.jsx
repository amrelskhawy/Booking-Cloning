import React from 'react'
import './home.scss'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { Featured } from '../../components/Featured/featured'
import { PropertyList } from '../../components/propertyList/propertyList'
import { FeaturedProperties } from '../../components/FeaturedProperty/FeaturedProperties'
import { MailList } from '../../components/mailList/mailList'
import { Footer } from '../../components/footer/footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedProperties />
                <MailList />
            <Footer />
            </div>
        </div>
    )
}

export default Home