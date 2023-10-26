import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

interface InputFieldProps {
  height?: string;
  backgroundColor?: string;
  fontSize?: string;
  width?: string;
}

interface ButtonProps {
  fontSize?: string;
  padding?: string;
}

interface TableContainerProps {
  margin?: string;
  maxHeight?: string;
}

export const InputField1 = styled.input<InputFieldProps>`
  padding: 8px 22px;
  width: ${(props) => (props.width ? `${props.width}` : '80%')};
  display: block;
  border-radius: 11px;
  box-sizing: border-box;
  border: 1.5px solid #615959;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  outline: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  height: ${(props) => (props.height ? `${props.height}` : '')};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '')};

  &:hover {
    border: 1px solid rgb(109 4 203/ 82%);
    cursor: pointer;
    background: transparent;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.2);
  }
  &:hover::placeholder {
    color: rgb(109 4 203/ 82%);
  }
  &:focus {
    border: 2px solid rgb(109 4 203/ 65%);
    background: transparent;
    box-shadow: 1px 2px 6px 4px rgba(0, 0, 0, 0.2);
  }
  &:focus::placeholder {
    color: #4e0191;
  }
`;

export const InputFieldReadOnly = styled.input`
  padding: 8px 22px;
  width: 80%;
  display: block;
  border-radius: 11px;
  border: 1.5px solid #959595;
  background-color: #f3f3f3;
`;

export const UserRoleSelect = styled.select<InputFieldProps>`
  padding: 8px 22px;
  width: ${(props) => (props.width ? `${props.width}` : '80%')};
  display: block;
  margin-bottom: 20px;
  border-radius: 11px;
  box-sizing: border-box;
  border: 1.5px solid #615959;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  outline: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  height: ${(props) => (props.height ? `${props.height}` : '')};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '')};

  &:hover {
    border: 1px solid rgb(109 4 203/ 82%);
    cursor: pointer;
    background: transparent;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.2);
  }
  &:hover::placeholder {
    color: rgb(109 4 203/ 82%);
  }
  &:focus {
    border: 2px solid rgb(109 4 203/ 65%);
    background: transparent;
    box-shadow: 1px 2px 6px 4px rgba(0, 0, 0, 0.2);
  }
  &:focus::placeholder {
    color: #4e0191;
  }
`;

export const Label1 = styled.label`
  font-family: unset;
  padding-top: 12px;
  margin-bottom: 1%;
`;

export const FormField = styled.div`
  font-family: unset;
  padding-top: 5px;
  margin-bottom: 1%;
`;
export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px; /* Adjust the gap between radio buttons as needed */
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  &:hover {
    color: rgb(109 4 203/ 82%);
    cursor: pointer;
  }
`;

export const RadioInput = styled.input`
  margin-right: 5px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-radius: 50%; /* Make it circular */
  background-color: white; /* Background color of the radio button */
  outline: none; /* Remove focus outline */
  cursor: pointer;

  &:hover {
    border: 1px solid rgb(109 4 203/ 82%);
  }

  &:checked {
    background-color: rgb(109 4 203/ 73%);
    border: 1px solid rgb(109 4 203/ 82%);
  }
`;

export const SessionName = styled.input`
  font-size: 23px;
`;
export const CancelSessionButton = styled.button`
  &:hover {
    color: blueviolet;
  }
`;

export const AddUserInputField = styled.input`
  height: 2em;
  margin: 0;
  z-index: 999;
`;

export const SessionTableCell = styled.td`
  border-bottom: 1px solid lightgrey;
  padding: 0px 12px;
`;

export const DescriptionSesction = styled.textarea`
  margin-top: 20px;
  padding: 10px;
  height: 120px;
  width: 100%;
  border: 1px solid #adadad;
  border-radius: 5px;
`;

export const Card = styled.div`
  padding: 20px;
  box-shadow: 1px 4px 8px 6px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 5px;
  margin: auto;
  margin-top: 3%;
  background: #ffffff94;

  &:hover {
    box-shadow: 2px 6px 14px 10px rgba(0, 0, 0, 0.2);
  }

  .head-content {
    text-align: center;
    display: grid;
    margin-top: 5%;
  }
`;
export const SessionsCard = styled.div`
  box-shadow: 1px 4px 8px 6px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
  background: #ffffff94;

  &:hover {
    box-shadow: 2px 6px 14px 10px rgba(0, 0, 0, 0.2);
  }

  .head-content {
    text-align: center;
    display: grid;
    margin-top: 5%;
  }
