import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Base(props) {
    const navigate = useNavigate();
    const [items, setItems] = useState(['items', 'form', 'main']);

    const [selectedValue, setSelectedValue] = useState('option2');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleFormClick = (data) => {
        navigate(data);
    };

    return (
        <div>
            <div>
            <select value={selectedValue} onChange={handleChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            </div>
           
            {items.map((item) => {
                return (
                    <button onClick={() => handleFormClick(item)}>Navigate to {item}</button>
                );
            })}
        </div>
    );
}

export default Base;