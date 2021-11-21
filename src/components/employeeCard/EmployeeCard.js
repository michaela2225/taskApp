import React from 'react';
import PropTypes from 'prop-types';

import './EmployeeCard.css';

const EmployeeCard = ({ firstName = '', lastName = '', showDateBirthday = false, onChange = () => { } }) => {
    const highlightEmployee = showDateBirthday ? 'list-color' : 'list-name';

    return (
        <div>
            <h3 className={highlightEmployee}>{`${firstName} ${lastName}`}</h3>
            <form>
                <div>
                    <input
                        id='active'
                        type='radio'
                        name='radioButton'
                        onChange={() => onChange(true)}
                        defaultChecked={showDateBirthday}
                    />
                    <label htmlFor='active'>active</label>
                </div>
                <div>
                    <input
                        id='notActive'
                        type='radio'
                        name='radioButton'
                        onChange={() => onChange(false)}
                        defaultChecked={!showDateBirthday}
                    />
                    <label htmlFor='notActive'>not active</label>
                </div>
            </form>
        </div>
    );
}

EmployeeCard.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    showDateBirthday: PropTypes.bool,
    onChange: PropTypes.func,
};

export default EmployeeCard;