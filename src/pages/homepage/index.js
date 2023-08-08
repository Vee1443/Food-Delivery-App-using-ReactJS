import React, { useState } from 'react'
import Header from '../../components/header'
import TabOptions from '../../components/tabOptions'
import Footer from '../../components/footer'
import Delivery from '../../components/Delivery'
import Dining from '../../components/Dining'

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery")

    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )
}

const getCorrectScreen = (tab) => {
    switch(tab){
        case "Delivery":
            return <Delivery />

        case "Dining":
            return <Dining />

        default:
            return <Delivery />
    }
}

export default HomePage

