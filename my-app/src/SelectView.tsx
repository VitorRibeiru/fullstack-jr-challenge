import React, {useMemo, useState} from 'react';
import CardList from "./Card";
import TableList from "./Table";
import fs from 'fs';

interface ArchiveItem {
    column1: string;
    column2: string;
    column3: string;
    column4: string;
}

const archive: ArchiveItem[] = [];
interface SelectViewProps {
    searchValue: string;
    datafile: ArchiveItem[];
}

function SelectView({ searchValue, datafile }: SelectViewProps) {
    const lowerSearch = searchValue.toLowerCase();
    const [activeTab, setActiveTab] = useState('first');
    const [search, setSearch] = useState('');

    // Certifique-se de que datafile seja sempre um array
    const archiveFiltered = Array.isArray(datafile)
        ? datafile.filter((item) => {
            if (!item || !item.column1 || !item.column2 || !item.column3 || !item.column4) {
                return false;
            }
            const nome = item.column1.toLowerCase();
            const cidade = item.column2.toLowerCase();
            const pais = item.column3.toLowerCase();
            const esporteFavorito = item.column4.toLowerCase();

            return (
                nome.includes(lowerSearch) ||
                cidade.includes(lowerSearch) ||
                pais.includes(lowerSearch) ||
                esporteFavorito.includes(lowerSearch)
            );
        })
        : [];

    const handleTabClick = (tabKey: string) => {
        setActiveTab(tabKey);
    };



    return (
        <div id="projects-tabs" className="tab-container" data-default-active-key={activeTab}>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#first" className={`nav-link ${activeTab === 'first' ? 'active fill-right' : ''}`} onClick={() => handleTabClick('first')}> Card</a>
                    </li>
                    <li className="nav-item">
                        <a href="#second" className={`nav-link ${activeTab === 'second' ? 'active fill-left' : ''}`} onClick={() => handleTabClick('second')}> Table </a>
                    </li>
                </ul>
            </div>
            {<div className="inputinner">
                <div className="tab-content">
                    <div className={`tab-pane ${activeTab === 'first' ? 'show active' : ''}`} id="first">
                        <div className="row">
                            <CardList data={archiveFiltered} />
                        </div>
                    </div>
                    <div className={`tab-pane ${activeTab === 'second' ? 'show active' : ''}`} id="second">
                        <div className="row">
                            <TableList data={archiveFiltered} />
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default SelectView;
