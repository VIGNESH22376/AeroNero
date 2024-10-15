import React from 'react'
import './CSS/HomeComp13.css'

//import aos
import Aos from 'aos'

// import images 
import Aeronero from '../../Images/Home/Aeronero.png'
import bootle from '../../Images/Home/Bottle.png'
import ro from '../../Images/Home/RO.png'

import { useState } from 'react'

const Homecomp13 = () => {

    Aos.init();

    const [currency, setCurrency] = useState('rupees');

    // Function to switch between Rupees and Dollars
    const handleCurrencyChange = (currencyType) => {
        setCurrency(currencyType);
    };

    return (
        <>
            <div className='container-fluid Home-r13-container d-none d-lg-block'>

                {/* Heading  */}
                <h3 className='Home-r13-heading' data-aos="fade-down"
                    data-aos-duration="800" data-aos-once="true">Comparison with <span className='Home-r13-heading-color'>Traditional Water Solutions</span></h3>

                {/* Table */}
                <div className='row Home-r13-card-container'>

                    {/* Toggle Buttons for Rupees and Dollars with Sliding Effect */}
                    <div className='d-flex justify-content-center'>

                        <div className="currency-toggle">

                            {/* slide  */}
                            <div className={`slider ${currency === 'dollars' ? 'slide-right' : 'slide-left'}`}></div>

                            {/* Ruppes */}
                            <button
                                className={`toggle-button ${currency === 'rupees' ? 'active' : ''}`}
                                onClick={() => handleCurrencyChange('rupees')}>

                                <p className='toggle-heading'>RUPEES ₹</p>

                            </button>

                            {/* Dollars */}
                            <button
                                className={`toggle-button ${currency === 'dollars' ? 'active' : ''}`}
                                onClick={() => handleCurrencyChange('dollars')}>

                                <p className='toggle-heading'>DOLLARS $</p>
                            </button>
                        </div>
                    </div >

                    <div className="table-container">


                        {/* Table */}
                        <table className="comparison-table">

                            {/* Heading row  */}
                            <thead className="table-header">

                                <tr className="header-row">
                                    <th className="parameter-column col-3">Parameter</th>

                                    {/* Aeronero */}
                                    <th className="aeronero-column col-3">
                                        <div >
                                            <img src={Aeronero} alt='aeronero' />
                                            <p className='heading-column'>Aeronero Water</p>
                                        </div>
                                    </th>

                                    {/* Ro Water  */}
                                    <th className="ro-column col-3">
                                        <div >
                                            <img src={ro} alt='aeronero' />
                                            <p className='heading-column'>RO Water</p>
                                        </div>
                                    </th>

                                    {/* Bottled Water */}
                                    <th className="bottled-column col-3">
                                        <div >
                                            <img src={bootle} alt='aeronero' />
                                            <p className='heading-column'>Bottled Water</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="table-body">

                                {/* Ground water  */}
                                <tr className="groundwater-row">
                                    <td className="parameter-cell">Ground Water</td>
                                    <td className="aeronero-cell">Saves Ground Water</td>
                                    <td className="ro-cell">Polluting & Exhausting Ground Water</td>
                                    <td className="bottled-cell">Depleting Ground Water</td>
                                </tr>

                                {/* Air purification  */}
                                <tr className="air-purification-row">
                                    <td className="parameter-cell">Air Purification</td>
                                    <td className="aeronero-cell">Cleans the Air</td>
                                    <td className="ro-cell">NA</td>
                                    <td className="bottled-cell">NA</td>
                                </tr>

                                {/* carbon Footprint  */}
                                <tr className="carbon-footprint-row">
                                    <td className="parameter-cell">Carbon Footprint</td>
                                    <td className="aeronero-cell">Low</td>
                                    <td className="ro-cell">High</td>
                                    <td className="bottled-cell">High (Transportation also required)</td>
                                </tr>

                                {/* plastic pollution  */}
                                <tr className="plastic-pollution-row">
                                    <td className="parameter-cell">Plastic Pollution</td>
                                    <td className="aeronero-cell">Nil</td>
                                    <td className="ro-cell">High</td>
                                    <td className="bottled-cell">High</td>
                                </tr>

                                {/* water wastage  */}
                                <tr className="water-wastage-row">
                                    <td className="parameter-cell">Water Wastage</td>
                                    <td className="aeronero-cell">Nil</td>
                                    <td className="ro-cell">More than 50%</td>
                                    <td className="bottled-cell">More than 50%</td>
                                </tr>

                                {/* plants row  */}
                                <tr className="plants-row">
                                    <td className="parameter-cell">Plants</td>
                                    <td className="aeronero-cell">Better Growth by Saving Ground Water</td>
                                    <td className="ro-cell">Reduced</td>
                                    <td className="bottled-cell">Reduced</td>
                                </tr>

                                {/* microbes  */}
                                <tr className="microbes-row">
                                    <td className="parameter-cell">Spreading of Microbes</td>
                                    <td className="aeronero-cell">Minimised by Reducing the Medium</td>
                                    <td className="ro-cell">No Change</td>
                                    <td className="bottled-cell">High due to Handling by Humans</td>
                                </tr>

                                {/* Cost  */}
                                <tr className="cost-row">
                                    <td className="parameter-cell">Cost per Litre Rs</td>
                                    <td className="aeronero-cell">
                                        {currency === 'dollars' ? '$ 0.042' : 'Rs. 3.5'}
                                    </td>
                                    <td className="ro-cell">
                                        {currency === 'dollars' ? '$ 0.048' : 'Rs. 4'}
                                    </td>
                                    <td className="bottled-cell">
                                        {currency === 'dollars' ? '$ 0.048' : 'Rs. 4'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div >

            </div >

        </>
    )
}

export default Homecomp13
