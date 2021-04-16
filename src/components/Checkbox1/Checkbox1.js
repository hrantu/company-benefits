import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Checkbox1 = () => {
    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
    return (
        <div>
            <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      
        </div>
    );
};

export default Checkbox1;