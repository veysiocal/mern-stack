import React, { useContext, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './PlaceItem.css';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import { AuthContext } from '../../shared/context/auth-context';

const PlaceItem = props => {
    const authContext = useContext(AuthContext);

    const [showMap, setShowMap] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    const openConfirmHandler = () => setShowConfirm(true);
    const closeConfirmHandler = () => setShowConfirm(false);
    const confirmDeleteHandler = () => {
        setShowConfirm(false);
        console.log("OKEY");
    };
    return (
        <React.Fragment>
            <Modal show={showMap} onCancel={closeMapHandler} header={props.address} contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className='map-container'>
                    <Map center={props.coordinates} zoom={16} />
                </div>
            </Modal>
            <Modal header="Are you sure?" footerClass="place-item__modal-actions" onCancel={closeConfirmHandler}
                footer={
                    <React.Fragment>
                        <Button inverse onClick={closeConfirmHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
                    </React.Fragment>
                } show={showConfirm}>
                <p>Do you want to proceed and delete this place? Please note that it can't be undone thereafter.</p>
            </Modal>
            <li className='place-item'>
                <Card className="place-item_content">
                    <div className='place-item__image'>
                        <img src={props.image} alt={props.title}></img>
                    </div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={openMapHandler}>VIEW IN MAP</Button>
                        {authContext.isLoggedIn && (
                            <Button to={`/places/${props.id}`}>EDIT</Button>)}
                        {authContext.isLoggedIn && (
                            <Button danger onClick={openConfirmHandler}>DELETE</Button>)}


                    </div>
                </Card>
            </li>
        </React.Fragment>

    )
};

export default PlaceItem;