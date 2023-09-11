import React from 'react';
import './PlansScreen.css';

function PlansScreen() {

    

    return (
        <>
        <div className="plansScreen">
            
            <div className="plansScreen_subscription">
                <h4>Netflix Standard </h4>
                <h5>1080p</h5>
            </div>
            <button className="plansScreen_subscribe"> Subscribe </button>
            </div>
            <div className="plansScreen">
            <div className="plansScreen_subscription">
                <h4>Netflix Basic</h4>
                <h5>480p</h5>
            </div>
            <button className="plansScreen_subscribe"> Subscribe </button>
            </div>
            <div className="plansScreen">
            <div className="plansScreen_subscription">
                <h4>Netflix Premium</h4>
                <h5>4K+HDR</h5>
            </div>
                <button className="plansScreen_subscribed"> Current Package </button>
            </div>
        
        </>
    );
}


export default PlansScreen;