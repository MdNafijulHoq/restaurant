import React from 'react';
import { FiPhoneCall } from "react-icons/fi";

const AboutTab = () => {
    return (
        <div className="card bg-base-100 w-96">
            <div className="card-body space-y-3">
                <h2 className="card-title">
                Exceptional culinary experience and delicious food
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                <div className="card-actions">
                <div className="btn btn-warning">About More</div>
                <div className='btn btn-default ml-4 border border-white'>
                    <p className="flex justify-center items-center gap-2"><FiPhoneCall color='red'/> +88 3426 739 485</p>
                </div>
                </div>
            </div>
            </div>
    );
};

export default AboutTab;