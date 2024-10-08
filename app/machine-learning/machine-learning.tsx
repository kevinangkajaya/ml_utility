'use client'

import { Tab, Tabs, TabList } from 'react-tabs';
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

                <div hidden={tabIndex !== 0}>
                    <MachineLearningHome tabOnSelect={tabOnSelect} />
                </div>
                {mlData.map(((mlDatum, index) => (
                    <div key={mlDatum.value} hidden={tabIndex !== index + 1}>
                        <MachineLearningContent website={mlDatum.website}
                            embed={mlDatum.embed} />
                    </div>
                )))}

            </Tabs>
        </div>
    );
}