`;

export const Form = styled.form`
  .column {
    float: left;
    margin-top: 1%;
    width: 48%;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .row:after {
    content: '';
    display: table;
    clear: both;
  }

  .btn-submit {
    text-align: center;
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: #8800ff;
  color: white;
  border: none;
  padding: ${(props) => (props.padding ? `${props.padding}` : `12px 18px`)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : `15px`)};
  border-radius: 4px;
  margin-bottom: 1%;
  margin-top: 1%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4e0191; /* Darker Purple color on hover */
  }
`;

export const StyledCloceIcon = styled.svg`
    width: 14px;
    height: 14px;
    fill: #1C1B1F !important;
    margin-left: 95%;
    margin-top: 15px;

    &:hover {
      fill-opacity="0.4";
    }
`;

export const StyledCheckbox = styled.input`
  align-items: center;
  &:checked {
    fill: Purple;
  }
`;

export const StyledSelect = styled.select`
  padding: 8px 22px;
  width: 100%;
  border-radius: 3px;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  outline: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;

  &:hover {
    border: 1px solid rgb(109 4 203/ 82%);
    cursor: pointer;
    background: transparent;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    box-shadow: 1px 2px 6px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const AdminUsersView = styled.h2`
  padding: 1% 0% 2% 3%;
`;

export const LogoutButton = styled.button`
  color: #ffffffa8;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    color: white;
  }
`;

/////////////////////////////////////////////////////////////////////////
///////////////////////////SideBar Style///////////////////////////////////
/////////////////////////////////////////////////////////////////////////
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* Add your other styles here */
`;

export const LogoImage = styled.img`
  height: 2rem; /* Adjust the height as needed */
  width: auto;

  /* Add your other styles here */
`;

/////////////////////////////////////////////////////////////////////////
///////////////////////////NavBar Style///////////////////////////////////
/////////////////////////////////////////////////////////////////////////

export const NavbarContainer = styled.div`
  margin: 0 auto;
  max-width: 7xl;
  padding: 0 2rem;

  /* Add your other styles here */
`;

export const NavbarWrapper = styled.div`
  display: flex;
  height: 4rem; /* Adjust the height as needed */
  align-items: center;
  justify-content: space-between;

  /* Add your other styles here */
`;

export const NavbarLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  /* Add your other styles here */
`;

export const NavigationStyledDiv = styled.div`
  display: none; /* Hidden by default on small screens */
  color: #c3c3c3;
  transition: linear 0.3s;

  &:hover {
    font-size: 18px;
    color: white;
  }

  @media (min-width: 640px) {
    margin-inline: 1.5rem; /* Adjust the margin for small screens */
    display: block; /* Display as a block on screens wider than 640px */

    /* Define your styles for the "flex space-x-4" container within the div */
    .flex-container {
      display: flex;
      gap: 1.5rem;
    }
  }
`;

/////////////////////////////////////////////////////////////////////////
///////////////////////////SessionNav Style///////////////////////////////////
/////////////////////////////////////////////////////////////////////////

export const SessionNavLink = styled(NavLink)`
  display: none; /* Hidden by default on small screens */
  transition: linear 0.3s;
  color: #979797;

  &:hover {
    color: black;
    text-decoration: underline;
  }

  &.active {
    color: black;
    text-decoration: underline;
  }

  @media (min-width: 640px) {
    margin-inline: 1.5rem; /* Adjust the margin for small screens */
    display: block; /* Display as a block on screens wider than 640px */

    /* Define your styles for the "flex space-x-4" container within the div */
    .flex-container {
      display: flex;
      gap: 1.5rem;
    }
  }
`;

/////////////////////////////////////////////////////////////////////////
///////////////////////////Table Style///////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Create a styled component for the table container
export const TableContainer = styled.div<TableContainerProps>`
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: ${(props) => (props.margin ? `${props.margin}` : '20px')};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  overflow-y: scroll; /* Add this to make the container scrollable */
  max-height: ${(props) =>
    props.maxHeight
      ? `${props.maxHeight}`
      : '35em'}; /* Add a maximum height to enable vertical scrolling */
`;

// Create a styled component for the table itself
export const SessionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #8800ff88;
  background-color: rgb(159, 49, 255);
  color: white;
`;

export const THead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 10;
`;

// Create a styled component for table rows
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

// Create a styled component for table cells
export const TableCell = styled.td`
  padding: 10px;
`;

// Avatar Styles
export const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

// Action Button Styles
export const ActionButton = styled.button`
  background-color: #8800ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-left: 10%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4e0191;
  }
`;

// Search Bar Styles
export const SearchBarInput = styled.input`
  background: #fff;
  border-radius: 16px;
  border: none;
  height: 26px;
  width: 100%;
  padding-left: 8%;
  padding-right: 8%;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 0px;
`;

export const RemoveButton = styled.button`
  margin: 20px;
`;
