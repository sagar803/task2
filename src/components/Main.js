import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Card } from './Card'
import useMediaQuery from '@mui/material/useMediaQuery';

export const Main = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const [allowanceFormData, setAllowanceFormData] = useState({});
    const [corporateFormData, setCorporateFormData] = useState({});


    const fetchData = async () => {
        try {
            const allowanceData = localStorage.getItem('Allowance');
            if (allowanceData) setAllowanceFormData(JSON.parse(allowanceData));
            const corporateData = localStorage.getItem('Corporate Information');
            if (corporateData) setCorporateFormData(JSON.parse(corporateData));
        } catch (error) {
            console.error('Error reading data from localStorage:', error);
        }
    };
    
      useEffect(() => {
            fetchData();
      }, []);

      const corporateForm = [
        {
          name: 'Business Description',
          type: 'text',
          required: true,
        },
        {
          name: 'Company Name',
          type: 'text',
          required: true,
        },
        {
          name: 'Industry',
          type: 'text',
          required: false,
        },
        {
          name: 'Mail ID',
          type: 'email',
          required: true,
        },
        {
          name: 'Phone Number',
          type: 'number',
          required: true,
        },
        {
          name: 'Location',
          type: 'text',
          required: true,
        },
        {
          name: 'Number Of Employees',
          type: 'number',
          required: true,
        },
      ];
      

      const allowanceForm = [
        {
          name: 'Salary System Based On Meritocracy',
          type: 'radio',
          required: true,

        },
        {
          name: '120 Or More Annual Holidays',
          type: 'radio',
          required: true,
        },
        {
          name: 'Generous Welfare Benefits',
          type: 'radio',
          required: true,
        },
        {
          name: 'Enhanced Education And Training',
          type: 'radio',
          required: false,
        },
        {
          name: 'Support System For Acquiring Qualification',
          type: 'radio',
          required: true,
        },
        {
          name: 'Reduced Working Hours System',
          type: 'radio',
          required: true,
         },
        {
          name: 'Maternity Care Leave System',
          type: 'radio',
          required: true,
        },
        {
          name: 'Mentor System',
          type: 'radio',
          required: false,
        },
        {
          name: 'Career Consulting',
          type: 'radio',
          required: false,
        },
      ];
      

    return (
        <Box
            padding="15px"
            paddingTop="30px"
            ml= {matches ? "200px" : ''}
            width= {matches ? "calc(100% -200px)" : '100%'}
        >
            <Card title={'Corporate Information'} formData={corporateFormData} setFormData={setCorporateFormData} formFields={corporateForm}/>
            <Card title={'Allowance'} formData={allowanceFormData} setFormData={setAllowanceFormData} formFields={allowanceForm}/>
        </Box>
  )
}
