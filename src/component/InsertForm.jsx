import React, { useState, useRef } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const InsertForm = ({ onAddCard }) => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      place: e.target.place.value,
      image: e.target.image.value,
      description: e.target.description.value,
      amount: e.target.amount.value,
    };
    onAddCard(newCard);
    e.target.reset();
    setShowForm(false);
  };

  const handleCancel = () => {
    formRef.current.reset();
    setShowForm(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '300px', padding: '20px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          ADD YOUR PLACES..!
        </Typography>
        <form ref={formRef} onSubmit={handleSubmit} style={{ marginTop: '0px', marginBottom: '20px' }}>
        <TextField label="Place" name="place" variant="outlined" fullWidth required />
          <TextField label="Image URL" name="image" variant="outlined" fullWidth required style={{ marginTop: '10px' }} />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            required
            style={{ marginTop: '10px' }}
          />
          <TextField label="Amount" name="amount" type="number" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Add
          </Button>
          <Button
            onClick={handleCancel}
            variant="outlined"
            color="secondary"
            style={{ marginTop: '10px', marginLeft: '10px' }}
          >
            Clear
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default InsertForm;
