import React from 'react'


const Aadhaar = (props) => {

    const base64 = Buffer(props.location.state.image).toString('base64')

    const { name, dob, gender, aadhaarNumber } = props.location.state.userDetails

    return (
        <div className='jumbotron'>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={`data:jpg;base64,${base64}`} width="600" height="500" />
                    </div>
                    <div className="col">

                        <table cellPadding="25">
                            <thead>
                                <tr>
                                    <td>Name:</td>
                                    <td>
                                        <input type="text" value={name} disabled />
                                    </td>
                                </tr>

                                <tr>
                                    <td>DOB:</td>
                                    <td>
                                        <input type="text" value={dob} disabled />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Gender:</td>
                                    <td>
                                        <input type="text" value={gender} disabled />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Aadhaar Number:</td>
                                    <td>
                                        <input type="text" value={aadhaarNumber} disabled />
                                    </td>
                                </tr>
                            </thead>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    );
}



export default Aadhaar