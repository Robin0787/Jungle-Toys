import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoadingSpinner from "../../Shared/Loading/LoadingSpinner";
import SingleToy from './SingleToy/SingleToy';

const Categories = () => {
    const [wildAnimals, setWildAnimals] = useState([]);
    const [domesticAnimals, setDomesticAnimals] = useState([]);
    const [birds, setBirds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://jungle-toys-server.vercel.app/category/Wild Animals')
            .then(res => res.json())
            .then(data => {setWildAnimals(data); setLoading(false)});
    }, []);

    function showDomesticAnimal() {
        setLoading(true);
        fetch('https://jungle-toys-server.vercel.app/category/Domestic Animals')
            .then(res => res.json())
            .then(data => { setDomesticAnimals(data); setLoading(false) });
    }
    function showBirds() {
        setLoading(true);
        fetch('https://jungle-toys-server.vercel.app/category/Birds')
            .then(res => res.json())
            .then(data => { setBirds(data); setLoading(false) });
    }
    return (
        <section className='text-black my-10'>
            <h2 className="text-3xl mb-6">Toy Collection</h2>
            <article className='text-left'>
                <Tabs>
                    <TabList>
                        <Tab>Wild Animals</Tab>
                        <Tab onClick={showDomesticAnimal}>Domestic Animals</Tab>
                        <Tab onClick={showBirds}>Birds</Tab>
                    </TabList>
                    <TabPanel className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
                    {
                            loading ? <LoadingSpinner />
                                :
                            wildAnimals.map((toy) => <SingleToy key={toy._id} toy={toy} />)

                        }
                    </TabPanel>
                    <TabPanel className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
                        {
                            loading ? <LoadingSpinner />
                                :
                            domesticAnimals.map((toy) => <SingleToy key={toy._id} toy={toy} />)

                        }
                    </TabPanel>
                    <TabPanel className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
                        {
                            loading ? <LoadingSpinner />
                                :
                            birds.map((toy) => <SingleToy key={toy._id} toy={toy} />)
                        }
                    </TabPanel>
                </Tabs>
            </article>
        </section>
    );
};

export default Categories;