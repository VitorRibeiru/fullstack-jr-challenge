import React, {useMemo, useState} from 'react';
import CardList from "./Card";
import TableList from "./Table";
import FileUpload from "./FileUpload";

interface ArchiveItem {
    nome: string;
    cidade: string;
    pais: string;
    esporteFavorito: string;
}

const archive: ArchiveItem[] = [];
interface SelectViewProps {
    searchValue: string;
}

function SelectView({ searchValue }: SelectViewProps)  {
   const [activeTab, setActiveTab] = useState('first');
    const [search, setSearch] = useState('');
    const [archiveData, setArchiveData] = useState<ArchiveItem[]>(archive);

    const archiveFiltered = useMemo(() => {
        const lowerSearch = searchValue.toLowerCase();
        return archiveData.filter((item) =>
            item.nome.toLowerCase().includes(lowerSearch) ||
            item.cidade.toLowerCase().includes(lowerSearch) ||
            item.pais.toLowerCase().includes(lowerSearch) ||
            item.esporteFavorito.toLowerCase().includes(lowerSearch)
        );
    }, [searchValue, archiveData]);

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