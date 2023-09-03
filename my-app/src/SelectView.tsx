import React, {useMemo, useState} from 'react';
import CardList from "./Card";
import Button from "./Button";
import TableList from "./Table";


const archive: any[] = [
    {
        nome: 'Michael Johnson',
        cidade: 'Los Angeles',
        pais: 'USA',
        esporteFavorito: 'Basketball',
    },
    {
        nome: 'Sophia Garcia',
        cidade: 'Mexico City',
        pais: 'Mexico',
        esporteFavorito: 'Soccer',
    },
    {
        nome: 'David Kim',
        cidade: 'Seoul',
        pais: 'South Korea',
        esporteFavorito: 'Baseball',
    },
    {
        nome: 'Maria Lopez',
        cidade: 'Madrid',
        pais: 'Spain',
        esporteFavorito: 'Tennis',
    },
    {
        nome: 'Alex Wong',
        cidade: 'Hong Kong',
        pais: 'China',
        esporteFavorito: 'Table Tennis',
    },
    {
        nome: 'Olivia Müller',
        cidade: 'Munich',
        pais: 'Germany',
        esporteFavorito: 'Swimming',
    },{
        nome: 'Michael Johnson',
        cidade: 'Los Angeles',
        pais: 'USA',
        esporteFavorito: 'Basketball',
    },
    {
        nome: 'Sophia Garcia',
        cidade: 'Mexico City',
        pais: 'Mexico',
        esporteFavorito: 'Soccer',
    },
    {
        nome: 'David Kim',
        cidade: 'Seoul',
        pais: 'South Korea',
        esporteFavorito: 'Baseball',
    },
    {
        nome: 'Maria Lopez',
        cidade: 'Madrid',
        pais: 'Spain',
        esporteFavorito: 'Tennis',
    },
    {
        nome: 'Alex Wong',
        cidade: 'Hong Kong',
        pais: 'China',
        esporteFavorito: 'Table Tennis',
    },
    {
        nome: 'Olivia Müller',
        cidade: 'Munich',
        pais: 'Germany',
        esporteFavorito: 'Swimming',
    },{
        nome: 'Michael Johnson',
        cidade: 'Los Angeles',
        pais: 'USA',
        esporteFavorito: 'Basketball',
    },
    {
        nome: 'Sophia Garcia',
        cidade: 'Mexico City',
        pais: 'Mexico',
        esporteFavorito: 'Soccer',
    },
    {
        nome: 'David Kim',
        cidade: 'Seoul',
        pais: 'South Korea',
        esporteFavorito: 'Baseball',
    }
];
interface SelectViewProps {
    onSearchChange: (value: string) => void;
}

function SelectView({ onSearchChange}: SelectViewProps)  {
    const [activeTab, setActiveTab] = useState('first');
    const [search, setSearch] = useState('');

    const archiveFiltered = useMemo(() => {
        const lowerSearch = search.toLowerCase();
        return archive.filter((item) =>
            item.nome.toLowerCase().includes(lowerSearch) ||
            item.cidade.toLowerCase().includes(lowerSearch) ||
            item.pais.toLowerCase().includes(lowerSearch) ||
            item.esporteFavorito.toLowerCase().includes(lowerSearch)
        );
    }, [search, archive]);

    const handleTabClick = (tabKey: string) => {
        setActiveTab(tabKey);
    };



    return (


        <div id="projects-tabs" className="tab-container" data-default-active-key={activeTab}>
            <div>
                <ul className="nav" >
                    <li className="nav-item">
                        <a href="#first" className={`nav-link ${activeTab === 'first' ? 'active fill-right' : ''}`} onClick={() => handleTabClick('first')}> Card</a>
                    </li>
                    <li className="nav-item">
                        <a href="#second" className={`nav-link ${activeTab === 'second' ? 'active fill-left' : ''}`} onClick={() => handleTabClick('second')}> Table </a>
                    </li>
                </ul>
           </div>
            <div>
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
            <input
                className="search-bar"
                type="text"
                value={search}
                onChange={(ev) => {
                    setSearch(ev.target.value);
                    onSearchChange(ev.target.value); // Chamando a função passada como prop
                }}
            />
            </div>
        </div>
    );
}

export default SelectView;