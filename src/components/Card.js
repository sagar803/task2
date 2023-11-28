import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Header } from './Header'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


export const Card = ({title, formFields, formData, setFormData}) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [formDataUpdate, setFormDataUpdate] = useState({});
    
    useEffect(() => {
      setFormDataUpdate(formData);
    }, [formData]);
    
    
    const handleChange = (e) => {
        setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
    }
    const handleSave = (e) => {
        e.preventDefault();
        setFormData(formDataUpdate);
        localStorage.setItem(title, JSON.stringify(formDataUpdate));
        setDialogOpen(!dialogOpen);
    }
    const handleCancel = () => {
        setFormDataUpdate(formData);
        setDialogOpen(!dialogOpen);
    }



    return (
        <Box
            margin="30px 20px"
            borderRadius='7px'
            border='1px solid grey'
            borderTop='0px'
        >
            <Header title={title} handleDialog={() => setDialogOpen(!dialogOpen)} />
            {
              Object.keys(formData).length !== 0 ? (
                <div >
                  {Object.keys(formData).map((key) => (
                    <>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 15px' }}>
                        <p>{key}</p>
                        <p>{formData[key]}</p>
                      </div>
                      <hr style={{padding: '0', margin: '0'}}/>
                    </>
                  ))}
                </div>
              ) : (
                <p style={{padding: "5px 15px"}}>Nothing to show up here.</p>
              )
            }

            <Dialog open={dialogOpen} onClose={(() => setDialogOpen(false))} >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent sx={{width: "500px"}}>
                <form onSubmit={handleSave}>
                  {
                    formFields.map((data) => (   
                        (data.type === 'radio') ? (
                          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <h5>
                              {data.name}
                              <span style={{ color: 'red', display: data.required ? 'inline-block' : 'none' }}>*</span>
                            </h5>
                            <div>
                              <label>
                                <input 
                                  onChange={handleChange}
                                  type="radio" name={data.name} 
                                  value="yes"
                                  checked={formDataUpdate[data.name] === 'yes'}
                                  required={data.required}
                                  />
                                Yes
                              </label>
                              <label>
                                <input 
                                  onChange={handleChange} 
                                  type="radio" 
                                  name={data.name} 
                                  value="no"
                                  checked={formDataUpdate[data.name] === 'no'}
                                  required={data.required}
                                />
                                No
                              </label>
                            </div>
                          </div>
                        ) : (
                          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <h5>
                              {data.name}
                              <span style={{ color: 'red', display: data.required ? 'inline-block' : 'none' }}>*</span>
                            </h5>
                            <input
                              onChange={handleChange}
                              value={formDataUpdate?.[data.name]}
                              name={data.name}
                              type={data.type}
                              required={data.required}
                            />
                          </div>
                        )
                  ))
                }
                <DialogActions>
                  <Button onClick={handleCancel}>Cancel</Button>
                  <Button type='submit' >Save</Button>
                </DialogActions>
                </form>
            </DialogContent>
            </Dialog>

        </Box>
    )
}
