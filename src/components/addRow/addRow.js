import React from 'react';
import EditableCell from '../editableCell/editableCell';

const AddRow = ({onRowUpdate}) => {
    return (
        <tr className="eachRow">
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "firstName",
                value: this.props.employee.firstName,
                id: this.props.employee.id
            }}/>
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "lastName",
                value: this.props.employee.lastName,
                id: this.props.employee.id
            }}/>
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "email",
                value: this.props.employee.email,
                id: this.props.employee.id
            }}/>
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "phoneNumber",
                value: this.props.employee.phoneNumber,
                id: this.props.employee.id
            }}/>
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "department",
                value: this.props.employee.department,
                id: this.props.employee.id
            }}/>
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "role",
                value: this.props.employee.role,
                id: this.props.employee.id
            }}/>
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "manager",
                value: this.props.employee.manager,
                id: this.props.employee.id
            }}/>
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "branch",
                value: this.props.employee.branch,
                id: this.props.employee.id
            }}/>
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "country",
                value: this.props.employee.country,
                id: this.props.employee.id
            }}/>
            <EditableCell onRowUpdate={onRowUpdate} cellData={{
                type: "group",
                value: this.props.employee.group,
                id: this.props.employee.id
            }}/>
        </tr>
    );
};
export default AddRow;

