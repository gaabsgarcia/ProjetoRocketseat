import React, { useEffect, useState} from 'react';
import api from '../services/api';
import {FiArrowRight, FiPlus} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg';
import {TileLayer, Map, Marker, Popup} from 'react-leaflet';
import mapIcon from '../utils/mapIcon';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    open_on_weekends: boolean;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um ofanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita.</p>
                </header>

                <footer>
                    <strong>Limeira </strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-22.584731,-47.4235377]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
                >
                <TileLayer url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                
                {orphanages.map(orphanage => {
                    return(
                        <Marker
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                            key={orphanage.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={'orphanage/' + orphanage.id}>
                                    <FiArrowRight size={32} color="#FFFF"/>
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color = "#FFFF" />
            </Link>
            
        </div>
        
    );
}
export default OrphanagesMap;