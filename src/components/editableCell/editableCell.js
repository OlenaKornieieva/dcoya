import React from 'react';

const EditableCell = ({cellData, onRowUpdate}) => {
    return (
        <td>
            <input type='text' name={cellData.type}
                   id={cellData.id}
                   value={cellData.value}
                   onChange={onRowUpdate}/>
        </td>
    );
};
export default EditableCell;