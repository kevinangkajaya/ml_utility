'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MachineLearningHome from './home';
import { mlData } from './data';
import MachineLearningContent from './content';
import { useState } from 'react';

export default function MachineLearning() {
    const [tabIndex, setTabIndex] = useState(0)
    const tabOnSelect = (index: number) => {
        setTabIndex(index)
    }

    return (
        <div>
            <Tabs onSelect={tabOnSelect} selectedIndex={tabIndex}>
                <TabList>
                    <Tab>🏠</Tab>
                    {mlData.map((mlDatum) => (
                        <Tab key={mlDatum.value}>{mlDatum.label}</Tab>
                    ))}

                </TabList>

                <TabPanel>
                    <MachineLearningHome tabOnSelect={tabOnSelect} />
                </TabPanel>
                {mlData.map((mlDatum => (
                    <TabPanel key={mlDatum.value}>
                        <MachineLearningContent urlPath={mlDatum.url} />
                    </TabPanel>
                )))}

            </Tabs>
        </div>
    );
}
